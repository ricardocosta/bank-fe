import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "/build/_shared/chunk-HBRNPUBR.js";
import {
  Button
} from "/build/_shared/chunk-6RG3S7SV.js";
import {
  Icon
} from "/build/_shared/chunk-TLNAOKNL.js";
import {
  cn,
  require_dist
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  createHotContext
} from "/build/_shared/chunk-P3T3SZIS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XHN5H2T4.js";
import {
  require_react
} from "/build/_shared/chunk-Y27R3AJV.js";
import {
  __toESM
} from "/build/_shared/chunk-LTRR4HZE.js";

// app/components/ui/status-button.tsx
var React = __toESM(require_react(), 1);
var import_spin_delay = __toESM(require_dist(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/status-button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/status-button.tsx"
  );
  import.meta.hot.lastModified = "1713392235802.7297";
}
var StatusButton = _s(React.forwardRef(_c = _s(({
  message,
  status,
  className,
  children,
  spinDelay,
  ...props
}, ref) => {
  _s();
  const delayedPending = (0, import_spin_delay.useSpinDelay)(status === "pending", {
    delay: 400,
    minDuration: 300,
    ...spinDelay
  });
  const companion = {
    pending: delayedPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "animate-spin", name: "update" }, void 0, false, {
      fileName: "app/components/ui/status-button.tsx",
      lineNumber: 44,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "app/components/ui/status-button.tsx",
      lineNumber: 43,
      columnNumber: 31
    }) : null,
    success: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "check" }, void 0, false, {
      fileName: "app/components/ui/status-button.tsx",
      lineNumber: 47,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "app/components/ui/status-button.tsx",
      lineNumber: 46,
      columnNumber: 14
    }),
    error: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-destructive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "text-destructive-foreground", name: "cross-1" }, void 0, false, {
      fileName: "app/components/ui/status-button.tsx",
      lineNumber: 50,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "app/components/ui/status-button.tsx",
      lineNumber: 49,
      columnNumber: 12
    }),
    idle: null
  }[status];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { ref, className: cn("flex justify-center gap-4", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children }, void 0, false, {
      fileName: "app/components/ui/status-button.tsx",
      lineNumber: 55,
      columnNumber: 7
    }),
    message ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipTrigger, { children: companion }, void 0, false, {
        fileName: "app/components/ui/status-button.tsx",
        lineNumber: 58,
        columnNumber: 13
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipContent, { children: message }, void 0, false, {
        fileName: "app/components/ui/status-button.tsx",
        lineNumber: 59,
        columnNumber: 13
      })
    ] }, void 0, true, {
      fileName: "app/components/ui/status-button.tsx",
      lineNumber: 57,
      columnNumber: 11
    }) }, void 0, false, {
      fileName: "app/components/ui/status-button.tsx",
      lineNumber: 56,
      columnNumber: 18
    }) : companion
  ] }, void 0, true, {
    fileName: "app/components/ui/status-button.tsx",
    lineNumber: 54,
    columnNumber: 10
  });
}, "Fgv3G2YflGpMwNaZZAvVjuZ5pA8=", false, function() {
  return [import_spin_delay.useSpinDelay];
})), "Fgv3G2YflGpMwNaZZAvVjuZ5pA8=", false, function() {
  return [import_spin_delay.useSpinDelay];
});
_c2 = StatusButton;
StatusButton.displayName = "Button";
var _c;
var _c2;
$RefreshReg$(_c, "StatusButton$React.forwardRef");
$RefreshReg$(_c2, "StatusButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  StatusButton
};
//# sourceMappingURL=/build/_shared/chunk-T74JPHL5.js.map
