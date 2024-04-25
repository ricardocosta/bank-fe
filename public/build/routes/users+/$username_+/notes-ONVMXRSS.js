import {
  require_db
} from "/build/_shared/chunk-DF3U53QA.js";
import {
  useOptionalUser
} from "/build/_shared/chunk-Z5YS2INQ.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-3SKDAALF.js";
import {
  require_node
} from "/build/_shared/chunk-NYZEBVUP.js";
import "/build/_shared/chunk-Z7BBCTBE.js";
import {
  Icon
} from "/build/_shared/chunk-TLNAOKNL.js";
import {
  cn,
  getUserImgSrc
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Link,
  NavLink,
  Outlet,
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

// app/routes/users+/$username_+/notes.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/users+/$username_+/notes.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/users+/$username_+/notes.tsx"
  );
  import.meta.hot.lastModified = "1704107060429.2842";
}
function NotesRoute() {
  _s();
  const data = useLoaderData();
  const user = useOptionalUser();
  const isOwner = user?.id === data.owner.id;
  const ownerDisplayName = data.owner.name ?? data.owner.username;
  const navLinkDefaultClassName = "line-clamp-2 block rounded-l-full py-2 pl-8 pr-6 text-base lg:text-xl";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "container flex h-full min-h-[400px] px-0 pb-12 md:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid w-full grid-cols-4 bg-muted pl-2 md:container md:mx-2 md:rounded-3xl md:pr-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "flex flex-col items-center justify-center gap-2 bg-muted pb-4 pl-8 pr-4 pt-12 lg:flex-row lg:justify-start lg:gap-4", to: `/users/${data.owner.username}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: ownerDisplayName, className: "h-16 w-16 rounded-full object-cover lg:h-24 lg:w-24", src: getUserImgSrc(data.owner.image?.id) }, void 0, false, {
          fileName: "app/routes/users+/$username_+/notes.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-base font-bold md:text-lg lg:text-left lg:text-2xl", children: `${ownerDisplayName}'s Notes` }, void 0, false, {
          fileName: "app/routes/users+/$username_+/notes.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/users+/$username_+/notes.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "overflow-y-auto overflow-x-hidden pb-12", children: [
        isOwner ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-1 pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: ({
          isActive
        }) => cn(navLinkDefaultClassName, isActive && "bg-accent"), to: "new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "plus", children: "New Note" }, void 0, false, {
          fileName: "app/routes/users+/$username_+/notes.tsx",
          lineNumber: 83,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/users+/$username_+/notes.tsx",
          lineNumber: 80,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/users+/$username_+/notes.tsx",
          lineNumber: 79,
          columnNumber: 26
        }, this) : null,
        data.owner.notes.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "p-1 pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: ({
          isActive
        }) => cn(navLinkDefaultClassName, isActive && "bg-accent"), prefetch: "intent", preventScrollReset: true, to: note.id, children: note.title }, void 0, false, {
          fileName: "app/routes/users+/$username_+/notes.tsx",
          lineNumber: 87,
          columnNumber: 19
        }, this) }, note.id, false, {
          fileName: "app/routes/users+/$username_+/notes.tsx",
          lineNumber: 86,
          columnNumber: 45
        }, this))
      ] }, void 0, true, {
        fileName: "app/routes/users+/$username_+/notes.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/users+/$username_+/notes.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/users+/$username_+/notes.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative col-span-3 bg-accent md:rounded-r-3xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/users+/$username_+/notes.tsx",
      lineNumber: 97,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/users+/$username_+/notes.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/users+/$username_+/notes.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/users+/$username_+/notes.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(NotesRoute, "DervCVTA0wfLFPjif2ltFzo3whQ=", false, function() {
  return [useLoaderData, useOptionalUser];
});
_c = NotesRoute;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, { statusHandlers: {
    404: ({
      params
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: `No user with the username "${params.username}" exists` }, void 0, false, {
      fileName: "app/routes/users+/$username_+/notes.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this)
  } }, void 0, false, {
    fileName: "app/routes/users+/$username_+/notes.tsx",
    lineNumber: 107,
    columnNumber: 10
  }, this);
}
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "NotesRoute");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  NotesRoute as default
};
//# sourceMappingURL=/build/routes/users+/$username_+/notes-ONVMXRSS.js.map
