import {
  useOptionalUser,
  useUser
} from "/build/_shared/chunk-Z5YS2INQ.js";
import {
  HoneypotProvider
} from "/build/_shared/chunk-MB6JSKP2.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-3SKDAALF.js";
import {
  parseWithZod
} from "/build/_shared/chunk-MRTMKYB5.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2,
  $cf1ac5d9fe0e8206$export$b688253958b8dfe7,
  $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9,
  $ea1ef594cf570d83$export$be92b6f5f03c0fe9,
  $f1701beae083dbae$export$602eac185826482c,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "/build/_shared/chunk-HBRNPUBR.js";
import {
  z
} from "/build/_shared/chunk-M7HH4RIF.js";
import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $8927f6f2acc4f386$export$6d1a0317bde7de7f,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  ErrorList,
  _extends,
  getFormProps,
  useForm
} from "/build/_shared/chunk-HP5C7Y43.js";
import "/build/_shared/chunk-QCQ6MJ2A.js";
import {
  require_node
} from "/build/_shared/chunk-NYZEBVUP.js";
import {
  invariant
} from "/build/_shared/chunk-Z7BBCTBE.js";
import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $6ed0406888f73fc4$export$43e446d32b3d21af,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  Button,
  _extends as _extends2,
  cva
} from "/build/_shared/chunk-6RG3S7SV.js";
import {
  Icon,
  sprite_default
} from "/build/_shared/chunk-TLNAOKNL.js";
import {
  cn,
  getUserImgSrc,
  require_dist
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useFetchers,
  useLoaderData,
  useNavigation,
  useRevalidator,
  useRouteLoaderData,
  useSubmit
} from "/build/_shared/chunk-XY7VRZBP.js";
import {
  require_react_dom
} from "/build/_shared/chunk-YRHZV3FU.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-LTRR4HZE.js";

// empty-module:#app/components/sidebar/sidebar.server.ts
var require_sidebar_server = __commonJS({
  "empty-module:#app/components/sidebar/sidebar.server.ts"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// node_modules/.pnpm/remix-routes@1.6.0/node_modules/remix-routes/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/remix-routes@1.6.0/node_modules/remix-routes/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.$routeId = exports.$params = exports.$path = void 0;
    function includesParams(route) {
      return route.indexOf("/:") > -1 || route.indexOf("/*") > -1;
    }
    function $path2(route, ...paramsOrQuery) {
      var _a;
      let path = route;
      let query = paramsOrQuery[0];
      if (includesParams(route)) {
        const params = (_a = paramsOrQuery[0]) !== null && _a !== void 0 ? _a : {};
        query = paramsOrQuery[1];
        path = route.split("/").map((fragment) => {
          if (fragment.indexOf(":") > -1) {
            let paramName = fragment.slice(1);
            if (paramName.indexOf("?") > -1) {
              paramName = paramName.slice(0, -1);
            }
            if (paramName in params) {
              return params[paramName];
            }
            return null;
          }
          if (fragment == "*") {
            if ("*" in params) {
              return params["*"];
            }
            return null;
          }
          return fragment;
        }).filter((f) => f !== null).join("/");
      }
      if (!query) {
        return path;
      }
      const searchParams = new URLSearchParams(query);
      return path + "?" + searchParams.toString();
    }
    exports.$path = $path2;
    function $params(_route, params) {
      return params;
    }
    exports.$params = $params;
    function $routeId(routeId) {
      return routeId;
    }
    exports.$routeId = $routeId;
  }
});

// empty-module:#app/theme/theme.server.ts
var require_theme_server = __commonJS({
  "empty-module:#app/theme/theme.server.ts"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// empty-module:./utils/auth.server.ts
var require_auth_server = __commonJS({
  "empty-module:./utils/auth.server.ts"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// empty-module:./utils/db/db.server.ts
var require_db_server = __commonJS({
  "empty-module:./utils/db/db.server.ts"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// empty-module:./utils/env.server.ts
var require_env_server = __commonJS({
  "empty-module:./utils/env.server.ts"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// empty-module:./utils/honeypot.server.ts
var require_honeypot_server = __commonJS({
  "empty-module:./utils/honeypot.server.ts"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// empty-module:./utils/timing.server.ts
var require_timing_server = __commonJS({
  "empty-module:./utils/timing.server.ts"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// empty-module:./utils/toast.server.ts
var require_toast_server = __commonJS({
  "empty-module:./utils/toast.server.ts"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// app/root.tsx
var import_node = __toESM(require_node(), 1);

// app/components/sidebar/schema.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/sidebar/schema.ts"
  );
  import.meta.hot.lastModified = "1703946551792.9878";
}
var SidebarStateFormSchema = z.object({
  sidebarState: z.enum(["expanded", "collapsed"])
});

// app/root.tsx
var import_sidebar_server = __toESM(require_sidebar_server(), 1);

// app/components/sidebar/sidebar.tsx
var import_react23 = __toESM(require_react(), 1);

// node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}

// node_modules/.pnpm/@radix-ui+react-navigation-menu@1.1.4_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom_q2j26b4znonzdinpryhf6cpugu/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/.pnpm/@radix-ui+react-direction@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-direction/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $f631663db3294ace$var$DirectionContext = /* @__PURE__ */ (0, import_react.createContext)(void 0);
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  const globalDir = (0, import_react.useContext)($f631663db3294ace$var$DirectionContext);
  return localDir || globalDir || "ltr";
}

// node_modules/.pnpm/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2_c62fpxe2wzlutv5xbr5dbdmvia/node_modules/@radix-ui/react-collection/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  });
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = import_react2.default.useRef(null);
    const itemMap = import_react2.default.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ import_react2.default.createElement(CollectionProviderImpl, {
      scope,
      itemMap,
      collectionRef: ref
    }, children);
  };
  /* @__PURE__ */ Object.assign(CollectionProvider, {
    displayName: PROVIDER_NAME
  });
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = /* @__PURE__ */ import_react2.default.forwardRef((props, forwardedRef) => {
    const { scope, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
    return /* @__PURE__ */ import_react2.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      ref: composedRefs
    }, children);
  });
  /* @__PURE__ */ Object.assign(CollectionSlot, {
    displayName: COLLECTION_SLOT_NAME
  });
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = /* @__PURE__ */ import_react2.default.forwardRef((props, forwardedRef) => {
    const { scope, children, ...itemData } = props;
    const ref = import_react2.default.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope);
    import_react2.default.useEffect(() => {
      context.itemMap.set(ref, {
        ref,
        ...itemData
      });
      return () => void context.itemMap.delete(ref);
    });
    return /* @__PURE__ */ import_react2.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      [ITEM_DATA_ATTR]: "",
      ref: composedRefs
    }, children);
  });
  /* @__PURE__ */ Object.assign(CollectionItemSlot, {
    displayName: ITEM_SLOT_NAME
  });
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = import_react2.default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [
      context.collectionRef,
      context.itemMap
    ]);
    return getItems;
  }
  return [
    {
      Provider: CollectionProvider,
      Slot: CollectionSlot,
      ItemSlot: CollectionItemSlot
    },
    useCollection,
    createCollectionScope
  ];
}

// node_modules/.pnpm/@radix-ui+react-navigation-menu@1.1.4_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom_q2j26b4znonzdinpryhf6cpugu/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var $322c88a641701f3b$var$NAVIGATION_MENU_NAME = "NavigationMenu";
var [$322c88a641701f3b$var$Collection, $322c88a641701f3b$var$useCollection, $322c88a641701f3b$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$FocusGroupCollection, $322c88a641701f3b$var$useFocusGroupCollection, $322c88a641701f3b$var$createFocusGroupCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$createNavigationMenuContext, $322c88a641701f3b$export$fb8ea5af8c9fcdf0] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($322c88a641701f3b$var$NAVIGATION_MENU_NAME, [
  $322c88a641701f3b$var$createCollectionScope,
  $322c88a641701f3b$var$createFocusGroupCollectionScope
]);
var [$322c88a641701f3b$var$NavigationMenuProviderImpl, $322c88a641701f3b$var$useNavigationMenuContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$ViewportContentProvider, $322c88a641701f3b$var$useViewportContentContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var $322c88a641701f3b$export$5b2278cf1e8bcae2 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, delayDuration = 200, skipDelayDuration = 300, orientation = "horizontal", dir, ...NavigationMenuProps } = props;
  const [navigationMenu, setNavigationMenu] = (0, import_react3.useState)(null);
  const composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNavigationMenu(node)
  );
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const openTimerRef = (0, import_react3.useRef)(0);
  const closeTimerRef = (0, import_react3.useRef)(0);
  const skipDelayTimerRef = (0, import_react3.useRef)(0);
  const [isOpenDelayed, setIsOpenDelayed] = (0, import_react3.useState)(true);
  const [value1 = "", setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: (value) => {
      const isOpen = value !== "";
      const hasSkipDelayDuration = skipDelayDuration > 0;
      if (isOpen) {
        window.clearTimeout(skipDelayTimerRef.current);
        if (hasSkipDelayDuration)
          setIsOpenDelayed(false);
      } else {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => setIsOpenDelayed(true),
          skipDelayDuration
        );
      }
      onValueChange === null || onValueChange === void 0 || onValueChange(value);
    },
    defaultProp: defaultValue
  });
  const startCloseTimer = (0, import_react3.useCallback)(() => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(
      () => setValue(""),
      150
    );
  }, [
    setValue
  ]);
  const handleOpen = (0, import_react3.useCallback)((itemValue) => {
    window.clearTimeout(closeTimerRef.current);
    setValue(itemValue);
  }, [
    setValue
  ]);
  const handleDelayedOpen = (0, import_react3.useCallback)((itemValue) => {
    const isOpenItem = value1 === itemValue;
    if (isOpenItem)
      window.clearTimeout(closeTimerRef.current);
    else
      openTimerRef.current = window.setTimeout(() => {
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
      }, delayDuration);
  }, [
    value1,
    setValue,
    delayDuration
  ]);
  (0, import_react3.useEffect)(() => {
    return () => {
      window.clearTimeout(openTimerRef.current);
      window.clearTimeout(closeTimerRef.current);
      window.clearTimeout(skipDelayTimerRef.current);
    };
  }, []);
  return /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
    scope: __scopeNavigationMenu,
    isRootMenu: true,
    value: value1,
    dir: direction,
    orientation,
    rootNavigationMenu: navigationMenu,
    onTriggerEnter: (itemValue) => {
      window.clearTimeout(openTimerRef.current);
      if (isOpenDelayed)
        handleDelayedOpen(itemValue);
      else
        handleOpen(itemValue);
    },
    onTriggerLeave: () => {
      window.clearTimeout(openTimerRef.current);
      startCloseTimer();
    },
    onContentEnter: () => window.clearTimeout(closeTimerRef.current),
    onContentLeave: startCloseTimer,
    onItemSelect: (itemValue) => {
      setValue(
        (prevValue) => prevValue === itemValue ? "" : itemValue
      );
    },
    onItemDismiss: () => setValue("")
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.nav, _extends3({
    "aria-label": "Main",
    "data-orientation": orientation,
    dir: direction
  }, NavigationMenuProps, {
    ref: composedRef
  })));
});
var $322c88a641701f3b$var$NavigationMenuProvider = (props) => {
  const { scope, isRootMenu, rootNavigationMenu, dir, orientation, children, value, onItemSelect, onItemDismiss, onTriggerEnter, onTriggerLeave, onContentEnter, onContentLeave } = props;
  const [viewport, setViewport] = (0, import_react3.useState)(null);
  const [viewportContent, setViewportContent] = (0, import_react3.useState)(/* @__PURE__ */ new Map());
  const [indicatorTrack, setIndicatorTrack] = (0, import_react3.useState)(null);
  return /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$NavigationMenuProviderImpl, {
    scope,
    isRootMenu,
    rootNavigationMenu,
    value,
    previousValue: $010c2913dbd2fe3d$export$5cae361ad82dce8b(value),
    baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
    dir,
    orientation,
    viewport,
    onViewportChange: setViewport,
    indicatorTrack,
    onIndicatorTrackChange: setIndicatorTrack,
    onTriggerEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerEnter),
    onTriggerLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerLeave),
    onContentEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentEnter),
    onContentLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentLeave),
    onItemSelect: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemSelect),
    onItemDismiss: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemDismiss),
    onViewportContentChange: (0, import_react3.useCallback)((contentValue, contentData) => {
      setViewportContent((prevContent) => {
        prevContent.set(contentValue, contentData);
        return new Map(prevContent);
      });
    }, []),
    onViewportContentRemove: (0, import_react3.useCallback)((contentValue) => {
      setViewportContent((prevContent) => {
        if (!prevContent.has(contentValue))
          return prevContent;
        prevContent.delete(contentValue);
        return new Map(prevContent);
      });
    }, [])
  }, /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$Collection.Provider, {
    scope
  }, /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$ViewportContentProvider, {
    scope,
    items: viewportContent
  }, children)));
};
var $322c88a641701f3b$var$LIST_NAME = "NavigationMenuList";
var $322c88a641701f3b$export$c361068a95fd2286 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...listProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$LIST_NAME, __scopeNavigationMenu);
  const list = /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.ul, _extends3({
    "data-orientation": context.orientation
  }, listProps, {
    ref: forwardedRef
  }));
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, {
    style: {
      position: "relative"
    },
    ref: context.onIndicatorTrackChange
  }, /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$Collection.Slot, {
    scope: __scopeNavigationMenu
  }, context.isRootMenu ? /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, list) : list));
});
var $322c88a641701f3b$var$ITEM_NAME = "NavigationMenuItem";
var [$322c88a641701f3b$var$NavigationMenuItemContextProvider, $322c88a641701f3b$var$useNavigationMenuItemContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$ITEM_NAME);
var $322c88a641701f3b$var$TRIGGER_NAME = "NavigationMenuTrigger";
var $322c88a641701f3b$export$37fe8002734d8f2 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const ref = (0, import_react3.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, itemContext.triggerRef, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, itemContext.value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, itemContext.value);
  const hasPointerMoveOpenedRef = (0, import_react3.useRef)(false);
  const wasClickCloseRef = (0, import_react3.useRef)(false);
  const open = itemContext.value === context.value;
  return /* @__PURE__ */ (0, import_react3.createElement)(import_react3.Fragment, null, /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$Collection.ItemSlot, {
    scope: __scopeNavigationMenu,
    value: itemContext.value
  }, /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends3({
    id: triggerId,
    disabled,
    "data-disabled": disabled ? "" : void 0,
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "aria-expanded": open,
    "aria-controls": contentId
  }, triggerProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, () => {
      wasClickCloseRef.current = false;
      itemContext.wasEscapeCloseRef.current = false;
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current)
        return;
      context.onTriggerEnter(itemContext.value);
      hasPointerMoveOpenedRef.current = true;
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled)
        return;
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    })),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, () => {
      context.onItemSelect(itemContext.value);
      wasClickCloseRef.current = open;
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
      const entryKey = {
        horizontal: "ArrowDown",
        vertical: verticalEntryKey
      }[context.orientation];
      if (open && event.key === entryKey) {
        itemContext.onEntryKeyDown();
        event.preventDefault();
      }
    })
  })))), open && /* @__PURE__ */ (0, import_react3.createElement)(import_react3.Fragment, null, /* @__PURE__ */ (0, import_react3.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    "aria-hidden": true,
    tabIndex: 0,
    ref: itemContext.focusProxyRef,
    onFocus: (event) => {
      const content = itemContext.contentRef.current;
      const prevFocusedElement = event.relatedTarget;
      const wasTriggerFocused = prevFocusedElement === ref.current;
      const wasFocusFromContent = content === null || content === void 0 ? void 0 : content.contains(prevFocusedElement);
      if (wasTriggerFocused || !wasFocusFromContent)
        itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
    }
  }), context.viewport && /* @__PURE__ */ (0, import_react3.createElement)("span", {
    "aria-owns": contentId
  })));
});
var $322c88a641701f3b$var$INDICATOR_NAME = "NavigationMenuIndicator";
var $322c88a641701f3b$export$8ddb526647c0d8fb = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, props.__scopeNavigationMenu);
  const isVisible = Boolean(context.value);
  return context.indicatorTrack ? /* @__PURE__ */ import_react_dom.default.createPortal(/* @__PURE__ */ (0, import_react3.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || isVisible
  }, /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$NavigationMenuIndicatorImpl, _extends3({}, indicatorProps, {
    ref: forwardedRef
  }))), context.indicatorTrack) : null;
});
var $322c88a641701f3b$var$NavigationMenuIndicatorImpl = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, __scopeNavigationMenu);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const [activeTrigger, setActiveTrigger] = (0, import_react3.useState)(null);
  const [position, setPosition] = (0, import_react3.useState)(null);
  const isHorizontal = context.orientation === "horizontal";
  const isVisible = Boolean(context.value);
  (0, import_react3.useEffect)(() => {
    var _items$find;
    const items = getItems();
    const triggerNode = (_items$find = items.find(
      (item) => item.value === context.value
    )) === null || _items$find === void 0 ? void 0 : _items$find.ref.current;
    if (triggerNode)
      setActiveTrigger(triggerNode);
  }, [
    getItems,
    context.value
  ]);
  const handlePositionChange = () => {
    if (activeTrigger)
      setPosition({
        size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
        offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
      });
  };
  $322c88a641701f3b$var$useResizeObserver(activeTrigger, handlePositionChange);
  $322c88a641701f3b$var$useResizeObserver(context.indicatorTrack, handlePositionChange);
  return position ? /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends3({
    "aria-hidden": true,
    "data-state": isVisible ? "visible" : "hidden",
    "data-orientation": context.orientation
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      position: "absolute",
      ...isHorizontal ? {
        left: 0,
        width: position.size + "px",
        transform: `translateX(${position.offset}px)`
      } : {
        top: 0,
        height: position.size + "px",
        transform: `translateY(${position.offset}px)`
      },
      ...indicatorProps.style
    }
  })) : null;
});
var $322c88a641701f3b$var$CONTENT_NAME = "NavigationMenuContent";
var $322c88a641701f3b$export$38e00e996c2f93f7 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(itemContext.contentRef, forwardedRef);
  const open = itemContext.value === context.value;
  const commonProps = {
    value: itemContext.value,
    triggerRef: itemContext.triggerRef,
    focusProxyRef: itemContext.focusProxyRef,
    wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
    onContentFocusOutside: itemContext.onContentFocusOutside,
    onRootContentClose: itemContext.onRootContentClose,
    ...contentProps
  };
  return !context.viewport ? /* @__PURE__ */ (0, import_react3.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends3({
    "data-state": $322c88a641701f3b$var$getOpenState(open)
  }, commonProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ...commonProps.style
    }
  }))) : /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$ViewportContentMounter, _extends3({
    forceMount
  }, commonProps, {
    ref: composedRefs
  }));
});
var $322c88a641701f3b$var$ViewportContentMounter = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const { onViewportContentChange, onViewportContentRemove } = context;
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onViewportContentChange(props.value, {
      ref: forwardedRef,
      ...props
    });
  }, [
    props,
    forwardedRef,
    onViewportContentChange
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    return () => onViewportContentRemove(props.value);
  }, [
    props.value,
    onViewportContentRemove
  ]);
  return null;
});
var $322c88a641701f3b$var$ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var $322c88a641701f3b$var$NavigationMenuContentImpl = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value, triggerRef, focusProxyRef, wasEscapeCloseRef, onRootContentClose, onContentFocusOutside, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, __scopeNavigationMenu);
  const ref = (0, import_react3.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, value);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const prevMotionAttributeRef = (0, import_react3.useRef)(null);
  const { onItemDismiss } = context;
  (0, import_react3.useEffect)(() => {
    const content = ref.current;
    if (context.isRootMenu && content) {
      const handleClose = () => {
        var _triggerRef$current;
        onItemDismiss();
        onRootContentClose();
        if (content.contains(document.activeElement))
          (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 || _triggerRef$current.focus();
      };
      content.addEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
      return () => content.removeEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
    }
  }, [
    context.isRootMenu,
    props.value,
    triggerRef,
    onItemDismiss,
    onRootContentClose
  ]);
  const motionAttribute = (0, import_react3.useMemo)(() => {
    const items = getItems();
    const values = items.map(
      (item) => item.value
    );
    if (context.dir === "rtl")
      values.reverse();
    const index = values.indexOf(context.value);
    const prevIndex = values.indexOf(context.previousValue);
    const isSelected = value === context.value;
    const wasSelected = prevIndex === values.indexOf(value);
    if (!isSelected && !wasSelected)
      return prevMotionAttributeRef.current;
    const attribute = (() => {
      if (index !== prevIndex) {
        if (isSelected && prevIndex !== -1)
          return index > prevIndex ? "from-end" : "from-start";
        if (wasSelected && index !== -1)
          return index > prevIndex ? "to-start" : "to-end";
      }
      return null;
    })();
    prevMotionAttributeRef.current = attribute;
    return attribute;
  }, [
    context.previousValue,
    context.value,
    context.dir,
    getItems,
    value
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react3.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends3({
    id: contentId,
    "aria-labelledby": triggerId,
    "data-motion": motionAttribute,
    "data-orientation": context.orientation
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => {
      var _ref$current;
      const rootContentDismissEvent = new Event($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
        bubbles: true,
        cancelable: true
      });
      (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.dispatchEvent(rootContentDismissEvent);
    },
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      var _context$rootNavigati;
      onContentFocusOutside();
      const target = event.target;
      if ((_context$rootNavigati = context.rootNavigationMenu) !== null && _context$rootNavigati !== void 0 && _context$rootNavigati.contains(target))
        event.preventDefault();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      var _context$viewport;
      const target = event.target;
      const isTrigger = getItems().some((item) => {
        var _item$ref$current;
        return (_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 ? void 0 : _item$ref$current.contains(target);
      });
      const isRootViewport = context.isRootMenu && ((_context$viewport = context.viewport) === null || _context$viewport === void 0 ? void 0 : _context$viewport.contains(target));
      if (isTrigger || isRootViewport || !context.isRootMenu)
        event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
      const isTabKey = event.key === "Tab" && !isMetaKey;
      if (isTabKey) {
        const candidates = $322c88a641701f3b$var$getTabbableCandidates(event.currentTarget);
        const focusedElement = document.activeElement;
        const index = candidates.findIndex(
          (candidate) => candidate === focusedElement
        );
        const isMovingBackwards = event.shiftKey;
        const nextCandidates = isMovingBackwards ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length);
        if ($322c88a641701f3b$var$focusFirst(nextCandidates))
          event.preventDefault();
        else {
          var _focusProxyRef$curren;
          (_focusProxyRef$curren = focusProxyRef.current) === null || _focusProxyRef$curren === void 0 || _focusProxyRef$curren.focus();
        }
      }
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      wasEscapeCloseRef.current = true;
    })
  })));
});
var $322c88a641701f3b$var$VIEWPORT_NAME = "NavigationMenuViewport";
var $322c88a641701f3b$export$ee880b97cc6d44a5 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...viewportProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, props.__scopeNavigationMenu);
  const open = Boolean(context.value);
  return /* @__PURE__ */ (0, import_react3.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$NavigationMenuViewportImpl, _extends3({}, viewportProps, {
    ref: forwardedRef
  })));
});
var $322c88a641701f3b$var$NavigationMenuViewportImpl = /* @__PURE__ */ (0, import_react3.forwardRef)((props1, forwardedRef) => {
  const { __scopeNavigationMenu, children, ...viewportImplProps } = props1;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, __scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onViewportChange);
  const viewportContentContext = $322c88a641701f3b$var$useViewportContentContext($322c88a641701f3b$var$CONTENT_NAME, props1.__scopeNavigationMenu);
  const [size, setSize] = (0, import_react3.useState)(null);
  const [content, setContent] = (0, import_react3.useState)(null);
  const viewportWidth = size ? (size === null || size === void 0 ? void 0 : size.width) + "px" : void 0;
  const viewportHeight = size ? (size === null || size === void 0 ? void 0 : size.height) + "px" : void 0;
  const open = Boolean(context.value);
  const activeContentValue = open ? context.value : context.previousValue;
  const handleSizeChange = () => {
    if (content)
      setSize({
        width: content.offsetWidth,
        height: content.offsetHeight
      });
  };
  $322c88a641701f3b$var$useResizeObserver(content, handleSizeChange);
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends3({
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "data-orientation": context.orientation
  }, viewportImplProps, {
    ref: composedRefs,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: viewportWidth,
      ["--radix-navigation-menu-viewport-height"]: viewportHeight,
      ...viewportImplProps.style
    },
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave))
  }), Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props }]) => {
    const isActive = activeContentValue === value;
    return /* @__PURE__ */ (0, import_react3.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      key: value,
      present: forceMount || isActive
    }, /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends3({}, props, {
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(ref, (node) => {
        if (isActive && node)
          setContent(node);
      })
    })));
  }));
});
var $322c88a641701f3b$var$FOCUS_GROUP_NAME = "FocusGroup";
var $322c88a641701f3b$var$FocusGroup = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$FocusGroupCollection.Provider, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$FocusGroupCollection.Slot, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends3({
    dir: context.dir
  }, groupProps, {
    ref: forwardedRef
  }))));
});
var $322c88a641701f3b$var$ARROW_KEYS = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
];
var $322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var $322c88a641701f3b$var$FocusGroupItem = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const getItems = $322c88a641701f3b$var$useFocusGroupCollection(__scopeNavigationMenu);
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ (0, import_react3.createElement)($322c88a641701f3b$var$FocusGroupCollection.ItemSlot, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends3({}, groupProps, {
    ref: forwardedRef,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isFocusNavigationKey = [
        "Home",
        "End",
        ...$322c88a641701f3b$var$ARROW_KEYS
      ].includes(event.key);
      if (isFocusNavigationKey) {
        let candidateNodes = getItems().map(
          (item) => item.ref.current
        );
        const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
        const prevKeys = [
          prevItemKey,
          "ArrowUp",
          "End"
        ];
        if (prevKeys.includes(event.key))
          candidateNodes.reverse();
        if ($322c88a641701f3b$var$ARROW_KEYS.includes(event.key)) {
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $322c88a641701f3b$var$focusFirst(candidateNodes)
        );
        event.preventDefault();
      }
    })
  })));
});
function $322c88a641701f3b$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $322c88a641701f3b$var$focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement)
      return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
