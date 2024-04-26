import {
  floatingToolbarClassName
} from "/build/_shared/chunk-2F7Y2TWA.js";
import {
  useOptionalUser,
  userHasPermission
} from "/build/_shared/chunk-Z5YS2INQ.js";
import {
  require_toast_server
} from "/build/_shared/chunk-33VL4BOR.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-3SKDAALF.js";
import {
  require_db_server
} from "/build/_shared/chunk-MIH2HEZW.js";
import {
  require_auth_server
} from "/build/_shared/chunk-VR3LBXMU.js";
import {
  StatusButton
} from "/build/_shared/chunk-T74JPHL5.js";
import "/build/_shared/chunk-MRTMKYB5.js";
import "/build/_shared/chunk-HBRNPUBR.js";
import {
  z
} from "/build/_shared/chunk-M7HH4RIF.js";
import {
  ErrorList,
  getFormProps,
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
  getNoteImgSrc,
  useIsPending
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Form,
  Link,
  useActionData,
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

// app/routes/users+/$username_+/notes.$noteId.tsx
var import_node = __toESM(require_node(), 1);
var import_auth_server = __toESM(require_auth_server(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_toast_server = __toESM(require_toast_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/users+/$username_+/notes.$noteId.tsx"' + id);
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
    "app/routes/users+/$username_+/notes.$noteId.tsx"
  );
  import.meta.hot.lastModified = "1713998134454.548";
}
var DeleteFormSchema = z.object({
  intent: z.literal("delete-note"),
  noteId: z.string()
});
function NoteRoute() {
  _s();
  const data = useLoaderData();
  const user = useOptionalUser();
  const isOwner = user?.id === data.note.ownerId;
  const canDelete = userHasPermission(user, isOwner ? `delete:note:own` : `delete:note:any`);
  const displayBar = canDelete || isOwner;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col px-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-2 pt-12 text-h2 lg:mb-6", children: data.note.title }, void 0, false, {
      fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${displayBar ? "pb-24" : "pb-12"} overflow-y-auto`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-wrap gap-5 py-5", children: data.note.images.map((image) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: getNoteImgSrc(image.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: image.altText ?? "", className: "h-32 w-32 rounded-lg object-cover", src: getNoteImgSrc(image.id) }, void 0, false, {
        fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
        lineNumber: 138,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
        lineNumber: 137,
        columnNumber: 15
      }, this) }, image.id, false, {
        fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
        lineNumber: 136,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "whitespace-break-spaces text-sm md:text-lg", children: data.note.content }, void 0, false, {
        fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    displayBar ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: floatingToolbarClassName, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/90 max-[524px]:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "scale-125", name: "clock", children: [
        data.timeAgo,
        " ago"
      ] }, void 0, true, {
        fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
        lineNumber: 148,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid flex-1 grid-cols-2 justify-end gap-2 min-[525px]:flex md:gap-4", children: [
        canDelete ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteNote, { id: data.note.id }, void 0, false, {
          fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
          lineNumber: 153,
          columnNumber: 26
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, className: "min-[525px]:max-md:aspect-square min-[525px]:max-md:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "scale-125 max-md:scale-150", name: "pencil-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-md:hidden", children: "Edit" }, void 0, false, {
          fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
          lineNumber: 157,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
          lineNumber: 156,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
          lineNumber: 155,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
      lineNumber: 146,
      columnNumber: 21
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_s(NoteRoute, "DervCVTA0wfLFPjif2ltFzo3whQ=", false, function() {
  return [useLoaderData, useOptionalUser];
});
_c = NoteRoute;
function DeleteNote({
  id
}) {
  _s2();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [form] = useForm({
    id: "delete-note",
    lastResult: actionData?.result
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", ...getFormProps(form), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "noteId", type: "hidden", value: id }, void 0, false, {
      fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "w-full max-md:aspect-square max-md:px-0", disabled: isPending, name: "intent", status: isPending ? "pending" : form.status ?? "idle", type: "submit", value: "delete-note", variant: "destructive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "scale-125 max-md:scale-150", name: "trash", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-md:hidden", children: "Delete" }, void 0, false, {
      fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
      lineNumber: 183,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
      lineNumber: 182,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
      fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
    lineNumber: 179,
    columnNumber: 10
  }, this);
}
_s2(DeleteNote, "G+LY8oKPtG3PTaudrP2QM73mqkI=", false, function() {
  return [useActionData, useIsPending, useForm];
});
_c2 = DeleteNote;
var meta = ({
  data,
  params,
  matches
}) => {
  const notesMatch = matches.find((m) => m.id === "routes/users+/$username_+/notes");
  const displayName = notesMatch?.data?.owner.name ?? params.username;
  const noteTitle = data?.note.title ?? "Note";
  const noteContentsSummary = data && data.note.content.length > 100 ? data?.note.content.slice(0, 97) + "..." : "No content";
  return [{
    title: `${noteTitle} | ${displayName}'s Notes | Epic Notes`
  }, {
    name: "description",
    content: noteContentsSummary
  }];
};
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GeneralErrorBoundary, { statusHandlers: {
    403: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You are not allowed to do that" }, void 0, false, {
      fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
      lineNumber: 211,
      columnNumber: 16
    }, this),
    404: ({
      params
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: `No note with the id "${params.noteId}" exists` }, void 0, false, {
      fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
      lineNumber: 214,
      columnNumber: 11
    }, this)
  } }, void 0, false, {
    fileName: "app/routes/users+/$username_+/notes.$noteId.tsx",
    lineNumber: 210,
    columnNumber: 10
  }, this);
}
_c3 = ErrorBoundary;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "NoteRoute");
$RefreshReg$(_c2, "DeleteNote");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  NoteRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/users+/$username_+/notes.$noteId-6BRXQW2G.js.map
