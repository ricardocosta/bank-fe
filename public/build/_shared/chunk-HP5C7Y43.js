import {
  require_jsx_runtime
} from "/build/_shared/chunk-QCQ6MJ2A.js";
import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  _extends,
  cva
} from "/build/_shared/chunk-6RG3S7SV.js";
import {
  cn
} from "/build/_shared/chunk-JWYSQB4M.js";
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
import {
  __toESM
} from "/build/_shared/chunk-LTRR4HZE.js";

// node_modules/.pnpm/@conform-to+react@1.1.2_react@18.2.0/node_modules/@conform-to/react/_virtual/_rollupPluginBabelHelpers.mjs
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// node_modules/.pnpm/@conform-to+react@1.1.2_react@18.2.0/node_modules/@conform-to/react/hooks.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/.pnpm/@conform-to+dom@1.1.2/node_modules/@conform-to/dom/_virtual/_rollupPluginBabelHelpers.mjs
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread22(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive2(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// node_modules/.pnpm/@conform-to+dom@1.1.2/node_modules/@conform-to/dom/formdata.mjs
function getFormData(form, submitter) {
  var payload = new FormData(form, submitter);
  if (submitter && submitter.type === "submit" && submitter.name !== "") {
    var entries = payload.getAll(submitter.name);
    if (!entries.includes(submitter.value)) {
      payload.append(submitter.name, submitter.value);
    }
  }
  return payload;
}
function getPaths(name) {
  if (!name) {
    return [];
  }
  return name.split(/\.|(\[\d*\])/).reduce((result, segment) => {
    if (typeof segment !== "undefined" && segment !== "" && segment !== "__proto__" && segment !== "constructor" && segment !== "prototype") {
      if (segment.startsWith("[") && segment.endsWith("]")) {
        var index = segment.slice(1, -1);
        result.push(Number(index));
      } else {
        result.push(segment);
      }
    }
    return result;
  }, []);
}
function formatPaths(paths) {
  return paths.reduce((name, path) => {
    if (typeof path === "number") {
      return "".concat(name, "[").concat(Number.isNaN(path) ? "" : path, "]");
    }
    if (name === "" || path === "") {
      return [name, path].join("");
    }
    return [name, path].join(".");
  }, "");
}
function formatName(prefix, path) {
  return typeof path !== "undefined" ? formatPaths([...getPaths(prefix), path]) : prefix !== null && prefix !== void 0 ? prefix : "";
}
function isPrefix(name, prefix) {
  var paths = getPaths(name);
  var prefixPaths = getPaths(prefix);
  return paths.length >= prefixPaths.length && prefixPaths.every((path, index) => paths[index] === path);
}
function setValue(target, name, valueFn) {
  var paths = getPaths(name);
  var length = paths.length;
  var lastIndex = length - 1;
  var index = -1;
  var pointer = target;
  while (pointer != null && ++index < length) {
    var key = paths[index];
    var nextKey = paths[index + 1];
    var newValue = index != lastIndex ? Object.prototype.hasOwnProperty.call(pointer, key) ? pointer[key] : typeof nextKey === "number" ? [] : {} : valueFn(pointer[key]);
    pointer[key] = newValue;
    pointer = pointer[key];
  }
}
function getValue(target, name) {
  var pointer = target;
  for (var path of getPaths(name)) {
    if (typeof pointer === "undefined" || pointer == null) {
      break;
    }
    if (!Object.prototype.hasOwnProperty.call(pointer, path)) {
      return;
    }
    if (isPlainObject(pointer) && typeof path === "string") {
      pointer = pointer[path];
    } else if (Array.isArray(pointer) && typeof path === "number") {
      pointer = pointer[path];
    } else {
      return;
    }
  }
  return pointer;
}
function isPlainObject(obj) {
  return !!obj && obj.constructor === Object && Object.getPrototypeOf(obj) === Object.prototype;
}
function isFile(obj) {
  if (typeof File === "undefined") {
    return false;
  }
  return obj instanceof File;
}
function normalize(value) {
  var acceptFile = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (isPlainObject(value)) {
    var obj = Object.keys(value).sort().reduce((result, key) => {
      var data = normalize(value[key], acceptFile);
      if (typeof data !== "undefined") {
        result[key] = data;
      }
      return result;
    }, {});
    if (Object.keys(obj).length === 0) {
      return;
    }
    return obj;
  }
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return void 0;
    }
    return value.map((item) => normalize(item, acceptFile));
  }
  if (typeof value === "string" && value === "" || value === null || isFile(value) && (!acceptFile || value.size === 0)) {
    return;
  }
  return value;
}
function flatten(data, options) {
  var _options$resolve;
  var result = {};
  var resolve = (_options$resolve = options === null || options === void 0 ? void 0 : options.resolve) !== null && _options$resolve !== void 0 ? _options$resolve : (data2) => data2;
  function setResult(data2, name) {
    var value = normalize(resolve(data2));
    if (typeof value !== "undefined") {
      result[name] = value;
    }
  }
  function processObject(obj, prefix2) {
    setResult(obj, prefix2);
    for (var [key, _value] of Object.entries(obj)) {
      var name = prefix2 ? "".concat(prefix2, ".").concat(key) : key;
      if (Array.isArray(_value)) {
        processArray(_value, name);
      } else if (_value && isPlainObject(_value)) {
        processObject(_value, name);
      } else {
        setResult(_value, name);
      }
    }
  }
  function processArray(array, prefix2) {
    setResult(array, prefix2);
    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      var name = "".concat(prefix2, "[").concat(i, "]");
      if (Array.isArray(item)) {
        processArray(item, name);
      } else if (item && isPlainObject(item)) {
        processObject(item, name);
      } else {
        setResult(item, name);
      }
    }
  }
  if (data) {
    var _options$prefix;
    var prefix = (_options$prefix = options === null || options === void 0 ? void 0 : options.prefix) !== null && _options$prefix !== void 0 ? _options$prefix : "";
    if (Array.isArray(data)) {
      processArray(data, prefix);
    } else {
      processObject(data, prefix);
    }
  }
  return result;
}

// node_modules/.pnpm/@conform-to+dom@1.1.2/node_modules/@conform-to/dom/util.mjs
function invariant(expectedCondition, message) {
  if (!expectedCondition) {
    throw new Error(message);
  }
}
function generateId() {
  return (Date.now() * Math.random()).toString(36);
}
function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