function $322c88a641701f3b$var$useResizeObserver(element, onResize) {
  const handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [
    element,
    handleResize
  ]);
}
function $322c88a641701f3b$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $322c88a641701f3b$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $322c88a641701f3b$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
function $322c88a641701f3b$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $322c88a641701f3b$export$be92b6f5f03c0fe9 = $322c88a641701f3b$export$5b2278cf1e8bcae2;
var $322c88a641701f3b$export$54c2e3dc7acea9f5 = $322c88a641701f3b$export$c361068a95fd2286;
var $322c88a641701f3b$export$41fb9f06171c75f4 = $322c88a641701f3b$export$37fe8002734d8f2;
var $322c88a641701f3b$export$adb584737d712b70 = $322c88a641701f3b$export$8ddb526647c0d8fb;
var $322c88a641701f3b$export$7c6e2c02157bb7d2 = $322c88a641701f3b$export$38e00e996c2f93f7;
var $322c88a641701f3b$export$d5c6c08dc2d3ca7 = $322c88a641701f3b$export$ee880b97cc6d44a5;

// app/components/ui/navigation-menu.tsx
var React = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/navigation-menu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/navigation-menu.tsx"
  );
  import.meta.hot.lastModified = "1704107084549.787";
}
var NavigationMenu = React.forwardRef(_c = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$be92b6f5f03c0fe9, { ref, className: cn("relative z-10 flex flex-1", className), ...props, children }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 33,
  columnNumber: 12
}));
_c2 = NavigationMenu;
NavigationMenu.displayName = $322c88a641701f3b$export$be92b6f5f03c0fe9.displayName;
var NavigationMenuList = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$54c2e3dc7acea9f5, { ref, className: cn("flex flex-1 list-none flex-col gap-3", className), ...props }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 41,
  columnNumber: 12
}));
_c4 = NavigationMenuList;
NavigationMenuList.displayName = $322c88a641701f3b$export$54c2e3dc7acea9f5.displayName;
var navigationMenuTriggerStyle = cva("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50");
var NavigationMenuTrigger = React.forwardRef(_c5 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$41fb9f06171c75f4, { ref, className: cn(navigationMenuTriggerStyle(), "group", className), ...props, children: [
  children,
  " ",
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { "aria-hidden": "true", className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180", name: "chevron-down" }, void 0, false, {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 51,
    columnNumber: 5
  })
] }, void 0, true, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 49,
  columnNumber: 12
}));
_c6 = NavigationMenuTrigger;
NavigationMenuTrigger.displayName = $322c88a641701f3b$export$41fb9f06171c75f4.displayName;
var NavigationMenuContent = React.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$7c6e2c02157bb7d2, { ref, className: cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className), ...props }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 58,
  columnNumber: 12
}));
_c8 = NavigationMenuContent;
NavigationMenuContent.displayName = $322c88a641701f3b$export$7c6e2c02157bb7d2.displayName;
var NavigationMenuViewport = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$d5c6c08dc2d3ca7, { ref, className: cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className), ...props }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 66,
  columnNumber: 5
}) }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 65,
  columnNumber: 12
}));
_c10 = NavigationMenuViewport;
NavigationMenuViewport.displayName = $322c88a641701f3b$export$d5c6c08dc2d3ca7.displayName;
var NavigationMenuIndicator = React.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$adb584737d712b70, { ref, className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 74,
  columnNumber: 5
}) }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 73,
  columnNumber: 12
}));
_c12 = NavigationMenuIndicator;
NavigationMenuIndicator.displayName = $322c88a641701f3b$export$adb584737d712b70.displayName;
var NavigationMenuItem = ({
  entryName,
  iconName,
  mode,
  to
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: mode === "collapsed" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { delayDuration: 50, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenuNavLink, { className: "group/menu-item hover:text-sky flex flex-row items-center gap-1 rounded-e-sm border-l-2 border-l-transparent px-2 py-0.5 text-slate-300 transition-colors duration-200 ease-in-out hover:border-l-cyan-600 hover:bg-sky-950", remixClassName: ({
      isActive
    }) => cn(isActive && "bg-sky-800 border-l-cyan-600"), to, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: cn("h-7 w-7 rounded-sm p-1 group-hover/menu-item:text-slate-200"), name: iconName }, void 0, false, {
      fileName: "app/components/ui/navigation-menu.tsx",
      lineNumber: 90,
      columnNumber: 15
    }) }, void 0, false, {
      fileName: "app/components/ui/navigation-menu.tsx",
      lineNumber: 87,
      columnNumber: 13
    }) }, void 0, false, {
      fileName: "app/components/ui/navigation-menu.tsx",
      lineNumber: 86,
      columnNumber: 11
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TooltipContent, { className: "cursor-default rounded-sm bg-slate-50 px-2 py-0.5 font-semibold text-slate-800 shadow-sm", side: "right", children: entryName }, void 0, false, {
      fileName: "app/components/ui/navigation-menu.tsx",
      lineNumber: 93,
      columnNumber: 11
    })
  ] }, void 0, true, {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 85,
    columnNumber: 31
  }) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenuNavLink, { className: "group/menu-item hover:text-sky flex flex-row items-center gap-1 rounded-e-sm border-l-2 border-l-transparent px-2 py-0.5 text-slate-300 transition-colors duration-200 ease-in-out hover:border-l-cyan-600 hover:bg-sky-950", remixClassName: ({
    isActive
  }) => cn(isActive && "bg-sky-800 border-l-cyan-600"), to, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: cn("h-7 w-7 rounded-sm p-1 group-hover/menu-item:text-slate-200"), name: iconName }, void 0, false, {
      fileName: "app/components/ui/navigation-menu.tsx",
      lineNumber: 99,
      columnNumber: 11
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: entryName }, void 0, false, {
      fileName: "app/components/ui/navigation-menu.tsx",
      lineNumber: 100,
      columnNumber: 11
    })
  ] }, void 0, true, {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 96,
    columnNumber: 22
  }) }, void 0, false, {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 84,
    columnNumber: 10
  });
};
_c13 = NavigationMenuItem;
var NavigationMenuNavLink = (0, import_react5.forwardRef)(_c14 = ({
  className,
  remixClassName,
  ...props
}, forwardedRef) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { ...props, ref: forwardedRef, "aria-label": `Navigate to ${typeof props.to === "string" ? props.to : JSON.stringify(props.to)}`, className: ({
    isActive
  }) => {
    return cn(className, remixClassName({
      isActive
    }));
  } }, void 0, false, {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 110,
    columnNumber: 10
  });
});
_c15 = NavigationMenuNavLink;
NavigationMenuNavLink.displayName = "NavigationMenuNavLink";
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
var _c14;
var _c15;
$RefreshReg$(_c, "NavigationMenu$React.forwardRef");
$RefreshReg$(_c2, "NavigationMenu");
$RefreshReg$(_c3, "NavigationMenuList$React.forwardRef");
$RefreshReg$(_c4, "NavigationMenuList");
$RefreshReg$(_c5, "NavigationMenuTrigger$React.forwardRef");
$RefreshReg$(_c6, "NavigationMenuTrigger");
$RefreshReg$(_c7, "NavigationMenuContent$React.forwardRef");
$RefreshReg$(_c8, "NavigationMenuContent");
$RefreshReg$(_c9, "NavigationMenuViewport$React.forwardRef");
$RefreshReg$(_c10, "NavigationMenuViewport");
$RefreshReg$(_c11, "NavigationMenuIndicator$React.forwardRef");
$RefreshReg$(_c12, "NavigationMenuIndicator");
$RefreshReg$(_c13, "NavigationMenuItem");
$RefreshReg$(_c14, "NavigationMenuNavLink$forwardRef");
$RefreshReg$(_c15, "NavigationMenuNavLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/nav.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/nav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/nav.tsx"
  );
  import.meta.hot.lastModified = "1704036916839.764";
}
var NavMenu = ({
  mode
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenu, { orientation: "vertical", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenuList, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenuItem, { entryName: "Dashboard", iconName: "dashboard", mode, to: "/dashboard" }, void 0, false, {
      fileName: "app/components/nav.tsx",
      lineNumber: 27,
      columnNumber: 9
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenuItem, { entryName: "Accounts", iconName: "government", mode, to: "/accounts" }, void 0, false, {
      fileName: "app/components/nav.tsx",
      lineNumber: 28,
      columnNumber: 9
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenuItem, { entryName: "Transactions", iconName: "sync", mode, to: "/transactions" }, void 0, false, {
      fileName: "app/components/nav.tsx",
      lineNumber: 29,
      columnNumber: 9
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenuItem, { entryName: "Insights", iconName: "histogram", mode, to: "/insights" }, void 0, false, {
      fileName: "app/components/nav.tsx",
      lineNumber: 30,
      columnNumber: 9
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationMenuItem, { entryName: "Configuration", iconName: "settings", mode, to: "/configuration" }, void 0, false, {
      fileName: "app/components/nav.tsx",
      lineNumber: 31,
      columnNumber: 9
    })
  ] }, void 0, true, {
    fileName: "app/components/nav.tsx",
    lineNumber: 26,
    columnNumber: 7
  }) }, void 0, false, {
    fileName: "app/components/nav.tsx",
    lineNumber: 25,
    columnNumber: 10
  });
};
_c16 = NavMenu;
var _c16;
$RefreshReg$(_c16, "NavMenu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/sidebar/useOptimisticSidebarState.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/sidebar/useOptimisticSidebarState.ts"
  );
  import.meta.hot.lastModified = "1714002288784.48";
}
var useOptimisticSidebarState = () => {
  const fetchers = useFetchers();
  const fetcher = fetchers.find((f) => f.formAction === "/");
  if (fetcher && fetcher.formData) {
    const submission = parseWithZod(fetcher.formData, {
      schema: SidebarStateFormSchema
    });
    if (submission.status === "success") {
      return submission.value.sidebarState;
    }
  }
};

