import {
  Container,
  Html,
  Link,
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
  EmailSchema
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
import {
  useIsPending
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Form,
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

// app/routes/_auth+/signup.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/_auth+/signup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth+/signup.tsx"
  );
  import.meta.hot.lastModified = "1714001100996.8757";
}
var SignupSchema = z.object({
  email: EmailSchema
});
function SignupEmail({
  onboardingUrl,
  otp
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Html, { dir: "ltr", lang: "en", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Welcome to Epic Notes!" }, void 0, false, {
      fileName: "app/routes/_auth+/signup.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth+/signup.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      `Here's your verification code:`,
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: otp }, void 0, false, {
        fileName: "app/routes/_auth+/signup.tsx",
        lineNumber: 115,
        columnNumber: 48
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/signup.tsx",
      lineNumber: 114,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth+/signup.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Or click the link to get started:" }, void 0, false, {
      fileName: "app/routes/_auth+/signup.tsx",
      lineNumber: 119,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth+/signup.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: onboardingUrl, children: onboardingUrl }, void 0, false, {
      fileName: "app/routes/_auth+/signup.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth+/signup.tsx",
    lineNumber: 109,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth+/signup.tsx",
    lineNumber: 108,
    columnNumber: 10
  }, this);
}
_c = SignupEmail;
var meta = () => {
  return [{
    title: "Sign Up | Epic Notes"
  }];
};
function SignupRoute() {
  _s();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [form, fields] = useForm({
    id: "signup-form",
    constraint: getZodConstraint(SignupSchema),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: SignupSchema
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container flex flex-col justify-center pb-32 pt-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: `Let's start your journey!` }, void 0, false, {
        fileName: "app/routes/_auth+/signup.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-body-md text-muted-foreground", children: "Please enter your email." }, void 0, false, {
        fileName: "app/routes/_auth+/signup.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/signup.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-16 min-w-[368px] max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoneypotInputs, {}, void 0, false, {
        fileName: "app/routes/_auth+/signup.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.email.errors, inputProps: {
        ...getInputProps(fields.email, {
          type: "email"
        }),
        autoFocus: true,
        autoComplete: "email"
      }, labelProps: {
        htmlFor: fields.email.id,
        children: "Email"
      } }, void 0, false, {
        fileName: "app/routes/_auth+/signup.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
        fileName: "app/routes/_auth+/signup.tsx",
        lineNumber: 168,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full", disabled: isPending, status: isPending ? "pending" : form.status ?? "idle", type: "submit", children: "Submit" }, void 0, false, {
        fileName: "app/routes/_auth+/signup.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/signup.tsx",
      lineNumber: 156,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth+/signup.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth+/signup.tsx",
    lineNumber: 148,
    columnNumber: 10
  }, this);
}
_s(SignupRoute, "qg6D+LQiyyBwoKKZlQs9OeApyZ8=", false, function() {
  return [useActionData, useIsPending, useForm];
});
_c2 = SignupRoute;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, {}, void 0, false, {
    fileName: "app/routes/_auth+/signup.tsx",
    lineNumber: 181,
    columnNumber: 10
  }, this);
}
_c3 = ErrorBoundary;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "SignupEmail");
$RefreshReg$(_c2, "SignupRoute");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  SignupRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/_auth+/signup-CJKOZXMC.js.map