// node_modules/.pnpm/@conform-to+dom@1.1.2/node_modules/@conform-to/dom/dom.mjs
function isFormControl(element) {
  return element instanceof Element && (element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA" || element.tagName === "BUTTON");
}
function isFieldElement(element) {
  return isFormControl(element) && element.type !== "submit" && element.type !== "button" && element.type !== "reset";
}
function getFormAction(event) {
  var _ref, _submitter$getAttribu;
  var form = event.target;
  var submitter = event.submitter;
  return (_ref = (_submitter$getAttribu = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formaction")) !== null && _submitter$getAttribu !== void 0 ? _submitter$getAttribu : form.getAttribute("action")) !== null && _ref !== void 0 ? _ref : "".concat(location.pathname).concat(location.search);
}
function getFormEncType(event) {
  var _submitter$getAttribu2;
  var form = event.target;
  var submitter = event.submitter;
  var encType = (_submitter$getAttribu2 = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formenctype")) !== null && _submitter$getAttribu2 !== void 0 ? _submitter$getAttribu2 : form.enctype;
  if (encType === "multipart/form-data") {
    return encType;
  }
  return "application/x-www-form-urlencoded";
}
function getFormMethod(event) {
  var _ref2, _submitter$getAttribu3;
  var form = event.target;
  var submitter = event.submitter;
  var method = (_ref2 = (_submitter$getAttribu3 = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) !== null && _submitter$getAttribu3 !== void 0 ? _submitter$getAttribu3 : form.getAttribute("method")) === null || _ref2 === void 0 ? void 0 : _ref2.toUpperCase();
  switch (method) {
    case "POST":
    case "PUT":
    case "PATCH":
    case "DELETE":
      return method;
  }
  return "GET";
}
function requestSubmit(form, submitter) {
  invariant(!!form, "Failed to submit the form. The element provided is null or undefined.");
  if (typeof form.requestSubmit === "function") {
    form.requestSubmit(submitter);
  } else {
    var event = new SubmitEvent("submit", {
      bubbles: true,
      cancelable: true,
      submitter
    });
    form.dispatchEvent(event);
  }
}

// node_modules/.pnpm/@conform-to+dom@1.1.2/node_modules/@conform-to/dom/submission.mjs
var INTENT = "__intent__";
var STATE = "__state__";
function getSubmissionContext(body) {
  var intent = body.get(INTENT);
  var state = body.get(STATE);
  invariant((typeof intent === "string" || intent === null) && (typeof state === "string" || state === null), 'The input name "'.concat(INTENT, '" and "').concat(STATE, '" are reserved by Conform. Please use another name for your input.'));
  var context = {
    payload: {},
    fields: /* @__PURE__ */ new Set(),
    intent: getIntent(intent)
  };
  if (state) {
    context.state = JSON.parse(state);
  }
  var _loop = function _loop2(next2) {
    if (name === INTENT || name === STATE) {
      return 1;
    }
    context.fields.add(name);
    setValue(context.payload, name, (prev) => {
      if (!prev) {
        return next2;
      } else if (Array.isArray(prev)) {
        return prev.concat(next2);
      } else {
        return [prev, next2];
      }
    });
  };
  for (var [name, next] of body.entries()) {
    if (_loop(next))
      continue;
  }
  return context;
}
function parse(payload, options) {
  var context = getSubmissionContext(payload);
  var intent = context.intent;
  if (intent) {
    switch (intent.type) {
      case "update": {
        var name = formatName(intent.payload.name, intent.payload.index);
        var _value = serialize(intent.payload.value);
        if (typeof _value !== "undefined") {
          if (name) {
            setValue(context.payload, name, () => _value);
          } else {
            context.payload = _value;
          }
        }
        break;
      }
      case "reset": {
        var _name = formatName(intent.payload.name, intent.payload.index);
        if (_name) {
          setValue(context.payload, _name, () => void 0);
        } else {
          context.payload = {};
        }
        break;
      }
      case "insert": {
        setListValue(context.payload, {
          type: intent.type,
          payload: _objectSpread22(_objectSpread22({}, intent.payload), {}, {
            defaultValue: serialize(intent.payload.defaultValue)
          })
        });
        break;
      }
      case "remove":
      case "reorder": {
        setListValue(context.payload, intent);
        break;
      }
    }
  }
  var result = options.resolve(context.payload, intent);
  var mergeResolveResult = (resolved) => createSubmission(_objectSpread22(_objectSpread22({}, context), {}, {
    value: resolved.value,
    error: resolved.error
  }));
  if (result instanceof Promise) {
    return result.then(mergeResolveResult);
  }
  return mergeResolveResult(result);
}
function createSubmission(context) {
  if (context.intent || !context.value || context.error) {
    return {
      status: !context.intent ? "error" : void 0,
      payload: context.payload,
      error: typeof context.error !== "undefined" ? context.error : {},
      reply(options) {
        return replySubmission(context, options);
      }
    };
  }
  return {
    status: "success",
    payload: context.payload,
    value: context.value,
    reply(options) {
      return replySubmission(context, options);
    }
  };
}
function replySubmission(context) {
  var _context$intent, _context$intent$paylo, _options$formErrors, _normalize;
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if ("resetForm" in options && options.resetForm || ((_context$intent = context.intent) === null || _context$intent === void 0 ? void 0 : _context$intent.type) === "reset" && ((_context$intent$paylo = context.intent.payload.name) !== null && _context$intent$paylo !== void 0 ? _context$intent$paylo : "") === "") {
    return {
      initialValue: null
    };
  }
  if ("hideFields" in options && options.hideFields) {
    for (var name of options.hideFields) {
      var _value2 = getValue(context.payload, name);
      if (typeof _value2 !== "undefined") {
        setValue(context.payload, name, () => void 0);
      }
    }
  }
  var extraError = "formErrors" in options || "fieldErrors" in options ? normalize(_objectSpread22({
    "": (_options$formErrors = options.formErrors) !== null && _options$formErrors !== void 0 ? _options$formErrors : null
  }, options.fieldErrors)) : null;
  var error = context.error || extraError ? _objectSpread22(_objectSpread22({}, context.error), extraError) : void 0;
  return {
    status: context.intent ? void 0 : error ? "error" : "success",
    intent: context.intent ? context.intent : void 0,
    initialValue: (_normalize = normalize(
      context.payload,
      // We can't serialize the file and send it back from the server, but we can preserve it in the client
      typeof document !== "undefined"
    )) !== null && _normalize !== void 0 ? _normalize : {},
    error,
    state: context.state,
    fields: Array.from(context.fields)
  };
}
function getIntent(serializedIntent) {
  if (!serializedIntent) {
    return null;
  }
  var control = JSON.parse(serializedIntent);
  if (typeof control.type !== "string" || typeof control.payload === "undefined") {
    throw new Error("Unknown form control intent");
  }
  return control;
}
function serializeIntent(intent) {
  return JSON.stringify(intent);
}
function updateList(list, intent) {
  var _intent$payload$index;
  invariant(Array.isArray(list), "Failed to update list. The value is not an array.");
  switch (intent.type) {
    case "insert":
      list.splice((_intent$payload$index = intent.payload.index) !== null && _intent$payload$index !== void 0 ? _intent$payload$index : list.length, 0, intent.payload.defaultValue);
      break;
    case "remove":
      list.splice(intent.payload.index, 1);
      break;
    case "reorder":
      list.splice(intent.payload.to, 0, ...list.splice(intent.payload.from, 1));
      break;
    default:
      throw new Error("Unknown list intent received");
  }
}
function setListValue(data, intent) {
  setValue(data, intent.payload.name, (value) => {
    var list = value !== null && value !== void 0 ? value : [];
    updateList(list, intent);
    return list;
  });
}
var root = Symbol.for("root");
function setState(state, name, valueFn) {
  var keys = Object.keys(state).sort((prev, next) => next.localeCompare(prev));
  var target = {};
  var _loop2 = function _loop22() {
    var value = state[key];
    if (isPrefix(key, name) && key !== name) {
      setValue(target, key, (currentValue) => {
        if (typeof currentValue === "undefined") {
          return value;
        }
        currentValue[root] = value;
        return currentValue;
      });
      delete state[key];
    }
  };
  for (var key of keys) {
    _loop2();
  }
  var result = valueFn(getValue(target, name));
  Object.assign(
    state,
    // @ts-expect-error FIXME flatten should be more flexible
    flatten(result, {
      resolve(data) {
        if (isPlainObject(data) || Array.isArray(data)) {
          var _data$root;
          return (_data$root = data[root]) !== null && _data$root !== void 0 ? _data$root : null;
        }
        return data;
      },
      prefix: name
    })
  );
}
function setListState(state, intent, getDefaultValue) {
  setState(state, intent.payload.name, (value) => {
    var list = value !== null && value !== void 0 ? value : [];
    switch (intent.type) {
      case "insert":
        updateList(list, {
          type: intent.type,
          payload: _objectSpread22(_objectSpread22({}, intent.payload), {}, {
            defaultValue: getDefaultValue === null || getDefaultValue === void 0 ? void 0 : getDefaultValue(intent.payload.defaultValue)
          })
        });
        break;
      default:
        updateList(list, intent);
        break;
    }
    return list;
  });
}
function serialize(defaultValue) {
  if (isPlainObject(defaultValue)) {
    return Object.entries(defaultValue).reduce((result, _ref) => {
      var [key, value] = _ref;
      result[key] = serialize(value);
      return result;
    }, {});
  } else if (Array.isArray(defaultValue)) {
    return defaultValue.map(serialize);
  } else if (
    // @ts-ignore-error FIXME
    defaultValue instanceof Date
  ) {
    return defaultValue.toISOString();
  } else if (typeof defaultValue === "boolean") {
    return defaultValue ? "on" : void 0;
  } else if (typeof defaultValue === "number") {
    return defaultValue.toString();
  } else {
    return defaultValue !== null && defaultValue !== void 0 ? defaultValue : void 0;
  }
}

// node_modules/.pnpm/@conform-to+dom@1.1.2/node_modules/@conform-to/dom/form.mjs
function createFormMeta(options, initialized) {
  var _lastResult$initialVa, _options$constraint, _lastResult$state$val, _lastResult$state, _ref;
  var lastResult = !initialized ? options.lastResult : void 0;
  var defaultValue = options.defaultValue ? serialize(options.defaultValue) : {};
  var initialValue = (_lastResult$initialVa = lastResult === null || lastResult === void 0 ? void 0 : lastResult.initialValue) !== null && _lastResult$initialVa !== void 0 ? _lastResult$initialVa : defaultValue;
  var result = {
    formId: options.formId,
    isValueUpdated: false,
    submissionStatus: lastResult === null || lastResult === void 0 ? void 0 : lastResult.status,
    defaultValue,
    initialValue,
    value: initialValue,
    constraint: (_options$constraint = options.constraint) !== null && _options$constraint !== void 0 ? _options$constraint : {},
    validated: (_lastResult$state$val = lastResult === null || lastResult === void 0 || (_lastResult$state = lastResult.state) === null || _lastResult$state === void 0 ? void 0 : _lastResult$state.validated) !== null && _lastResult$state$val !== void 0 ? _lastResult$state$val : {},
    key: !initialized ? getDefaultKey(defaultValue) : _objectSpread22({
      "": generateId()
    }, getDefaultKey(defaultValue)),
    // The `lastResult` should comes from the server which we won't expect the error to be null
    // We can consider adding a warning if it happens
    error: (_ref = lastResult === null || lastResult === void 0 ? void 0 : lastResult.error) !== null && _ref !== void 0 ? _ref : {}
  };
  handleIntent(result, lastResult === null || lastResult === void 0 ? void 0 : lastResult.intent, lastResult === null || lastResult === void 0 ? void 0 : lastResult.fields);
  return result;
}
function getDefaultKey(defaultValue, prefix) {
  return Object.entries(flatten(defaultValue, {
    prefix
  })).reduce((result, _ref2) => {
    var [key, value] = _ref2;
    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        result[formatName(key, i)] = generateId();
      }
    }
    return result;
  }, {});
}
function setFieldsValidated(meta, fields) {
  for (var _name of Object.keys(meta.error).concat(fields !== null && fields !== void 0 ? fields : [])) {
    meta.validated[_name] = true;
  }
}
function handleIntent(meta, intent, fields, initialized) {
  if (!intent) {
    setFieldsValidated(meta, fields);
    return;
  }
  switch (intent.type) {
    case "validate": {
      if (intent.payload.name) {
        meta.validated[intent.payload.name] = true;
      } else {
        setFieldsValidated(meta, fields);
      }
      break;
    }
    case "update": {
      var {
        validated,
        value
      } = intent.payload;
      var _name2 = formatName(intent.payload.name, intent.payload.index);
      if (typeof value !== "undefined") {
        updateValue(meta, _name2 !== null && _name2 !== void 0 ? _name2 : "", serialize(value));
      }
      if (typeof validated !== "undefined") {
        if (_name2) {
          setState(meta.validated, _name2, () => void 0);
        } else {
          meta.validated = {};
        }
        if (validated) {
          if (isPlainObject(value) || Array.isArray(value)) {
            Object.assign(meta.validated, flatten(value, {
              resolve() {
                return true;
              },
              prefix: _name2
            }));
          }
          meta.validated[_name2 !== null && _name2 !== void 0 ? _name2 : ""] = true;
        } else if (_name2) {
          delete meta.validated[_name2];
        }
      }
      break;
    }
    case "reset": {
      var _name3 = formatName(intent.payload.name, intent.payload.index);
      var _value = getValue(meta.defaultValue, _name3);
      updateValue(meta, _name3, _value);
      if (_name3) {
        setState(meta.validated, _name3, () => void 0);
        delete meta.validated[_name3];
      } else {
        meta.validated = {};
      }
      break;
    }
    case "insert":
    case "remove":
    case "reorder": {
      if (initialized) {
        meta.initialValue = clone(meta.initialValue);
        meta.key = clone(meta.key);
        setListState(meta.key, intent, (defaultValue) => {
          if (!Array.isArray(defaultValue) && !isPlainObject(defaultValue)) {
            return generateId();
          }
          return Object.assign(getDefaultKey(defaultValue), {
            [root]: generateId()
          });
        });
        setListValue(meta.initialValue, intent);
      }
      setListState(meta.validated, intent);
      meta.validated[intent.payload.name] = true;
      break;
    }
  }
  meta.error = Object.entries(meta.error).reduce((result, _ref3) => {
    var [name, error] = _ref3;
    if (meta.validated[name]) {
      result[name] = error;
    }
    return result;
  }, {});
}
function updateValue(meta, name, value) {
  if (name === "") {
    meta.initialValue = value;
    meta.value = value;
    meta.key = getDefaultKey(value);
    return;
  }
  meta.initialValue = clone(meta.initialValue);
  meta.value = clone(meta.value);
  meta.key = clone(meta.key);
  setValue(meta.initialValue, name, () => value);
  setValue(meta.value, name, () => value);
  if (isPlainObject(value) || Array.isArray(value)) {
    setState(meta.key, name, () => void 0);
    Object.assign(meta.key, getDefaultKey(value, name));
  }
  meta.key[name] = generateId();
}
function createStateProxy(fn) {
  var cache = {};
  return new Proxy(cache, {
    get(_, name, receiver) {
      var _cache$name;
      if (typeof name !== "string") {
        return;
      }
      return (_cache$name = cache[name]) !== null && _cache$name !== void 0 ? _cache$name : cache[name] = fn(name, receiver);
    }
  });
}
function createValueProxy(value) {
  var val = normalize(value);
  return createStateProxy((name, proxy) => {
    if (name === "") {
      return val;
    }
    var paths = getPaths(name);
    var basename = formatPaths(paths.slice(0, -1));
    var key = formatPaths(paths.slice(-1));
    var parentValue = proxy[basename];
    return getValue(parentValue, key);
  });
}
function createConstraintProxy(constraint) {
  return createStateProxy((name, proxy) => {
    var _result;
    var result = constraint[name];
    if (!result) {
      var paths = getPaths(name);
      for (var i = paths.length - 1; i >= 0; i--) {
        var path = paths[i];
        if (typeof path === "number" && !Number.isNaN(path)) {
          paths[i] = Number.NaN;
          break;
        }
      }
      var alternative = formatPaths(paths);
      if (name !== alternative) {
        result = proxy[alternative];
      }
    }
    return (_result = result) !== null && _result !== void 0 ? _result : {};
  });
}
function createKeyProxy(key) {
  return createStateProxy((name, proxy) => {
    var currentKey = key[name];
    var paths = getPaths(name);
    if (paths.length === 0) {
      return currentKey;
    }
    var parentKey = proxy[formatPaths(paths.slice(0, -1))];
    if (typeof parentKey === "undefined") {
      return currentKey;
    }
    return "".concat(parentKey, "/").concat(currentKey !== null && currentKey !== void 0 ? currentKey : paths.at(-1));
  });
}
function createValidProxy(error) {
  return createStateProxy((name) => {
    var keys = Object.keys(error);
    if (name === "") {
      return keys.length === 0;
    }
    for (var key of keys) {
      if (isPrefix(key, name) && typeof error[key] !== "undefined") {
        return false;
      }
    }
    return true;
  });
}
function createDirtyProxy(defaultValue, value, shouldDirtyConsider) {
  return createStateProxy((name) => JSON.stringify(defaultValue[name]) !== JSON.stringify(value[name], (key, value2) => {
    if (name === "" && key === "" && value2) {
      return Object.entries(value2).reduce((result, _ref4) => {
        var [name2, value3] = _ref4;
        if (!shouldDirtyConsider(name2)) {
          return result;
        }
        return Object.assign(result !== null && result !== void 0 ? result : {}, {
          [name2]: value3
        });
      }, void 0);
    }
    return value2;
  }));
}
function shouldNotify(prev, next, cache, scope) {
  var compareFn = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (prev2, next2) => JSON.stringify(prev2) !== JSON.stringify(next2);
  if (scope && prev !== next) {
    var _scope$prefix, _scope$name;
    var prefixes = (_scope$prefix = scope.prefix) !== null && _scope$prefix !== void 0 ? _scope$prefix : [];
    var names = (_scope$name = scope.name) !== null && _scope$name !== void 0 ? _scope$name : [];
    var list = prefixes.length === 0 ? names : Array.from(/* @__PURE__ */ new Set([...Object.keys(prev), ...Object.keys(next)]));
    var _loop = function _loop2(_name42) {
      if (prefixes.length === 0 || names.includes(_name42) || prefixes.some((prefix) => isPrefix(_name42, prefix))) {
        var _cache$_name;
        (_cache$_name = cache[_name42]) !== null && _cache$_name !== void 0 ? _cache$_name : cache[_name42] = compareFn(prev[_name42], next[_name42]);
        if (cache[_name42]) {
          return {
            v: true
          };
        }
      }
    }, _ret;
    for (var _name4 of list) {
      _ret = _loop(_name4);
      if (_ret)
        return _ret.v;
    }
  }
  return false;
}
function createFormContext(options) {
  var subscribers = [];
  var latestOptions = options;
  var meta = createFormMeta(options);
  var state = createFormState(meta);
  function getFormElement2() {
    return document.forms.namedItem(latestOptions.formId);
  }
  function createFormState(next) {
    var prev = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : next;
    var state2 = arguments.length > 2 ? arguments[2] : void 0;
    var defaultValue = !state2 || prev.defaultValue !== next.defaultValue ? createValueProxy(next.defaultValue) : state2.defaultValue;
    var initialValue = next.initialValue === next.defaultValue ? defaultValue : !state2 || prev.initialValue !== next.initialValue ? createValueProxy(next.initialValue) : state2.initialValue;
    var value = next.value === next.initialValue ? initialValue : !state2 || prev.value !== next.value ? createValueProxy(next.value) : state2.value;
    return {
      submissionStatus: next.submissionStatus,
      defaultValue,
      initialValue,
      value,
      error: !state2 || prev.error !== next.error ? next.error : state2.error,
      validated: next.validated,
      constraint: !state2 || prev.constraint !== next.constraint ? createConstraintProxy(next.constraint) : state2.constraint,
      key: !state2 || prev.key !== next.key ? createKeyProxy(next.key) : state2.key,
      valid: !state2 || prev.error !== next.error ? createValidProxy(next.error) : state2.valid,
      dirty: !state2 || prev.defaultValue !== next.defaultValue || prev.value !== next.value ? createDirtyProxy(defaultValue, value, (key) => {
        var _latestOptions$should, _latestOptions$should2;
        return (_latestOptions$should = (_latestOptions$should2 = latestOptions.shouldDirtyConsider) === null || _latestOptions$should2 === void 0 ? void 0 : _latestOptions$should2.call(latestOptions, key)) !== null && _latestOptions$should !== void 0 ? _latestOptions$should : true;
      }) : state2.dirty
    };
  }
  function updateFormMeta(nextMeta) {
    var prevMeta = meta;
    var prevState = state;
    var nextState = createFormState(nextMeta, prevMeta, prevState);
    meta = nextMeta;
    state = nextState;
    var cache = {
      value: {},
      error: {},
      initialValue: {},
      key: {},
      valid: {},
      dirty: {}
    };
    for (var subscriber of subscribers) {
      var _subscriber$getSubjec;
      var subject = (_subscriber$getSubjec = subscriber.getSubject) === null || _subscriber$getSubjec === void 0 ? void 0 : _subscriber$getSubjec.call(subscriber);
      if (!subject || subject.formId && prevMeta.formId !== nextMeta.formId || subject.status && prevState.submissionStatus !== nextState.submissionStatus || shouldNotify(prevState.error, nextState.error, cache.error, subject.error) || shouldNotify(prevState.initialValue, nextState.initialValue, cache.initialValue, subject.initialValue) || shouldNotify(prevState.key, nextState.key, cache.key, subject.key, (prev, next) => prev !== next) || shouldNotify(prevState.valid, nextState.valid, cache.valid, subject.valid, compareBoolean) || shouldNotify(prevState.dirty, nextState.dirty, cache.dirty, subject.dirty, compareBoolean) || shouldNotify(prevState.value, nextState.value, cache.value, subject.value)) {
        subscriber.callback();
      }
    }
  }
  function compareBoolean() {
    var prev = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var next = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return prev !== next;
  }
  function getSerializedState() {
    return JSON.stringify({
      validated: meta.validated
    });
  }
  function submit(event) {
    var form = event.target;
    var submitter = event.submitter;
    invariant(form === getFormElement2(), "The submit event is dispatched by form#".concat(form.id, " instead of form#").concat(latestOptions.formId));
    var formData = getFormData(form, submitter);
    var result = {
      formData,
      action: getFormAction(event),
      encType: getFormEncType(event),
      method: getFormMethod(event)
    };
    if (typeof (latestOptions === null || latestOptions === void 0 ? void 0 : latestOptions.onValidate) === "undefined") {
      return result;
    }
    var submission = latestOptions.onValidate({
      form,
      formData,
      submitter
    });
    if (submission.status === "success" || submission.error !== null) {
      var _result2 = submission.reply();
      report(_objectSpread22(_objectSpread22({}, _result2), {}, {
        status: _result2.status !== "success" ? _result2.status : void 0
      }));
    }
    return _objectSpread22(_objectSpread22({}, result), {}, {
      submission
    });
  }
  function resolveTarget(event) {
    var form = getFormElement2();
    var element = event.target;
    if (!form || !isFieldElement(element) || element.form !== form || !element.form.isConnected || element.name === "") {
      return null;
    }
    return element;
  }
  function willValidate(element, eventName) {
    var {
      shouldValidate = "onSubmit",
      shouldRevalidate = shouldValidate
    } = latestOptions;
    var validated = meta.validated[element.name];
    return validated ? shouldRevalidate === eventName && (eventName === "onInput" || meta.isValueUpdated) : shouldValidate === eventName;
  }
  function updateFormValue(form) {
    var formData = new FormData(form);
    var result = getSubmissionContext(formData);
    updateFormMeta(_objectSpread22(_objectSpread22({}, meta), {}, {
      isValueUpdated: true,
      value: result.payload
    }));
  }
  function onInput(event) {
    var element = resolveTarget(event);
    if (!element || !element.form) {
      return;
    }
    if (event.defaultPrevented || !willValidate(element, "onInput")) {
      updateFormValue(element.form);
    } else {
      dispatch({
        type: "validate",
        payload: {
          name: element.name
        }
      });
    }
  }
  function onBlur(event) {
    var element = resolveTarget(event);
    if (!element || event.defaultPrevented || !willValidate(element, "onBlur")) {
      return;
    }
    dispatch({
      type: "validate",
      payload: {
        name: element.name
      }
    });
  }
  function reset() {
    updateFormMeta(createFormMeta(latestOptions, true));
  }
  function onReset(event) {
    var element = getFormElement2();
    if (event.type !== "reset" || event.target !== element || event.defaultPrevented) {
      return;
    }
    reset();
  }
  function report(result) {
    var _result$error, _result$state;
    var formElement = getFormElement2();
    if (!result.initialValue) {
      reset();
      return;
    }
    var error = Object.entries((_result$error = result.error) !== null && _result$error !== void 0 ? _result$error : {}).reduce((result2, _ref5) => {
      var [name, newError] = _ref5;
      var error2 = newError === null ? meta.error[name] : newError;
      if (error2) {
        result2[name] = error2;
      }
      return result2;
    }, {});
    var update = _objectSpread22(_objectSpread22({}, meta), {}, {
      isValueUpdated: false,
      submissionStatus: result.status,
      value: result.initialValue,
      validated: _objectSpread22(_objectSpread22({}, meta.validated), (_result$state = result.state) === null || _result$state === void 0 ? void 0 : _result$state.validated),
      error
    });
    handleIntent(update, result.intent, result.fields, true);
    updateFormMeta(update);
    if (formElement && result.status === "error") {
      for (var element of formElement.elements) {
        if (isFieldElement(element) && meta.error[element.name]) {
          element.focus();
          break;
        }
      }
    }
  }
  function onUpdate(options2) {
    var currentFormId = latestOptions.formId;
    var currentResult = latestOptions.lastResult;
    Object.assign(latestOptions, options2);
    if (latestOptions.formId !== currentFormId) {
      reset();
    } else if (options2.lastResult && options2.lastResult !== currentResult) {
      report(options2.lastResult);
    }
  }
  function subscribe(callback, getSubject) {
    var subscriber = {
      callback,
      getSubject
    };
    subscribers.push(subscriber);
    return () => {
      subscribers = subscribers.filter((current) => current !== subscriber);
    };
  }
  function getState() {
    return state;
  }
  function dispatch(intent) {
    var form = getFormElement2();
    var submitter = document.createElement("button");
    var buttonProps = getControlButtonProps(intent);
    submitter.name = buttonProps.name;
    submitter.value = buttonProps.value;
    submitter.hidden = true;
    submitter.formNoValidate = true;
    form === null || form === void 0 || form.appendChild(submitter);
    requestSubmit(form, submitter);
    form === null || form === void 0 || form.removeChild(submitter);
  }
  function getControlButtonProps(intent) {
    return {
      name: INTENT,
      value: serializeIntent(intent),
      form: latestOptions.formId,
      formNoValidate: true
    };
  }
  function createFormControl(type) {
    var control = function control2() {
      var payload = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return dispatch({
        type,
        payload
      });
    };
    return Object.assign(control, {
      getButtonProps() {
        var payload = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return getControlButtonProps({
          type,
          payload
        });
      }
    });
  }
  function observe() {
    var observer = new MutationObserver((mutations) => {
      var form = getFormElement2();
      if (!form) {
        return;
      }
      for (var mutation of mutations) {
        var nodes = mutation.type === "childList" ? [...mutation.addedNodes, ...mutation.removedNodes] : [mutation.target];
        for (var node of nodes) {
          var element = isFieldElement(node) ? node : node instanceof HTMLElement ? node.querySelector("input,select,textarea") : null;
          if ((element === null || element === void 0 ? void 0 : element.form) === form) {
            updateFormValue(form);
            return;
          }
        }
      }
    });
    observer.observe(document, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["form", "name"]
    });
    return () => {
      observer.disconnect();
    };
  }
  return {
    getFormId() {
      return meta.formId;
    },
    submit,
    onReset,
    onInput,
    onBlur,
    onUpdate,
    validate: createFormControl("validate"),
    reset: createFormControl("reset"),
    update: createFormControl("update"),
    insert: createFormControl("insert"),
    remove: createFormControl("remove"),
    reorder: createFormControl("reorder"),
    subscribe,
    getState,
    getSerializedState,
    observe
  };
}

// node_modules/.pnpm/@conform-to+react@1.1.2_react@18.2.0/node_modules/@conform-to/react/context.mjs
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var _excluded = ["onSubmit"];
var Form = /* @__PURE__ */ (0, import_react.createContext)([]);
var wrappedSymbol = Symbol("wrapped");
function getWrappedFormContext(context) {
  return context[wrappedSymbol];
}
function useFormState(form, subjectRef) {
  var subscribe = (0, import_react.useCallback)((callback) => form.subscribe(callback, () => subjectRef === null || subjectRef === void 0 ? void 0 : subjectRef.current), [form, subjectRef]);
  return (0, import_react.useSyncExternalStore)(subscribe, form.getState, form.getState);
}
function FormProvider(props) {
  var forms = (0, import_react.useContext)(Form);
  var context = getWrappedFormContext(props.context);
  var value = (0, import_react.useMemo)(
    () => [context].concat(forms),
    // Put the latest form context first
    [forms, context]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form.Provider, {
    value,
    children: props.children
  });
}
function useSubjectRef() {
  var initialSubject = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var subjectRef = (0, import_react.useRef)(initialSubject);
  subjectRef.current = initialSubject;
  return subjectRef;
}
function updateSubjectRef(ref, subject, scope, name) {
  if (subject === "status" || subject === "formId") {
    ref.current[subject] = true;
  } else if (typeof scope !== "undefined" && typeof name !== "undefined") {
    var _ref$current$subject$, _ref$current$subject;
    ref.current[subject] = _objectSpread2(_objectSpread2({}, ref.current[subject]), {}, {
      [scope]: ((_ref$current$subject$ = (_ref$current$subject = ref.current[subject]) === null || _ref$current$subject === void 0 ? void 0 : _ref$current$subject[scope]) !== null && _ref$current$subject$ !== void 0 ? _ref$current$subject$ : []).concat(name)
    });
  }
}
function getMetadata(context, subjectRef, stateSnapshot) {
  var name = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
  var id = name ? "".concat(context.getFormId(), "-").concat(name) : context.getFormId();
  var state = context.getState();
  return new Proxy({
    id,
    name,
    errorId: "".concat(id, "-error"),
    descriptionId: "".concat(id, "-description"),
    get initialValue() {
      return state.initialValue[name];
    },
    get value() {
      return state.value[name];
    },
    get errors() {
      return state.error[name];
    },
    get key() {
      return state.key[name];
    },
    get valid() {
      return state.valid[name];
    },
    get dirty() {
      return state.dirty[name];
    },
    get allErrors() {
      if (name === "") {
        return state.error;
      }
      var result = {};
      for (var [key, error] of Object.entries(state.error)) {
        if (isPrefix(key, name)) {
          result[key] = error;
        }
      }
      return result;
    },
    get getFieldset() {
      return () => new Proxy({}, {
        get(target, key, receiver) {
          if (typeof key === "string") {
            return getFieldMetadata(context, subjectRef, stateSnapshot, name, key);
          }
          return Reflect.get(target, key, receiver);
        }
      });
    }
  }, {
    get(target, key, receiver) {
      if (state === stateSnapshot) {
        switch (key) {
          case "id":
          case "errorId":
          case "descriptionId":
            updateSubjectRef(subjectRef, "formId");
            break;
          case "key":
          case "initialValue":
          case "value":
          case "valid":
          case "dirty":
            updateSubjectRef(subjectRef, key, "name", name);
            break;
          case "errors":
          case "allErrors":
            updateSubjectRef(subjectRef, "error", key === "errors" ? "name" : "prefix", name);
            break;
        }
      }
      return Reflect.get(target, key, receiver);
    }
  });
}
function getFieldMetadata(context, subjectRef, stateSnapshot) {
  var prefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
  var key = arguments.length > 4 ? arguments[4] : void 0;
  var name = typeof key === "undefined" ? prefix : formatPaths([...getPaths(prefix), key]);
  return new Proxy({}, {
    get(_, key2, receiver) {
      var _state$constraint$nam;
      var metadata = getMetadata(context, subjectRef, stateSnapshot, name);
      var state = context.getState();
      switch (key2) {
        case "formId":
          if (state === stateSnapshot) {
            updateSubjectRef(subjectRef, "formId");
          }
          return context.getFormId();
        case "required":
        case "minLength":
        case "maxLength":
        case "min":
        case "max":
        case "pattern":
        case "step":
        case "multiple":
          return (_state$constraint$nam = state.constraint[name]) === null || _state$constraint$nam === void 0 ? void 0 : _state$constraint$nam[key2];
        case "getFieldList": {
          return () => {
            var _state$initialValue$n;
            var initialValue = (_state$initialValue$n = state.initialValue[name]) !== null && _state$initialValue$n !== void 0 ? _state$initialValue$n : [];
            if (state === stateSnapshot) {
              updateSubjectRef(subjectRef, "initialValue", "name", name);
            }
            if (!Array.isArray(initialValue)) {
              throw new Error("The initial value at the given name is not a list");
            }
            return Array(initialValue.length).fill(0).map((_2, index) => getFieldMetadata(context, subjectRef, stateSnapshot, name, index));
          };
        }
      }
      return Reflect.get(metadata, key2, receiver);
    }
  });
}
function getFormMetadata(context, subjectRef, stateSnapshot, noValidate) {
  return new Proxy({}, {
    get(_, key, receiver) {
      var metadata = getMetadata(context, subjectRef, stateSnapshot);
      var state = context.getState();
      switch (key) {
        case "context":
          return {
            [wrappedSymbol]: context
          };
        case "status":
          if (state === stateSnapshot) {
            updateSubjectRef(subjectRef, "status");
          }
          return state.submissionStatus;
        case "validate":
        case "update":
        case "reset":
        case "insert":
        case "remove":
        case "reorder":
          return context[key];
        case "onSubmit":
          return context.submit;
        case "noValidate":
          return noValidate;
      }
      return Reflect.get(metadata, key, receiver);
    }
  });
}
function createFormContext2(options) {
  var {
    onSubmit
  } = options, rest = _objectWithoutProperties(options, _excluded);
  var context = createFormContext(rest);
  return _objectSpread2(_objectSpread2({}, context), {}, {
    submit(event) {
      var submitEvent = event.nativeEvent;
      var result = context.submit(submitEvent);
      if (!result.submission || result.submission.status === "success" || result.submission.error === null) {
        if (!result.formData.has(INTENT)) {
          var _onSubmit;
          (_onSubmit = onSubmit) === null || _onSubmit === void 0 || _onSubmit(event, result);
        }
      } else {
        event.preventDefault();
      }
    },
    onUpdate(options2) {
      onSubmit = options2.onSubmit;
      context.onUpdate(options2);
    }
  });
}

// node_modules/.pnpm/@conform-to+react@1.1.2_react@18.2.0/node_modules/@conform-to/react/hooks.mjs
var _excluded2 = ["id"];
var useSafeLayoutEffect = typeof document === "undefined" ? import_react2.useEffect : import_react2.useLayoutEffect;
function useFormId(preferredId) {
  var id = (0, import_react2.useId)();
  return preferredId !== null && preferredId !== void 0 ? preferredId : id;
}
function useNoValidate() {
  var defaultNoValidate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  var [noValidate, setNoValidate] = (0, import_react2.useState)(defaultNoValidate);
  useSafeLayoutEffect(() => {
    if (!noValidate) {
      setNoValidate(true);
    }
  }, [noValidate]);
  return noValidate;
}
function useForm(options) {
  var {
    id
  } = options, formConfig = _objectWithoutProperties(options, _excluded2);
  var formId = useFormId(id);
  var [context] = (0, import_react2.useState)(() => createFormContext2(_objectSpread2(_objectSpread2({}, formConfig), {}, {
    formId
  })));
  useSafeLayoutEffect(() => {
    var disconnect = context.observe();
    document.addEventListener("input", context.onInput);
    document.addEventListener("focusout", context.onBlur);
    document.addEventListener("reset", context.onReset);
    return () => {
      disconnect();
      document.removeEventListener("input", context.onInput);
      document.removeEventListener("focusout", context.onBlur);
      document.removeEventListener("reset", context.onReset);
    };
  }, [context]);
  useSafeLayoutEffect(() => {
    context.onUpdate(_objectSpread2(_objectSpread2({}, formConfig), {}, {
      formId
    }));
  });
  var subjectRef = useSubjectRef();
  var stateSnapshot = useFormState(context, subjectRef);
  var noValidate = useNoValidate(options.defaultNoValidate);
  var form = getFormMetadata(context, subjectRef, stateSnapshot, noValidate);
  return [form, form.getFieldset()];
}

// node_modules/.pnpm/@conform-to+react@1.1.2_react@18.2.0/node_modules/@conform-to/react/helpers.mjs
function simplify(props) {
  for (var key in props) {
    if (props[key] === void 0) {
      delete props[key];
    }
  }
  return props;
}
function getAriaAttributes(metadata) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof options.ariaAttributes !== "undefined" && !options.ariaAttributes) {
    return {};
  }
  var invalid = options.ariaInvalid === "allErrors" ? !metadata.valid : typeof metadata.errors !== "undefined";
  var ariaDescribedBy = options.ariaDescribedBy;
  return simplify({
    "aria-invalid": invalid || void 0,
    "aria-describedby": invalid ? "".concat(metadata.errorId, " ").concat(ariaDescribedBy !== null && ariaDescribedBy !== void 0 ? ariaDescribedBy : "").trim() : ariaDescribedBy
  });
}
function getFormProps(metadata, options) {
  return simplify(_objectSpread2({
    id: metadata.id,
    onSubmit: metadata.onSubmit,
    noValidate: metadata.noValidate
  }, getAriaAttributes(metadata, options)));
}
function getFieldsetProps(metadata, options) {
  return simplify(_objectSpread2({
    id: metadata.id,
    name: metadata.name,
    form: metadata.formId
  }, getAriaAttributes(metadata, options)));
}
function getFormControlProps(metadata, options) {
  return simplify(_objectSpread2({
    key: metadata.key,
    required: metadata.required || void 0
  }, getFieldsetProps(metadata, options)));
}
function getInputProps(metadata, options) {
  var props = _objectSpread2(_objectSpread2({}, getFormControlProps(metadata, options)), {}, {
    type: options.type,
    minLength: metadata.minLength,
    maxLength: metadata.maxLength,
    min: metadata.min,
    max: metadata.max,
    step: metadata.step,
    pattern: metadata.pattern,
    multiple: metadata.multiple
  });
  if (typeof options.value === "undefined" || options.value) {
    if (options.type === "checkbox" || options.type === "radio") {
      props.value = typeof options.value === "string" ? options.value : "on";
      props.defaultChecked = typeof metadata.initialValue === "boolean" ? metadata.initialValue : metadata.initialValue === props.value;
    } else if (typeof metadata.initialValue === "string") {
      props.defaultValue = metadata.initialValue;
    }
  }
  return simplify(props);
}
function getTextareaProps(metadata) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var props = _objectSpread2(_objectSpread2({}, getFormControlProps(metadata, options)), {}, {
    minLength: metadata.minLength,
    maxLength: metadata.maxLength
  });
  if (typeof options.value === "undefined" || options.value) {
    var _metadata$initialValu2;
    props.defaultValue = (_metadata$initialValu2 = metadata.initialValue) === null || _metadata$initialValu2 === void 0 ? void 0 : _metadata$initialValu2.toString();
  }
  return simplify(props);
}

