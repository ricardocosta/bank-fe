import {
  useRouteLoaderData
} from "/build/_shared/chunk-XY7VRZBP.js";
import {
  createHotContext
} from "/build/_shared/chunk-P3T3SZIS.js";

// app/utils/user.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/user.ts"
  );
  import.meta.hot.lastModified = "1713997433063.7124";
}
function isUser(user) {
  return !!user && typeof user === "object" && "id" in user && typeof user.id === "string";
}
function useOptionalUser() {
  const data = useRouteLoaderData("root");
  if (!data || !isUser(data.user)) {
    return void 0;
  }
  return data.user;
}
function useUser() {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  }
  return maybeUser;
}
function parsePermissionString(permissionString) {
  const [action, entity, access] = permissionString.split(":");
  return {
    action,
    entity,
    access: access ? access.split(",") : void 0
  };
}
function userHasPermission(user, permission) {
  if (!user) {
    return false;
  }
  const { action, entity, access } = parsePermissionString(permission);
  return user.roles.some(
    (role) => role.permissions.some(
      (permission2) => permission2.entity === entity && permission2.action === action && (!access || access.includes(permission2.access))
    )
  );
}

export {
  useOptionalUser,
  useUser,
  userHasPermission
};
//# sourceMappingURL=/build/_shared/chunk-Z5YS2INQ.js.map
