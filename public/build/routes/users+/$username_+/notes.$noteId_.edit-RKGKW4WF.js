import {
  NoteEditor
} from "/build/_shared/chunk-4SJSUYTD.js";
import "/build/_shared/chunk-2F7Y2TWA.js";
import "/build/_shared/chunk-3SKDAALF.js";
import {
  require_db_server
} from "/build/_shared/chunk-MIH2HEZW.js";
import {
  require_auth_server
} from "/build/_shared/chunk-VR3LBXMU.js";
import "/build/_shared/chunk-T74JPHL5.js";
import "/build/_shared/chunk-MRTMKYB5.js";
import "/build/_shared/chunk-HBRNPUBR.js";
import "/build/_shared/chunk-M7HH4RIF.js";
import "/build/_shared/chunk-HP5C7Y43.js";
import "/build/_shared/chunk-QCQ6MJ2A.js";
import {
  require_node
} from "/build/_shared/chunk-NYZEBVUP.js";
import "/build/_shared/chunk-Z7BBCTBE.js";
import "/build/_shared/chunk-6RG3S7SV.js";
import "/build/_shared/chunk-TLNAOKNL.js";
import "/build/_shared/chunk-JWYSQB4M.js";
import {
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

// app/routes/users+/$username_+/notes.$noteId_.edit.tsx
var import_node = __toESM(require_node(), 1);
var import_auth_server = __toESM(require_auth_server(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/users+/$username_+/notes.$noteId_.edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/users+/$username_+/notes.$noteId_.edit.tsx"
  );
  import.meta.hot.lastModified = "1702826168518.6292";
}
function NoteEdit() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NoteEditor, { note: data.note }, void 0, false, {
    fileName: "app/routes/users+/$username_+/notes.$noteId_.edit.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s(NoteEdit, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = NoteEdit;
var _c;
$RefreshReg$(_c, "NoteEdit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NoteEdit as default
};
//# sourceMappingURL=/build/routes/users+/$username_+/notes.$noteId_.edit-RKGKW4WF.js.map