// node_modules/.pnpm/@conform-to+react@1.1.2_react@18.2.0/node_modules/@conform-to/react/integrations.mjs
var import_react3 = __toESM(require_react(), 1);
function getFormElement(formId) {
  return document.forms.namedItem(formId);
}
function getFieldElements(form, name) {
  var field = form === null || form === void 0 ? void 0 : form.elements.namedItem(name);
  var elements = !field ? [] : field instanceof Element ? [field] : Array.from(field.values());
  return elements.filter((element) => element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement);
}
function getEventTarget(form, name, value) {
  var _elements$;
  var elements = getFieldElements(form, name);
  if (elements.length > 1) {
    var options = typeof value === "string" ? [value] : value;
    for (var element of elements) {
      if (typeof options !== "undefined" && element instanceof HTMLInputElement && element.type === "checkbox" && (element.checked ? options.includes(element.value) : !options.includes(element.value))) {
        continue;
      }
      return element;
    }
  }
  return (_elements$ = elements[0]) !== null && _elements$ !== void 0 ? _elements$ : null;
}
function createDummySelect(form, name, value) {
  var select = document.createElement("select");
  var options = typeof value === "string" ? [value] : value !== null && value !== void 0 ? value : [];
  select.name = name;
  select.multiple = true;
  select.dataset.conform = "true";
  select.setAttribute("aria-hidden", "true");
  select.tabIndex = -1;
  select.style.position = "absolute";
  select.style.width = "1px";
  select.style.height = "1px";
  select.style.padding = "0";
  select.style.margin = "-1px";
  select.style.overflow = "hidden";
  select.style.clip = "rect(0,0,0,0)";
  select.style.whiteSpace = "nowrap";
  select.style.border = "0";
  for (var option of options) {
    select.options.add(new Option(option, option, true, true));
  }
  form.appendChild(select);
  return select;
}
function isDummySelect(element) {
  return element.dataset.conform === "true";
}
function updateFieldValue(element, value) {
  if (element instanceof HTMLInputElement && (element.type === "checkbox" || element.type === "radio")) {
    element.checked = Array.isArray(value) ? value.includes(element.value) : element.value === value;
  } else if (element instanceof HTMLSelectElement && element.multiple) {
    var selectedValue = Array.isArray(value) ? [...value] : [value];
    for (var option of element.options) {
      var index = selectedValue.indexOf(option.value);
      var selected = index > -1;
      option.selected = selected;
      if (selected) {
        selectedValue.splice(index, 1);
      }
    }
    if (isDummySelect(element)) {
      for (var _option of selectedValue) {
        element.options.add(new Option(_option, _option, false, true));
      }
    }
  } else if (element.value !== value) {
    var {
      set: valueSetter
    } = Object.getOwnPropertyDescriptor(element, "value") || {};
    var prototype = Object.getPrototypeOf(element);
    var {
      set: prototypeValueSetter
    } = Object.getOwnPropertyDescriptor(prototype, "value") || {};
    if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
      prototypeValueSetter.call(element, value);
    } else {
      if (valueSetter) {
        valueSetter.call(element, value);
      } else {
        throw new Error("The given element does not have a value setter");
      }
    }
  }
}
function useInputEvent() {
  var ref = (0, import_react3.useRef)(null);
  var eventDispatched = (0, import_react3.useRef)({
    change: false,
    focus: false,
    blur: false
  });
  (0, import_react3.useEffect)(() => {
    var createEventListener = (listener) => {
      return (event) => {
        var element = ref.current;
        if (element && event.target === element) {
          eventDispatched.current[listener] = true;
        }
      };
    };
    var inputHandler = createEventListener("change");
    var focusHandler = createEventListener("focus");
    var blurHandler = createEventListener("blur");
    document.addEventListener("input", inputHandler, true);
    document.addEventListener("focusin", focusHandler, true);
    document.addEventListener("focusout", blurHandler, true);
    return () => {
      document.removeEventListener("input", inputHandler, true);
      document.removeEventListener("focusin", focusHandler, true);
      document.removeEventListener("focusout", blurHandler, true);
    };
  }, [ref]);
  return (0, import_react3.useMemo)(() => {
    return {
      change(value) {
        if (!eventDispatched.current.change) {
          eventDispatched.current.change = true;
          var element = ref.current;
          if (element) {
            updateFieldValue(element, value);
            element.dispatchEvent(new InputEvent("input", {
              bubbles: true
            }));
            element.dispatchEvent(new Event("change", {
              bubbles: true
            }));
          }
        }
        eventDispatched.current.change = false;
      },
      focus() {
        if (!eventDispatched.current.focus) {
          eventDispatched.current.focus = true;
          var element = ref.current;
          if (element) {
            element.dispatchEvent(new FocusEvent("focusin", {
              bubbles: true
            }));
            element.dispatchEvent(new FocusEvent("focus"));
          }
        }
        eventDispatched.current.focus = false;
      },
      blur() {
        if (!eventDispatched.current.blur) {
          eventDispatched.current.blur = true;
          var element = ref.current;
          if (element) {
            element.dispatchEvent(new FocusEvent("focusout", {
              bubbles: true
            }));
            element.dispatchEvent(new FocusEvent("blur"));
          }
        }
        eventDispatched.current.blur = false;
      },
      register(element) {
        ref.current = element;
      }
    };
  }, []);
}
function useInputValue(options) {
  var initializeValue = () => {
    var _options$initialValue;
    if (typeof options.initialValue === "string") {
      return options.initialValue;
    }
    return (_options$initialValue = options.initialValue) === null || _options$initialValue === void 0 ? void 0 : _options$initialValue.map((value2) => value2 !== null && value2 !== void 0 ? value2 : "");
  };
  var [key, setKey] = (0, import_react3.useState)(options.key);
  var [value, setValue2] = (0, import_react3.useState)(initializeValue);
  if (key !== options.key) {
    setValue2(initializeValue);
    setKey(options.key);
  }
  return [value, setValue2];
}
function useInputControl(meta) {
  var [value, setValue2] = useInputValue(meta);
  var initializedRef = (0, import_react3.useRef)(false);
  var {
    register,
    change,
    focus,
    blur
  } = useInputEvent();
  (0, import_react3.useEffect)(() => {
    var form = getFormElement(meta.formId);
    if (!form) {
      console.warn("useInputControl is unable to find form#".concat(meta.formId, " and identify if a dummy input is required"));
      return;
    }
    var element = getEventTarget(form, meta.name);
    if (!element && typeof value !== "undefined" && (!Array.isArray(value) || value.length > 0)) {
      element = createDummySelect(form, meta.name, value);
    }
    register(element);
    if (!initializedRef.current) {
      initializedRef.current = true;
    } else {
      change(value !== null && value !== void 0 ? value : "");
    }
    return () => {
      register(null);
      var elements = getFieldElements(form, meta.name);
      for (var _element of elements) {
        if (isDummySelect(_element)) {
          _element.remove();
        }
      }
    };
  }, [meta.formId, meta.name, value, change, register]);
  return {
    value,
    change: setValue2,
    focus,
    blur
  };
}

