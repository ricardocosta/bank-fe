import {
  require_db
} from "/build/_shared/chunk-DF3U53QA.js";
import {
  useOptionalUser
} from "/build/_shared/chunk-Z5YS2INQ.js";
import {
  Spacer
} from "/build/_shared/chunk-BZYNIG4G.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-3SKDAALF.js";
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
  getUserImgSrc
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Form,
  Link,
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

// app/routes/users+/$username.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/users+/$username.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/users+/$username.tsx"
  );
  import.meta.hot.lastModified = "1702826168518.1807";
}
function ProfileRoute() {
  _s();
  const data = useLoaderData();
  const user = data.user;
  const userDisplayName = user.name ?? user.username;
  const loggedInUser = useOptionalUser();
  const isLoggedInUser = data.user.id === loggedInUser?.id;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mb-48 mt-36 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "4xs" }, void 0, false, {
      fileName: "app/routes/users+/$username.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container flex flex-col items-center rounded-3xl bg-muted p-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-52", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: userDisplayName, className: "h-52 w-52 rounded-full object-cover", src: getUserImgSrc(data.user.image?.id) }, void 0, false, {
        fileName: "app/routes/users+/$username.tsx",
        lineNumber: 73,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/users+/$username.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/users+/$username.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/users+/$username.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "sm" }, void 0, false, {
        fileName: "app/routes/users+/$username.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-h2", children: userDisplayName }, void 0, false, {
          fileName: "app/routes/users+/$username.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/users+/$username.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-muted-foreground", children: [
          "Joined ",
          data.userJoinedDisplay
        ] }, void 0, true, {
          fileName: "app/routes/users+/$username.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        isLoggedInUser ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/logout", className: "mt-3", method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "pill", type: "submit", variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "scale-125 max-md:scale-150", name: "exit", children: "Logout" }, void 0, false, {
          fileName: "app/routes/users+/$username.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/users+/$username.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/users+/$username.tsx",
          lineNumber: 87,
          columnNumber: 29
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 flex gap-4", children: isLoggedInUser ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: "notes", children: "My notes" }, void 0, false, {
            fileName: "app/routes/users+/$username.tsx",
            lineNumber: 97,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/users+/$username.tsx",
            lineNumber: 96,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: "/settings/profile", children: "Edit profile" }, void 0, false, {
            fileName: "app/routes/users+/$username.tsx",
            lineNumber: 102,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/users+/$username.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/users+/$username.tsx",
          lineNumber: 95,
          columnNumber: 31
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: "notes", children: `${userDisplayName}'s notes` }, void 0, false, {
          fileName: "app/routes/users+/$username.tsx",
          lineNumber: 107,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/users+/$username.tsx",
          lineNumber: 106,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/users+/$username.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/users+/$username.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/users+/$username.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/users+/$username.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s(ProfileRoute, "WemrhwYXdIHkPFxNeqgcvBbQjZE=", false, function() {
  return [useLoaderData, useOptionalUser];
});
_c = ProfileRoute;
var meta = ({
  data,
  params
}) => {
  const displayName = data?.user.name ?? params.username;
  return [{
    title: `${displayName} | Epic Notes`
  }, {
    name: "description",
    content: `Profile of ${displayName} on Epic Notes`
  }];
};
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, { statusHandlers: {
    404: ({
      params
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: `No user with the username "${params.username}" exists` }, void 0, false, {
      fileName: "app/routes/users+/$username.tsx",
      lineNumber: 136,
      columnNumber: 11
    }, this)
  } }, void 0, false, {
    fileName: "app/routes/users+/$username.tsx",
    lineNumber: 133,
    columnNumber: 10
  }, this);
}
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "ProfileRoute");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  ProfileRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/users+/$username-CQ5B7GCW.js.map
