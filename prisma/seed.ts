import { prisma } from "#app/utils/db/db.server";

import {
  cleanupDb,
  createPassword,
  createUser,
  getUserImages,
  img,
} from "#tests/db-utils.ts";

async function seed() {
  console.log("🌱 Seeding...");
  console.time(`🌱 Database has been seeded`);

  console.time("🧹 Cleaned up the database...");
  await cleanupDb(prisma);
  console.timeEnd("🧹 Cleaned up the database...");

  console.time("🔑 Created permissions...");
  const entities = ["user", "note"];
  const actions = ["create", "read", "update", "delete"];
  const accesses = ["own", "any"] as const;

  const createPermissionPromises: Array<
    ReturnType<typeof prisma.permission.create>
  > = [];
  for (const entity of entities) {
    for (const action of actions) {
      for (const access of accesses) {
        createPermissionPromises.push(
          prisma.permission.create({ data: { access, action, entity } }),
        );
      }
    }
  }

  await Promise.all(createPermissionPromises);

  console.timeEnd("🔑 Created permissions...");

  console.time("👑 Created roles...");
  await prisma.role.create({
    data: {
      name: "admin",
      permissions: {
        connect: await prisma.permission.findMany({
          select: { id: true },
          where: { access: "any" },
        }),
      },
    },
  });
  await prisma.role.create({
    data: {
      name: "user",
      permissions: {
        connect: await prisma.permission.findMany({
          select: { id: true },
          where: { access: "own" },
        }),
      },
    },
  });
  console.timeEnd("👑 Created roles...");

  if (process.env.MINIMAL_SEED) {
    console.log("👍 Minimal seed complete");
    console.timeEnd(`🌱 Database has been seeded`);
    return;
  }

  const totalUsers = 5;
  console.time(`👤 Created ${totalUsers} users...`);
  const userImages = await getUserImages();

  const createUserPromises = Array.from({ length: totalUsers }).map(
    async (_, index) => {
      const userData = createUser();
      try {
        return await prisma.user.create({
          data: {
            ...userData,

            image: { create: userImages[index % userImages.length] },
            password: { create: createPassword(userData.username) },
            roles: { connect: { name: "user" } },
          },
          select: { id: true },
        });
      } catch (error) {
        console.error("Error creating a user:", error);
        return null;
      }
    },
  );

  await Promise.allSettled(createUserPromises);
  console.timeEnd(`👤 Created ${totalUsers} users...`);

  console.time(`🐨 Created admin user "${process.env.ADMIN_NAME}"`);

  const kodyImage = await img({
    altText: "picture of kody",
    filepath: "./tests/fixtures/images/user/kody.png",
  });

  await prisma.user.create({
    data: {
      email: process.env.ADMIN_EMAIL ?? "admin@localhost",
      image: { create: kodyImage },
      name: process.env.ADMIN_NAME,
      password: { create: createPassword(process.env.ADMIN_PASSWORD) },
      roles: { connect: [{ name: "admin" }, { name: "user" }] },
      username: process.env.ADMIN_USERNAME ?? "admin",
    },
    select: { id: true },
  });
  console.timeEnd(`🐨 Created admin user "${process.env.ADMIN_NAME}"`);

  console.timeEnd(`🌱 Database has been seeded`);
}

try {
  await seed();
} catch (error) {
  console.error(error);
  throw error;
} finally {
  await prisma.$disconnect();
}