// app/components/ui/layout/inline.tsx
var import_react7 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/layout/inline.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/layout/inline.tsx"
  );
  import.meta.hot.lastModified = "1703118587910.2554";
}
var Inline = (0, import_react7.forwardRef)(_c17 = ({
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { ref, direction: "row", gap: "small", ...props, children }, void 0, false, {
    fileName: "app/components/ui/layout/inline.tsx",
    lineNumber: 31,
    columnNumber: 10
  });
});
_c22 = Inline;
Inline.displayName = "Inline";
var _c17;
var _c22;
$RefreshReg$(_c17, "Inline$forwardRef");
$RefreshReg$(_c22, "Inline");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/layout/flex.tsx
var import_react8 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/layout/flex.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/layout/flex.tsx"
  );
  import.meta.hot.lastModified = "1703118587909.9907";
}
var flexVariants = cva("box-border flex flex-1", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col"
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch"
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly"
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap"
    },
    gap: {
      none: "gap-0",
      tiny: "gap-0.5",
      small: "gap-1",
      medium: "gap-2",
      large: "gap-3",
      xlarge: "gap-4",
      ["2xlarge"]: "gap-5"
    },
    grow: {
      0: "flex-grow-0",
      1: "flex-grow"
    }
  },
  defaultVariants: {
    direction: "row",
    align: "start",
    justify: "start",
    wrap: "nowrap",
    gap: "medium"
  }
});
var Flex = (0, import_react8.forwardRef)(_c18 = ({
  as: Component = "div",
  children,
  align,
  direction,
  gap,
  grow,
  justify,
  wrap,
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Component, { ref, className: cn(flexVariants({
    align,
    direction,
    gap,
    grow,
    justify,
    wrap
  }), className), ...props, children }, void 0, false, {
    fileName: "app/components/ui/layout/flex.tsx",
    lineNumber: 86,
    columnNumber: 10
  });
});
_c23 = Flex;
Flex.displayName = "Flex";
var _c18;
var _c23;
$RefreshReg$(_c18, "Flex$forwardRef");
$RefreshReg$(_c23, "Flex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/layout/stack.tsx
var import_react9 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/layout/stack.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/layout/stack.tsx"
  );
  import.meta.hot.lastModified = "1703118587910.383";
}
var Stack = (0, import_react9.forwardRef)(_c19 = ({
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Flex, { ref, direction: "column", gap: "medium", ...props, children }, void 0, false, {
    fileName: "app/components/ui/layout/stack.tsx",
    lineNumber: 31,
    columnNumber: 10
  });
});
_c24 = Stack;
Stack.displayName = "Stack";
var _c19;
var _c24;
$RefreshReg$(_c19, "Stack$forwardRef");
$RefreshReg$(_c24, "Stack");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/layout/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/layout/index.ts"
  );
  import.meta.hot.lastModified = "1703118587910.1223";
}

// app/components/user-dropdown.tsx
var import_react17 = __toESM(require_react(), 1);
var import_remix_routes = __toESM(require_lib(), 1);

// node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.0.6_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@1_rzwmxklxrxzo7vy7kou5wtzkre/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-menu@2.0.6_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-menu/dist/index.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-focus-guards@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var import_react10 = __toESM(require_react(), 1);
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  (0, import_react10.useEffect)(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// node_modules/.pnpm/@radix-ui+react-focus-scope@1.0.4_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18._3kopv7gvv6nmmkukscpzwfigry/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var import_react11 = __toESM(require_react(), 1);
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ (0, import_react11.forwardRef)((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = (0, import_react11.useState)(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = (0, import_react11.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = (0, import_react11.useRef)({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  (0, import_react11.useEffect)(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container1)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container1.contains(relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations)
          if (mutation.removedNodes.length > 0)
            $d3863c46a17e8a28$var$focus(container1);
      };
      var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container1)
        mutationObserver.observe(container1, {
          childList: true,
          subtree: true
        });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  (0, import_react11.useEffect)(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = (0, import_react11.useCallback)((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ (0, import_react11.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index = updatedArray.indexOf(item);
  if (index !== -1)
    updatedArray.splice(index, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}

// node_modules/.pnpm/@radix-ui+react-roving-focus@1.0.4_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18_lwqqneopf4zsihxfvvyquzebxm/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var import_react12 = __toESM(require_react(), 1);
var $d7bdfb9eb0fdf311$var$ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var $d7bdfb9eb0fdf311$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d7bdfb9eb0fdf311$var$GROUP_NAME = "RovingFocusGroup";
var [$d7bdfb9eb0fdf311$var$Collection, $d7bdfb9eb0fdf311$var$useCollection, $d7bdfb9eb0fdf311$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($d7bdfb9eb0fdf311$var$GROUP_NAME);
var [$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext, $d7bdfb9eb0fdf311$export$c7109489551a4f4] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d7bdfb9eb0fdf311$var$GROUP_NAME, [
  $d7bdfb9eb0fdf311$var$createCollectionScope
]);
var [$d7bdfb9eb0fdf311$var$RovingFocusProvider, $d7bdfb9eb0fdf311$var$useRovingFocusContext] = $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext($d7bdfb9eb0fdf311$var$GROUP_NAME);
var $d7bdfb9eb0fdf311$export$8699f7c8af148338 = /* @__PURE__ */ (0, import_react12.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react12.createElement)($d7bdfb9eb0fdf311$var$Collection.Provider, {
    scope: props.__scopeRovingFocusGroup
  }, /* @__PURE__ */ (0, import_react12.createElement)($d7bdfb9eb0fdf311$var$Collection.Slot, {
    scope: props.__scopeRovingFocusGroup
  }, /* @__PURE__ */ (0, import_react12.createElement)($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl, _extends({}, props, {
    ref: forwardedRef
  }))));
});
var $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl = /* @__PURE__ */ (0, import_react12.forwardRef)((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, ...groupProps } = props;
  const ref = (0, import_react12.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = (0, import_react12.useState)(false);
  const handleEntryFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEntryFocus);
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = (0, import_react12.useRef)(false);
  const [focusableItemsCount, setFocusableItemsCount] = (0, import_react12.useState)(0);
  (0, import_react12.useEffect)(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
    }
  }, [
    handleEntryFocus
  ]);
  return /* @__PURE__ */ (0, import_react12.createElement)($d7bdfb9eb0fdf311$var$RovingFocusProvider, {
    scope: __scopeRovingFocusGroup,
    orientation,
    dir: direction,
    loop,
    currentTabStopId,
    onItemFocus: (0, import_react12.useCallback)(
      (tabStopId) => setCurrentTabStopId(tabStopId),
      [
        setCurrentTabStopId
      ]
    ),
    onItemShiftTab: (0, import_react12.useCallback)(
      () => setIsTabbingBackOut(true),
      []
    ),
    onFocusableItemAdd: (0, import_react12.useCallback)(
      () => setFocusableItemsCount(
        (prevCount) => prevCount + 1
      ),
      []
    ),
    onFocusableItemRemove: (0, import_react12.useCallback)(
      () => setFocusableItemsCount(
        (prevCount) => prevCount - 1
      ),
      []
    )
  }, /* @__PURE__ */ (0, import_react12.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
    "data-orientation": orientation
  }, groupProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...props.style
    },
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, () => {
      isClickFocusRef.current = true;
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, (event) => {
      const isKeyboardFocus = !isClickFocusRef.current;
      if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
        const entryFocusEvent = new CustomEvent($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, $d7bdfb9eb0fdf311$var$EVENT_OPTIONS);
        event.currentTarget.dispatchEvent(entryFocusEvent);
        if (!entryFocusEvent.defaultPrevented) {
          const items = getItems().filter(
            (item) => item.focusable
          );
          const activeItem = items.find(
            (item) => item.active
          );
          const currentItem = items.find(
            (item) => item.id === currentTabStopId
          );
          const candidateItems = [
            activeItem,
            currentItem,
            ...items
          ].filter(Boolean);
          const candidateNodes = candidateItems.map(
            (item) => item.ref.current
          );
          $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes);
        }
      }
      isClickFocusRef.current = false;
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsTabbingBackOut(false)
    )
  })));
});
var $d7bdfb9eb0fdf311$var$ITEM_NAME = "RovingFocusGroupItem";
var $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = /* @__PURE__ */ (0, import_react12.forwardRef)((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, ...itemProps } = props;
  const autoId = $1746a345f3d73bb7$export$f680877a34711e37();
  const id = tabStopId || autoId;
  const context = $d7bdfb9eb0fdf311$var$useRovingFocusContext($d7bdfb9eb0fdf311$var$ITEM_NAME, __scopeRovingFocusGroup);
  const isCurrentTabStop = context.currentTabStopId === id;
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const { onFocusableItemAdd, onFocusableItemRemove } = context;
  (0, import_react12.useEffect)(() => {
    if (focusable) {
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }
  }, [
    focusable,
    onFocusableItemAdd,
    onFocusableItemRemove
  ]);
  return /* @__PURE__ */ (0, import_react12.createElement)($d7bdfb9eb0fdf311$var$Collection.ItemSlot, {
    scope: __scopeRovingFocusGroup,
    id,
    focusable,
    active
  }, /* @__PURE__ */ (0, import_react12.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    tabIndex: isCurrentTabStop ? 0 : -1,
    "data-orientation": context.orientation
  }, itemProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!focusable)
        event.preventDefault();
      else
        context.onItemFocus(id);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => context.onItemFocus(id)
    ),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Tab" && event.shiftKey) {
        context.onItemShiftTab();
        return;
      }
      if (event.target !== event.currentTarget)
        return;
      const focusIntent = $d7bdfb9eb0fdf311$var$getFocusIntent(event, context.orientation, context.dir);
      if (focusIntent !== void 0) {
        event.preventDefault();
        const items = getItems().filter(
          (item) => item.focusable
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if (focusIntent === "last")
          candidateNodes.reverse();
        else if (focusIntent === "prev" || focusIntent === "next") {
          if (focusIntent === "prev")
            candidateNodes.reverse();
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = context.loop ? $d7bdfb9eb0fdf311$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)
        );
      }
    })
  })));
});
var $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function $d7bdfb9eb0fdf311$var$getFocusIntent(event, orientation, dir) {
  const key = $d7bdfb9eb0fdf311$var$getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(key))
    return void 0;
  if (orientation === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(key))
    return void 0;
  return $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $d7bdfb9eb0fdf311$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index) => array[(startIndex + index) % array.length]
  );
}
var $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9 = $d7bdfb9eb0fdf311$export$8699f7c8af148338;
var $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 = $d7bdfb9eb0fdf311$export$ab9df7c53fe8454;

// node_modules/.pnpm/aria-hidden@1.2.3/node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        var attr = node.getAttribute(controlAttribute);
        var alreadyHidden = attr !== null && attr !== "false";
        var counterValue = (counterMap.get(node) || 0) + 1;
        var markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenNodes.push(node);
        if (counterValue === 1 && alreadyHidden) {
          uncontrolledNodes.set(node, true);
        }
        if (markerValue === 1) {
          node.setAttribute(markerName, "true");
        }
        if (!alreadyHidden) {
          node.setAttribute(controlAttribute, "true");
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
      s = arguments[i2];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s); i2 < p.length; i2++) {
      if (e.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i2]))
        t[p[i2]] = s[p[i2]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i2 = 0, l = from.length, ar; i2 < l; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var React7 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
var React3 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.47_react@18.2.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.47_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react13 = __toESM(require_react());
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react13.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/.pnpm/use-callback-ref@1.3.0_@types+react@18.2.47_react@18.2.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
}

// node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.47_react@18.2.0/node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.2.47_react@18.2.0/node_modules/use-sidecar/dist/es2015/exports.js
var React2 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React2.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React3.forwardRef(function(props, parentRef) {
  var ref = React3.useRef(null);
  var _a = React3.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React3.createElement(
    React3.Fragment,
    null,
    enabled && React3.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React3.cloneElement(React3.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React3.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React6 = __toESM(require_react());

// node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React5 = __toESM(require_react());

// node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.47_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
var React4 = __toESM(require_react());

// node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.47_react@18.2.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.47_react@18.2.0/node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React4.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.47_react@18.2.0/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
  var gap = React5.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React5.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d2 = _a[2];
      if (s > d2) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React6.useRef([]);
  var touchStartRef = React6.useRef([0, 0]);
  var activeAxis = React6.useRef();
  var id = React6.useState(idCounter++)[0];
  var Style2 = React6.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React6.useRef(props);
  React6.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React6.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React6.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React6.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React6.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React6.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React6.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React6.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React6.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React6.createElement(
    React6.Fragment,
    null,
    inert ? React6.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React6.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/.pnpm/react-remove-scroll@2.5.5_@types+react@18.2.47_react@18.2.0/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React7.forwardRef(function(props, ref) {
  return React7.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/.pnpm/@radix-ui+react-menu@2.0.6_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-menu/dist/index.mjs
var $6cc32821e9371a1c$var$SELECTION_KEYS = [
  "Enter",
  " "
];
var $6cc32821e9371a1c$var$FIRST_KEYS = [
  "ArrowDown",
  "PageUp",
  "Home"
];
var $6cc32821e9371a1c$var$LAST_KEYS = [
  "ArrowUp",
  "PageDown",
  "End"
];
var $6cc32821e9371a1c$var$FIRST_LAST_KEYS = [
  ...$6cc32821e9371a1c$var$FIRST_KEYS,
  ...$6cc32821e9371a1c$var$LAST_KEYS
];
var $6cc32821e9371a1c$var$SUB_OPEN_KEYS = {
  ltr: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowRight"
  ],
  rtl: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowLeft"
  ]
};
var $6cc32821e9371a1c$var$SUB_CLOSE_KEYS = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
};
var $6cc32821e9371a1c$var$MENU_NAME = "Menu";
var [$6cc32821e9371a1c$var$Collection, $6cc32821e9371a1c$var$useCollection, $6cc32821e9371a1c$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($6cc32821e9371a1c$var$MENU_NAME);
var [$6cc32821e9371a1c$var$createMenuContext, $6cc32821e9371a1c$export$4027731b685e72eb] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6cc32821e9371a1c$var$MENU_NAME, [
  $6cc32821e9371a1c$var$createCollectionScope,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
var $6cc32821e9371a1c$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var $6cc32821e9371a1c$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var [$6cc32821e9371a1c$var$MenuProvider, $6cc32821e9371a1c$var$useMenuContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
var [$6cc32821e9371a1c$var$MenuRootProvider, $6cc32821e9371a1c$var$useMenuRootContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
var $6cc32821e9371a1c$export$d9b273488cd8ce6f = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const [content, setContent] = (0, import_react14.useState)(null);
  const isUsingKeyboardRef = (0, import_react14.useRef)(false);
  const handleOpenChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onOpenChange);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  (0, import_react14.useEffect)(() => {
    const handleKeyDown = () => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, {
        capture: true,
        once: true
      });
      document.addEventListener("pointermove", handlePointer, {
        capture: true,
        once: true
      });
    };
    const handlePointer = () => isUsingKeyboardRef.current = false;
    document.addEventListener("keydown", handleKeyDown, {
      capture: true
    });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, {
        capture: true
      });
      document.removeEventListener("pointerdown", handlePointer, {
        capture: true
      });
      document.removeEventListener("pointermove", handlePointer, {
        capture: true
      });
    };
  }, []);
  return /* @__PURE__ */ (0, import_react14.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$MenuProvider, {
    scope: __scopeMenu,
    open,
    onOpenChange: handleOpenChange,
    content,
    onContentChange: setContent
  }, /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$MenuRootProvider, {
    scope: __scopeMenu,
    onClose: (0, import_react14.useCallback)(
      () => handleOpenChange(false),
      [
        handleOpenChange
      ]
    ),
    isUsingKeyboardRef,
    dir: direction,
    modal
  }, children)));
};
var $6cc32821e9371a1c$export$9fa5ebd18bee4d43 = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...anchorProps } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  return /* @__PURE__ */ (0, import_react14.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({}, popperScope, anchorProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$var$PORTAL_NAME = "MenuPortal";
var [$6cc32821e9371a1c$var$PortalProvider, $6cc32821e9371a1c$var$usePortalContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, {
  forceMount: void 0
});
var $6cc32821e9371a1c$export$793392f970497feb = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, __scopeMenu);
  return /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$PortalProvider, {
    scope: __scopeMenu,
    forceMount
  }, /* @__PURE__ */ (0, import_react14.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react14.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
var $6cc32821e9371a1c$var$CONTENT_NAME = "MenuContent";
var [$6cc32821e9371a1c$var$MenuContentProvider, $6cc32821e9371a1c$var$useMenuContentContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$CONTENT_NAME);
var $6cc32821e9371a1c$export$479f0f2f71193efe = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ (0, import_react14.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, rootContext.modal ? /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$MenuRootContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$MenuRootContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })))));
});
var $6cc32821e9371a1c$var$MenuRootContentModal = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const ref = (0, import_react14.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react14.useEffect)(() => {
    const content = ref.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: context.open,
    disableOutsideScroll: true,
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    ),
    onDismiss: () => context.onOpenChange(false)
  }));
});
var $6cc32821e9371a1c$var$MenuRootContentNonModal = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    onDismiss: () => context.onOpenChange(false)
  }));
});
var $6cc32821e9371a1c$var$MenuContentImpl = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const getItems = $6cc32821e9371a1c$var$useCollection(__scopeMenu);
  const [currentItemId, setCurrentItemId] = (0, import_react14.useState)(null);
  const contentRef = (0, import_react14.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef, context.onContentChange);
  const timerRef = (0, import_react14.useRef)(0);
  const searchRef = (0, import_react14.useRef)("");
  const pointerGraceTimerRef = (0, import_react14.useRef)(0);
  const pointerGraceIntentRef = (0, import_react14.useRef)(null);
  const pointerDirRef = (0, import_react14.useRef)("right");
  const lastPointerXRef = (0, import_react14.useRef)(0);
  const ScrollLockWrapper = disableOutsideScroll ? Combination_default : import_react14.Fragment;
  const scrollLockWrapperProps = disableOutsideScroll ? {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  } : void 0;
  const handleTypeaheadSearch = (key) => {
    var _items$find, _items$find2;
    const search = searchRef.current + key;
    const items = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = document.activeElement;
    const currentMatch = (_items$find = items.find(
      (item) => item.ref.current === currentItem
    )) === null || _items$find === void 0 ? void 0 : _items$find.textValue;
    const values = items.map(
      (item) => item.textValue
    );
    const nextMatch = $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch);
    const newItem = (_items$find2 = items.find(
      (item) => item.textValue === nextMatch
    )) === null || _items$find2 === void 0 ? void 0 : _items$find2.ref.current;
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(
          () => updateSearch(""),
          1e3
        );
    })(search);
    if (newItem)
      setTimeout(
        () => newItem.focus()
      );
  };
  (0, import_react14.useEffect)(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  const isPointerMovingToSubmenu = (0, import_react14.useCallback)((event) => {
    var _pointerGraceIntentRe, _pointerGraceIntentRe2;
    const isMovingTowards = pointerDirRef.current === ((_pointerGraceIntentRe = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe === void 0 ? void 0 : _pointerGraceIntentRe.side);
    return isMovingTowards && $6cc32821e9371a1c$var$isPointerInGraceArea(event, (_pointerGraceIntentRe2 = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe2 === void 0 ? void 0 : _pointerGraceIntentRe2.area);
  }, []);
  return /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$MenuContentProvider, {
    scope: __scopeMenu,
    searchRef,
    onItemEnter: (0, import_react14.useCallback)((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    onItemLeave: (0, import_react14.useCallback)((event) => {
      var _contentRef$current;
      if (isPointerMovingToSubmenu(event))
        return;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
      setCurrentItemId(null);
    }, [
      isPointerMovingToSubmenu
    ]),
    onTriggerLeave: (0, import_react14.useCallback)((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    pointerGraceTimerRef,
    onPointerGraceIntentChange: (0, import_react14.useCallback)((intent) => {
      pointerGraceIntentRef.current = intent;
    }, [])
  }, /* @__PURE__ */ (0, import_react14.createElement)(ScrollLockWrapper, scrollLockWrapperProps, /* @__PURE__ */ (0, import_react14.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    trapped: trapFocus,
    onMountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onOpenAutoFocus, (event) => {
      var _contentRef$current2;
      event.preventDefault();
      (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 || _contentRef$current2.focus();
    }),
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react14.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss
  }, /* @__PURE__ */ (0, import_react14.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    dir: rootContext.dir,
    orientation: "vertical",
    loop,
    currentTabStopId: currentItemId,
    onCurrentTabStopIdChange: setCurrentItemId,
    onEntryFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onEntryFocus, (event) => {
      if (!rootContext.isUsingKeyboardRef.current)
        event.preventDefault();
    })
  }), /* @__PURE__ */ (0, import_react14.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open),
    "data-radix-menu-content": "",
    dir: rootContext.dir
  }, popperScope, contentProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...contentProps.style
    },
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
      const target = event.target;
      const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      const isCharacterKey = event.key.length === 1;
      if (isKeyDownInside) {
        if (event.key === "Tab")
          event.preventDefault();
        if (!isModifierKey && isCharacterKey)
          handleTypeaheadSearch(event.key);
      }
      const content = contentRef.current;
      if (event.target !== content)
        return;
      if (!$6cc32821e9371a1c$var$FIRST_LAST_KEYS.includes(event.key))
        return;
      event.preventDefault();
      const items = getItems().filter(
        (item) => !item.disabled
      );
      const candidateNodes = items.map(
        (item) => item.ref.current
      );
      if ($6cc32821e9371a1c$var$LAST_KEYS.includes(event.key))
        candidateNodes.reverse();
      $6cc32821e9371a1c$var$focusFirst(candidateNodes);
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, (event) => {
      if (!event.currentTarget.contains(event.target)) {
        window.clearTimeout(timerRef.current);
        searchRef.current = "";
      }
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      const target = event.target;
      const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
      if (event.currentTarget.contains(target) && pointerXHasChanged) {
        const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
        pointerDirRef.current = newDir;
        lastPointerXRef.current = event.clientX;
      }
    }))
  })))))));
});
var $6cc32821e9371a1c$export$dd37bec0e8a99143 = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...labelProps } = props;
  return /* @__PURE__ */ (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, labelProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$var$ITEM_NAME = "MenuItem";
var $6cc32821e9371a1c$var$ITEM_SELECT = "menu.itemSelect";
var $6cc32821e9371a1c$export$2ce376c2cc3355c8 = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { disabled = false, onSelect, ...itemProps } = props;
  const ref = (0, import_react14.useRef)(null);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const isPointerDownRef = (0, import_react14.useRef)(false);
  const handleSelect = () => {
    const menuItem = ref.current;
    if (!disabled && menuItem) {
      const itemSelectEvent = new CustomEvent($6cc32821e9371a1c$var$ITEM_SELECT, {
        bubbles: true,
        cancelable: true
      });
      menuItem.addEventListener(
        $6cc32821e9371a1c$var$ITEM_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(menuItem, itemSelectEvent);
      if (itemSelectEvent.defaultPrevented)
        isPointerDownRef.current = false;
      else
        rootContext.onClose();
    }
  };
  return /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$MenuItemImpl, _extends({}, itemProps, {
    ref: composedRefs,
    disabled,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, handleSelect),
    onPointerDown: (event) => {
      var _props$onPointerDown;
      (_props$onPointerDown = props.onPointerDown) === null || _props$onPointerDown === void 0 || _props$onPointerDown.call(props, event);
      isPointerDownRef.current = true;
    },
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
      var _event$currentTarget;
      if (!isPointerDownRef.current)
        (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || _event$currentTarget.click();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SELECTION_KEYS.includes(event.key)) {
        event.currentTarget.click();
        event.preventDefault();
      }
    })
  }));
});
var $6cc32821e9371a1c$var$MenuItemImpl = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, __scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const ref = (0, import_react14.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [isFocused, setIsFocused] = (0, import_react14.useState)(false);
  const [textContent, setTextContent] = (0, import_react14.useState)("");
  (0, import_react14.useEffect)(() => {
    const menuItem = ref.current;
    if (menuItem) {
      var _menuItem$textContent;
      setTextContent(((_menuItem$textContent = menuItem.textContent) !== null && _menuItem$textContent !== void 0 ? _menuItem$textContent : "").trim());
    }
  }, [
    itemProps.children
  ]);
  return /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$Collection.ItemSlot, {
    scope: __scopeMenu,
    disabled,
    textValue: textValue !== null && textValue !== void 0 ? textValue : textContent
  }, /* @__PURE__ */ (0, import_react14.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled
  }), /* @__PURE__ */ (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "menuitem",
    "data-highlighted": isFocused ? "" : void 0,
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0
  }, itemProps, {
    ref: composedRefs,
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      if (disabled)
        contentContext.onItemLeave(event);
      else {
        contentContext.onItemEnter(event);
        if (!event.defaultPrevented) {
          const item = event.currentTarget;
          item.focus();
        }
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse(
      (event) => contentContext.onItemLeave(event)
    )),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => setIsFocused(true)
    ),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsFocused(false)
    )
  }))));
});
var $6cc32821e9371a1c$export$f6f243521332502d = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
  return /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
    role: "menuitemcheckbox",
    "aria-checked": $6cc32821e9371a1c$var$isIndeterminate(checked) ? "mixed" : checked
  }, checkboxItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      checkboxItemProps.onSelect,
      () => onCheckedChange === null || onCheckedChange === void 0 ? void 0 : onCheckedChange($6cc32821e9371a1c$var$isIndeterminate(checked) ? true : !checked),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
