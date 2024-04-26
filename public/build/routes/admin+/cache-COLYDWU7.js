import {
  Spacer
} from "/build/_shared/chunk-BZYNIG4G.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-3SKDAALF.js";
import {
  Field
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
  useDebounce,
  useDoubleCheck
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useSearchParams,
  useSubmit
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-LTRR4HZE.js";

// empty-module:#app/utils/cache.server.ts
var require_cache_server = __commonJS({
  "empty-module:#app/utils/cache.server.ts"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// empty-module:#app/utils/permissions.server.ts
var require_permissions_server = __commonJS({
  "empty-module:#app/utils/permissions.server.ts"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// app/routes/admin+/cache.tsx
var import_node = __toESM(require_node(), 1);
var import_cache_server = __toESM(require_cache_server(), 1);
var import_permissions_server = __toESM(require_permissions_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin+/cache.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin+/cache.tsx"
  );
  import.meta.hot.lastModified = "1713997504007.55";
}
function CacheAdminRoute() {
  _s();
  const data = useLoaderData();
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const query = searchParams.get("query") ?? "";
  const limit = searchParams.get("limit") ?? "100";
  const handleFormChange = useDebounce((form) => {
    submit(form);
  }, 400);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-h1", children: "Cache Admin" }, void 0, false, {
      fileName: "app/routes/admin+/cache.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "2xs" }, void 0, false, {
      fileName: "app/routes/admin+/cache.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "flex flex-col gap-4", method: "get", onChange: (e) => handleFormChange(e.currentTarget), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "flex h-16 items-center justify-center", type: "submit", children: "\u{1F50E}" }, void 0, false, {
          fileName: "app/routes/admin+/cache.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { className: "flex-1", inputProps: {
          type: "search",
          name: "query",
          defaultValue: query
        }, labelProps: {
          children: "Search"
        } }, void 0, false, {
          fileName: "app/routes/admin+/cache.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-16 w-14 items-center text-lg font-medium text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { title: "Total results shown", children: data.cacheKeys.sqlite.length + data.cacheKeys.lru.length }, void 0, false, {
          fileName: "app/routes/admin+/cache.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin+/cache.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin+/cache.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/admin+/cache.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { inputProps: {
        name: "limit",
        defaultValue: limit,
        type: "number",
        step: "1",
        min: "1",
        max: "10000",
        placeholder: "results limit"
      }, labelProps: {
        children: "Limit"
      } }, void 0, false, {
        fileName: "app/routes/admin+/cache.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/admin+/cache.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin+/cache.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "2xs" }, void 0, false, {
      fileName: "app/routes/admin+/cache.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-h2", children: "LRU Cache:" }, void 0, false, {
        fileName: "app/routes/admin+/cache.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      data.cacheKeys.lru.map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheKeyRow, { cacheKey: key, type: "lru" }, key, false, {
        fileName: "app/routes/admin+/cache.tsx",
        lineNumber: 133,
        columnNumber: 40
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/admin+/cache.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "3xs" }, void 0, false, {
      fileName: "app/routes/admin+/cache.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-h2", children: "SQLite Cache:" }, void 0, false, {
        fileName: "app/routes/admin+/cache.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      data.cacheKeys.sqlite.map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheKeyRow, { cacheKey: key, type: "sqlite" }, key, false, {
        fileName: "app/routes/admin+/cache.tsx",
        lineNumber: 138,
        columnNumber: 43
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/admin+/cache.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin+/cache.tsx",
    lineNumber: 93,
    columnNumber: 10
  }, this);
}
_s(CacheAdminRoute, "z/M+YsFfBOrSgQCYrdUVeFTlOpA=", false, function() {
  return [useLoaderData, useSearchParams, useSubmit, useDebounce];
});
_c = CacheAdminRoute;
function CacheKeyRow({
  cacheKey,
  type
}) {
  _s2();
  const fetcher = useFetcher();
  const dc = useDoubleCheck();
  const encodedKey = encodeURIComponent(cacheKey);
  const valuePage = `/admin/cache/${type}/${encodedKey}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 font-mono", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "cacheKey", type: "hidden", value: cacheKey }, void 0, false, {
        fileName: "app/routes/admin+/cache.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "type", type: "hidden", value: type }, void 0, false, {
        fileName: "app/routes/admin+/cache.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "sm", variant: "secondary", ...dc.getButtonProps({
        type: "submit"
      }), children: fetcher.state === "idle" ? dc.doubleCheck ? "You sure?" : "Delete" : "Deleting..." }, void 0, false, {
        fileName: "app/routes/admin+/cache.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin+/cache.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { reloadDocument: true, to: valuePage, children: cacheKey }, void 0, false, {
      fileName: "app/routes/admin+/cache.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin+/cache.tsx",
    lineNumber: 155,
    columnNumber: 10
  }, this);
}
_s2(CacheKeyRow, "tH208MjkdZi2owGp90tZwDJICNw=", false, function() {
  return [useFetcher, useDoubleCheck];
});
_c2 = CacheKeyRow;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, { statusHandlers: {
    403: ({
      error
    }) => (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "You are not allowed to do that: ",
        error?.data.message
      ] }, void 0, true, {
        fileName: "app/routes/admin+/cache.tsx",
        lineNumber: 180,
        columnNumber: 5
      }, this)
    )
  } }, void 0, false, {
    fileName: "app/routes/admin+/cache.tsx",
    lineNumber: 175,
    columnNumber: 10
  }, this);
}
_c3 = ErrorBoundary;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "CacheAdminRoute");
$RefreshReg$(_c2, "CacheKeyRow");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  CacheAdminRoute as default
};
//# sourceMappingURL=/build/routes/admin+/cache-COLYDWU7.js.map
