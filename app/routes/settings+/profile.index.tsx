import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { invariantResponse } from "@epic-web/invariant";
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
    where: { id: userId },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      image: {
        select: { id: true },
      },
      _count: {
        select: {
          sessions: {
            where: {
              expirationDate: { gt: new Date() },
            },
          },
        },
      },
    },
  });

  const password = await prisma.password.findUnique({
    select: { userId: true },
    where: { userId },
  });

  return json({
    user,
    hasPassword: Boolean(password),
  });
}

type ProfileActionArgs = {
  request: Request;
  userId: string;
  formData: FormData;
};
const profileUpdateActionIntent = "update-profile";
const signOutOfSessionsActionIntent = "sign-out-of-sessions";
const deleteDataActionIntent = "delete-data";

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);
  const formData = await request.formData();

  const intent = formData.get("intent");
  switch (intent) {
    case profileUpdateActionIntent: {
      return profileUpdateAction({ request, userId, formData });
    }
    case signOutOfSessionsActionIntent: {
      return signOutOfSessionsAction({ request, userId, formData });
    }
    case deleteDataActionIntent: {
      return deleteDataAction({ request, userId, formData });
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
        <div className="relative h-52 w-52">
          <img
            alt={data.user.username}
            className="h-full w-full rounded-full object-cover"
            src={getUserImgSrc(data.user.image?.id)}
          />
          <Button
            className="absolute -right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full p-0"
            render={
              <Link
                aria-label="Change profile photo"
                preventScrollReset
                title="Change profile photo"
                to="photo"
              >
                <Icon className="h-4 w-4" name="camera" />
              </Link>
            }
            variant="outline"
          />
        </div>
      </div>
      <UpdateProfile />

      <div className="col-span-6 my-6 h-1 border-b-[1.5px] border-foreground" />
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
        where: { username },
        select: { id: true },
      });
      if (existingUsername && existingUsername.id !== userId) {
        ctx.addIssue({
          path: ["username"],
          code: z.ZodIssueCode.custom,
          message: "A user already exists with this username",
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
    select: { username: true },
    where: { id: userId },
    data: {
      name: data.name,
      username: data.username,
    },
  });

  return json({
    result: submission.reply(),
  });
}

function UpdateProfile() {
  const data = useLoaderData<typeof loader>();

  const fetcher = useFetcher<typeof profileUpdateAction>();

  const [form, fields] = useForm({
    id: "edit-profile",
    constraint: getZodConstraint(ProfileFormSchema),
    lastResult: fetcher.data?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ProfileFormSchema });
    },
    defaultValue: {
      username: data.user.username,
      name: data.user.name ?? "",
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
            htmlFor: fields.username.id,
            children: "Username",
          }}
        />
        <Field
          className="col-span-3"
          errors={fields.name.errors}
          inputProps={getInputProps(fields.name, { type: "text" })}
          labelProps={{ htmlFor: fields.name.id, children: "Name" }}
        />
      </div>

      <ErrorList errors={form.errors} id={form.errorId} />

      <div className="mt-8 flex justify-center">
        <StatusButton
          name="intent"
          size="wide"
          status={
            fetcher.state !== "idle" ? "pending" : (form.status ?? "idle")
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
      userId,
      id: { not: sessionId },
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
              type: "submit",
              name: "intent",
              value: signOutOfSessionsActionIntent,
            })}
            status={
              fetcher.state !== "idle"
                ? "pending"
                : (fetcher.data?.status ?? "idle")
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
    type: "success",
    title: "Data Deleted",
    description: "All of your data has been deleted",
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
            type: "submit",
            name: "intent",
            value: deleteDataActionIntent,
          })}
          status={fetcher.state !== "idle" ? "pending" : "idle"}
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
