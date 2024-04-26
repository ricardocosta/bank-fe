import {
  require_toast_server
} from "/build/_shared/chunk-33VL4BOR.js";
import {
  PasswordSchema
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
import "/build/_shared/chunk-HBRNPUBR.js";
import {
  z
} from "/build/_shared/chunk-M7HH4RIF.js";
import {
  ErrorList,
  Field,
  getFormProps,
  getInputProps,
  useForm
} from "/build/_shared/chunk-HP5C7Y43.js";
import "/build/_shared/chunk-QCQ6MJ2A.js";
import {
  require_node
} from "/build/_shared/chunk-NYZEBVUP.js";
import {
  Button
} from "/build/_shared/chunk-6RG3S7SV.js";
import {
  Icon
} from "/build/_shared/chunk-TLNAOKNL.js";
import {
  useIsPending
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Form,
  Link,
  useActionData
} from "/build/_shared/chunk-XY7VRZBP.js";
import "/build/_shared/chunk-YRHZV3FU.js";
import {
  createHotContext
} from "/build/_shared/chunk-P3T3SZIS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XHN5H2T4.js";
import "/build/_shared/chunk-Y27R3AJV.js";
import "/build/_shared/chunk-UCS323OI.js";
import {
  __toESM
} from "/build/_shared/chunk-LTRR4HZE.js";

// app/routes/settings+/profile.password.tsx
var import_node = __toESM(require_node(), 1);
var import_auth_server = __toESM(require_auth_server(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_toast_server = __toESM(require_toast_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/settings+/profile.password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/settings+/profile.password.tsx"
  );
  import.meta.hot.lastModified = "1713999714261.0496";
}
var handle = {
  breadcrumb: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "dots-horizontal", children: "Password" }, void 0, false, {
    fileName: "app/routes/settings+/profile.password.tsx",
    lineNumber: 37,
    columnNumber: 15
  })
};
var ChangePasswordForm = z.object({
  currentPassword: PasswordSchema,
  newPassword: PasswordSchema,
  confirmNewPassword: PasswordSchema
}).superRefine(_c = ({
  confirmNewPassword,
  newPassword
}, ctx) => {
  if (confirmNewPassword !== newPassword) {
    ctx.addIssue({
      path: ["confirmNewPassword"],
      code: z.ZodIssueCode.custom,
      message: "The passwords must match"
    });
  }
});
_c2 = ChangePasswordForm;
function ChangePasswordRoute() {
  _s();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [form, fields] = useForm({
    id: "password-change-form",
    constraint: getZodConstraint(ChangePasswordForm),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: ChangePasswordForm
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), className: "mx-auto max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.currentPassword.errors, inputProps: {
      ...getInputProps(fields.currentPassword, {
        type: "password"
      }),
      autoComplete: "current-password"
    }, labelProps: {
      children: "Current Password"
    } }, void 0, false, {
      fileName: "app/routes/settings+/profile.password.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.newPassword.errors, inputProps: {
      ...getInputProps(fields.newPassword, {
        type: "password"
      }),
      autoComplete: "new-password"
    }, labelProps: {
      children: "New Password"
    } }, void 0, false, {
      fileName: "app/routes/settings+/profile.password.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.confirmNewPassword.errors, inputProps: {
      ...getInputProps(fields.confirmNewPassword, {
        type: "password"
      }),
      autoComplete: "new-password"
    }, labelProps: {
      children: "Confirm New Password"
    } }, void 0, false, {
      fileName: "app/routes/settings+/profile.password.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
      fileName: "app/routes/settings+/profile.password.tsx",
      lineNumber: 179,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid w-full grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/settings+/profile.password.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.password.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { status: isPending ? "pending" : form.status ?? "idle", type: "submit", children: "Change Password" }, void 0, false, {
        fileName: "app/routes/settings+/profile.password.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings+/profile.password.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings+/profile.password.tsx",
    lineNumber: 154,
    columnNumber: 10
  }, this);
}
_s(ChangePasswordRoute, "qg6D+LQiyyBwoKKZlQs9OeApyZ8=", false, function() {
  return [useActionData, useIsPending, useForm];
});
_c3 = ChangePasswordRoute;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "ChangePasswordForm$z\n  .object({\n    currentPassword: PasswordSchema,\n    newPassword: PasswordSchema,\n    confirmNewPassword: PasswordSchema,\n  })\n  .superRefine");
$RefreshReg$(_c2, "ChangePasswordForm");
$RefreshReg$(_c3, "ChangePasswordRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ChangePasswordRoute as default,
  handle
};
//# sourceMappingURL=/build/routes/settings+/profile.password-XIDUBR4K.js.map
