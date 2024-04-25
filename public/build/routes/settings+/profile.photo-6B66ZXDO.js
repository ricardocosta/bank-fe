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
  useDoubleCheck,
  useIsPending
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation
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

// app/routes/settings+/profile.photo.tsx
var import_node = __toESM(require_node(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_auth_server = __toESM(require_auth_server(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/settings+/profile.photo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/settings+/profile.photo.tsx"
  );
  import.meta.hot.lastModified = "1713999420043.8076";
}
var handle = {
  breadcrumb: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "avatar", children: "Photo" }, void 0, false, {
    fileName: "app/routes/settings+/profile.photo.tsx",
    lineNumber: 37,
    columnNumber: 15
  })
};
var MAX_SIZE = 1024 * 1024 * 3;
var DeleteImageSchema = z.object({
  intent: z.literal("delete")
});
var NewImageSchema = z.object({
  intent: z.literal("submit"),
  photoFile: z.instanceof(File).refine((file) => file.size > 0, "Image is required").refine((file) => file.size <= MAX_SIZE, "Image size must be less than 3MB")
});
var PhotoFormSchema = z.discriminatedUnion("intent", [DeleteImageSchema, NewImageSchema]);
function PhotoRoute() {
  _s();
  const data = useLoaderData();
  const doubleCheckDeleteImage = useDoubleCheck();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [form, fields] = useForm({
    id: "profile-photo",
    constraint: getZodConstraint(PhotoFormSchema),
    lastResult: actionData?.result,
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: PhotoFormSchema
      });
    },
    shouldRevalidate: "onBlur"
  });
  const isPending = useIsPending();
  const pendingIntent = isPending ? navigation.formData?.get("intent") : null;
  const lastSubmissionIntent = fields.intent.value;
  const [newImageSrc, setNewImageSrc] = (0, import_react3.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "flex flex-col items-center justify-center gap-10", encType: "multipart/form-data", method: "POST", onReset: () => setNewImageSrc(null), ...getFormProps(form), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: data.user?.name ?? data.user?.username, className: "h-52 w-52 rounded-full object-cover", src: newImageSrc ?? (data.user ? getUserImgSrc(data.user.image?.id) : "") }, void 0, false, {
      fileName: "app/routes/settings+/profile.photo.tsx",
      lineNumber: 165,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: fields.photoFile.errors, id: fields.photoFile.id }, void 0, false, {
      fileName: "app/routes/settings+/profile.photo.tsx",
      lineNumber: 166,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ...getInputProps(fields.photoFile, {
        type: "file"
      }), accept: "image/*", className: "peer sr-only", required: true, tabIndex: newImageSrc ? -1 : 0, onChange: (e) => {
        const file = e.currentTarget.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            setNewImageSrc(event.target?.result?.toString() ?? null);
          };
          reader.readAsDataURL(file);
        }
      } }, void 0, false, {
        fileName: "app/routes/settings+/profile.photo.tsx",
        lineNumber: 174,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, className: "cursor-pointer peer-valid:hidden peer-focus-within:ring-4 peer-focus-visible:ring-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: fields.photoFile.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "pencil-1", children: "Change" }, void 0, false, {
        fileName: "app/routes/settings+/profile.photo.tsx",
        lineNumber: 188,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.photo.tsx",
        lineNumber: 187,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.photo.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "peer-invalid:hidden", name: "intent", status: pendingIntent === "submit" ? "pending" : lastSubmissionIntent === "submit" ? form.status ?? "idle" : "idle", type: "submit", value: "submit", children: "Save Photo" }, void 0, false, {
        fileName: "app/routes/settings+/profile.photo.tsx",
        lineNumber: 191,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "peer-invalid:hidden", variant: "destructive", ...form.reset.getButtonProps(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "trash", children: "Reset" }, void 0, false, {
        fileName: "app/routes/settings+/profile.photo.tsx",
        lineNumber: 195,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.photo.tsx",
        lineNumber: 194,
        columnNumber: 11
      }, this),
      data.user.image?.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusButton, { className: "peer-valid:hidden", variant: "destructive", ...doubleCheckDeleteImage.getButtonProps({
        type: "submit",
        name: "intent",
        value: "delete"
      }), status: pendingIntent === "delete" ? "pending" : lastSubmissionIntent === "delete" ? form.status ?? "idle" : "idle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "trash", children: doubleCheckDeleteImage.doubleCheck ? "Are you sure?" : "Delete" }, void 0, false, {
        fileName: "app/routes/settings+/profile.photo.tsx",
        lineNumber: 202,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/settings+/profile.photo.tsx",
        lineNumber: 197,
        columnNumber: 34
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/settings+/profile.photo.tsx",
      lineNumber: 167,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorList, { errors: form.errors }, void 0, false, {
      fileName: "app/routes/settings+/profile.photo.tsx",
      lineNumber: 207,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings+/profile.photo.tsx",
    lineNumber: 164,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/settings+/profile.photo.tsx",
    lineNumber: 163,
    columnNumber: 10
  }, this);
}
_s(PhotoRoute, "iHeSpgIHVoJLphdT2VOeEhrdia8=", false, function() {
  return [useLoaderData, useDoubleCheck, useActionData, useNavigation, useForm, useIsPending];
});
_c = PhotoRoute;
var _c;
$RefreshReg$(_c, "PhotoRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PhotoRoute as default,
  handle
};
//# sourceMappingURL=/build/routes/settings+/profile.photo-6B66ZXDO.js.map
