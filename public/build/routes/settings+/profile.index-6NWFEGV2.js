import {
  require_session_server
} from "/build/_shared/chunk-N5ISZQL4.js";
import {
  require_toast_server
} from "/build/_shared/chunk-33VL4BOR.js";
import {
  NameSchema,
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
import {
  Button
} from "/build/_shared/chunk-6RG3S7SV.js";
import {
  Icon
} from "/build/_shared/chunk-TLNAOKNL.js";
import {
  getUserImgSrc,
  useDoubleCheck
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Link,
  useFetcher,
  useLoaderData
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

// app/routes/settings+/profile.index.tsx
var import_node = __toESM(require_node(), 1);
var import_auth_server = __toESM(require_auth_server(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_session_server = __toESM(require_session_server(), 1);
var import_toast_server = __toESM(require_toast_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/settings+/profile.index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/settings+/profile.index.tsx"
  );
  import.meta.hot.lastModified = "1713999832458.359";
}
var ProfileFormSchema = z.object({
  name: NameSchema.optional(),
  username: UsernameSchema
});
var profileUpdateActionIntent = "update-profile";
var signOutOfSessionsActionIntent = "sign-out-of-sessions";
var deleteDataActionIntent = "delete-data";
function EditUserProfile() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative h-52 w-52", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: data.user.username, className: "h-full w-full rounded-full object-cover", src: getUserImgSrc(data.user.image?.id) }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, className: "absolute -right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full p-0", variant: "outline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { "aria-label": "Change profile photo", preventScrollReset: true, title: "Change profile photo", to: "photo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-4 w-4", name: "camera" }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 140,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings+/profile.index.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/settings+/profile.index.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateProfile, {}, void 0, false, {
      fileName: "app/routes/settings+/profile.index.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-6 my-6 h-1 border-b-[1.5px] border-foreground" }, void 0, false, {
      fileName: "app/routes/settings+/profile.index.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full flex flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "change-email", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "envelope-closed", children: [
        "Change email from ",
        data.user.email
      ] }, void 0, true, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: data.hasPassword ? "password" : "password/create", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "dots-horizontal", children: data.hasPassword ? "Change Password" : "Create a Password" }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { download: "my-epic-notes-data.json", reloadDocument: true, to: "/resources/download-user-data", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "download", children: "Download your data" }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 164,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignOutOfSessions, {}, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteData, {}, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings+/profile.index.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings+/profile.index.tsx",
    lineNumber: 134,
    columnNumber: 10
  }, this);
}
_s(EditUserProfile, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = EditUserProfile;
function UpdateProfile() {
  _s2();
  const data = useLoaderData();
  const fetcher = useFetcher();
  const [form, fields] = useForm({
    id: "edit-profile",
    constraint: getZodConstraint(ProfileFormSchema),
    lastResult: fetcher.data?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: ProfileFormSchema
      });
    },
    defaultValue: {
      username: data.user.username,
      name: data.user.name ?? ""
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "POST", ...getFormProps(form), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-6 gap-x-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { className: "col-span-3", errors: fields.username.errors, inputProps: getInputProps(fields.username, {
        type: "text"
      }), labelProps: {
        htmlFor: fields.username.id,
        children: "Username"
      } }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { className: "col-span-3", errors: fields.name.errors, inputProps: getInputProps(fields.name, {
        type: "text"
      }), labelProps: {
        htmlFor: fields.name.id,
        children: "Name"
      } }, void 0, false, {
        fileName: "app/routes/settings+/profile.index.tsx",
        lineNumber: 255,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings+/profile.index.tsx",
      lineNumber: 248,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
      fileName: "app/routes/settings+/profile.index.tsx",
      lineNumber: 263,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { name: "intent", size: "wide", status: fetcher.state !== "idle" ? "pending" : form.status ?? "idle", type: "submit", value: profileUpdateActionIntent, children: "Save changes" }, void 0, false, {
      fileName: "app/routes/settings+/profile.index.tsx",
      lineNumber: 266,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/settings+/profile.index.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings+/profile.index.tsx",
    lineNumber: 247,
    columnNumber: 10
  }, this);
}
_s2(UpdateProfile, "UzvSjeKCTDMHQRJe2illLbG0AqY=", false, function() {
  return [useLoaderData, useFetcher, useForm];
});
_c2 = UpdateProfile;
function SignOutOfSessions() {
  _s3();
  const data = useLoaderData();
  const dc = useDoubleCheck();
  const fetcher = useFetcher();
  const otherSessionsCount = data.user._count.sessions - 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: otherSessionsCount ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { ...dc.getButtonProps({
    type: "submit",
    name: "intent",
    value: signOutOfSessionsActionIntent
  }), status: fetcher.state !== "idle" ? "pending" : fetcher.data?.status ?? "idle", variant: dc.doubleCheck ? "destructive" : "default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "avatar", children: dc.doubleCheck ? `Are you sure?` : `Sign out of ${otherSessionsCount} other sessions` }, void 0, false, {
    fileName: "app/routes/settings+/profile.index.tsx",
    lineNumber: 308,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/settings+/profile.index.tsx",
    lineNumber: 303,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/settings+/profile.index.tsx",
    lineNumber: 302,
    columnNumber: 29
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "avatar", children: "This is your only session" }, void 0, false, {
    fileName: "app/routes/settings+/profile.index.tsx",
    lineNumber: 312,
    columnNumber: 27
  }, this) }, void 0, false, {
    fileName: "app/routes/settings+/profile.index.tsx",
    lineNumber: 301,
    columnNumber: 10
  }, this);
}
_s3(SignOutOfSessions, "vGqH5veF3P6z3W7E3D5vXZ17b98=", false, function() {
  return [useLoaderData, useDoubleCheck, useFetcher];
});
_c3 = SignOutOfSessions;
function DeleteData() {
  _s4();
  const dc = useDoubleCheck();
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { ...dc.getButtonProps({
    type: "submit",
    name: "intent",
    value: deleteDataActionIntent
  }), status: fetcher.state !== "idle" ? "pending" : "idle", variant: dc.doubleCheck ? "destructive" : "default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "trash", children: dc.doubleCheck ? `Are you sure?` : `Delete all your data` }, void 0, false, {
    fileName: "app/routes/settings+/profile.index.tsx",
    lineNumber: 344,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/settings+/profile.index.tsx",
    lineNumber: 339,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/settings+/profile.index.tsx",
    lineNumber: 338,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/settings+/profile.index.tsx",
    lineNumber: 337,
    columnNumber: 10
  }, this);
}
_s4(DeleteData, "vnFydE1DKgFCQD1o3M4b69zjfoU=", false, function() {
  return [useDoubleCheck, useFetcher];
});
_c4 = DeleteData;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "EditUserProfile");
$RefreshReg$(_c2, "UpdateProfile");
$RefreshReg$(_c3, "SignOutOfSessions");
$RefreshReg$(_c4, "DeleteData");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditUserProfile as default
};
//# sourceMappingURL=/build/routes/settings+/profile.index-6NWFEGV2.js.map
