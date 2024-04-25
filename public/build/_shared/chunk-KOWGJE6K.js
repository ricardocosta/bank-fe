import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-3SKDAALF.js";
import {
  require_verification_server
} from "/build/_shared/chunk-RB6PP6GD.js";
import {
  PasswordAndConfirmPasswordSchema
} from "/build/_shared/chunk-A5SCVOAE.js";
import {
  require_db_server
} from "/build/_shared/chunk-MIH2HEZW.js";
import {
  require_auth_server
} from "/build/_shared/chunk-VR3LBXMU.js";
import {
  StatusButton
} from "/build/_shared/chunk-T74JPHL5.js";
import {
  getZodConstraint,
  parseWithZod
} from "/build/_shared/chunk-MRTMKYB5.js";
import {
  ErrorList,
  Field,
  getFormProps,
  getInputProps,
  useForm
} from "/build/_shared/chunk-HP5C7Y43.js";
import {
  require_node
} from "/build/_shared/chunk-NYZEBVUP.js";
import {
  useIsPending
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Form,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-XY7VRZBP.js";
import {
  createHotContext
} from "/build/_shared/chunk-P3T3SZIS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XHN5H2T4.js";
import {
  __toESM
} from "/build/_shared/chunk-LTRR4HZE.js";

// app/routes/_auth+/reset-password.tsx
var import_node = __toESM(require_node(), 1);
var import_auth_server = __toESM(require_auth_server(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_verification_server = __toESM(require_verification_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth+/reset-password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth+/reset-password.tsx"
  );
  import.meta.hot.lastModified = "1714001208522.799";
}
var ResetPasswordSchema = PasswordAndConfirmPasswordSchema;
var meta = () => {
  return [{
    title: "Reset Password | Epic Notes"
  }];
};
function ResetPasswordPage() {
  _s();
  const data = useLoaderData();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [form, fields] = useForm({
    id: "reset-password",
    constraint: getZodConstraint(ResetPasswordSchema),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: ResetPasswordSchema
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container flex flex-col justify-center pb-32 pt-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: "Password Reset" }, void 0, false, {
        fileName: "app/routes/_auth+/reset-password.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-body-md text-muted-foreground", children: [
        "Hi, ",
        data.resetPasswordUsername,
        ". No worries. It happens all the time."
      ] }, void 0, true, {
        fileName: "app/routes/_auth+/reset-password.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/reset-password.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-16 min-w-[368px] max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.password.errors, inputProps: {
        ...getInputProps(fields.password, {
          type: "password"
        }),
        autoComplete: "new-password",
        autoFocus: true
      }, labelProps: {
        htmlFor: fields.password.id,
        children: "New Password"
      } }, void 0, false, {
        fileName: "app/routes/_auth+/reset-password.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.confirmPassword.errors, inputProps: {
        ...getInputProps(fields.confirmPassword, {
          type: "password"
        }),
        autoComplete: "new-password"
      }, labelProps: {
        htmlFor: fields.confirmPassword.id,
        children: "Confirm Password"
      } }, void 0, false, {
        fileName: "app/routes/_auth+/reset-password.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
        fileName: "app/routes/_auth+/reset-password.tsx",
        lineNumber: 175,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full", disabled: isPending, status: isPending ? "pending" : form.status ?? "idle", type: "submit", children: "Reset password" }, void 0, false, {
        fileName: "app/routes/_auth+/reset-password.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/reset-password.tsx",
      lineNumber: 154,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth+/reset-password.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth+/reset-password.tsx",
    lineNumber: 146,
    columnNumber: 10
  }, this);
}
_s(ResetPasswordPage, "LlpdpXx3F0DiRi9p4RwyMUO3ZDI=", false, function() {
  return [useLoaderData, useActionData, useIsPending, useForm];
});
_c = ResetPasswordPage;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, {}, void 0, false, {
    fileName: "app/routes/_auth+/reset-password.tsx",
    lineNumber: 189,
    columnNumber: 10
  }, this);
}
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "ResetPasswordPage");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  meta,
  ResetPasswordPage,
  ErrorBoundary
};
//# sourceMappingURL=/build/_shared/chunk-KOWGJE6K.js.map