// app/components/forms.tsx
var import_react15 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-checkbox@1.0.4_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-checkbox/dist/index.mjs
var import_react12 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs
var import_react4 = __toESM(require_react(), 1);
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ (0, import_react4.createContext)(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const value = (0, import_react4.useMemo)(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0, import_react4.createElement)(Context.Provider, {
        value
      }, children);
    }
    function useContext2(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const context = (0, import_react4.useContext)(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext2
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ (0, import_react4.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react4.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae1109,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react4.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = (0, import_react5.useRef)(callback);
  (0, import_react5.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react5.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue2 = (0, import_react6.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue2
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react6.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react6.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  (0, import_react6.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/.pnpm/@radix-ui+react-use-previous@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react7 = __toESM(require_react(), 1);
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = (0, import_react7.useRef)({
    value,
    previous: value
  });
  return (0, import_react7.useMemo)(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}

// node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.mjs
var import_react9 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var import_react8 = __toESM(require_react(), 1);
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react8.useLayoutEffect : () => {
};

// node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.mjs
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size, setSize] = (0, import_react9.useState)(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size;
}

// node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs
var import_react10 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react10.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react10.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ (0, import_react10.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react10.useState)();
  const stylesRef = (0, import_react10.useRef)({});
  const prevPresentRef = (0, import_react10.useRef)(present);
  const prevAnimationNameRef = (0, import_react10.useRef)("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react10.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react10.useCallback)((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/.pnpm/@babel+runtime@7.23.7/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}

// node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2._ik3fzjwz4uihdhecnufldxfp7a/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_react11 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node = /* @__PURE__ */ (0, import_react11.forwardRef)((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    (0, import_react11.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ (0, import_react11.createElement)(Comp, _extends2({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    (0, import_react_dom2.flushSync)(
      () => target.dispatchEvent(event)
    );
}

// node_modules/.pnpm/@radix-ui+react-checkbox@1.0.4_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-checkbox/dist/index.mjs
var $e698a72e93240346$var$CHECKBOX_NAME = "Checkbox";
var [$e698a72e93240346$var$createCheckboxContext, $e698a72e93240346$export$b566c4ff5488ea01] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($e698a72e93240346$var$CHECKBOX_NAME);
var [$e698a72e93240346$var$CheckboxProvider, $e698a72e93240346$var$useCheckboxContext] = $e698a72e93240346$var$createCheckboxContext($e698a72e93240346$var$CHECKBOX_NAME);
var $e698a72e93240346$export$48513f6b9f8ce62d = /* @__PURE__ */ (0, import_react12.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...checkboxProps } = props;
  const [button, setButton] = (0, import_react12.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react12.useRef)(false);
  const isFormControl2 = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  const initialCheckedStateRef = (0, import_react12.useRef)(checked);
  (0, import_react12.useEffect)(() => {
    const form = button === null || button === void 0 ? void 0 : button.form;
    if (form) {
      const reset = () => setChecked(initialCheckedStateRef.current);
      form.addEventListener("reset", reset);
      return () => form.removeEventListener("reset", reset);
    }
  }, [
    button,
    setChecked
  ]);
  return /* @__PURE__ */ (0, import_react12.createElement)($e698a72e93240346$var$CheckboxProvider, {
    scope: __scopeCheckbox,
    state: checked,
    disabled
  }, /* @__PURE__ */ (0, import_react12.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": $e698a72e93240346$var$isIndeterminate(checked) ? "mixed" : checked,
    "aria-required": required,
    "data-state": $e698a72e93240346$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, checkboxProps, {
    ref: composedRefs,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      setChecked(
        (prevChecked) => $e698a72e93240346$var$isIndeterminate(prevChecked) ? true : !prevChecked
      );
      if (isFormControl2) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl2 && /* @__PURE__ */ (0, import_react12.createElement)($e698a72e93240346$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
var $e698a72e93240346$var$INDICATOR_NAME = "CheckboxIndicator";
var $e698a72e93240346$export$59aad738f51d1c05 = /* @__PURE__ */ (0, import_react12.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
  const context = $e698a72e93240346$var$useCheckboxContext($e698a72e93240346$var$INDICATOR_NAME, __scopeCheckbox);
  return /* @__PURE__ */ (0, import_react12.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $e698a72e93240346$var$isIndeterminate(context.state) || context.state === true
  }, /* @__PURE__ */ (0, import_react12.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $e698a72e93240346$var$getState(context.state),
    "data-disabled": context.disabled ? "" : void 0
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      pointerEvents: "none",
      ...props.style
    }
  })));
});
var $e698a72e93240346$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react12.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react12.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      input.indeterminate = $e698a72e93240346$var$isIndeterminate(checked);
      setChecked.call(input, $e698a72e93240346$var$isIndeterminate(checked) ? false : checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return /* @__PURE__ */ (0, import_react12.createElement)("input", _extends({
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: $e698a72e93240346$var$isIndeterminate(checked) ? false : checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $e698a72e93240346$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $e698a72e93240346$var$getState(checked) {
  return $e698a72e93240346$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
var $e698a72e93240346$export$be92b6f5f03c0fe9 = $e698a72e93240346$export$48513f6b9f8ce62d;
var $e698a72e93240346$export$adb584737d712b70 = $e698a72e93240346$export$59aad738f51d1c05;

// app/components/ui/checkbox.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/checkbox.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/checkbox.tsx"
  );
  import.meta.hot.lastModified = "1701799646826.5037";
}
var Checkbox = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e698a72e93240346$export$be92b6f5f03c0fe9, { ref, className: cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e698a72e93240346$export$adb584737d712b70, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 8 8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M1,4 L3,6 L7,2", fill: "none", stroke: "currentcolor", strokeWidth: "1" }, void 0, false, {
  fileName: "app/components/ui/checkbox.tsx",
  lineNumber: 34,
  columnNumber: 9
}) }, void 0, false, {
  fileName: "app/components/ui/checkbox.tsx",
  lineNumber: 33,
  columnNumber: 7
}) }, void 0, false, {
  fileName: "app/components/ui/checkbox.tsx",
  lineNumber: 32,
  columnNumber: 5
}) }, void 0, false, {
  fileName: "app/components/ui/checkbox.tsx",
  lineNumber: 31,
  columnNumber: 12
}));
_c2 = Checkbox;
Checkbox.displayName = $e698a72e93240346$export$be92b6f5f03c0fe9.displayName;
var _c;
var _c2;
$RefreshReg$(_c, "Checkbox$React.forwardRef");
$RefreshReg$(_c2, "Checkbox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/input.tsx
var React2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/input.tsx"
  );
  import.meta.hot.lastModified = "1701799646827.2263";
}
var Input = React2.forwardRef(_c3 = ({
  className,
  type,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { ref, className: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-input-invalid", className), type, ...props }, void 0, false, {
    fileName: "app/components/ui/input.tsx",
    lineNumber: 32,
    columnNumber: 10
  });
});
_c22 = Input;
Input.displayName = "Input";
var _c3;
var _c22;
$RefreshReg$(_c3, "Input$React.forwardRef");
$RefreshReg$(_c22, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/.pnpm/@radix-ui+react-label@2.0.2_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-label/dist/index.mjs
var import_react13 = __toESM(require_react(), 1);
var $b73a6c6685e72184$export$b04be29aa201d4f5 = /* @__PURE__ */ (0, import_react13.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react13.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.label, _extends({}, props, {
    ref: forwardedRef,
    onMouseDown: (event) => {
      var _props$onMouseDown;
      (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event);
      if (!event.defaultPrevented && event.detail > 1)
        event.preventDefault();
    }
  }));
});
var $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;

