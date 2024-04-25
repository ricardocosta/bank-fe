import {
  require_db
} from "/build/_shared/chunk-DF3U53QA.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-3SKDAALF.js";
import {
  StatusButton
} from "/build/_shared/chunk-T74JPHL5.js";
import "/build/_shared/chunk-HBRNPUBR.js";
import {
  z
} from "/build/_shared/chunk-M7HH4RIF.js";
import {
  ErrorList,
  Input,
  Label
} from "/build/_shared/chunk-HP5C7Y43.js";
import "/build/_shared/chunk-QCQ6MJ2A.js";
import {
  require_node
} from "/build/_shared/chunk-NYZEBVUP.js";
import "/build/_shared/chunk-6RG3S7SV.js";
import {
  Icon
} from "/build/_shared/chunk-TLNAOKNL.js";
import {
  cn,
  getUserImgSrc,
  useDebounce,
  useDelayedIsPending,
  useIsPending
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Form,
  Link,
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
import {
  require_react
} from "/build/_shared/chunk-Y27R3AJV.js";
import "/build/_shared/chunk-UCS323OI.js";
import {
  __toESM
} from "/build/_shared/chunk-LTRR4HZE.js";

// app/routes/admin+/users.tsx
var import_node = __toESM(require_node(), 1);

// app/components/search-bar.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/search-bar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/search-bar.tsx"
  );
  import.meta.hot.lastModified = "1713736572363.7344";
}
function SearchBar({
  status,
  autoFocus = false,
  autoSubmit = false
}) {
  _s();
  const id = (0, import_react2.useId)();
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const isSubmitting = useIsPending({
    formMethod: "GET",
    formAction: "/users"
  });
  const handleFormChange = useDebounce((form) => {
    submit(form);
  }, 400);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/users", className: "flex flex-wrap items-center justify-center gap-2", method: "GET", onChange: (e) => autoSubmit && handleFormChange(e.currentTarget), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "sr-only", htmlFor: id, children: "Search" }, void 0, false, {
        fileName: "app/components/search-bar.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Input,
        {
          autoFocus,
          className: "w-full",
          defaultValue: searchParams.get("search") ?? "",
          id,
          name: "search",
          placeholder: "Search",
          type: "search"
        },
        void 0,
        false,
        {
          fileName: "app/components/search-bar.tsx",
          lineNumber: 50,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/search-bar.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "flex w-full items-center justify-center", status: isSubmitting ? "pending" : status, type: "submit", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "magnifying-glass" }, void 0, false, {
        fileName: "app/components/search-bar.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Search" }, void 0, false, {
        fileName: "app/components/search-bar.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/search-bar.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/search-bar.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/search-bar.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(SearchBar, "67w/u/H51SOczxnmNINjhY9bY4o=", false, function() {
  return [import_react2.useId, useSearchParams, useSubmit, useIsPending, useDebounce];
});
_c = SearchBar;
var _c;
$RefreshReg$(_c, "SearchBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin+/users.tsx
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin+/users.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin+/users.tsx"
  );
  import.meta.hot.lastModified = "1704639630681.535";
}
var UserSearchResultSchema = z.object({
  id: z.string(),
  username: z.string(),
  name: z.string().nullable(),
  imageId: z.string().nullable()
});
var UserSearchResultsSchema = z.array(UserSearchResultSchema);
_c2 = UserSearchResultsSchema;
function UsersRoute() {
  _s2();
  const data = useLoaderData();
  const isPending = useDelayedIsPending({
    formMethod: "GET",
    formAction: "/users"
  });
  if (data.status === "error") {
    console.error(data.error);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mb-48 mt-36 flex flex-col items-center justify-center gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-h1", children: "Epic Notes Users" }, void 0, false, {
      fileName: "app/routes/admin+/users.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-[700px] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchBar, { autoSubmit: true, status: data.status }, void 0, false, {
      fileName: "app/routes/admin+/users.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin+/users.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: data.status === "idle" ? data.users.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: cn("flex w-full flex-wrap items-center justify-center gap-4 delay-200", {
      "opacity-50": isPending
    }), children: data.users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "flex h-36 w-44 flex-col items-center justify-center rounded-lg bg-muted px-5 py-3", to: user.username, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { alt: user.name ?? user.username, className: "h-16 w-16 rounded-full", src: getUserImgSrc(user.imageId) }, void 0, false, {
        fileName: "app/routes/admin+/users.tsx",
        lineNumber: 96,
        columnNumber: 21
      }, this),
      user.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "w-full truncate text-center text-body-md", children: user.name }, void 0, false, {
        fileName: "app/routes/admin+/users.tsx",
        lineNumber: 97,
        columnNumber: 34
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "w-full overflow-hidden text-ellipsis text-center text-body-sm text-muted-foreground", children: user.username }, void 0, false, {
        fileName: "app/routes/admin+/users.tsx",
        lineNumber: 100,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin+/users.tsx",
      lineNumber: 95,
      columnNumber: 19
    }, this) }, user.id, false, {
      fileName: "app/routes/admin+/users.tsx",
      lineNumber: 94,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/admin+/users.tsx",
      lineNumber: 91,
      columnNumber: 55
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "No users found" }, void 0, false, {
      fileName: "app/routes/admin+/users.tsx",
      lineNumber: 105,
      columnNumber: 21
    }, this) : data.status === "error" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorList, { errors: ["There was an error parsing the results"] }, void 0, false, {
      fileName: "app/routes/admin+/users.tsx",
      lineNumber: 105,
      columnNumber: 71
    }, this) : null }, void 0, false, {
      fileName: "app/routes/admin+/users.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin+/users.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
}
_s2(UsersRoute, "X4KRWZR4FN6itrOq+aVkJ8n94s8=", false, function() {
  return [useLoaderData, useDelayedIsPending];
});
_c22 = UsersRoute;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GeneralErrorBoundary, {}, void 0, false, {
    fileName: "app/routes/admin+/users.tsx",
    lineNumber: 114,
    columnNumber: 10
  }, this);
}
_c3 = ErrorBoundary;
var _c2;
var _c22;
var _c3;
$RefreshReg$(_c2, "UserSearchResultsSchema");
$RefreshReg$(_c22, "UsersRoute");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  UsersRoute as default
};
//# sourceMappingURL=/build/routes/admin+/users-LXQVKYMV.js.map
