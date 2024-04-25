import {
  require_honeypot_server
} from "/build/_shared/chunk-E3A6U63N.js";
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
  EmailSchema
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
  z
} from "/build/_shared/chunk-M7HH4RIF.js";
import {
  ErrorList,
  Field,
  getFormProps,
  getInputProps,
  useForm
} from "/build/_shared/chunk-HP5C7Y43.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-QCQ6MJ2A.js";
import {
  require_node
} from "/build/_shared/chunk-NYZEBVUP.js";
import {
  Icon
} from "/build/_shared/chunk-TLNAOKNL.js";
import {
  useIsPending
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useSearchParams
} from "/build/_shared/chunk-XY7VRZBP.js";
import {
  createHotContext
} from "/build/_shared/chunk-P3T3SZIS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XHN5H2T4.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-LTRR4HZE.js";

// empty-module:#app/utils/totp.server.ts
var require_totp_server = __commonJS({
  "empty-module:#app/utils/totp.server.ts"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// empty-module:#app/utils/email.server.ts
var require_email_server = __commonJS({
  "empty-module:#app/utils/email.server.ts"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// node_modules/.pnpm/@react-email+container@0.0.10_react@18.2.0/node_modules/@react-email/container/dist/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Container = (_a) => {
  var _b = _a, {
    children,
    style
  } = _b, props = __objRest(_b, [
    "children",
    "style"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "table",
    __spreadProps(__spreadValues({
      align: "center",
      width: "100%"
    }, props), {
      border: 0,
      cellPadding: "0",
      cellSpacing: "0",
      role: "presentation",
      style: __spreadValues({ maxWidth: "37.5em" }, style),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children }) }) })
    })
  );
};

