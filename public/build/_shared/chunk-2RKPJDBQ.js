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
  require_verification_server
} from "/build/_shared/chunk-RB6PP6GD.js";
import {
  NameSchema,
  PasswordAndConfirmPasswordSchema,
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
import {
  require_node
} from "/build/_shared/chunk-NYZEBVUP.js";
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
  __toESM
} from "/build/_shared/chunk-LTRR4HZE.js";

// app/routes/_auth+/onboarding.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/_auth+/onboarding.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth+/onboarding.tsx"
  );
  import.meta.hot.lastModified = "1714001434573.415";
}
var SignupFormSchema = z.object({
  username: UsernameSchema,
  name: NameSchema,
  agreeToTermsOfServiceAndPrivacyPolicy: z.boolean({
    required_error: "You must agree to the terms of service and privacy policy"
  }),
  remember: z.boolean().optional(),
  redirectTo: z.string().optional()
}).and(PasswordAndConfirmPasswordSchema);
_c = SignupFormSchema;
var meta = () => {
  return [{
    title: "Setup Epic Notes Account"
  }];
};
function SignupRoute() {
  _s();
  const data = useLoaderData();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const [form, fields] = useForm({
    id: "onboarding-form",
    constraint: getZodConstraint(SignupFormSchema),
    defaultValue: {
      redirectTo
    },
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: SignupFormSchema
      });
    },
    shouldRevalidate: "onBlur"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container flex min-h-full flex-col justify-center pb-32 pt-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: [
        "Welcome aboard ",
        data.email,
        "!"
      ] }, void 0, true, {
        fileName: "app/routes/_auth+/onboarding.tsx",
        lineNumber: 181,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-body-md text-muted-foreground", children: "Please enter your details." }, void 0, false, {
        fileName: "app/routes/_auth+/onboarding.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/onboarding.tsx",
      lineNumber: 180,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "xs" }, void 0, false, {
      fileName: "app/routes/_auth+/onboarding.tsx",
      lineNumber: 186,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "mx-auto min-w-full max-w-sm sm:min-w-[368px]", method: "POST", ...getFormProps(form), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HoneypotInputs, {}, void 0, false, {
        fileName: "app/routes/_auth+/onboarding.tsx",
        lineNumber: 188,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.username.errors, inputProps: {
        ...getInputProps(fields.username, {
          type: "text"
        }),
        autoComplete: "username",
        className: "lowercase"
      }, labelProps: {
        htmlFor: fields.username.id,
        children: "Username"
      } }, void 0, false, {
        fileName: "app/routes/_auth+/onboarding.tsx",
        lineNumber: 189,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.name.errors, inputProps: {
        ...getInputProps(fields.name, {
          type: "text"
        }),
        autoComplete: "name"
      }, labelProps: {
        htmlFor: fields.name.id,
        children: "Name"
      } }, void 0, false, {
        fileName: "app/routes/_auth+/onboarding.tsx",
        lineNumber: 199,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { errors: fields.password.errors, inputProps: {
        ...getInputProps(fields.password, {
          type: "password"
        }),
        autoComplete: "new-password"
      }, labelProps: {
        htmlFor: fields.password.id,
        children: "Password"
      } }, void 0, false, {
        fileName: "app/routes/_auth+/onboarding.tsx",
        lineNumber: 208,
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
        fileName: "app/routes/_auth+/onboarding.tsx",
        lineNumber: 218,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        CheckboxField,
        {
          buttonProps: getInputProps(fields.agreeToTermsOfServiceAndPrivacyPolicy, {
            type: "checkbox"
          }),
          errors: fields.agreeToTermsOfServiceAndPrivacyPolicy.errors,
          labelProps: {
            htmlFor: fields.agreeToTermsOfServiceAndPrivacyPolicy.id,
            children: "Do you agree to our Terms of Service and Privacy Policy?"
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/_auth+/onboarding.tsx",
          lineNumber: 228,
          columnNumber: 11
        },
        this
      ),
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
          fileName: "app/routes/_auth+/onboarding.tsx",
          lineNumber: 236,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ...getInputProps(fields.redirectTo, {
        type: "hidden"
      }) }, void 0, false, {
        fileName: "app/routes/_auth+/onboarding.tsx",
        lineNumber: 245,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
        fileName: "app/routes/_auth+/onboarding.tsx",
        lineNumber: 248,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full", disabled: isPending, status: isPending ? "pending" : form.status ?? "idle", type: "submit", children: "Create an account" }, void 0, false, {
        fileName: "app/routes/_auth+/onboarding.tsx",
        lineNumber: 251,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth+/onboarding.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth+/onboarding.tsx",
      lineNumber: 187,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth+/onboarding.tsx",
    lineNumber: 179,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth+/onboarding.tsx",
    lineNumber: 178,
    columnNumber: 10
  }, this);
}
_s(SignupRoute, "SbEzVWUNyTwM/qcAIjF6pChQLW8=", false, function() {
  return [useLoaderData, useActionData, useIsPending, useSearchParams, useForm];
});
_c2 = SignupRoute;
var _c;
var _c2;
$RefreshReg$(_c, "SignupFormSchema");
$RefreshReg$(_c2, "SignupRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  meta,
  SignupRoute
};
//# sourceMappingURL=/build/_shared/chunk-2RKPJDBQ.js.map