// app/components/ui/label.tsx
var React3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/label.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/label.tsx"
  );
  import.meta.hot.lastModified = "1701268123129.3875";
}
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React3.forwardRef(_c4 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($b73a6c6685e72184$export$be92b6f5f03c0fe9, { ref, className: cn(labelVariants(), className), ...props }, void 0, false, {
  fileName: "app/components/ui/label.tsx",
  lineNumber: 29,
  columnNumber: 12
}));
_c23 = Label;
Label.displayName = $b73a6c6685e72184$export$be92b6f5f03c0fe9.displayName;
var _c4;
var _c23;
$RefreshReg$(_c4, "Label$React.forwardRef");
$RefreshReg$(_c23, "Label");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/textarea.tsx
var React4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/textarea.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/textarea.tsx"
  );
  import.meta.hot.lastModified = "1701799646827.653";
}
var Textarea = React4.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("textarea", { ref, className: cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-input-invalid", className), ...props }, void 0, false, {
    fileName: "app/components/ui/textarea.tsx",
    lineNumber: 31,
    columnNumber: 10
  });
});
_c24 = Textarea;
Textarea.displayName = "Textarea";
var _c5;
var _c24;
$RefreshReg$(_c5, "Textarea$React.forwardRef");
$RefreshReg$(_c24, "Textarea");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/forms.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/forms.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/forms.tsx"
  );
  import.meta.hot.lastModified = "1714036199341.7876";
}
function ErrorList({
  id,
  errors
}) {
  const errorsToRender = errors?.filter(Boolean);
  if (!errorsToRender?.length) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "flex flex-col gap-1", id, children: errorsToRender.map((e) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "text-[10px] text-foreground-destructive", children: e }, e, false, {
    fileName: "app/components/forms.tsx",
    lineNumber: 39,
    columnNumber: 32
  }, this)) }, void 0, false, {
    fileName: "app/components/forms.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c6 = ErrorList;
function Field({
  labelProps,
  inputProps,
  errors,
  className
}) {
  _s();
  const fallbackId = (0, import_react15.useId)();
  const id = inputProps.id ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Label, { htmlFor: id, ...labelProps }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { "aria-describedby": errorId, "aria-invalid": errorId ? true : void 0, id, ...inputProps }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: errorId ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ErrorList, { errors, id: errorId }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 59,
      columnNumber: 20
    }, this) : null }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/forms.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(Field, "i2GpmVP4tZRTGa8NQ93f/KVTRgI=", false, function() {
  return [import_react15.useId];
});
_c25 = Field;
function TextareaField({
  labelProps,
  textareaProps,
  errors,
  className
}) {
  _s2();
  const fallbackId = (0, import_react15.useId)();
  const id = textareaProps.id ?? textareaProps.name ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Label, { htmlFor: id, ...labelProps }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Textarea, { "aria-describedby": errorId, "aria-invalid": errorId ? true : void 0, id, ...textareaProps }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "min-h-[32px] px-4 pb-3 pt-1", children: errorId ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ErrorList, { errors, id: errorId }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 81,
      columnNumber: 20
    }, this) : null }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/forms.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_s2(TextareaField, "i2GpmVP4tZRTGa8NQ93f/KVTRgI=", false, function() {
  return [import_react15.useId];
});
_c32 = TextareaField;
function CheckboxField({
  labelProps,
  buttonProps,
  errors,
  className
}) {
  _s3();
  const {
    key,
    defaultChecked,
    ...checkboxProps
  } = buttonProps;
  const fallbackId = (0, import_react15.useId)();
  const checkedValue = buttonProps.value ?? "on";
  const input = useInputControl({
    key,
    name: buttonProps.name,
    formId: buttonProps.form,
    initialValue: defaultChecked ? checkedValue : void 0
  });
  const id = buttonProps.id ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Checkbox, { ...checkboxProps, "aria-describedby": errorId, "aria-invalid": errorId ? true : void 0, checked: input.value === checkedValue, id, ...buttonProps, type: "button", onBlur: (event) => {
        input.blur();
        buttonProps.onBlur?.(event);
      }, onCheckedChange: (state) => {
        input.change(state.valueOf() ? checkedValue : "");
        buttonProps.onCheckedChange?.(state);
      }, onFocus: (event) => {
        input.focus();
        buttonProps.onFocus?.(event);
      } }, void 0, false, {
        fileName: "app/components/forms.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: id, ...labelProps, className: "self-center text-body-xs text-muted-foreground" }, void 0, false, {
        fileName: "app/components/forms.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/forms.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "px-4 pb-3 pt-1", children: errorId ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ErrorList, { errors, id: errorId }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 126,
      columnNumber: 20
    }, this) : null }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/forms.tsx",
    lineNumber: 111,
    columnNumber: 10
  }, this);
}
_s3(CheckboxField, "bvQxwa8UFrmFr+rQ7VsNBcCfGxQ=", false, function() {
  return [import_react15.useId, useInputControl];
});
_c42 = CheckboxField;
var _c6;
var _c25;
var _c32;
var _c42;
$RefreshReg$(_c6, "ErrorList");
$RefreshReg$(_c25, "Field");
$RefreshReg$(_c32, "TextareaField");
$RefreshReg$(_c42, "CheckboxField");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  formatPaths,
  parse,
  FormProvider,
  useForm,
  getFormProps,
  getFieldsetProps,
  getInputProps,
  getTextareaProps,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  _extends2 as _extends,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $8927f6f2acc4f386$export$6d1a0317bde7de7f,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  $010c2913dbd2fe3d$export$5cae361ad82dce8b,
  $db6c3485150b8e66$export$1ab7ae714698c4b8,
  Input,
  Label,
  Textarea,
  ErrorList,
  Field,
  TextareaField,
  CheckboxField
};
//# sourceMappingURL=/build/_shared/chunk-HP5C7Y43.js.map