// node_modules/.pnpm/@react-email+html@0.0.6_react@18.2.0/node_modules/@react-email/html/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Html = (_a) => {
  var _b = _a, {
    children,
    lang = "en",
    dir = "ltr"
  } = _b, props = __objRest2(_b, [
    "children",
    "lang",
    "dir"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("html", __spreadProps2(__spreadValues2({}, props), { dir, lang, children }));
};

// node_modules/.pnpm/@react-email+link@0.0.6_react@18.2.0/node_modules/@react-email/link/dist/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var __defProp3 = Object.defineProperty;
var __defProps3 = Object.defineProperties;
var __getOwnPropDescs3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __propIsEnum3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp3.call(b, prop))
      __defNormalProp3(a, prop, b[prop]);
  if (__getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(b)) {
      if (__propIsEnum3.call(b, prop))
        __defNormalProp3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps3 = (a, b) => __defProps3(a, __getOwnPropDescs3(b));
var __objRest3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Link = (_a) => {
  var _b = _a, {
    target = "_blank",
    style
  } = _b, props = __objRest3(_b, [
    "target",
    "style"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "a",
    __spreadProps3(__spreadValues3({}, props), {
      style: __spreadValues3({
        color: "#067df7",
        textDecoration: "none"
      }, style),
      target,
      children: props.children
    })
  );
};

// node_modules/.pnpm/@react-email+text@0.0.6_react@18.2.0/node_modules/@react-email/text/dist/index.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var __defProp4 = Object.defineProperty;
var __defProps4 = Object.defineProperties;
var __getOwnPropDescs4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols4 = Object.getOwnPropertySymbols;
var __hasOwnProp4 = Object.prototype.hasOwnProperty;
var __propIsEnum4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp4 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp4.call(b, prop))
      __defNormalProp4(a, prop, b[prop]);
  if (__getOwnPropSymbols4)
    for (var prop of __getOwnPropSymbols4(b)) {
      if (__propIsEnum4.call(b, prop))
        __defNormalProp4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps4 = (a, b) => __defProps4(a, __getOwnPropDescs4(b));
var __objRest4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols4)
    for (var prop of __getOwnPropSymbols4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Text = (_a) => {
  var _b = _a, { style } = _b, props = __objRest4(_b, ["style"]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "p",
    __spreadProps4(__spreadValues4({}, props), {
      style: __spreadValues4({
        fontSize: "14px",
        lineHeight: "24px",
        margin: "16px 0"
      }, style)
    })
  );
};

// app/routes/settings+/profile.change-email.tsx
var import_node2 = __toESM(require_node(), 1);

// app/routes/_auth+/verify.tsx
var import_node = __toESM(require_node(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_honeypot_server = __toESM(require_honeypot_server(), 1);
var import_totp_server = __toESM(require_totp_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth+/verify.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth+/verify.tsx"
  );
  import.meta.hot.lastModified = "1714001498461.0498";
}
var codeQueryParam = "code";
var targetQueryParam = "target";
var typeQueryParam = "type";
var redirectToQueryParam = "redirectTo";
var types = ["onboarding", "reset-password", "change-email"];
var VerificationTypeSchema = z.enum(types);
var VerifySchema = z.object({
  [codeQueryParam]: z.string().min(6).max(6),
  [typeQueryParam]: VerificationTypeSchema,
  [targetQueryParam]: z.string(),
  [redirectToQueryParam]: z.string().optional()
});
function VerifyRoute() {
  _s();
  const [searchParams] = useSearchParams();
  const isPending = useIsPending();
  const actionData = useActionData();
  const parseWithZodType = VerificationTypeSchema.safeParse(searchParams.get(typeQueryParam));
  const type = parseWithZodType.success ? parseWithZodType.data : null;
  const checkEmail = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: "Check your email" }, void 0, false, {
      fileName: "app/routes/_auth+/verify.tsx",
      lineNumber: 233,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-body-md text-muted-foreground", children: `We've sent you a code to verify your email address.` }, void 0, false, {
      fileName: "app/routes/_auth+/verify.tsx",
      lineNumber: 234,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth+/verify.tsx",
    lineNumber: 232,
    columnNumber: 22
  }, this);
  const headings = {
    onboarding: checkEmail,
    "reset-password": checkEmail,
    "change-email": checkEmail
  };
  const [form, fields] = useForm({
    id: "verify-form",
    constraint: getZodConstraint(VerifySchema),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: VerifySchema
      });
    },
    defaultValue: {
      code: searchParams.get(codeQueryParam),
      type,
      target: searchParams.get(targetQueryParam),
      redirectTo: searchParams.get(redirectToQueryParam)
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "container flex flex-col justify-center pb-32 pt-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: type ? headings[type] : "Invalid Verification Type" }, void 0, false, {
      fileName: "app/routes/_auth+/verify.tsx",
      lineNumber: 262,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "xs" }, void 0, false, {
      fileName: "app/routes/_auth+/verify.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto flex w-72 max-w-full flex-col justify-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
        fileName: "app/routes/_auth+/verify.tsx",
        lineNumber: 270,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth+/verify.tsx",
        lineNumber: 269,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), className: "flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoneypotInputs, {}, void 0, false, {
          fileName: "app/routes/_auth+/verify.tsx",
          lineNumber: 274,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields[codeQueryParam].errors, inputProps: {
          ...getInputProps(fields[codeQueryParam], {
            type: "text"
          }),
          autoComplete: "one-time-code"
        }, labelProps: {
          htmlFor: fields[codeQueryParam].id,
          children: "Code"
        } }, void 0, false, {
          fileName: "app/routes/_auth+/verify.tsx",
          lineNumber: 275,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ...getInputProps(fields[typeQueryParam], {
          type: "hidden"
        }) }, void 0, false, {
          fileName: "app/routes/_auth+/verify.tsx",
          lineNumber: 284,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ...getInputProps(fields[targetQueryParam], {
          type: "hidden"
        }) }, void 0, false, {
          fileName: "app/routes/_auth+/verify.tsx",
          lineNumber: 287,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ...getInputProps(fields[redirectToQueryParam], {
          type: "hidden"
        }) }, void 0, false, {
          fileName: "app/routes/_auth+/verify.tsx",
          lineNumber: 290,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full", disabled: isPending, status: isPending ? "pending" : form.status ?? "idle", type: "submit", children: "Submit" }, void 0, false, {
          fileName: "app/routes/_auth+/verify.tsx",
          lineNumber: 293,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth+/verify.tsx",
        lineNumber: 273,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth+/verify.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/verify.tsx",
      lineNumber: 268,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth+/verify.tsx",
    lineNumber: 261,
    columnNumber: 10
  }, this);
}
_s(VerifyRoute, "mdQnfHSnsVqWxr+aBh52a6+GYjY=", false, function() {
  return [useSearchParams, useIsPending, useActionData, useForm];
});
_c = VerifyRoute;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, {}, void 0, false, {
    fileName: "app/routes/_auth+/verify.tsx",
    lineNumber: 306,
    columnNumber: 10
  }, this);
}
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "VerifyRoute");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/settings+/profile.change-email.tsx
var import_auth_server = __toESM(require_auth_server(), 1);
var import_db_server2 = __toESM(require_db_server(), 1);
var import_email_server = __toESM(require_email_server(), 1);
var import_toast_server = __toESM(require_toast_server(), 1);
var import_verification_server = __toESM(require_verification_server(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/settings+/profile.change-email.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/settings+/profile.change-email.tsx"
  );
  import.meta.hot.lastModified = "1714000313430.99";
}
var handle = {
  breadcrumb: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { name: "envelope-closed", children: "Change Email" }, void 0, false, {
    fileName: "app/routes/settings+/profile.change-email.tsx",
    lineNumber: 41,
    columnNumber: 15
  })
};
var ChangeEmailSchema = z.object({
  email: EmailSchema
});
function EmailChangeEmail({
  verifyUrl,
  otp
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Html, { dir: "ltr", lang: "en", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: "Epic Notes Email Change" }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 190,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 189,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: [
      `Here's your verification code:`,
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: otp }, void 0, false, {
        fileName: "app/routes/settings+/profile.change-email.tsx",
        lineNumber: 194,
        columnNumber: 48
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 193,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 192,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: "Or click the link:" }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 198,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 197,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { href: verifyUrl, children: verifyUrl }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 200,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings+/profile.change-email.tsx",
    lineNumber: 188,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/settings+/profile.change-email.tsx",
    lineNumber: 187,
    columnNumber: 10
  }, this);
}
_c3 = EmailChangeEmail;
function EmailChangeNoticeEmail({
  userId
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Html, { dir: "ltr", lang: "en", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: "Your Epic Notes email has been changed" }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 211,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 210,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: `We're writing to let you know that your Epic Notes email has been
            changed.` }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 214,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 213,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: "If you changed your email address, then you can safely ignore this. But if you did not change your email address, then please contact support immediately." }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 220,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 219,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: [
      "Your Account ID: ",
      userId
    ] }, void 0, true, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 227,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 226,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings+/profile.change-email.tsx",
    lineNumber: 209,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/settings+/profile.change-email.tsx",
    lineNumber: 208,
    columnNumber: 10
  }, this);
}
_c22 = EmailChangeNoticeEmail;
function ChangeEmailIndex() {
  _s2();
  const data = useLoaderData();
  const actionData = useActionData();
  const [form, fields] = useForm({
    id: "change-email-form",
    constraint: getZodConstraint(ChangeEmailSchema),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: ChangeEmailSchema
      });
    }
  });
  const isPending = useIsPending();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-h1", children: "Change Email" }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "You will receive an email at the new email address to confirm." }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 252,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      "An email notice will also be sent to your old address ",
      data.user.email,
      "."
    ] }, void 0, true, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto mt-5 max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "POST", ...getFormProps(form), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Field, { errors: fields.email.errors, inputProps: {
        ...getInputProps(fields.email, {
          type: "email"
        }),
        autoComplete: "email"
      }, labelProps: {
        children: "New Email"
      } }, void 0, false, {
        fileName: "app/routes/settings+/profile.change-email.tsx",
        lineNumber: 258,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
        fileName: "app/routes/settings+/profile.change-email.tsx",
        lineNumber: 266,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StatusButton, { status: isPending ? "pending" : form.status ?? "idle", children: "Send Confirmation" }, void 0, false, {
        fileName: "app/routes/settings+/profile.change-email.tsx",
        lineNumber: 268,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.change-email.tsx",
        lineNumber: 267,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 257,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/settings+/profile.change-email.tsx",
      lineNumber: 256,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings+/profile.change-email.tsx",
    lineNumber: 250,
    columnNumber: 10
  }, this);
}
_s2(ChangeEmailIndex, "c7eLdpHqN4NN5gMZvVwHBI//RLo=", false, function() {
  return [useLoaderData, useActionData, useForm, useIsPending];
});
_c32 = ChangeEmailIndex;
var _c3;
var _c22;
var _c32;
$RefreshReg$(_c3, "EmailChangeEmail");
$RefreshReg$(_c22, "EmailChangeNoticeEmail");
$RefreshReg$(_c32, "ChangeEmailIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Container,
  Html,
  Link,
  Text,
  require_email_server,
  handle,
  ChangeEmailIndex,
  VerifyRoute,
  ErrorBoundary
};
//# sourceMappingURL=/build/_shared/chunk-JZRP5RVG.js.map
