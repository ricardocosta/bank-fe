import {
  require_db
} from "/build/_shared/chunk-DF3U53QA.js";
import {
  useUser
} from "/build/_shared/chunk-Z5YS2INQ.js";
import {
  Spacer
} from "/build/_shared/chunk-BZYNIG4G.js";
import {
  require_auth_server
} from "/build/_shared/chunk-VR3LBXMU.js";
import {
  z
} from "/build/_shared/chunk-M7HH4RIF.js";
import {
  require_node
} from "/build/_shared/chunk-NYZEBVUP.js";
import "/build/_shared/chunk-Z7BBCTBE.js";
import {
  Icon
} from "/build/_shared/chunk-TLNAOKNL.js";
import {
  cn
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Link,
  Outlet,
  useMatches
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

// app/routes/settings+/profile.tsx
var import_node = __toESM(require_node(), 1);
var import_auth_server = __toESM(require_auth_server(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/settings+/profile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/settings+/profile.tsx"
  );
  import.meta.hot.lastModified = "1702826676318.0107";
}
var BreadcrumbHandle = z.object({
  breadcrumb: z.any()
});
var handle = {
  breadcrumb: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "file-text", children: "Edit Profile" }, void 0, false, {
    fileName: "app/routes/settings+/profile.tsx",
    lineNumber: 36,
    columnNumber: 15
  })
};
var BreadcrumbHandleMatch = z.object({
  handle: BreadcrumbHandle
});
function EditUserProfile() {
  _s();
  const user = useUser();
  const matches = useMatches();
  const breadcrumbs = matches.map((m) => {
    const result = BreadcrumbHandleMatch.safeParse(m);
    if (!result.success || !result.data.handle.breadcrumb) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "flex items-center", to: m.pathname, children: result.data.handle.breadcrumb }, m.id, false, {
      fileName: "app/routes/settings+/profile.tsx",
      lineNumber: 67,
      columnNumber: 12
    }, this);
  }).filter(Boolean);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-auto mb-24 mt-16 max-w-3xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-muted-foreground", to: `/users/${user.username}`, children: "Profile" }, void 0, false, {
        fileName: "app/routes/settings+/profile.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      breadcrumbs.map((breadcrumb, i, arr) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: cn("flex items-center gap-3", {
        "text-muted-foreground": i < arr.length - 1
      }), children: [
        "\u25B6\uFE0F ",
        breadcrumb
      ] }, breadcrumb.key, true, {
        fileName: "app/routes/settings+/profile.tsx",
        lineNumber: 79,
        columnNumber: 52
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/settings+/profile.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/settings+/profile.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "xs" }, void 0, false, {
      fileName: "app/routes/settings+/profile.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "mx-auto bg-muted px-6 py-8 md:container md:rounded-3xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/settings+/profile.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/settings+/profile.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings+/profile.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_s(EditUserProfile, "ekXneKo9PG5ARIKFSJ8/gAy3lOA=", false, function() {
  return [useUser, useMatches];
});
_c = EditUserProfile;
var _c;
$RefreshReg$(_c, "EditUserProfile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditUserProfile as default,
  handle
};
//# sourceMappingURL=/build/routes/settings+/profile-QCLF2NEC.js.map
