import { faker } from "@faker-js/faker";
import { promiseHash } from "remix-utils/promise";

import { prisma } from "#app/utils/db/db.server";

import {
  cleanupDb,
  createPassword,
  createUser,
  getNoteImages,
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
        console.log({ access, action, entity });
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
  const noteImages = await getNoteImages();
  const userImages = await getUserImages();

  const createUserPromises = Array.from({ length: totalUsers }).map(
    (_, index) => {
      const userData = createUser();
      return prisma.user
        .create({
          data: {
            ...userData,

            image: { create: userImages[index % userImages.length] },
            notes: {
              create: Array.from({
                length: faker.number.int({ max: 3, min: 1 }),
              }).map(() => ({
                content: faker.lorem.paragraphs(),
                images: {
                  create: Array.from({
                    length: faker.number.int({ max: 3, min: 1 }),
                  }).map(() => {
                    const imgNumber = faker.number.int({ max: 9, min: 0 });
                    return noteImages[imgNumber];
                  }),
                },
                title: faker.lorem.sentence(),
              })),
            },
            password: { create: createPassword(userData.username) },
            roles: { connect: { name: "user" } },
          },
          select: { id: true },
        })
        .catch((error: unknown) => {
          console.error("Error creating a user:", error);
          return null;
        });
    },
  );

  await Promise.allSettled(createUserPromises);
  console.timeEnd(`👤 Created ${totalUsers} users...`);

  console.time(`🐨 Created admin user "${process.env.ADMIN_NAME}"`);

  const kodyImages = await promiseHash({
    cuteKoala: img({
      altText: "an adorable koala cartoon illustration",
      filepath: "./tests/fixtures/images/kody-notes/cute-koala.png",
    }),
    koalaCoder: img({
      altText: "a koala coding at the computer",
      filepath: "./tests/fixtures/images/kody-notes/koala-coder.png",
    }),
    koalaCuddle: img({
      altText: "a cartoon illustration of koalas cuddling",
      filepath: "./tests/fixtures/images/kody-notes/koala-cuddle.png",
    }),
    koalaEating: img({
      altText: "a cartoon illustration of a koala in a tree eating",
      filepath: "./tests/fixtures/images/kody-notes/koala-eating.png",
    }),
    koalaMentor: img({
      altText:
        "a koala in a friendly and helpful posture. The Koala is standing next to and teaching a woman who is coding on a computer and shows positive signs of learning and understanding what is being explained.",
      filepath: "./tests/fixtures/images/kody-notes/koala-mentor.png",
    }),
    koalaSoccer: img({
      altText: "a cute cartoon koala kicking a soccer ball on a soccer field ",
      filepath: "./tests/fixtures/images/kody-notes/koala-soccer.png",
    }),
    kodyUser: img({
      altText: "picture of kody",
      filepath: "./tests/fixtures/images/user/kody.png",
    }),
    mountain: img({
      altText: "a beautiful mountain covered in snow",
      filepath: "./tests/fixtures/images/kody-notes/mountain.png",
    }),
  });

  await prisma.user.create({
    data: {
      email: process.env.ADMIN_EMAIL ?? "admin@localhost",
      image: { create: kodyImages.kodyUser },
      name: process.env.ADMIN_NAME,
      notes: {
        create: [
          {
            content:
              "Koalas are found in the eucalyptus forests of eastern Australia. They have grey fur with a cream-coloured chest, and strong, clawed feet, perfect for living in the branches of trees!",
            id: "d27a197e",
            images: { create: [kodyImages.cuteKoala, kodyImages.koalaEating] },
            title: "Basic Koala Facts",
          },
          {
            content:
              "Cuddly critters, koalas measure about 60cm to 85cm long, and weigh about 14kg.",
            id: "414f0c09",
            images: {
              create: [kodyImages.koalaCuddle],
            },
            title: "Koalas like to cuddle",
          },
          {
            content:
              "Although you may have heard people call them koala 'bears', these awesome animals aren’t bears at all – they are in fact marsupials. A group of mammals, most marsupials have pouches where their newborns develop.",
            id: "260366b1",
            title: "Not bears",
          },
          {
            content:
              "Today was an epic day on the slopes! Shredded fresh powder with my friends, caught some sick air, and even attempted a backflip. Can't wait for the next snowy adventure!",
            id: "bb79cf45",
            images: {
              create: [kodyImages.mountain],
            },
            title: "Snowboarding Adventure",
          },
          {
            content:
              "Mastered a new trick on my Onewheel today called '180 Spin'. It's exhilarating to carve through the streets while pulling off these rad moves. Time to level up and learn more!",
            id: "9f4308be",
            title: "Onewheel Tricks",
          },
          {
            content:
              "Stuck on a bug in my latest coding project. Need to figure out why my function isn't returning the expected output. Time to dig deep, debug, and conquer this challenge!",
            id: "306021fb",
            images: {
              create: [kodyImages.koalaCoder],
            },
            title: "Coding Dilemma",
          },
          {
            content:
              "Had a fantastic coding mentoring session today with Sarah. Helped her understand the concept of recursion, and she made great progress. It's incredibly fulfilling to help others improve their coding skills.",
            id: "16d4912a",
            images: {
              create: [kodyImages.koalaMentor],
            },
            title: "Coding Mentorship",
          },
          {
            content:
              "Did you know that koalas sleep for up to 20 hours a day? It's because their diet of eucalyptus leaves doesn't provide much energy. But when I'm awake, I enjoy munching on leaves, chilling in trees, and being the cuddliest koala around!",
            id: "3199199e",
            title: "Koala Fun Facts",
          },
          {
            content:
              "Spent the day hitting the slopes on my skis. The fresh powder made for some incredible runs and breathtaking views. Skiing down the mountain at top speed is an adrenaline rush like no other!",
            id: "2030ffd3",
            images: {
              create: [kodyImages.mountain],
            },
            title: "Skiing Adventure",
          },
          {
            content:
              "Participated in a coding competition today and secured the first place! The adrenaline, the challenging problems, and the satisfaction of finding optimal solutions—it was an amazing experience. Feeling proud and motivated to keep pushing my coding skills further!",
            id: "f375a804",
            images: {
              create: [kodyImages.koalaCoder],
            },
            title: "Code Jam Success",
          },
          {
            content:
              "Joined a local conservation group to protect koalas and their habitats. Together, we're planting more eucalyptus trees, raising awareness about their endangered status, and working towards a sustainable future for these adorable creatures. Every small step counts!",
            id: "562c541b",
            title: "Koala Conservation Efforts",
          },
          // extra long note to test scrolling
          {
            content:
              "Just got back from the most amazing game. I've been playing soccer for a long time, but I've not once scored a goal. Well, today all that changed! I finally scored my first ever goal.\n\nI'm in an indoor league, and my team's not the best, but we're pretty good and I have fun, that's all that really matters. Anyway, I found myself at the other end of the field with the ball. It was just me and the goalie. I normally just kick the ball and hope it goes in, but the ball was already rolling toward the goal. The goalie was about to get the ball, so I had to charge. I managed to get possession of the ball just before the goalie got it. I brought it around the goalie and had a perfect shot. I screamed so loud in excitement. After all these years playing, I finally scored a goal!\n\nI know it's not a lot for most folks, but it meant a lot to me. We did end up winning the game by one. It makes me feel great that I had a part to play in that.\n\nIn this team, I'm the captain. I'm constantly cheering my team on. Even after getting injured, I continued to come and watch from the side-lines. I enjoy yelling (encouragingly) at my team mates and helping them be the best they can. I'm definitely not the best player by a long stretch. But I really enjoy the game. It's a great way to get exercise and have good social interactions once a week.\n\nThat said, it can be hard to keep people coming and paying dues and stuff. If people don't show up it can be really hard to find subs. I have a list of people I can text, but sometimes I can't find anyone.\n\nBut yeah, today was awesome. I felt like more than just a player that gets in the way of the opposition, but an actual asset to the team. Really great feeling.\n\nAnyway, I'm rambling at this point and really this is just so we can have a note that's pretty long to test things out. I think it's long enough now... Cheers!",
            id: "f67ca40b",
            images: {
              create: [kodyImages.koalaSoccer],
            },
            title: "Game day",
          },
        ],
      },
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