var $6cc32821e9371a1c$var$RADIO_GROUP_NAME = "MenuRadioGroup";
var [$6cc32821e9371a1c$var$RadioGroupProvider, $6cc32821e9371a1c$var$useRadioGroupContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$RADIO_GROUP_NAME, {
  value: void 0,
  onValueChange: () => {
  }
});
var $6cc32821e9371a1c$var$RADIO_ITEM_NAME = "MenuRadioItem";
var $6cc32821e9371a1c$export$69bd225e9817f6d0 = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { value, ...radioItemProps } = props;
  const context = $6cc32821e9371a1c$var$useRadioGroupContext($6cc32821e9371a1c$var$RADIO_ITEM_NAME, props.__scopeMenu);
  const checked = value === context.value;
  return /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
    role: "menuitemradio",
    "aria-checked": checked
  }, radioItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(radioItemProps.onSelect, () => {
      var _context$onValueChang;
      return (_context$onValueChang = context.onValueChange) === null || _context$onValueChang === void 0 ? void 0 : _context$onValueChang.call(context, value);
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
var $6cc32821e9371a1c$var$ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [$6cc32821e9371a1c$var$ItemIndicatorProvider, $6cc32821e9371a1c$var$useItemIndicatorContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, {
  checked: false
});
var $6cc32821e9371a1c$export$a2593e23056970a3 = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
  const indicatorContext = $6cc32821e9371a1c$var$useItemIndicatorContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, __scopeMenu);
  return /* @__PURE__ */ (0, import_react14.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $6cc32821e9371a1c$var$isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true
  }, /* @__PURE__ */ (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, itemIndicatorProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(indicatorContext.checked)
  })));
});
var $6cc32821e9371a1c$export$1cec7dcdd713e220 = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...separatorProps } = props;
  return /* @__PURE__ */ (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "separator",
    "aria-orientation": "horizontal"
  }, separatorProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$var$SUB_NAME = "MenuSub";
