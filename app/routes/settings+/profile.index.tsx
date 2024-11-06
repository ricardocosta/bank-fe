import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { invariantResponse } from "@epic-web/invariant";
import { Prisma } from "@prisma/client";
import { json } from "@remix-run/node";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import { z } from "zod";

import { ErrorList, Field } from "#app/components/forms.tsx";
import { Button } from "#app/components/ui/button.tsx";
import { Icon } from "#app/components/ui/icon.tsx";
import { StatusButton } from "#app/components/ui/status-button.tsx";
import { requireUserId, sessionKey } from "#app/utils/auth.server.ts";
import { prisma } from "#app/utils/db/db.server.ts";
import { getUserImgSrc, useDoubleCheck } from "#app/utils/misc.tsx";
import { authSessionStorage } from "#app/utils/session.server.ts";
import { redirectWithToast } from "#app/utils/toast.server.ts";
import { NameSchema, UsernameSchema } from "#app/utils/user-validation.ts";

import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

const ProfileFormSchema = z.object({
  name: NameSchema.optional(),
  username: UsernameSchema,
});

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request);
  const user = await prisma.user.findUniqueOrThrow({
    select: {
      _count: {
        select: {
          sessions: {
            where: {
              expirationDate: { gt: new Date() },
            },
          },
        },
      },
      email: true,
      id: true,
      image: {
        select: { id: true },
      },
      name: true,
      username: true,
    },
    where: { id: userId },
  });

  const password = await prisma.password.findUnique({
    select: { userId: true },
    where: { userId },
  });

  return json({
    hasPassword: Boolean(password),
    user,
  });
}

interface ProfileActionArgs {
  request: Request;
  userId: string;
  formData: FormData;
}
const profileUpdateActionIntent = "update-profile";
const signOutOfSessionsActionIntent = "sign-out-of-sessions";
const deleteDataActionIntent = "delete-data";

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);
  const formData = await request.formData();

  const intent = formData.get("intent");
  switch (intent) {
    case profileUpdateActionIntent: {
      return profileUpdateAction({ formData, request, userId });
    }
    case signOutOfSessionsActionIntent: {
      return signOutOfSessionsAction({ formData, request, userId });
    }
    case deleteDataActionIntent: {
      return deleteDataAction({ formData, request, userId });
    }
    default: {
      throw new Response(`Invalid intent "${intent?.toString()}"`, {
        status: 400,
      });
    }
  }
}

export default function EditUserProfile() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-center">
        <div className="relative size-52">
          <img
            alt={data.user.username}
            className="size-full rounded-full object-cover"
            src={getUserImgSrc(data.user.image?.id)}
          />
          <Button
            className="absolute -right-3 top-3 flex size-10 items-center justify-center rounded-full p-0"
            render={
              <Link
                aria-label="Change profile photo"
                preventScrollReset
                title="Change profile photo"
                to="photo"
              >
                <Icon className="size-4" name="camera" />
              </Link>
            }
            variant="outline"
          />
        </div>
      </div>
      <UpdateProfile />

      <div className="border-foreground col-span-6 my-6 h-1 border-b-[1.5px]" />
      <div className="col-span-full flex flex-col gap-6">
        <div>
          <Link to="change-email">
            <Icon name="envelope-closed">
              Change email from {data.user.email}
            </Icon>
          </Link>
        </div>
        <div>
          <Link to={data.hasPassword ? "password" : "password/create"}>
            <Icon name="dots-horizontal">
              {data.hasPassword ? "Change Password" : "Create a Password"}
            </Icon>
          </Link>
        </div>
        <div>
          <Link
            download="my-epic-notes-data.json"
            reloadDocument
            to="/resources/download-user-data"
          >
            <Icon name="download">Download your data</Icon>
          </Link>
        </div>
        <SignOutOfSessions />
        <DeleteData />
      </div>
    </div>
  );
}

async function profileUpdateAction({ userId, formData }: ProfileActionArgs) {
  const submission = await parseWithZod(formData, {
    async: true,
    schema: ProfileFormSchema.superRefine(async ({ username }, ctx) => {
      const existingUsername = await prisma.user.findUnique({
        select: { id: true },
        where: { username },
      });
      if (existingUsername && existingUsername.id !== userId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "A user already exists with this username",
          path: ["username"],
        });
      }
    }),
  });

  if (submission.status !== "success") {
    return json(
      { result: submission.reply() },
      {
        status: submission.status === "error" ? 400 : 200,
      },
    );
  }

  const data = submission.value;

  await prisma.user.update({
    data: {
      name: data.name ?? Prisma.skip,
      username: data.username,
    },
    select: { username: true },
    where: { id: userId },
  });

  return json({
    result: submission.reply(),
  });
}

