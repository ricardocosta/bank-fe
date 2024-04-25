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
import "/build/_shared/chunk-HBRNPUBR.js";
import "/build/_shared/chunk-M7HH4RIF.js";
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

// app/routes/settings+/profile.password_.create.tsx
var import_node = __toESM(require_node(), 1);
var import_auth_server = __toESM(require_auth_server(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/settings+/profile.password_.create.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/settings+/profile.password_.create.tsx"
  );
  import.meta.hot.lastModified = "1713999579980.0132";
}
var handle = {
  breadcrumb: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "dots-horizontal", children: "Password" }, void 0, false, {
    fileName: "app/routes/settings+/profile.password_.create.tsx",
    lineNumber: 35,
    columnNumber: 15
  })
};
var CreatePasswordForm = PasswordAndConfirmPasswordSchema;
function CreatePasswordRoute() {
  _s();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [form, fields] = useForm({
    id: "password-create-form",
    constraint: getZodConstraint(CreatePasswordForm),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: CreatePasswordForm
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), className: "mx-auto max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.password.errors, inputProps: {
      ...getInputProps(fields.password, {
        type: "password"
      }),
      autoComplete: "new-password"
    }, labelProps: {
      children: "New Password"
    } }, void 0, false, {
      fileName: "app/routes/settings+/profile.password_.create.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.confirmPassword.errors, inputProps: {
      ...getInputProps(fields.confirmPassword, {
        type: "password"
      }),
      autoComplete: "new-password"
    }, labelProps: {
      children: "Confirm New Password"
    } }, void 0, false, {
      fileName: "app/routes/settings+/profile.password_.create.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
      fileName: "app/routes/settings+/profile.password_.create.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid w-full grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/settings+/profile.password_.create.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.password_.create.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { status: isPending ? "pending" : form.status ?? "idle", type: "submit", children: "Create Password" }, void 0, false, {
        fileName: "app/routes/settings+/profile.password_.create.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings+/profile.password_.create.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings+/profile.password_.create.tsx",
    lineNumber: 116,
    columnNumber: 10
  }, this);
}
_s(CreatePasswordRoute, "qg6D+LQiyyBwoKKZlQs9OeApyZ8=", false, function() {
  return [useActionData, useIsPending, useForm];
});
_c = CreatePasswordRoute;
var _c;
$RefreshReg$(_c, "CreatePasswordRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CreatePasswordRoute as default,
  handle
};
//# sourceMappingURL=/build/routes/settings+/profile.password_.create-VKOHFV5X.js.map