var [$6cc32821e9371a1c$var$MenuSubProvider, $6cc32821e9371a1c$var$useMenuSubContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$SUB_NAME);
var $6cc32821e9371a1c$var$SUB_TRIGGER_NAME = "MenuSubTrigger";
var $6cc32821e9371a1c$export$5fbbb3ba7297405f = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const openTimerRef = (0, import_react14.useRef)(null);
  const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
  const scope = {
    __scopeMenu: props.__scopeMenu
  };
  const clearOpenTimer = (0, import_react14.useCallback)(() => {
    if (openTimerRef.current)
      window.clearTimeout(openTimerRef.current);
    openTimerRef.current = null;
  }, []);
  (0, import_react14.useEffect)(
    () => clearOpenTimer,
    [
      clearOpenTimer
    ]
  );
  (0, import_react14.useEffect)(() => {
    const pointerGraceTimer = pointerGraceTimerRef.current;
    return () => {
      window.clearTimeout(pointerGraceTimer);
      onPointerGraceIntentChange(null);
    };
  }, [
    pointerGraceTimerRef,
    onPointerGraceIntentChange
  ]);
  return /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$export$9fa5ebd18bee4d43, _extends({
    asChild: true
  }, scope), /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$MenuItemImpl, _extends({
    id: subContext.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": subContext.contentId,
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open)
  }, props, {
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, subContext.onTriggerChange),
    onClick: (event) => {
      var _props$onClick;
      (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, event);
      if (props.disabled || event.defaultPrevented)
        return;
      event.currentTarget.focus();
      if (!context.open)
        context.onOpenChange(true);
    },
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      contentContext.onItemEnter(event);
      if (event.defaultPrevented)
        return;
      if (!props.disabled && !context.open && !openTimerRef.current) {
        contentContext.onPointerGraceIntentChange(null);
        openTimerRef.current = window.setTimeout(() => {
          context.onOpenChange(true);
          clearOpenTimer();
        }, 100);
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse((event) => {
      var _context$content;
      clearOpenTimer();
      const contentRect = (_context$content = context.content) === null || _context$content === void 0 ? void 0 : _context$content.getBoundingClientRect();
      if (contentRect) {
        var _context$content2;
        const side = (_context$content2 = context.content) === null || _context$content2 === void 0 ? void 0 : _context$content2.dataset.side;
        const rightSide = side === "right";
        const bleed = rightSide ? -5 : 5;
        const contentNearEdge = contentRect[rightSide ? "left" : "right"];
        const contentFarEdge = contentRect[rightSide ? "right" : "left"];
        contentContext.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: event.clientX + bleed,
              y: event.clientY
            },
            {
              x: contentNearEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.bottom
            },
            {
              x: contentNearEdge,
              y: contentRect.bottom
            }
          ],
          side
        });
        window.clearTimeout(pointerGraceTimerRef.current);
        pointerGraceTimerRef.current = window.setTimeout(
          () => contentContext.onPointerGraceIntentChange(null),
          300
        );
      } else {
        contentContext.onTriggerLeave(event);
        if (event.defaultPrevented)
          return;
        contentContext.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (props.disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
        var _context$content3;
        context.onOpenChange(true);
        (_context$content3 = context.content) === null || _context$content3 === void 0 || _context$content3.focus();
        event.preventDefault();
      }
    })
  })));
});
var $6cc32821e9371a1c$var$SUB_CONTENT_NAME = "MenuSubContent";
var $6cc32821e9371a1c$export$e7142ab31822bde6 = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...subContentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_CONTENT_NAME, props.__scopeMenu);
  const ref = (0, import_react14.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  return /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ (0, import_react14.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ (0, import_react14.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({
    id: subContext.contentId,
    "aria-labelledby": subContext.triggerId
  }, subContentProps, {
    ref: composedRefs,
    align: "start",
    side: rootContext.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    trapFocus: false,
    onOpenAutoFocus: (event) => {
      var _ref$current;
      if (rootContext.isUsingKeyboardRef.current)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
      event.preventDefault();
    },
    onCloseAutoFocus: (event) => event.preventDefault(),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      if (event.target !== subContext.trigger)
        context.onOpenChange(false);
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      rootContext.onClose();
      event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isKeyDownInside = event.currentTarget.contains(event.target);
      const isCloseKey = $6cc32821e9371a1c$var$SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
      if (isKeyDownInside && isCloseKey) {
        var _subContext$trigger;
        context.onOpenChange(false);
        (_subContext$trigger = subContext.trigger) === null || _subContext$trigger === void 0 || _subContext$trigger.focus();
        event.preventDefault();
      }
    })
  })))));
});
function $6cc32821e9371a1c$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $6cc32821e9371a1c$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $6cc32821e9371a1c$var$getCheckedState(checked) {
  return $6cc32821e9371a1c$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function $6cc32821e9371a1c$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $6cc32821e9371a1c$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index) => array[(startIndex + index) % array.length]
  );
}
function $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every(
    (char) => char === search[0]
  );
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = $6cc32821e9371a1c$var$wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter(
      (v) => v !== currentMatch
    );
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function $6cc32821e9371a1c$var$isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i2 = 0, j = polygon.length - 1; i2 < polygon.length; j = i2++) {
    const xi = polygon[i2].x;
    const yi = polygon[i2].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function $6cc32821e9371a1c$var$isPointerInGraceArea(event, area) {
  if (!area)
    return false;
  const cursorPos = {
    x: event.clientX,
    y: event.clientY
  };
  return $6cc32821e9371a1c$var$isPointInPolygon(cursorPos, area);
}
function $6cc32821e9371a1c$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $6cc32821e9371a1c$export$be92b6f5f03c0fe9 = $6cc32821e9371a1c$export$d9b273488cd8ce6f;
var $6cc32821e9371a1c$export$b688253958b8dfe7 = $6cc32821e9371a1c$export$9fa5ebd18bee4d43;
var $6cc32821e9371a1c$export$602eac185826482c = $6cc32821e9371a1c$export$793392f970497feb;
var $6cc32821e9371a1c$export$7c6e2c02157bb7d2 = $6cc32821e9371a1c$export$479f0f2f71193efe;
var $6cc32821e9371a1c$export$b04be29aa201d4f5 = $6cc32821e9371a1c$export$dd37bec0e8a99143;
var $6cc32821e9371a1c$export$6d08773d2e66f8f2 = $6cc32821e9371a1c$export$2ce376c2cc3355c8;
var $6cc32821e9371a1c$export$16ce288f89fa631c = $6cc32821e9371a1c$export$f6f243521332502d;
var $6cc32821e9371a1c$export$371ab307eab489c0 = $6cc32821e9371a1c$export$69bd225e9817f6d0;
var $6cc32821e9371a1c$export$c3468e2714d175fa = $6cc32821e9371a1c$export$a2593e23056970a3;
var $6cc32821e9371a1c$export$1ff3c3f08ae963c0 = $6cc32821e9371a1c$export$1cec7dcdd713e220;
var $6cc32821e9371a1c$export$2ea8a7a591ac5eac = $6cc32821e9371a1c$export$5fbbb3ba7297405f;
var $6cc32821e9371a1c$export$6d4de93b380beddf = $6cc32821e9371a1c$export$e7142ab31822bde6;

// node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.0.6_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@1_rzwmxklxrxzo7vy7kou5wtzkre/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var $d08ef79370b62062$var$DROPDOWN_MENU_NAME = "DropdownMenu";
var [$d08ef79370b62062$var$createDropdownMenuContext, $d08ef79370b62062$export$c0623cd925aeb687] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d08ef79370b62062$var$DROPDOWN_MENU_NAME, [
  $6cc32821e9371a1c$export$4027731b685e72eb
]);
var $d08ef79370b62062$var$useMenuScope = $6cc32821e9371a1c$export$4027731b685e72eb();
var [$d08ef79370b62062$var$DropdownMenuProvider, $d08ef79370b62062$var$useDropdownMenuContext] = $d08ef79370b62062$var$createDropdownMenuContext($d08ef79370b62062$var$DROPDOWN_MENU_NAME);
var $d08ef79370b62062$export$e44a253a59704894 = (props) => {
  const { __scopeDropdownMenu, children, dir, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const triggerRef = (0, import_react15.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react15.createElement)($d08ef79370b62062$var$DropdownMenuProvider, {
    scope: __scopeDropdownMenu,
    triggerId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react15.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, /* @__PURE__ */ (0, import_react15.createElement)($6cc32821e9371a1c$export$be92b6f5f03c0fe9, _extends2({}, menuScope, {
    open,
    onOpenChange: setOpen,
    dir,
    modal
  }), children));
};
var $d08ef79370b62062$var$TRIGGER_NAME = "DropdownMenuTrigger";
var $d08ef79370b62062$export$d2469213b3befba9 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
  const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$TRIGGER_NAME, __scopeDropdownMenu);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react15.createElement)($6cc32821e9371a1c$export$b688253958b8dfe7, _extends2({
    asChild: true
  }, menuScope), /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends2({
    type: "button",
    id: context.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": context.open ? context.contentId : void 0,
    "data-state": context.open ? "open" : "closed",
    "data-disabled": disabled ? "" : void 0,
    disabled
  }, triggerProps, {
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, context.triggerRef),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
      if (!disabled && event.button === 0 && event.ctrlKey === false) {
        context.onOpenToggle();
        if (!context.open)
          event.preventDefault();
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (disabled)
        return;
      if ([
        "Enter",
        " "
      ].includes(event.key))
        context.onOpenToggle();
      if (event.key === "ArrowDown")
        context.onOpenChange(true);
      if ([
        "Enter",
        " ",
        "ArrowDown"
      ].includes(event.key))
        event.preventDefault();
    })
  })));
});
var $d08ef79370b62062$export$cd369b4d4d54efc9 = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react15.createElement)($6cc32821e9371a1c$export$602eac185826482c, _extends2({}, menuScope, portalProps));
};
var $d08ef79370b62062$var$CONTENT_NAME = "DropdownMenuContent";
var $d08ef79370b62062$export$6e76d93a37c01248 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...contentProps } = props;
  const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$CONTENT_NAME, __scopeDropdownMenu);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const hasInteractedOutsideRef = (0, import_react15.useRef)(false);
  return /* @__PURE__ */ (0, import_react15.createElement)($6cc32821e9371a1c$export$7c6e2c02157bb7d2, _extends2({
    id: context.contentId,
    "aria-labelledby": context.triggerId
  }, menuScope, contentProps, {
    ref: forwardedRef,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      if (!hasInteractedOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
      hasInteractedOutsideRef.current = false;
      event.preventDefault();
    }),
    onInteractOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onInteractOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (!context.modal || isRightClick)
        hasInteractedOutsideRef.current = true;
    }),
    style: {
      ...props.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
var $d08ef79370b62062$export$76e48c5b57f24495 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...labelProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react15.createElement)($6cc32821e9371a1c$export$b04be29aa201d4f5, _extends2({}, menuScope, labelProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$ed97964d1871885d = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react15.createElement)($6cc32821e9371a1c$export$6d08773d2e66f8f2, _extends2({}, menuScope, itemProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$53a69729da201fa9 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react15.createElement)($6cc32821e9371a1c$export$16ce288f89fa631c, _extends2({}, menuScope, checkboxItemProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$e4f69b41b1637536 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react15.createElement)($6cc32821e9371a1c$export$371ab307eab489c0, _extends2({}, menuScope, radioItemProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$42355ae145153fb6 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react15.createElement)($6cc32821e9371a1c$export$c3468e2714d175fa, _extends2({}, menuScope, itemIndicatorProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$da160178fd3bc7e9 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react15.createElement)($6cc32821e9371a1c$export$1ff3c3f08ae963c0, _extends2({}, menuScope, separatorProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$21dcb7ec56f874cf = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react15.createElement)($6cc32821e9371a1c$export$2ea8a7a591ac5eac, _extends2({}, menuScope, subTriggerProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$f34ec8bc2482cc5f = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react15.createElement)($6cc32821e9371a1c$export$6d4de93b380beddf, _extends2({}, menuScope, subContentProps, {
    ref: forwardedRef,
    style: {
      ...props.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
var $d08ef79370b62062$export$be92b6f5f03c0fe9 = $d08ef79370b62062$export$e44a253a59704894;
var $d08ef79370b62062$export$41fb9f06171c75f4 = $d08ef79370b62062$export$d2469213b3befba9;
var $d08ef79370b62062$export$602eac185826482c = $d08ef79370b62062$export$cd369b4d4d54efc9;
var $d08ef79370b62062$export$7c6e2c02157bb7d2 = $d08ef79370b62062$export$6e76d93a37c01248;
var $d08ef79370b62062$export$b04be29aa201d4f5 = $d08ef79370b62062$export$76e48c5b57f24495;
var $d08ef79370b62062$export$6d08773d2e66f8f2 = $d08ef79370b62062$export$ed97964d1871885d;
var $d08ef79370b62062$export$16ce288f89fa631c = $d08ef79370b62062$export$53a69729da201fa9;
var $d08ef79370b62062$export$371ab307eab489c0 = $d08ef79370b62062$export$e4f69b41b1637536;
var $d08ef79370b62062$export$c3468e2714d175fa = $d08ef79370b62062$export$42355ae145153fb6;
var $d08ef79370b62062$export$1ff3c3f08ae963c0 = $d08ef79370b62062$export$da160178fd3bc7e9;
var $d08ef79370b62062$export$2ea8a7a591ac5eac = $d08ef79370b62062$export$21dcb7ec56f874cf;
var $d08ef79370b62062$export$6d4de93b380beddf = $d08ef79370b62062$export$f34ec8bc2482cc5f;

// app/components/ui/dropdown-menu.tsx
var React8 = __toESM(require_react(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/dropdown-menu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/dropdown-menu.tsx"
  );
  import.meta.hot.lastModified = "1701799646826.7534";
}
var DropdownMenu = $d08ef79370b62062$export$be92b6f5f03c0fe9;
var DropdownMenuTrigger = $d08ef79370b62062$export$41fb9f06171c75f4;
var DropdownMenuSubTrigger = React8.forwardRef(_c20 = ({
  className,
  inset,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($d08ef79370b62062$export$2ea8a7a591ac5eac, { ref, className: cn("flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className), ...props, children: [
  children,
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "ml-auto h-4 w-4", children: "\u25B6\uFE0F" }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 41,
    columnNumber: 5
  })
] }, void 0, true, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 39,
  columnNumber: 12
}));
_c25 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = $d08ef79370b62062$export$2ea8a7a591ac5eac.displayName;
var DropdownMenuSubContent = React8.forwardRef(_c32 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($d08ef79370b62062$export$6d4de93b380beddf, { ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 52,
  columnNumber: 12
}));
_c42 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = $d08ef79370b62062$export$6d4de93b380beddf.displayName;
var DropdownMenuContent = React8.forwardRef(_c52 = ({
  className,
  sideOffset = 4,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($d08ef79370b62062$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($d08ef79370b62062$export$7c6e2c02157bb7d2, { ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), sideOffset, ...props }, void 0, false, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 64,
  columnNumber: 5
}) }, void 0, false, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 63,
  columnNumber: 12
}));
_c62 = DropdownMenuContent;
DropdownMenuContent.displayName = $d08ef79370b62062$export$7c6e2c02157bb7d2.displayName;
var DropdownMenuItem = React8.forwardRef(_c72 = ({
  className,
  inset,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($d08ef79370b62062$export$6d08773d2e66f8f2, { ref, className: cn("relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 76,
  columnNumber: 12
}));
_c82 = DropdownMenuItem;
DropdownMenuItem.displayName = $d08ef79370b62062$export$6d08773d2e66f8f2.displayName;
var DropdownMenuCheckboxItem = React8.forwardRef(_c92 = ({
  className,
  children,
  checked,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($d08ef79370b62062$export$16ce288f89fa631c, { ref, checked, className: cn("relative flex select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($d08ef79370b62062$export$c3468e2714d175fa, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "h-4 w-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { viewBox: "0 0 8 8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M1,4 L3,6 L7,2", fill: "none", stroke: "black", strokeWidth: "1" }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 93,
    columnNumber: 13
  }) }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 92,
    columnNumber: 11
  }) }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 91,
    columnNumber: 9
  }) }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 90,
    columnNumber: 7
  }) }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 89,
    columnNumber: 5
  }),
  children
] }, void 0, true, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 88,
  columnNumber: 12
}));
_c102 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = $d08ef79370b62062$export$16ce288f89fa631c.displayName;
var DropdownMenuRadioItem = React8.forwardRef(_c112 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($d08ef79370b62062$export$371ab307eab489c0, { ref, className: cn("relative flex select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($d08ef79370b62062$export$c3468e2714d175fa, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "h-2 w-2", children: "\u26AA" }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 113,
    columnNumber: 9
  }) }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 112,
    columnNumber: 7
  }) }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 111,
    columnNumber: 5
  }),
  children
] }, void 0, true, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 110,
  columnNumber: 12
}));
_c122 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = $d08ef79370b62062$export$371ab307eab489c0.displayName;
var DropdownMenuLabel = React8.forwardRef(_c132 = ({
  className,
  inset,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($d08ef79370b62062$export$b04be29aa201d4f5, { ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 128,
  columnNumber: 12
}));
_c142 = DropdownMenuLabel;
DropdownMenuLabel.displayName = $d08ef79370b62062$export$b04be29aa201d4f5.displayName;
var DropdownMenuSeparator = React8.forwardRef(_c152 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)($d08ef79370b62062$export$1ff3c3f08ae963c0, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }, void 0, false, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 138,
  columnNumber: 12
}));
_c162 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = $d08ef79370b62062$export$1ff3c3f08ae963c0.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: cn("ml-auto text-xs tracking-widest opacity-60", className), ...props }, void 0, false, {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 149,
    columnNumber: 10
  });
};
_c172 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var _c20;
var _c25;
var _c32;
var _c42;
var _c52;
var _c62;
var _c72;
var _c82;
var _c92;
var _c102;
var _c112;
var _c122;
var _c132;
var _c142;
var _c152;
var _c162;
var _c172;
$RefreshReg$(_c20, "DropdownMenuSubTrigger$React.forwardRef");
$RefreshReg$(_c25, "DropdownMenuSubTrigger");
$RefreshReg$(_c32, "DropdownMenuSubContent$React.forwardRef");
$RefreshReg$(_c42, "DropdownMenuSubContent");
$RefreshReg$(_c52, "DropdownMenuContent$React.forwardRef");
$RefreshReg$(_c62, "DropdownMenuContent");
$RefreshReg$(_c72, "DropdownMenuItem$React.forwardRef");
$RefreshReg$(_c82, "DropdownMenuItem");
$RefreshReg$(_c92, "DropdownMenuCheckboxItem$React.forwardRef");
$RefreshReg$(_c102, "DropdownMenuCheckboxItem");
$RefreshReg$(_c112, "DropdownMenuRadioItem$React.forwardRef");
$RefreshReg$(_c122, "DropdownMenuRadioItem");
$RefreshReg$(_c132, "DropdownMenuLabel$React.forwardRef");
$RefreshReg$(_c142, "DropdownMenuLabel");
$RefreshReg$(_c152, "DropdownMenuSeparator$React.forwardRef");
$RefreshReg$(_c162, "DropdownMenuSeparator");
$RefreshReg$(_c172, "DropdownMenuShortcut");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/user-dropdown.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/user-dropdown.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/user-dropdown.tsx"
  );
  import.meta.hot.lastModified = "1713392235803.0688";
}
function UserDropdown({
  isSidebarOpen
}) {
  _s();
  const user = useUser();
  const submit = useSubmit();
  const formRef = (0, import_react17.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenuTrigger, { asChild: true, className: "self-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { asChild: true, className: "rounded-e-sm rounded-s-none border-l-2 border-l-transparent ring-0 ring-offset-0 focus-within:ring-0 hover:border-l-cyan-600 focus-visible:ring-0 data-[state=open]:border-l-cyan-600", variant: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      NavLink,
      {
        className: "flex items-center gap-2",
        to: (0, import_remix_routes.$path)("/profile"),
        onClick: (e) => e.preventDefault(),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { alt: user.name ?? user.username, className: "h-6 w-6 rounded-full object-cover", src: getUserImgSrc(user.image?.id) }, void 0, false, {
            fileName: "app/components/user-dropdown.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this),
          isSidebarOpen ? user.name : null
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/user-dropdown.tsx",
        lineNumber: 40,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/user-dropdown.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/user-dropdown.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenuContent, { align: "start", className: "bg-slate-50 p-0.5 text-slate-800 shadow-sm", sideOffset: 8, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DropdownMenuItem, { asChild: true, className: "focus:bg-slate-200 focus:text-slate-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { prefetch: "intent", to: (0, import_remix_routes.$path)("/profile"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Icon, { className: "text-body-md", name: "avatar", children: "Profile" }, void 0, false, {
        fileName: "app/components/user-dropdown.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/user-dropdown.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/user-dropdown.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        DropdownMenuItem,
        {
          asChild: true,
          className: "cursor-pointer focus:bg-slate-200 focus:text-slate-800",
          onSelect: (event) => {
            event.preventDefault();
            submit(formRef.current);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Form, { ref: formRef, action: (0, import_remix_routes.$path)("/logout"), method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Icon, { className: "text-body-md", name: "exit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", children: "Logout" }, void 0, false, {
            fileName: "app/components/user-dropdown.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/user-dropdown.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/user-dropdown.tsx",
            lineNumber: 63,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/user-dropdown.tsx",
          lineNumber: 57,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/user-dropdown.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user-dropdown.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s(UserDropdown, "GiYd3mw2i4e4eBV25q+8c1DvoZc=", false, function() {
  return [useUser, useSubmit];
});
_c21 = UserDropdown;
var _c21;
$RefreshReg$(_c21, "UserDropdown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/theme/schema.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/theme/schema.ts"
  );
  import.meta.hot.lastModified = "1703118587911.373";
}
var ThemeFormSchema = z.object({
  theme: z.enum(["system", "light", "dark"])
});

// app/theme/useOptimisticThemeMode.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/theme/useOptimisticThemeMode.ts"
  );
  import.meta.hot.lastModified = "1714002011839.3516";
}
var useOptimisticThemeMode = () => {
  const fetchers = useFetchers();
  const themeFetcher = fetchers.find((f) => f.formAction === "/");
  if (themeFetcher && themeFetcher.formData) {
    const submission = parseWithZod(themeFetcher.formData, {
      schema: ThemeFormSchema
    });
    if (submission.status === "success") {
      return submission.value.theme;
    }
  }
};

// app/theme/theme-switch.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/theme/theme-switch.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/theme/theme-switch.tsx"
  );
  import.meta.hot.lastModified = "1714036023355.771";
}
var ThemeSwitch = ({
  userPreference
}) => {
  _s2();
  const fetcher = useFetcher();
  const optimisticMode = useOptimisticThemeMode();
  const [form] = useForm({
    id: "theme-switch",
    lastResult: fetcher.data?.result
  });
  const mode = optimisticMode ?? userPreference ?? "system";
  let nextMode;
  switch (mode) {
    case "system":
      nextMode = "light";
      break;
    case "light":
      nextMode = "dark";
      break;
    case "dark":
      nextMode = "system";
      break;
  }
  const modeLabel = {
    light: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Icon, { name: "sun", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "sr-only", children: "Light" }, void 0, false, {
      fileName: "app/theme/theme-switch.tsx",
      lineNumber: 52,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "app/theme/theme-switch.tsx",
      lineNumber: 51,
      columnNumber: 12
    }),
    dark: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Icon, { name: "moon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "sr-only", children: "Dark" }, void 0, false, {
      fileName: "app/theme/theme-switch.tsx",
      lineNumber: 55,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "app/theme/theme-switch.tsx",
      lineNumber: 54,
      columnNumber: 11
    }),
    system: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Icon, { name: "laptop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "sr-only", children: "System" }, void 0, false, {
      fileName: "app/theme/theme-switch.tsx",
      lineNumber: 58,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "app/theme/theme-switch.tsx",
      lineNumber: 57,
      columnNumber: 13
    })
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(fetcher.Form, { method: "POST", ...getFormProps(form), className: "self-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { name: "theme", type: "hidden", value: nextMode }, void 0, false, {
      fileName: "app/theme/theme-switch.tsx",
      lineNumber: 62,
      columnNumber: 7
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "flex h-8 w-8 cursor-pointer items-center justify-center text-slate-300 hover:animate-pulse hover:text-slate-200", name: "intent", type: "submit", value: "switchTheme", children: modeLabel[mode] }, void 0, false, {
      fileName: "app/theme/theme-switch.tsx",
      lineNumber: 64,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "app/theme/theme-switch.tsx",
      lineNumber: 63,
      columnNumber: 7
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
      fileName: "app/theme/theme-switch.tsx",
      lineNumber: 68,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "app/theme/theme-switch.tsx",
    lineNumber: 61,
    columnNumber: 10
  });
};
_s2(ThemeSwitch, "lfzhhNw+JhkCoU55cu4OxAcf0dU=", false, function() {
  return [useFetcher, useOptimisticThemeMode, useForm];
});
_c26 = ThemeSwitch;
var _c26;
$RefreshReg$(_c26, "ThemeSwitch");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/sidebar/sidebar.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/sidebar/sidebar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/sidebar/sidebar.tsx"
  );
  import.meta.hot.lastModified = "1714036033285.5017";
}
var Sidebar = _s3((0, import_react23.forwardRef)(_c27 = _s3(({
  children,
  userPreference
}, ref) => {
  _s3();
  const fetcher = useFetcher();
  const data = useRouteLoaderData("root");
  const optimisticMode = useOptimisticSidebarState();
  const [form] = useForm({
    id: "sidebar-toggle",
    lastResult: fetcher.data?.result
  });
  const mode = optimisticMode ?? userPreference ?? "collapsed";
  let nextMode;
  switch (mode) {
    case "expanded":
      nextMode = "collapsed";
      break;
    case "collapsed":
      nextMode = "expanded";
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Stack, { ref, className: cn("group/sidebar relative h-full gap-6 bg-sky-900 px-3 py-4 transition-all duration-200 ease-in-out", mode === "expanded" ? "max-w-48" : "max-w-20"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Stack, { as: "header", className: "w-full", grow: 0, wrap: "nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Inline, { className: "w-full", justify: "between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Logo" }, void 0, false, {
        fileName: "app/components/sidebar/sidebar.tsx",
        lineNumber: 62,
        columnNumber: 15
      }) }, void 0, false, {
        fileName: "app/components/sidebar/sidebar.tsx",
        lineNumber: 61,
        columnNumber: 13
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(fetcher.Form, { method: "POST", ...getFormProps(form), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { name: "sidebarState", type: "hidden", value: nextMode }, void 0, false, {
          fileName: "app/components/sidebar/sidebar.tsx",
          lineNumber: 65,
          columnNumber: 15
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: "ml-3 flex rounded-sm border border-slate-300 bg-sky-950 p-1 opacity-0 transition-all duration-200 hover:border-slate-200 group-hover/sidebar:opacity-100", name: "intent", type: "submit", value: "toggleSidebar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Icon, { className: "text-slate-300 group-hover/sidebar:text-slate-200", name: mode === "expanded" ? "rail-right-open" : "rail-right-close", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "sr-only", children: mode === "expanded" ? "Collapse sidebar" : "Expand sidebar" }, void 0, false, {
          fileName: "app/components/sidebar/sidebar.tsx",
          lineNumber: 68,
          columnNumber: 19
        }) }, void 0, false, {
          fileName: "app/components/sidebar/sidebar.tsx",
          lineNumber: 67,
          columnNumber: 17
        }) }, void 0, false, {
          fileName: "app/components/sidebar/sidebar.tsx",
          lineNumber: 66,
          columnNumber: 15
        })
      ] }, void 0, true, {
        fileName: "app/components/sidebar/sidebar.tsx",
        lineNumber: 64,
        columnNumber: 13
      })
    ] }, void 0, true, {
      fileName: "app/components/sidebar/sidebar.tsx",
      lineNumber: 60,
      columnNumber: 11
    }) }, void 0, false, {
      fileName: "app/components/sidebar/sidebar.tsx",
      lineNumber: 59,
      columnNumber: 9
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(NavMenu, { mode }, void 0, false, {
      fileName: "app/components/sidebar/sidebar.tsx",
      lineNumber: 76,
      columnNumber: 9
    }),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(UserDropdown, { isSidebarOpen: userPreference === "expanded" }, void 0, false, {
      fileName: "app/components/sidebar/sidebar.tsx",
      lineNumber: 78,
      columnNumber: 9
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ThemeSwitch, { userPreference: data?.requestInfo.userPrefs.theme }, void 0, false, {
      fileName: "app/components/sidebar/sidebar.tsx",
      lineNumber: 79,
      columnNumber: 9
    })
  ] }, void 0, true, {
    fileName: "app/components/sidebar/sidebar.tsx",
    lineNumber: 58,
    columnNumber: 10
  });
}, "nQGbQ4vXuqdUQ4tjTTvaik2jReE=", false, function() {
  return [useFetcher, useRouteLoaderData, useOptimisticSidebarState, useForm];
})), "nQGbQ4vXuqdUQ4tjTTvaik2jReE=", false, function() {
  return [useFetcher, useRouteLoaderData, useOptimisticSidebarState, useForm];
});
_c28 = Sidebar;
Sidebar.displayName = "Sidebar";
var _c27;
var _c28;
$RefreshReg$(_c27, "Sidebar$forwardRef");
$RefreshReg$(_c28, "Sidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/toaster.tsx
var import_react27 = __toESM(require_react(), 1);

// node_modules/.pnpm/sonner@1.4.41_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/sonner/dist/index.mjs
var import_react24 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);
var import_react25 = __toESM(require_react(), 1);
var import_react26 = __toESM(require_react(), 1);
var { entries: ke, setPrototypeOf: Ne, isFrozen: Ze, getPrototypeOf: Je, getOwnPropertyDescriptor: Qe } = Object;
var { freeze: O, seal: X, create: Be } = Object;
var { apply: ce, construct: de } = typeof Reflect != "undefined" && Reflect;
O || (O = function(n) {
  return n;
});
X || (X = function(n) {
  return n;
});
ce || (ce = function(n, t, a) {
  return n.apply(t, a);
});
de || (de = function(n, t) {
  return new n(...t);
});
var Zt = F(Array.prototype.forEach);
var De = F(Array.prototype.pop);
var jt = F(Array.prototype.push);
var te = F(String.prototype.toLowerCase);
var ae = F(String.prototype.toString);
var Ie = F(String.prototype.match);
var $t = F(String.prototype.replace);
var tn = F(String.prototype.indexOf);
var en = F(String.prototype.trim);
var Q = F(Object.prototype.hasOwnProperty);
var U = F(RegExp.prototype.test);
var Vt = nn(TypeError);
function F(r) {
  return function(n) {
    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), g = 1; g < t; g++)
      a[g - 1] = arguments[g];
    return ce(r, n, a);
  };
}
function nn(r) {
  return function() {
    for (var n = arguments.length, t = new Array(n), a = 0; a < n; a++)
      t[a] = arguments[a];
    return de(r, t);
  };
}
function d(r, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : te;
  Ne && Ne(r, null);
  let a = n.length;
  for (; a--; ) {
    let g = n[a];
    if (typeof g == "string") {
      let E = t(g);
      E !== g && (Ze(n) || (n[a] = E), g = E);
    }
    r[g] = true;
  }
  return r;
}
function on(r) {
  for (let n = 0; n < r.length; n++)
    Q(r, n) || (r[n] = null);
  return r;
}
function Nt(r) {
  let n = Be(null);
  for (let [t, a] of ke(r))
    Q(r, t) && (Array.isArray(a) ? n[t] = on(a) : a && typeof a == "object" && a.constructor === Object ? n[t] = Nt(a) : n[t] = a);
  return n;
}
function Jt(r, n) {
  for (; r !== null; ) {
    let a = Qe(r, n);
    if (a) {
      if (a.get)
        return F(a.get);
      if (typeof a.value == "function")
        return F(a.value);
    }
    r = Je(r);
  }
  function t() {
    return null;
  }
  return t;
}
var Ce = O(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var re = O(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var se = O(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var an = O(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var ie = O(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var rn = O(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var Le = O(["#text"]);
var Me = O(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
var le = O(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var Pe = O(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var Qt = O(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var sn = X(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var ln = X(/<%[\w\W]*|[\w\W]*%>/gm);
var cn2 = X(/\${[\w\W]*}/gm);
var dn = X(/^data-[\-\w.\u00B7-\uFFFF]/);
var un = X(/^aria-[\-\w]+$/);
var He = X(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var fn = X(/^(?:\w+script|data):/i);
var mn = X(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var Ue = X(/^html$/i);
var pn = X(/^[a-z][a-z\d]*(-[a-z\d]+)+$/i);
var Oe = Object.freeze({ __proto__: null, MUSTACHE_EXPR: sn, ERB_EXPR: ln, TMPLIT_EXPR: cn2, DATA_ATTR: dn, ARIA_ATTR: un, IS_ALLOWED_URI: He, IS_SCRIPT_OR_DATA: fn, ATTR_WHITESPACE: mn, DOCTYPE_NAME: Ue, CUSTOM_ELEMENT: pn });
var gn = function() {
  return typeof window == "undefined" ? null : window;
};
var hn = function(n, t) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let a = null, g = "data-tt-policy-suffix";
  t && t.hasAttribute(g) && (a = t.getAttribute(g));
  let E = "dompurify" + (a ? "#" + a : "");
  try {
    return n.createPolicy(E, { createHTML(y) {
      return y;
    }, createScriptURL(y) {
      return y;
    } });
  } catch (y) {
    return console.warn("TrustedTypes policy " + E + " could not be created."), null;
  }
};
function Fe() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gn(), n = (l) => Fe(l);
  if (n.version = "3.0.10", n.removed = [], !r || !r.document || r.document.nodeType !== 9)
    return n.isSupported = false, n;
  let { document: t } = r, a = t, g = a.currentScript, { DocumentFragment: E, HTMLTemplateElement: y, Node: A, Element: T, NodeFilter: mt, NamedNodeMap: wt = r.NamedNodeMap || r.MozNamedAttrMap, HTMLFormElement: Dt, DOMParser: It, trustedTypes: f } = r, st = T.prototype, Ct = Jt(st, "cloneNode"), Bt = Jt(st, "nextSibling"), Ht = Jt(st, "childNodes"), pt = Jt(st, "parentNode");
  if (typeof y == "function") {
    let l = t.createElement("template");
    l.content && l.content.ownerDocument && (t = l.content.ownerDocument);
  }
  let R, it = "", { implementation: k, createNodeIterator: lt, createDocumentFragment: m, getElementsByTagName: z2 } = t, { importNode: Ut } = a, P = {};
  n.isSupported = typeof ke == "function" && typeof pt == "function" && k && k.createHTMLDocument !== void 0;
  let { MUSTACHE_EXPR: N, ERB_EXPR: q, TMPLIT_EXPR: gt, DATA_ATTR: Lt, ARIA_ATTR: ct, IS_SCRIPT_OR_DATA: et, ATTR_WHITESPACE: xt, CUSTOM_ELEMENT: W } = Oe, { IS_ALLOWED_URI: nt } = Oe, v = null, b = d({}, [...Ce, ...re, ...se, ...ie, ...Le]), u = null, D = d({}, [...Me, ...le, ...Pe, ...Qt]), p = Object.seal(Be(null, { tagNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, attributeNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, allowCustomizedBuiltInElements: { writable: true, configurable: false, enumerable: true, value: false } })), C = null, w = null, ht = true, I = true, Y = false, Tt = true, bt = false, G = false, Ft = false, Mt = false, ot = false, Z = false, vt = false, dt = true, zt = false, ee = "user-content-", Pt = true, yt = false, Et = {}, at = null, J = d({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Kt = null, Wt = d({}, ["audio", "video", "img", "source", "image", "track"]), Ot = null, Yt = d({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), At = "http://www.w3.org/1998/Math/MathML", _t = "http://www.w3.org/2000/svg", j = "http://www.w3.org/1999/xhtml", ut = j, kt = false, c = null, _ = d({}, [At, _t, j], ae), S = null, $ = ["application/xhtml+xml", "text/html"], V = "text/html", h = null, rt = null, qt = t.createElement("form"), pe = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, ne = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(rt && rt === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = Nt(e), S = $.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? V : e.PARSER_MEDIA_TYPE, h = S === "application/xhtml+xml" ? ae : te, v = Q(e, "ALLOWED_TAGS") ? d({}, e.ALLOWED_TAGS, h) : b, u = Q(e, "ALLOWED_ATTR") ? d({}, e.ALLOWED_ATTR, h) : D, c = Q(e, "ALLOWED_NAMESPACES") ? d({}, e.ALLOWED_NAMESPACES, ae) : _, Ot = Q(e, "ADD_URI_SAFE_ATTR") ? d(Nt(Yt), e.ADD_URI_SAFE_ATTR, h) : Yt, Kt = Q(e, "ADD_DATA_URI_TAGS") ? d(Nt(Wt), e.ADD_DATA_URI_TAGS, h) : Wt, at = Q(e, "FORBID_CONTENTS") ? d({}, e.FORBID_CONTENTS, h) : J, C = Q(e, "FORBID_TAGS") ? d({}, e.FORBID_TAGS, h) : {}, w = Q(e, "FORBID_ATTR") ? d({}, e.FORBID_ATTR, h) : {}, Et = Q(e, "USE_PROFILES") ? e.USE_PROFILES : false, ht = e.ALLOW_ARIA_ATTR !== false, I = e.ALLOW_DATA_ATTR !== false, Y = e.ALLOW_UNKNOWN_PROTOCOLS || false, Tt = e.ALLOW_SELF_CLOSE_IN_ATTR !== false, bt = e.SAFE_FOR_TEMPLATES || false, G = e.WHOLE_DOCUMENT || false, ot = e.RETURN_DOM || false, Z = e.RETURN_DOM_FRAGMENT || false, vt = e.RETURN_TRUSTED_TYPE || false, Mt = e.FORCE_BODY || false, dt = e.SANITIZE_DOM !== false, zt = e.SANITIZE_NAMED_PROPS || false, Pt = e.KEEP_CONTENT !== false, yt = e.IN_PLACE || false, nt = e.ALLOWED_URI_REGEXP || He, ut = e.NAMESPACE || j, p = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && pe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (p.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && pe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (p.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (p.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), bt && (I = false), Z && (ot = true), Et && (v = d({}, Le), u = [], Et.html === true && (d(v, Ce), d(u, Me)), Et.svg === true && (d(v, re), d(u, le), d(u, Qt)), Et.svgFilters === true && (d(v, se), d(u, le), d(u, Qt)), Et.mathMl === true && (d(v, ie), d(u, Pe), d(u, Qt))), e.ADD_TAGS && (v === b && (v = Nt(v)), d(v, e.ADD_TAGS, h)), e.ADD_ATTR && (u === D && (u = Nt(u)), d(u, e.ADD_ATTR, h)), e.ADD_URI_SAFE_ATTR && d(Ot, e.ADD_URI_SAFE_ATTR, h), e.FORBID_CONTENTS && (at === J && (at = Nt(at)), d(at, e.FORBID_CONTENTS, h)), Pt && (v["#text"] = true), G && d(v, ["html", "head", "body"]), v.table && (d(v, ["tbody"]), delete C.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Vt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Vt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        R = e.TRUSTED_TYPES_POLICY, it = R.createHTML("");
      } else
        R === void 0 && (R = hn(f, g)), R !== null && typeof it == "string" && (it = R.createHTML(""));
      O && O(e), rt = e;
    }
  }, ge = d({}, ["mi", "mo", "mn", "ms", "mtext"]), he = d({}, ["foreignobject", "desc", "title", "annotation-xml"]), Ve = d({}, ["title", "style", "font", "a", "script"]), Te = d({}, [...re, ...se, ...an]), be = d({}, [...ie, ...rn]), Xe = function(e) {
    let o = pt(e);
    (!o || !o.tagName) && (o = { namespaceURI: ut, tagName: "template" });
    let s = te(e.tagName), x = te(o.tagName);
    return c[e.namespaceURI] ? e.namespaceURI === _t ? o.namespaceURI === j ? s === "svg" : o.namespaceURI === At ? s === "svg" && (x === "annotation-xml" || ge[x]) : !!Te[s] : e.namespaceURI === At ? o.namespaceURI === j ? s === "math" : o.namespaceURI === _t ? s === "math" && he[x] : !!be[s] : e.namespaceURI === j ? o.namespaceURI === _t && !he[x] || o.namespaceURI === At && !ge[x] ? false : !be[s] && (Ve[s] || !Te[s]) : !!(S === "application/xhtml+xml" && c[e.namespaceURI]) : false;
  }, St = function(e) {
    jt(n.removed, { element: e });
    try {
      e.parentNode.removeChild(e);
    } catch (o) {
      e.remove();
    }
  }, oe = function(e, o) {
    try {
      jt(n.removed, { attribute: o.getAttributeNode(e), from: o });
    } catch (s) {
      jt(n.removed, { attribute: null, from: o });
    }
    if (o.removeAttribute(e), e === "is" && !u[e])
      if (ot || Z)
        try {
          St(o);
        } catch (s) {
        }
      else
        try {
          o.setAttribute(e, "");
        } catch (s) {
        }
  }, ye = function(e) {
    let o = null, s = null;
    if (Mt)
      e = "<remove></remove>" + e;
    else {
      let M = Ie(e, /^[\r\n\t ]+/);
      s = M && M[0];
    }
    S === "application/xhtml+xml" && ut === j && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    let x = R ? R.createHTML(e) : e;
    if (ut === j)
      try {
        o = new It().parseFromString(x, S);
      } catch (M) {
      }
    if (!o || !o.documentElement) {
      o = k.createDocument(ut, "template", null);
      try {
        o.documentElement.innerHTML = kt ? it : x;
      } catch (M) {
      }
    }
    let L = o.body || o.documentElement;
    return e && s && L.insertBefore(t.createTextNode(s), L.childNodes[0] || null), ut === j ? z2.call(o, G ? "html" : "body")[0] : G ? o.documentElement : L;
  }, Ee = function(e) {
    return lt.call(e.ownerDocument || e, e, mt.SHOW_ELEMENT | mt.SHOW_COMMENT | mt.SHOW_TEXT | mt.SHOW_PROCESSING_INSTRUCTION, null);
  }, Ke = function(e) {
    return e instanceof Dt && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof wt) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, we = function(e) {
    return typeof A == "function" && e instanceof A;
  }, ft = function(e, o, s) {
    P[e] && Zt(P[e], (x) => {
      x.call(n, o, s, rt);
    });
  }, xe = function(e) {
    let o = null;
    if (ft("beforeSanitizeElements", e, null), Ke(e))
      return St(e), true;
    let s = h(e.nodeName);
    if (ft("uponSanitizeElement", e, { tagName: s, allowedTags: v }), e.hasChildNodes() && !we(e.firstElementChild) && U(/<[/\w]/g, e.innerHTML) && U(/<[/\w]/g, e.textContent))
      return St(e), true;
    if (!v[s] || C[s]) {
      if (!C[s] && Ae(s) && (p.tagNameCheck instanceof RegExp && U(p.tagNameCheck, s) || p.tagNameCheck instanceof Function && p.tagNameCheck(s)))
        return false;
      if (Pt && !at[s]) {
        let x = pt(e) || e.parentNode, L = Ht(e) || e.childNodes;
        if (L && x) {
          let M = L.length;
          for (let B = M - 1; B >= 0; --B)
            x.insertBefore(Ct(L[B], true), Bt(e));
        }
      }
      return St(e), true;
    }
    return e instanceof T && !Xe(e) || (s === "noscript" || s === "noembed" || s === "noframes") && U(/<\/no(script|embed|frames)/i, e.innerHTML) ? (St(e), true) : (bt && e.nodeType === 3 && (o = e.textContent, Zt([N, q, gt], (x) => {
      o = $t(o, x, " ");
    }), e.textContent !== o && (jt(n.removed, { element: e.cloneNode() }), e.textContent = o)), ft("afterSanitizeElements", e, null), false);
  }, ve = function(e, o, s) {
    if (dt && (o === "id" || o === "name") && (s in t || s in qt))
      return false;
    if (!(I && !w[o] && U(Lt, o))) {
      if (!(ht && U(ct, o))) {
        if (!u[o] || w[o]) {
          if (!(Ae(e) && (p.tagNameCheck instanceof RegExp && U(p.tagNameCheck, e) || p.tagNameCheck instanceof Function && p.tagNameCheck(e)) && (p.attributeNameCheck instanceof RegExp && U(p.attributeNameCheck, o) || p.attributeNameCheck instanceof Function && p.attributeNameCheck(o)) || o === "is" && p.allowCustomizedBuiltInElements && (p.tagNameCheck instanceof RegExp && U(p.tagNameCheck, s) || p.tagNameCheck instanceof Function && p.tagNameCheck(s))))
            return false;
        } else if (!Ot[o]) {
          if (!U(nt, $t(s, xt, ""))) {
            if (!((o === "src" || o === "xlink:href" || o === "href") && e !== "script" && tn(s, "data:") === 0 && Kt[e])) {
              if (!(Y && !U(et, $t(s, xt, "")))) {
                if (s)
                  return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, Ae = function(e) {
    return e !== "annotation-xml" && Ie(e, W);
  }, _e = function(e) {
    ft("beforeSanitizeAttributes", e, null);
    let { attributes: o } = e;
    if (!o)
      return;
    let s = { attrName: "", attrValue: "", keepAttr: true, allowedAttributes: u }, x = o.length;
    for (; x--; ) {
      let L = o[x], { name: M, namespaceURI: B, value: Rt } = L, Gt = h(M), H = M === "value" ? Rt : en(Rt);
      if (s.attrName = Gt, s.attrValue = H, s.keepAttr = true, s.forceKeepAttr = void 0, ft("uponSanitizeAttribute", e, s), H = s.attrValue, s.forceKeepAttr || (oe(M, e), !s.keepAttr))
        continue;
      if (!Tt && U(/\/>/i, H)) {
        oe(M, e);
        continue;
      }
      bt && Zt([N, q, gt], (Re) => {
        H = $t(H, Re, " ");
      });
      let Se = h(e.nodeName);
      if (ve(Se, Gt, H)) {
        if (zt && (Gt === "id" || Gt === "name") && (oe(M, e), H = ee + H), R && typeof f == "object" && typeof f.getAttributeType == "function" && !B)
          switch (f.getAttributeType(Se, Gt)) {
            case "TrustedHTML": {
              H = R.createHTML(H);
              break;
            }
            case "TrustedScriptURL": {
              H = R.createScriptURL(H);
              break;
            }
          }
        try {
          B ? e.setAttributeNS(B, M, H) : e.setAttribute(M, H), De(n.removed);
        } catch (Re) {
        }
      }
    }
    ft("afterSanitizeAttributes", e, null);
  }, qe = function l(e) {
    let o = null, s = Ee(e);
    for (ft("beforeSanitizeShadowDOM", e, null); o = s.nextNode(); )
      ft("uponSanitizeShadowNode", o, null), !xe(o) && (o.content instanceof E && l(o.content), _e(o));
    ft("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(l) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = null, s = null, x = null, L = null;
    if (kt = !l, kt && (l = "<!-->"), typeof l != "string" && !we(l))
      if (typeof l.toString == "function") {
        if (l = l.toString(), typeof l != "string")
          throw Vt("dirty is not a string, aborting");
      } else
        throw Vt("toString is not a function");
    if (!n.isSupported)
      return l;
    if (Ft || ne(e), n.removed = [], typeof l == "string" && (yt = false), yt) {
      if (l.nodeName) {
        let Rt = h(l.nodeName);
        if (!v[Rt] || C[Rt])
          throw Vt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (l instanceof A)
      o = ye("<!---->"), s = o.ownerDocument.importNode(l, true), s.nodeType === 1 && s.nodeName === "BODY" || s.nodeName === "HTML" ? o = s : o.appendChild(s);
    else {
      if (!ot && !bt && !G && l.indexOf("<") === -1)
        return R && vt ? R.createHTML(l) : l;
      if (o = ye(l), !o)
        return ot ? null : vt ? it : "";
    }
    o && Mt && St(o.firstChild);
    let M = Ee(yt ? l : o);
    for (; x = M.nextNode(); )
      xe(x) || (x.content instanceof E && qe(x.content), _e(x));
    if (yt)
      return l;
    if (ot) {
      if (Z)
        for (L = m.call(o.ownerDocument); o.firstChild; )
          L.appendChild(o.firstChild);
      else
        L = o;
      return (u.shadowroot || u.shadowrootmode) && (L = Ut.call(a, L, true)), L;
    }
    let B = G ? o.outerHTML : o.innerHTML;
    return G && v["!doctype"] && o.ownerDocument && o.ownerDocument.doctype && o.ownerDocument.doctype.name && U(Ue, o.ownerDocument.doctype.name) && (B = "<!DOCTYPE " + o.ownerDocument.doctype.name + `>
` + B), bt && Zt([N, q, gt], (Rt) => {
      B = $t(B, Rt, " ");
    }), R && vt ? R.createHTML(B) : B;
  }, n.setConfig = function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ne(l), Ft = true;
  }, n.clearConfig = function() {
    rt = null, Ft = false;
  }, n.isValidAttribute = function(l, e, o) {
    rt || ne({});
    let s = h(l), x = h(e);
    return ve(s, x, o);
  }, n.addHook = function(l, e) {
    typeof e == "function" && (P[l] = P[l] || [], jt(P[l], e));
  }, n.removeHook = function(l) {
    if (P[l])
      return De(P[l]);
  }, n.removeHooks = function(l) {
    P[l] && (P[l] = []);
  }, n.removeAllHooks = function() {
    P = {};
  }, n;
}
var ze = Fe();
var We = (r) => {
  switch (r) {
    case "success":
      return bn;
    case "info":
      return En;
    case "warning":
      return yn;
    case "error":
      return wn;
    default:
      return null;
  }
};
var Tn = Array(12).fill(0);
var Ye = ({ visible: r }) => import_react25.default.createElement("div", { className: "sonner-loading-wrapper", "data-visible": r }, import_react25.default.createElement("div", { className: "sonner-spinner" }, Tn.map((n, t) => import_react25.default.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${t}` }))));
var bn = import_react25.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react25.default.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" }));
var yn = import_react25.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, import_react25.default.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" }));
var En = import_react25.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react25.default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" }));
var wn = import_react25.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, import_react25.default.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }));
var je = () => {
  let [r, n] = import_react26.default.useState(false);
  return import_react26.default.useEffect(() => {
    let t = () => {
      n(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), r;
};
var ue = 1;
var fe = class {
  constructor() {
    this.subscribe = (n) => (this.subscribers.push(n), () => {
      let t = this.subscribers.indexOf(n);
      this.subscribers.splice(t, 1);
    });
    this.publish = (n) => {
      this.subscribers.forEach((t) => t(n));
    };
    this.addToast = (n) => {
      this.publish(n), this.toasts = [...this.toasts, n];
    };
    this.create = (n) => {
      var A;
      let { message: t, ...a } = n, g = typeof (n == null ? void 0 : n.id) == "number" || ((A = n.id) == null ? void 0 : A.length) > 0 ? n.id : ue++, E = this.toasts.find((T) => T.id === g), y = n.dismissible === void 0 ? true : n.dismissible;
      return E ? this.toasts = this.toasts.map((T) => T.id === g ? (this.publish({ ...T, ...n, id: g, title: t }), { ...T, ...n, id: g, dismissible: y, title: t }) : T) : this.addToast({ title: t, ...a, dismissible: y, id: g }), g;
    };
    this.dismiss = (n) => (n || this.toasts.forEach((t) => {
      this.subscribers.forEach((a) => a({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: n, dismiss: true })), n);
    this.message = (n, t) => this.create({ ...t, message: n });
    this.error = (n, t) => this.create({ ...t, message: n, type: "error" });
    this.success = (n, t) => this.create({ ...t, type: "success", message: n });
    this.info = (n, t) => this.create({ ...t, type: "info", message: n });
    this.warning = (n, t) => this.create({ ...t, type: "warning", message: n });
    this.loading = (n, t) => this.create({ ...t, type: "loading", message: n });
    this.promise = (n, t) => {
      if (!t)
        return;
      let a;
      t.loading !== void 0 && (a = this.create({ ...t, promise: n, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let g = n instanceof Promise ? n : n(), E = a !== void 0;
      return g.then((y) => {
        if (y && typeof y.ok == "boolean" && !y.ok) {
          E = false;
          let A = typeof t.error == "function" ? t.error(`HTTP error! status: ${y.status}`) : t.error, T = typeof t.description == "function" ? t.description(`HTTP error! status: ${y.status}`) : t.description;
          this.create({ id: a, type: "error", message: A, description: T });
        } else if (t.success !== void 0) {
          E = false;
          let A = typeof t.success == "function" ? t.success(y) : t.success, T = typeof t.description == "function" ? t.description(y) : t.description;
          this.create({ id: a, type: "success", message: A, description: T });
        }
      }).catch((y) => {
        if (t.error !== void 0) {
          E = false;
          let A = typeof t.error == "function" ? t.error(y) : t.error, T = typeof t.description == "function" ? t.description(y) : t.description;
          this.create({ id: a, type: "error", message: A, description: T });
        }
      }).finally(() => {
        var y;
        E && (this.dismiss(a), a = void 0), (y = t.finally) == null || y.call(t);
      }), a;
    };
    this.custom = (n, t) => {
      let a = (t == null ? void 0 : t.id) || ue++;
      return this.create({ jsx: n(a), id: a, ...t }), a;
    };
    this.subscribers = [], this.toasts = [];
  }
};
var K = new fe();
var xn = (r, n) => {
  let t = (n == null ? void 0 : n.id) || ue++;
  return K.addToast({ title: r, ...n, id: t }), t;
};
var vn = xn;
var An = Object.assign(vn, { success: K.success, info: K.info, warning: K.warning, error: K.error, custom: K.custom, message: K.message, promise: K.promise, dismiss: K.dismiss, loading: K.loading });
function me(r, { insertAt: n } = {}) {
  if (!r || typeof document == "undefined")
    return;
  let t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.type = "text/css", n === "top" && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r));
}
me(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Xt(r) {
  return r.label !== void 0 && typeof r.onClick == "function";
}
var Sn = 3;
var Rn = "32px";
var Nn = 4e3;
var Dn = 356;
var In = 14;
var Cn = 20;
var Ln = 200;
function Mn(...r) {
  return r.filter(Boolean).join(" ");
}
var Pn = (r) => {
  var Ot, Yt, At, _t, j, ut, kt;
  let { invert: n, toast: t, unstyled: a, interacting: g, setHeights: E, visibleToasts: y, heights: A, index: T, toasts: mt, expanded: wt, removeToast: Dt, closeButton: It, style: f, cancelButtonStyle: st, actionButtonStyle: Ct, className: Bt = "", descriptionClassName: Ht = "", duration: pt, position: R, gap: it, loadingIcon: k, expandByDefault: lt, classNames: m, icons: z2, closeButtonAriaLabel: Ut = "Close toast", pauseWhenPageIsHidden: P, cn: N } = r, [q, gt] = import_react24.default.useState(false), [Lt, ct] = import_react24.default.useState(false), [et, xt] = import_react24.default.useState(false), [W, nt] = import_react24.default.useState(false), [v, b] = import_react24.default.useState(0), [u, D] = import_react24.default.useState(0), p = import_react24.default.useRef(null), C = import_react24.default.useRef(null), w = T === 0, ht = T + 1 <= y, I = t.type, Y = t.dismissible !== false, Tt = t.className || "", bt = t.descriptionClassName || "", G = import_react24.default.useMemo(() => A.findIndex((c) => c.toastId === t.id) || 0, [A, t.id]), Ft = import_react24.default.useMemo(() => {
    var c;
    return (c = t.closeButton) != null ? c : It;
  }, [t.closeButton, It]), Mt = import_react24.default.useMemo(() => t.duration || pt || Nn, [t.duration, pt]), ot = import_react24.default.useRef(0), Z = import_react24.default.useRef(0), vt = import_react24.default.useRef(0), dt = import_react24.default.useRef(null), [zt, ee] = R.split("-"), Pt = import_react24.default.useMemo(() => A.reduce((c, _, S) => S >= G ? c : c + _.height, 0), [A, G]), yt = je(), Et = t.invert || n, at = I === "loading";
  Z.current = import_react24.default.useMemo(() => G * it + Pt, [G, Pt]), import_react24.default.useEffect(() => {
    gt(true);
  }, []), import_react24.default.useLayoutEffect(() => {
    if (!q)
      return;
    let c = C.current, _ = c.style.height;
    c.style.height = "auto";
    let S = c.getBoundingClientRect().height;
    c.style.height = _, D(S), E(($) => $.find((h) => h.toastId === t.id) ? $.map((h) => h.toastId === t.id ? { ...h, height: S } : h) : [{ toastId: t.id, height: S, position: t.position }, ...$]);
  }, [q, t.title, t.description, E, t.id]);
  let J = import_react24.default.useCallback(() => {
    ct(true), b(Z.current), E((c) => c.filter((_) => _.toastId !== t.id)), setTimeout(() => {
      Dt(t);
    }, Ln);
  }, [t, Dt, E, Z]);
  import_react24.default.useEffect(() => {
    if (t.promise && I === "loading" || t.duration === 1 / 0 || t.type === "loading")
      return;
    let c, _ = Mt;
    return wt || g || P && yt ? (() => {
      if (vt.current < ot.current) {
        let V = (/* @__PURE__ */ new Date()).getTime() - ot.current;
        _ = _ - V;
      }
      vt.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      _ !== 1 / 0 && (ot.current = (/* @__PURE__ */ new Date()).getTime(), c = setTimeout(() => {
        var V;
        (V = t.onAutoClose) == null || V.call(t, t), J();
      }, _));
    })(), () => clearTimeout(c);
  }, [wt, g, lt, t, Mt, J, t.promise, I, P, yt]), import_react24.default.useEffect(() => {
    let c = C.current;
    if (c) {
      let _ = c.getBoundingClientRect().height;
      return D(_), E((S) => [{ toastId: t.id, height: _, position: t.position }, ...S]), () => E((S) => S.filter(($) => $.toastId !== t.id));
    }
  }, [E, t.id]), import_react24.default.useEffect(() => {
    t.delete && J();
  }, [J, t.delete]);
  function Kt() {
    return z2 != null && z2.loading ? import_react24.default.createElement("div", { className: "sonner-loader", "data-visible": I === "loading" }, z2.loading) : k ? import_react24.default.createElement("div", { className: "sonner-loader", "data-visible": I === "loading" }, k) : import_react24.default.createElement(Ye, { visible: I === "loading" });
  }
  function Wt(c) {
    return { __html: ze.sanitize(c) };
  }
  return import_react24.default.createElement("li", { "aria-live": t.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: C, className: N(Bt, Tt, m == null ? void 0 : m.toast, (Ot = t == null ? void 0 : t.classNames) == null ? void 0 : Ot.toast, m == null ? void 0 : m.default, m == null ? void 0 : m[I], (Yt = t == null ? void 0 : t.classNames) == null ? void 0 : Yt[I]), "data-sonner-toast": "", "data-styled": !(t.jsx || t.unstyled || a), "data-mounted": q, "data-promise": !!t.promise, "data-removed": Lt, "data-visible": ht, "data-y-position": zt, "data-x-position": ee, "data-index": T, "data-front": w, "data-swiping": et, "data-dismissible": Y, "data-type": I, "data-invert": Et, "data-swipe-out": W, "data-expanded": !!(wt || lt && q), style: { "--index": T, "--toasts-before": T, "--z-index": mt.length - T, "--offset": `${Lt ? v : Z.current}px`, "--initial-height": lt ? "auto" : `${u}px`, ...f, ...t.style }, onPointerDown: (c) => {
    at || !Y || (p.current = /* @__PURE__ */ new Date(), b(Z.current), c.target.setPointerCapture(c.pointerId), c.target.tagName !== "BUTTON" && (xt(true), dt.current = { x: c.clientX, y: c.clientY }));
  }, onPointerUp: () => {
    var $, V, h, rt;
    if (W || !Y)
      return;
    dt.current = null;
    let c = Number((($ = C.current) == null ? void 0 : $.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), _ = (/* @__PURE__ */ new Date()).getTime() - ((V = p.current) == null ? void 0 : V.getTime()), S = Math.abs(c) / _;
    if (Math.abs(c) >= Cn || S > 0.11) {
      b(Z.current), (h = t.onDismiss) == null || h.call(t, t), J(), nt(true);
      return;
    }
    (rt = C.current) == null || rt.style.setProperty("--swipe-amount", "0px"), xt(false);
  }, onPointerMove: (c) => {
    var qt;
    if (!dt.current || !Y)
      return;
    let _ = c.clientY - dt.current.y, S = c.clientX - dt.current.x, V = (zt === "top" ? Math.min : Math.max)(0, _), h = c.pointerType === "touch" ? 10 : 2;
    Math.abs(V) > h ? (qt = C.current) == null || qt.style.setProperty("--swipe-amount", `${_}px`) : Math.abs(S) > h && (dt.current = null);
  } }, Ft && !t.jsx ? import_react24.default.createElement("button", { "aria-label": Ut, "data-disabled": at, "data-close-button": true, onClick: at || !Y ? () => {
  } : () => {
    var c;
    J(), (c = t.onDismiss) == null || c.call(t, t);
  }, className: N(m == null ? void 0 : m.closeButton, (At = t == null ? void 0 : t.classNames) == null ? void 0 : At.closeButton) }, import_react24.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, import_react24.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), import_react24.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, t.jsx || import_react24.default.isValidElement(t.title) ? t.jsx || t.title : import_react24.default.createElement(import_react24.default.Fragment, null, I || t.icon || t.promise ? import_react24.default.createElement("div", { "data-icon": "", className: N(m == null ? void 0 : m.icon) }, t.promise || t.type === "loading" && !t.icon ? t.icon || Kt() : null, t.type !== "loading" ? t.icon || (z2 == null ? void 0 : z2[I]) || We(I) : null) : null, import_react24.default.createElement("div", { "data-content": "", className: N(m == null ? void 0 : m.content) }, import_react24.default.createElement("div", { "data-title": "", className: N(m == null ? void 0 : m.title, (_t = t == null ? void 0 : t.classNames) == null ? void 0 : _t.title), dangerouslySetInnerHTML: Wt(t.title) }), t.description ? import_react24.default.createElement("div", { "data-description": "", className: N(Ht, bt, m == null ? void 0 : m.description, (j = t == null ? void 0 : t.classNames) == null ? void 0 : j.description), dangerouslySetInnerHTML: Wt(t.description) }) : null), import_react24.default.isValidElement(t.cancel) ? t.cancel : t.cancel && Xt(t.cancel) ? import_react24.default.createElement("button", { "data-button": true, "data-cancel": true, style: t.cancelButtonStyle || st, onClick: (c) => {
    Xt(t.cancel) && Y && (J(), t.cancel.onClick(c));
  }, className: N(m == null ? void 0 : m.cancelButton, (ut = t == null ? void 0 : t.classNames) == null ? void 0 : ut.cancelButton) }, t.cancel.label) : null, import_react24.default.isValidElement(t.action) ? t.action : t.action && Xt(t.action) ? import_react24.default.createElement("button", { "data-button": "", style: t.actionButtonStyle || Ct, onClick: (c) => {
    Xt(t.action) && (t.action.onClick(c), !c.defaultPrevented && J());
  }, className: N(m == null ? void 0 : m.actionButton, (kt = t == null ? void 0 : t.classNames) == null ? void 0 : kt.actionButton) }, t.action.label) : null));
};
function $e() {
  if (typeof window == "undefined" || typeof document == "undefined")
    return "ltr";
  let r = document.documentElement.getAttribute("dir");
  return r === "auto" || !r ? window.getComputedStyle(document.documentElement).direction : r;
}
var Jn = (r) => {
  let { invert: n, position: t = "bottom-right", hotkey: a = ["altKey", "KeyT"], expand: g, closeButton: E, className: y, offset: A, theme: T = "light", richColors: mt, duration: wt, style: Dt, visibleToasts: It = Sn, toastOptions: f, dir: st = $e(), gap: Ct = In, loadingIcon: Bt, icons: Ht, containerAriaLabel: pt = "Notifications", pauseWhenPageIsHidden: R, cn: it = Mn } = r, [k, lt] = import_react24.default.useState([]), m = import_react24.default.useMemo(() => Array.from(new Set([t].concat(k.filter((b) => b.position).map((b) => b.position)))), [k, t]), [z2, Ut] = import_react24.default.useState([]), [P, N] = import_react24.default.useState(false), [q, gt] = import_react24.default.useState(false), [Lt, ct] = import_react24.default.useState(T !== "system" ? T : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), et = import_react24.default.useRef(null), xt = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), W = import_react24.default.useRef(null), nt = import_react24.default.useRef(false), v = import_react24.default.useCallback((b) => lt((u) => u.filter(({ id: D }) => D !== b.id)), []);
  return import_react24.default.useEffect(() => K.subscribe((b) => {
    if (b.dismiss) {
      lt((u) => u.map((D) => D.id === b.id ? { ...D, delete: true } : D));
      return;
    }
    setTimeout(() => {
      import_react_dom2.default.flushSync(() => {
        lt((u) => {
          let D = u.findIndex((p) => p.id === b.id);
          return D !== -1 ? [...u.slice(0, D), { ...u[D], ...b }, ...u.slice(D + 1)] : [b, ...u];
        });
      });
    });
  }), []), import_react24.default.useEffect(() => {
    if (T !== "system") {
      ct(T);
      return;
    }
    T === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ct("dark") : ct("light")), typeof window != "undefined" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: b }) => {
      ct(b ? "dark" : "light");
    });
  }, [T]), import_react24.default.useEffect(() => {
    k.length <= 1 && N(false);
  }, [k]), import_react24.default.useEffect(() => {
    let b = (u) => {
      var p, C;
      a.every((w) => u[w] || u.code === w) && (N(true), (p = et.current) == null || p.focus()), u.code === "Escape" && (document.activeElement === et.current || (C = et.current) != null && C.contains(document.activeElement)) && N(false);
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [a]), import_react24.default.useEffect(() => {
    if (et.current)
      return () => {
        W.current && (W.current.focus({ preventScroll: true }), W.current = null, nt.current = false);
      };
  }, [et.current]), k.length ? import_react24.default.createElement("section", { "aria-label": `${pt} ${xt}`, tabIndex: -1 }, m.map((b, u) => {
    var C;
    let [D, p] = b.split("-");
    return import_react24.default.createElement("ol", { key: b, dir: st === "auto" ? $e() : st, tabIndex: -1, ref: et, className: y, "data-sonner-toaster": true, "data-theme": Lt, "data-rich-colors": mt, "data-y-position": D, "data-x-position": p, style: { "--front-toast-height": `${((C = z2[0]) == null ? void 0 : C.height) || 0}px`, "--offset": typeof A == "number" ? `${A}px` : A || Rn, "--width": `${Dn}px`, "--gap": `${Ct}px`, ...Dt }, onBlur: (w) => {
      nt.current && !w.currentTarget.contains(w.relatedTarget) && (nt.current = false, W.current && (W.current.focus({ preventScroll: true }), W.current = null));
    }, onFocus: (w) => {
      w.target instanceof HTMLElement && w.target.dataset.dismissible === "false" || nt.current || (nt.current = true, W.current = w.relatedTarget);
    }, onMouseEnter: () => N(true), onMouseMove: () => N(true), onMouseLeave: () => {
      q || N(false);
    }, onPointerDown: (w) => {
      w.target instanceof HTMLElement && w.target.dataset.dismissible === "false" || gt(true);
    }, onPointerUp: () => gt(false) }, k.filter((w) => !w.position && u === 0 || w.position === b).map((w, ht) => {
      var I, Y;
      return import_react24.default.createElement(Pn, { key: w.id, icons: Ht, index: ht, toast: w, duration: (I = f == null ? void 0 : f.duration) != null ? I : wt, className: f == null ? void 0 : f.className, descriptionClassName: f == null ? void 0 : f.descriptionClassName, invert: n, visibleToasts: It, closeButton: (Y = f == null ? void 0 : f.closeButton) != null ? Y : E, interacting: q, position: b, style: f == null ? void 0 : f.style, unstyled: f == null ? void 0 : f.unstyled, classNames: f == null ? void 0 : f.classNames, cancelButtonStyle: f == null ? void 0 : f.cancelButtonStyle, actionButtonStyle: f == null ? void 0 : f.actionButtonStyle, removeToast: v, toasts: k.filter((Tt) => Tt.position == w.position), heights: z2.filter((Tt) => Tt.position == w.position), setHeights: Ut, expandByDefault: g, gap: Ct, loadingIcon: Bt, expanded: P, pauseWhenPageIsHidden: R, cn: it });
    }));
  })) : null;
};

// app/components/toaster.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/toaster.tsx"
  );
  import.meta.hot.lastModified = "1713696744363.585";
}
function useToast(toast) {
  (0, import_react27.useEffect)(() => {
    if (toast) {
      setTimeout(() => {
        An[toast.type](toast.title, {
          id: toast.id,
          description: toast.description
        });
      }, 0);
    }
  }, [toast]);
}

// app/components/ui/sonner.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/sonner.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/sonner.tsx"
  );
  import.meta.hot.lastModified = "1713696744363.8938";
}
var EpicToaster = ({
  theme,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Jn, { className: "toaster group", theme, toastOptions: {
    classNames: {
      toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
      description: "group-[.toast]:text-muted-foreground",
      actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
      cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
    }
  }, ...props }, void 0, false, {
    fileName: "app/components/ui/sonner.tsx",
    lineNumber: 26,
    columnNumber: 10
  });
};
_c29 = EpicToaster;
var _c29;
$RefreshReg$(_c29, "EpicToaster");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/.pnpm/@epic-web+client-hints@1.2.2/node_modules/@epic-web/client-hints/dist/index.js
function getHintUtils(hints) {
  function getCookieValue(cookieString, name) {
    const hint = hints[name];
    if (!hint) {
      throw new Error(`Unknown client hint: ${typeof name === "string" ? name : "Unknown"}`);
    }
    const value = cookieString.split(";").map((c) => c.trim()).find((c) => c.startsWith(hint.cookieName + "="))?.split("=")[1];
    return value ? decodeURIComponent(value) : null;
  }
  function getHints2(request) {
    const cookieString = typeof document !== "undefined" ? document.cookie : typeof request !== "undefined" ? request.headers.get("Cookie") ?? "" : "";
    return Object.entries(hints).reduce((acc, [name, hint]) => {
      const hintName = name;
      if ("transform" in hint) {
        acc[hintName] = hint.transform(getCookieValue(cookieString, hintName) ?? hint.fallback);
      } else {
        acc[hintName] = getCookieValue(cookieString, hintName) ?? hint.fallback;
      }
      return acc;
    }, {});
  }
  function getClientHintCheckScript() {
    return `
const cookies = document.cookie.split(';').map(c => c.trim()).reduce((acc, cur) => {
	const [key, value] = cur.split('=');
	acc[key] = value;
	return acc;
}, {});
let cookieChanged = false;
const hints = [
${Object.values(hints).map((hint) => {
      const cookieName = JSON.stringify(hint.cookieName);
      return `{ name: ${cookieName}, actual: String(${hint.getValueCode}), cookie: cookies[${cookieName}] }`;
    }).join(",\n")}
];
for (const hint of hints) {
	if (decodeURIComponent(hint.cookie) !== hint.actual) {
		cookieChanged = true;
		document.cookie = encodeURIComponent(hint.name) + '=' + encodeURIComponent(hint.actual) + '; Max-Age=31536000; path=/';
	}
}
// if the cookie changed, reload the page, unless the browser doesn't support
// cookies (in which case we would enter an infinite loop of reloads)
if (cookieChanged && navigator.cookieEnabled) {
	window.location.reload();
}
			`;
  }
  return { getHints: getHints2, getClientHintCheckScript };
}

// node_modules/.pnpm/@epic-web+client-hints@1.2.2/node_modules/@epic-web/client-hints/dist/color-scheme.js
var clientHint = {
  cookieName: "CH-prefers-color-scheme",
  getValueCode: `window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'`,
  fallback: "light",
  transform(value) {
    return value === "dark" ? "dark" : "light";
  }
};
function subscribeToSchemeChange(subscriber, cookieName = clientHint.cookieName) {
  const schemaMatch = window.matchMedia("(prefers-color-scheme: dark)");
  function handleThemeChange() {
    const value = schemaMatch.matches ? "dark" : "light";
    document.cookie = `${cookieName}=${value}; Max-Age=31536000; Path=/`;
    subscriber(value);
  }
  schemaMatch.addEventListener("change", handleThemeChange);
  return function cleanupSchemaChange() {
    schemaMatch.removeEventListener("change", handleThemeChange);
  };
}

// node_modules/.pnpm/@epic-web+client-hints@1.2.2/node_modules/@epic-web/client-hints/dist/time-zone.js
var clientHint2 = {
  cookieName: "CH-time-zone",
  getValueCode: "Intl.DateTimeFormat().resolvedOptions().timeZone",
  fallback: "UTC"
};

// app/utils/client-hints.tsx
var import_react30 = __toESM(require_react(), 1);

// app/utils/request-info.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/request-info.ts"
  );
  import.meta.hot.lastModified = "1702593291379.2449";
}
function useRequestInfo() {
  const data = useRouteLoaderData("root");
  invariant(data?.requestInfo, "No requestInfo found in root loader");
  return data.requestInfo;
}

// app/utils/client-hints.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/utils/client-hints.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/client-hints.tsx"
  );
  import.meta.hot.lastModified = "1702594613215.8708";
}
var hintsUtils = getHintUtils({
  theme: clientHint,
  timeZone: clientHint2
  // add other hints here
});
var {
  getHints
} = hintsUtils;
function useHints() {
  _s4();
  const requestInfo = useRequestInfo();
  return requestInfo.hints;
}
_s4(useHints, "7GAbGGZBfQ5CZ09LzgbRSVzv82k=", false, function() {
  return [useRequestInfo];
});
function ClientHintCheck({
  nonce
}) {
  _s22();
  const {
    revalidate
  } = useRevalidator();
  (0, import_react30.useEffect)(() => subscribeToSchemeChange(() => revalidate()), [revalidate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("script", { dangerouslySetInnerHTML: {
    __html: hintsUtils.getClientHintCheckScript()
  }, nonce }, void 0, false, {
    fileName: "app/utils/client-hints.tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}
_s22(ClientHintCheck, "L1dc0F01n381QK//sAnvnvJbeZg=", false, function() {
  return [useRevalidator];
});
_c30 = ClientHintCheck;
var _c30;
$RefreshReg$(_c30, "ClientHintCheck");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/layout/document.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/layout/document.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/layout/document.tsx"
  );
  import.meta.hot.lastModified = "1703118587910.588";
}
var Document = ({
  children,
  nonce,
  theme = "light",
  env = {}
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("html", { className: `${theme} h-full overflow-x-hidden`, lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ClientHintCheck, { nonce }, void 0, false, {
        fileName: "app/layout/document.tsx",
        lineNumber: 31,
        columnNumber: 9
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/layout/document.tsx",
        lineNumber: 32,
        columnNumber: 9
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/layout/document.tsx",
        lineNumber: 33,
        columnNumber: 9
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("meta", { content: "width=device-width,initial-scale=1", name: "viewport" }, void 0, false, {
        fileName: "app/layout/document.tsx",
        lineNumber: 34,
        columnNumber: 9
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/layout/document.tsx",
        lineNumber: 35,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "app/layout/document.tsx",
      lineNumber: 30,
      columnNumber: 7
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("body", { className: "bg-background text-foreground", children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("script", { dangerouslySetInnerHTML: {
        __html: `window.ENV = ${JSON.stringify(env)}`
      }, nonce }, void 0, false, {
        fileName: "app/layout/document.tsx",
        lineNumber: 39,
        columnNumber: 9
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ScrollRestoration, { nonce }, void 0, false, {
        fileName: "app/layout/document.tsx",
        lineNumber: 42,
        columnNumber: 9
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Scripts, { nonce }, void 0, false, {
        fileName: "app/layout/document.tsx",
        lineNumber: 43,
        columnNumber: 9
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(LiveReload, { nonce }, void 0, false, {
        fileName: "app/layout/document.tsx",
        lineNumber: 44,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "app/layout/document.tsx",
      lineNumber: 37,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "app/layout/document.tsx",
    lineNumber: 29,
    columnNumber: 10
  });
};
_c31 = Document;
var _c31;
$RefreshReg$(_c31, "Document");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_theme_server = __toESM(require_theme_server(), 1);

// app/theme/useTheme.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/theme/useTheme.ts"
  );
  import.meta.hot.lastModified = "1703118587911.9832";
}
var useTheme = () => {
  const hints = useHints();
  const requestInfo = useRequestInfo();
  const optimisticMode = useOptimisticThemeMode();
  if (optimisticMode) {
    return optimisticMode === "system" ? hints.theme : optimisticMode;
  }
  return requestInfo.userPrefs.theme ?? hints.theme;
};

// app/components/progress-bar.tsx
var import_react33 = __toESM(require_react(), 1);
var import_spin_delay = __toESM(require_dist(), 1);
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/progress-bar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/progress-bar.tsx"
  );
  import.meta.hot.lastModified = "1701799646825.8252";
}
function EpicProgress() {
  _s5();
  const transition = useNavigation();
  const busy = transition.state !== "idle";
  const delayedPending = (0, import_spin_delay.useSpinDelay)(busy, {
    delay: 600,
    minDuration: 400
  });
  const ref = (0, import_react33.useRef)(null);
  const [animationComplete, setAnimationComplete] = (0, import_react33.useState)(true);
  (0, import_react33.useEffect)(() => {
    if (!ref.current) {
      return;
    }
    if (delayedPending) {
      setAnimationComplete(false);
    }
    const animationPromises = ref.current.getAnimations().map(({
      finished
    }) => finished);
    void Promise.allSettled(animationPromises).then(() => {
      if (!delayedPending) {
        setAnimationComplete(true);
      }
    });
  }, [delayedPending]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { "aria-hidden": delayedPending ? void 0 : true, "aria-valuetext": delayedPending ? "Loading" : void 0, className: "fixed inset-x-0 top-0 z-50 h-[0.20rem] animate-pulse", role: "progressbar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { ref, className: cn("h-full w-0 bg-foreground duration-500 ease-in-out", transition.state === "idle" && (animationComplete ? "transition-none" : "w-full opacity-0 transition-all"), delayedPending && transition.state === "submitting" && "w-5/12", delayedPending && transition.state === "loading" && "w-8/12") }, void 0, false, {
      fileName: "app/components/progress-bar.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    delayedPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "absolute flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Icon, { "aria-hidden": true, className: "m-1 animate-spin text-foreground", name: "update", size: "md" }, void 0, false, {
      fileName: "app/components/progress-bar.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/progress-bar.tsx",
      lineNumber: 56,
      columnNumber: 25
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/progress-bar.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s5(EpicProgress, "RH18mmpAJ2Z/O9llHYG9E/G/F+A=", false, function() {
  return [useNavigation, import_spin_delay.useSpinDelay];
});
_c33 = EpicProgress;
var _c33;
$RefreshReg$(_c33, "EpicProgress");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/font.css
var font_default = "/build/_assets/font-FKG6JQSO.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LOKEM7ZB.css";

// app/root.tsx
var import_auth_server = __toESM(require_auth_server(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_env_server = __toESM(require_env_server(), 1);
var import_honeypot_server = __toESM(require_honeypot_server(), 1);

// app/utils/nonce-provider.ts
var React9 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/nonce-provider.ts"
  );
  import.meta.hot.lastModified = "1701599202991.3147";
}
var NonceContext = React9.createContext("");
var NonceProvider = NonceContext.Provider;
var useNonce = () => React9.useContext(NonceContext);

// app/root.tsx
var import_timing_server = __toESM(require_timing_server(), 1);
var import_toast_server = __toESM(require_toast_server(), 1);
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
var _s23 = $RefreshSig$();
var _s32 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => {
  return [
    // Preload svg sprite as a resource to avoid render blocking
    {
      rel: "preload",
      href: sprite_default,
      as: "image"
    },
    // Preload CSS as a resource to avoid render blocking
    {
      rel: "preload",
      href: font_default,
      as: "style"
    },
    {
      rel: "preload",
      href: tailwind_default,
      as: "style"
    },
    cssBundleHref ? {
      rel: "preload",
      href: cssBundleHref,
      as: "style"
    } : null,
    {
      rel: "mask-icon",
      href: "/favicons/mask-icon.svg"
    },
    {
      rel: "alternate icon",
      type: "image/png",
      href: "/favicons/favicon-32x32.png"
    },
    {
      rel: "apple-touch-icon",
      href: "/favicons/apple-touch-icon.png"
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
      crossOrigin: "use-credentials"
    },
    // necessary to make typescript happy
    //These should match the css preloads above to avoid css as render blocking resource
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicons/favicon.svg"
    },
    {
      rel: "stylesheet",
      href: font_default
    },
    {
      rel: "stylesheet",
      href: tailwind_default
    },
    cssBundleHref ? {
      rel: "stylesheet",
      href: cssBundleHref
    } : null
  ].filter(Boolean);
};
var meta = ({
  data
}) => {
  return [{
    title: data ? "Epic Notes" : "Error | Epic Notes"
  }, {
    name: "description",
    content: `Your own captain's log`
  }];
};
function App() {
  _s6();
  const data = useLoaderData();
  const nonce = useNonce();
  const user = useOptionalUser();
  const theme = useTheme();
  useToast(data.toast);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Document, { env: data.ENV, nonce, theme, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Stack, { className: "h-screen", gap: "none", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Inline, { className: "h-screen w-full", gap: "none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Sidebar, { userPreference: data.requestInfo.userPrefs.sidebarState }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 255,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Flex, { className: "h-screen w-full overflow-auto", gap: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 257,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 256,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 254,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Stack, { align: "center", className: "w-full", gap: "none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("header", { className: "container py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Flex, { align: "center", as: "nav", gap: "xlarge", justify: "between", wrap: "wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "Logo" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 264,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 263,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Button, { asChild: true, size: "sm", variant: "default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Link, { to: "/login", children: "Log In" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 268,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 267,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 261,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 260,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 272,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 259,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(EpicToaster, { closeButton: true, position: "top-center", theme }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 276,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(EpicProgress, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 277,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 252,
    columnNumber: 10
  }, this);
}
_s6(App, "sIssnWjNP60P5SAB/2FesKgHZU0=", false, function() {
  return [useLoaderData, useNonce, useOptionalUser, useTheme, useToast];
});
_c34 = App;
function AppWithProviders() {
  _s23();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(HoneypotProvider, { ...data.honeyProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(App, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 289,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 288,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 287,
    columnNumber: 10
  }, this);
}
_s23(AppWithProviders, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c210 = AppWithProviders;
function ErrorBoundary() {
  _s32();
  const nonce = useNonce();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Document, { nonce, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(GeneralErrorBoundary, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 311,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 310,
    columnNumber: 10
  }, this);
}
_s32(ErrorBoundary, "fTu1PJvfUhwKAAPh1vkoJap6Hoo=", false, function() {
  return [useNonce];
});
_c35 = ErrorBoundary;
var _c34;
var _c210;
var _c35;
$RefreshReg$(_c34, "App");
$RefreshReg$(_c210, "AppWithProviders");
$RefreshReg$(_c35, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  AppWithProviders as default,
  links,
  meta
};
/*! Bundled license information:

sonner/dist/index.mjs:
  (*! Bundled license information:
  
  dompurify/dist/purify.es.mjs:
    (*! @license DOMPurify 3.0.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.10/LICENSE *)
  *)
*/
//# sourceMappingURL=/build/root-HRUJERUW.js.map