function UpdateProfile() {
  const data = useLoaderData<typeof loader>();

  const fetcher = useFetcher<typeof profileUpdateAction>();

  const [form, fields] = useForm({
    constraint: getZodConstraint(ProfileFormSchema),
    defaultValue: {
      name: data.user.name ?? "",
      username: data.user.username,
    },
    id: "edit-profile",
    lastResult: fetcher.data?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ProfileFormSchema });
    },
  });

  return (
    <fetcher.Form method="POST" {...getFormProps(form)}>
      <div className="grid grid-cols-6 gap-x-10">
        <Field
          className="col-span-3"
          errors={fields.username.errors}
          inputProps={getInputProps(fields.username, { type: "text" })}
          labelProps={{
            children: "Username",
            htmlFor: fields.username.id,
          }}
        />
        <Field
          className="col-span-3"
          errors={fields.name.errors}
          inputProps={getInputProps(fields.name, { type: "text" })}
          labelProps={{ children: "Name", htmlFor: fields.name.id }}
        />
      </div>

      <ErrorList errors={form.errors} id={form.errorId} />

      <div className="mt-8 flex justify-center">
        <StatusButton
          name="intent"
          size="wide"
          status={
            fetcher.state === "idle" ? (form.status ?? "idle") : "pending"
          }
          type="submit"
          value={profileUpdateActionIntent}
        >
          Save changes
        </StatusButton>
      </div>
    </fetcher.Form>
  );
}

async function signOutOfSessionsAction({ request, userId }: ProfileActionArgs) {
  const authSession = await authSessionStorage.getSession(
    request.headers.get("cookie"),
  );
  const sessionId = authSession.get(sessionKey);
  invariantResponse(
    sessionId,
    "You must be authenticated to sign out of other sessions",
  );
  await prisma.session.deleteMany({
    where: {
      id: { not: sessionId },
      userId,
    },
  });
  return json({ status: "success" } as const);
}

function SignOutOfSessions() {
  const data = useLoaderData<typeof loader>();
  const dc = useDoubleCheck();

  const fetcher = useFetcher<typeof signOutOfSessionsAction>();
  const otherSessionsCount = data.user._count.sessions - 1;
  return (
    <div>
      {otherSessionsCount ? (
        <fetcher.Form method="POST">
          <StatusButton
            {...dc.getButtonProps({
              name: "intent",
              type: "submit",
              value: signOutOfSessionsActionIntent,
            })}
            status={
              fetcher.state === "idle"
                ? (fetcher.data?.status ?? "idle")
                : "pending"
            }
            variant={dc.doubleCheck ? "destructive" : "default"}
          >
            <Icon name="avatar">
              {dc.doubleCheck
                ? `Are you sure?`
                : `Sign out of ${otherSessionsCount} other sessions`}
            </Icon>
          </StatusButton>
        </fetcher.Form>
      ) : (
        <Icon name="avatar">This is your only session</Icon>
      )}
    </div>
  );
}

async function deleteDataAction({ userId }: ProfileActionArgs) {
  await prisma.user.delete({ where: { id: userId } });
  return redirectWithToast("/", {
    description: "All of your data has been deleted",
    title: "Data Deleted",
    type: "success",
  });
}

function DeleteData() {
  const dc = useDoubleCheck();

  const fetcher = useFetcher<typeof deleteDataAction>();
  return (
    <div>
      <fetcher.Form method="POST">
        <StatusButton
          {...dc.getButtonProps({
            name: "intent",
            type: "submit",
            value: deleteDataActionIntent,
          })}
          status={fetcher.state === "idle" ? "idle" : "pending"}
          variant={dc.doubleCheck ? "destructive" : "default"}
        >
          <Icon name="trash">
            {dc.doubleCheck ? `Are you sure?` : `Delete all your data`}
          </Icon>
        </StatusButton>
      </fetcher.Form>
    </div>
  );
}
