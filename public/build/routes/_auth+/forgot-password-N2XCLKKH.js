import {
  Container,
  Html,
  Link as Link2,
  Text,
  require_email_server
} from "/build/_shared/chunk-JZRP5RVG.js";
import "/build/_shared/chunk-2RKPJDBQ.js";
import {
  require_honeypot_server
} from "/build/_shared/chunk-E3A6U63N.js";
import "/build/_shared/chunk-N5ISZQL4.js";
import "/build/_shared/chunk-33VL4BOR.js";
import "/build/_shared/chunk-BZYNIG4G.js";
import {
  HoneypotInputs
} from "/build/_shared/chunk-MB6JSKP2.js";
import "/build/_shared/chunk-KOWGJE6K.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-3SKDAALF.js";
import "/build/_shared/chunk-RB6PP6GD.js";
import {
  EmailSchema,
  UsernameSchema
} from "/build/_shared/chunk-A5SCVOAE.js";
import {
  require_db_server
} from "/build/_shared/chunk-MIH2HEZW.js";
import "/build/_shared/chunk-VR3LBXMU.js";
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
import "/build/_shared/chunk-Z7BBCTBE.js";
import "/build/_shared/chunk-6RG3S7SV.js";
import "/build/_shared/chunk-TLNAOKNL.js";
import "/build/_shared/chunk-JWYSQB4M.js";
import {
  Link,
  useFetcher
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

// app/routes/_auth+/forgot-password.tsx
var import_node = __toESM(require_node(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_email_server = __toESM(require_email_server(), 1);
var import_honeypot_server = __toESM(require_honeypot_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth+/forgot-password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth+/forgot-password.tsx"
  );
  import.meta.hot.lastModified = "1714001844525.8142";
}
var ForgotPasswordSchema = z.object({
  usernameOrEmail: z.union([EmailSchema, UsernameSchema])
});
function ForgotPasswordEmail({
  onboardingUrl,
  otp
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Html, { dir: "ltr", lang: "en", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Epic Notes Password Reset" }, void 0, false, {
      fileName: "app/routes/_auth+/forgot-password.tsx",
      lineNumber: 127,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth+/forgot-password.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      `Here's your verification code:`,
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: otp }, void 0, false, {
        fileName: "app/routes/_auth+/forgot-password.tsx",
        lineNumber: 131,
        columnNumber: 48
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/forgot-password.tsx",
      lineNumber: 130,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth+/forgot-password.tsx",
      lineNumber: 129,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Or click the link:" }, void 0, false, {
      fileName: "app/routes/_auth+/forgot-password.tsx",
      lineNumber: 135,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth+/forgot-password.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { href: onboardingUrl, children: onboardingUrl }, void 0, false, {
      fileName: "app/routes/_auth+/forgot-password.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth+/forgot-password.tsx",
    lineNumber: 125,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth+/forgot-password.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}
_c = ForgotPasswordEmail;
var meta = () => {
  return [{
    title: "Password Recovery for Epic Notes"
  }];
};
function ForgotPasswordRoute() {
  _s();
  const forgotPassword = useFetcher();
  const [form, fields] = useForm({
    id: "forgot-password-form",
    constraint: getZodConstraint(ForgotPasswordSchema),
    lastResult: forgotPassword.data?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: ForgotPasswordSchema
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container pb-32 pt-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: "Forgot Password" }, void 0, false, {
        fileName: "app/routes/_auth+/forgot-password.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-body-md text-muted-foreground", children: `No worries, we'll send you reset instructions.` }, void 0, false, {
        fileName: "app/routes/_auth+/forgot-password.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/forgot-password.tsx",
      lineNumber: 165,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-16 min-w-[368px] max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(forgotPassword.Form, { method: "POST", ...getFormProps(form), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoneypotInputs, {}, void 0, false, {
          fileName: "app/routes/_auth+/forgot-password.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.usernameOrEmail.errors, inputProps: {
          autoFocus: true,
          ...getInputProps(fields.usernameOrEmail, {
            type: "text"
          })
        }, labelProps: {
          htmlFor: fields.usernameOrEmail.id,
          children: "Username or Email"
        } }, void 0, false, {
          fileName: "app/routes/_auth+/forgot-password.tsx",
          lineNumber: 175,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth+/forgot-password.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
          fileName: "app/routes/_auth+/forgot-password.tsx",
          lineNumber: 185,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full", disabled: forgotPassword.state !== "idle", status: forgotPassword.state === "submitting" ? "pending" : form.status ?? "idle", type: "submit", children: "Recover password" }, void 0, false, {
          fileName: "app/routes/_auth+/forgot-password.tsx",
          lineNumber: 188,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth+/forgot-password.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth+/forgot-password.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "mt-11 text-center text-body-sm font-bold", to: "/login", children: "Back to Login" }, void 0, false, {
        fileName: "app/routes/_auth+/forgot-password.tsx",
        lineNumber: 193,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/forgot-password.tsx",
      lineNumber: 171,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth+/forgot-password.tsx",
    lineNumber: 164,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth+/forgot-password.tsx",
    lineNumber: 163,
    columnNumber: 10
  }, this);
}
_s(ForgotPasswordRoute, "X2dFhDI9LNT9Wf5zf55NIkNQiO4=", false, function() {
  return [useFetcher, useForm];
});
_c2 = ForgotPasswordRoute;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, {}, void 0, false, {
    fileName: "app/routes/_auth+/forgot-password.tsx",
    lineNumber: 205,
    columnNumber: 10
  }, this);
}
_c3 = ErrorBoundary;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "ForgotPasswordEmail");
$RefreshReg$(_c2, "ForgotPasswordRoute");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  ForgotPasswordRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/_auth+/forgot-password-N2XCLKKH.js.map
