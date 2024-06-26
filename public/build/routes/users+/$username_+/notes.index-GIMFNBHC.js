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

// app/routes/users+/$username_+/notes.index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/users+/$username_+/notes.index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/users+/$username_+/notes.index.tsx"
  );
  import.meta.hot.lastModified = "1704106869872.0435";
}
function NotesIndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container pt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-body-md", children: "Select a note" }, void 0, false, {
    fileName: "app/routes/users+/$username_+/notes.index.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/users+/$username_+/notes.index.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = NotesIndexRoute;
var meta = ({
  params,
  matches
}) => {
  const notesMatch = matches.find((m) => m.id === "routes/users+/$username_+/notes");
  const displayName = notesMatch?.data?.owner.name ?? params.username;
  const noteCount = notesMatch?.data?.owner.notes.length ?? 0;
  const notesText = noteCount === 1 ? "note" : "notes";
  return [{
    title: `${displayName}'s Notes | Epic Notes`
  }, {
    name: "description",
    content: `Checkout ${displayName}'s ${noteCount} ${notesText} on Epic Notes`
  }];
};
var _c;
$RefreshReg$(_c, "NotesIndexRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NotesIndexRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/users+/$username_+/notes.index-GIMFNBHC.js.map
