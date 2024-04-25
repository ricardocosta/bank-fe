import {
  require_honeypot_server
} from "/build/_shared/chunk-E3A6U63N.js";
import {
  require_session_server
} from "/build/_shared/chunk-N5ISZQL4.js";
import {
  require_toast_server
} from "/build/_shared/chunk-33VL4BOR.js";
import {
  Spacer
} from "/build/_shared/chunk-BZYNIG4G.js";
import {
  HoneypotInputs
} from "/build/_shared/chunk-MB6JSKP2.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-3SKDAALF.js";
import {
  require_verification_server
} from "/build/_shared/chunk-RB6PP6GD.js";
import {
  PasswordSchema,
  UsernameSchema
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
  CheckboxField,
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
import "/build/_shared/chunk-Z7BBCTBE.js";
import "/build/_shared/chunk-6RG3S7SV.js";
import "/build/_shared/chunk-TLNAOKNL.js";
import {
  useIsPending
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Form,
  Link,
  useActionData,
  useSearchParams
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

// app/routes/_auth+/login.tsx
var import_node = __toESM(require_node(), 1);
var import_auth_server = __toESM(require_auth_server(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_honeypot_server = __toESM(require_honeypot_server(), 1);
var import_session_server = __toESM(require_session_server(), 1);
var import_toast_server = __toESM(require_toast_server(), 1);
var import_verification_server = __toESM(require_verification_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth+/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth+/login.tsx"
  );
  import.meta.hot.lastModified = "1714001704733.9792";
}
var LoginFormSchema = z.object({
  username: UsernameSchema,
  password: PasswordSchema,
  redirectTo: z.string().optional(),
  remember: z.boolean().default(false)
});
function LoginPage() {
  _s();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const [form, fields] = useForm({
    id: "login-form",
    constraint: getZodConstraint(LoginFormSchema),
    defaultValue: {
      redirectTo
    },
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: LoginFormSchema
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full w-full flex-col justify-center pb-32 pt-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: "Welcome back!" }, void 0, false, {
        fileName: "app/routes/_auth+/login.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-body-md text-muted-foreground", children: "Please enter your details." }, void 0, false, {
        fileName: "app/routes/_auth+/login.tsx",
        lineNumber: 191,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/login.tsx",
      lineNumber: 189,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "xs" }, void 0, false, {
      fileName: "app/routes/_auth+/login.tsx",
      lineNumber: 195,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoneypotInputs, {}, void 0, false, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 200,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.username.errors, inputProps: {
          ...getInputProps(fields.username, {
            type: "text"
          }),
          autoFocus: true,
          className: "lowercase",
          autoComplete: "username"
        }, labelProps: {
          children: "Username"
        } }, void 0, false, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 201,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.password.errors, inputProps: {
          ...getInputProps(fields.password, {
            type: "password"
          }),
          autoComplete: "current-password"
        }, labelProps: {
          children: "Password"
        } }, void 0, false, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 212,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            CheckboxField,
            {
              buttonProps: getInputProps(fields.remember, {
                type: "checkbox"
              }),
              errors: fields.remember.errors,
              labelProps: {
                htmlFor: fields.remember.id,
                children: "Remember me"
              }
            },
            void 0,
            false,
            {
              fileName: "app/routes/_auth+/login.tsx",
              lineNumber: 222,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-body-xs font-semibold", to: "/forgot-password", children: "Forgot password?" }, void 0, false, {
            fileName: "app/routes/_auth+/login.tsx",
            lineNumber: 231,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_auth+/login.tsx",
            lineNumber: 230,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 221,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ...getInputProps(fields.redirectTo, {
          type: "hidden"
        }) }, void 0, false, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 237,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 240,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-6 pt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full", disabled: isPending, status: isPending ? "pending" : form.status ?? "idle", type: "submit", children: "Log in" }, void 0, false, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 243,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 242,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth+/login.tsx",
        lineNumber: 199,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center gap-2 pt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-muted-foreground", children: "New here?" }, void 0, false, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 250,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: redirectTo ? `/signup?${encodeURIComponent(redirectTo)}` : "/signup", children: "Create an account" }, void 0, false, {
          fileName: "app/routes/_auth+/login.tsx",
          lineNumber: 251,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth+/login.tsx",
        lineNumber: 249,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/login.tsx",
      lineNumber: 198,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth+/login.tsx",
      lineNumber: 197,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth+/login.tsx",
    lineNumber: 188,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth+/login.tsx",
    lineNumber: 187,
    columnNumber: 10
  }, this);
}
_s(LoginPage, "pOytQzQfSlfERSUoCdV/IF0+RIo=", false, function() {
  return [useActionData, useIsPending, useSearchParams, useForm];
});
_c = LoginPage;
var meta = () => {
  return [{
    title: "Login to Epic Notes"
  }];
};
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, {}, void 0, false, {
    fileName: "app/routes/_auth+/login.tsx",
    lineNumber: 270,
    columnNumber: 10
  }, this);
}
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "LoginPage");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  LoginPage as default,
  meta
};
//# sourceMappingURL=/build/routes/_auth+/login-XRSWESZI.js.map
