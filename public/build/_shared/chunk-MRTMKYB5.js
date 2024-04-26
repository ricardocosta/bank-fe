import {
  ZodAny,
  ZodArray,
  ZodBigInt,
  ZodBoolean,
  ZodCatch,
  ZodDate,
  ZodDefault,
  ZodDiscriminatedUnion,
  ZodEffects,
  ZodEnum,
  ZodIntersection,
  ZodLazy,
  ZodLiteral,
  ZodNativeEnum,
  ZodNullable,
  ZodNumber,
  ZodObject,
  ZodOptional,
  ZodPipeline,
  ZodString,
  ZodTuple,
  ZodUnion,
  anyType,
  lazyType
} from "/build/_shared/chunk-M7HH4RIF.js";
import {
  formatPaths,
  parse
} from "/build/_shared/chunk-HP5C7Y43.js";

// node_modules/.pnpm/@conform-to+zod@1.1.2_zod@3.22.4/node_modules/@conform-to/zod/_virtual/_rollupPluginBabelHelpers.mjs
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

// node_modules/.pnpm/@conform-to+zod@1.1.2_zod@3.22.4/node_modules/@conform-to/zod/constraint.mjs
var keys = ["required", "minLength", "maxLength", "min", "max", "step", "multiple", "pattern"];
function getZodConstraint(schema) {
  function updateConstraint(schema2, data) {
    var _data$name;
    var name = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    var constraint = name !== "" ? (_data$name = data[name]) !== null && _data$name !== void 0 ? _data$name : data[name] = {
      required: true
    } : {};
    if (schema2 instanceof ZodObject) {
      for (var key in schema2.shape) {
        updateConstraint(schema2.shape[key], data, name ? "".concat(name, ".").concat(key) : key);
      }
    } else if (schema2 instanceof ZodEffects) {
      updateConstraint(schema2.innerType(), data, name);
    } else if (schema2 instanceof ZodPipeline) {
      updateConstraint(schema2._def.out, data, name);
    } else if (schema2 instanceof ZodIntersection) {
      var leftResult = {};
      var rightResult = {};
      updateConstraint(schema2._def.left, leftResult, name);
      updateConstraint(schema2._def.right, rightResult, name);
      Object.assign(data, leftResult, rightResult);
    } else if (schema2 instanceof ZodUnion || schema2 instanceof ZodDiscriminatedUnion) {
      Object.assign(data, schema2.options.map((option) => {
        var result2 = {};
        updateConstraint(option, result2, name);
        return result2;
      }).reduce((prev, next) => {
        var list = /* @__PURE__ */ new Set([...Object.keys(prev), ...Object.keys(next)]);
        var result2 = {};
        for (var _name of list) {
          var prevConstraint = prev[_name];
          var nextConstraint = next[_name];
          if (prevConstraint && nextConstraint) {
            var _constraint = {};
            result2[_name] = _constraint;
            for (var _key of keys) {
              if (typeof prevConstraint[_key] !== "undefined" && typeof nextConstraint[_key] !== "undefined" && prevConstraint[_key] === nextConstraint[_key]) {
                _constraint[_key] = prevConstraint[_key];
              }
            }
          } else {
            result2[_name] = _objectSpread2(_objectSpread2(_objectSpread2({}, prevConstraint), nextConstraint), {}, {
              required: false
            });
          }
        }
        return result2;
      }));
    } else if (name === "") {
      throw new Error("Unsupported schema");
    } else if (schema2 instanceof ZodArray) {
      constraint.multiple = true;
      updateConstraint(schema2.element, data, "".concat(name, "[]"));
    } else if (schema2 instanceof ZodString) {
      if (schema2.minLength !== null) {
        constraint.minLength = schema2.minLength;
      }
      if (schema2.maxLength !== null) {
        constraint.maxLength = schema2.maxLength;
      }
    } else if (schema2 instanceof ZodOptional) {
      constraint.required = false;
      updateConstraint(schema2.unwrap(), data, name);
    } else if (schema2 instanceof ZodDefault) {
      constraint.required = false;
      updateConstraint(schema2.removeDefault(), data, name);
    } else if (schema2 instanceof ZodNumber) {
      if (schema2.minValue !== null) {
        constraint.min = schema2.minValue;
      }
      if (schema2.maxValue !== null) {
        constraint.max = schema2.maxValue;
      }
    } else if (schema2 instanceof ZodEnum) {
      constraint.pattern = schema2.options.map((option) => (
        // To escape unsafe characters on regex
        option.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
      )).join("|");
    } else if (schema2 instanceof ZodTuple) {
      for (var i = 0; i < schema2.items.length; i++) {
        updateConstraint(schema2.items[i], data, "".concat(name, "[").concat(i, "]"));
      }
    } else
      ;
  }
  var result = {};
  updateConstraint(schema, result);
  return result;
}

// node_modules/.pnpm/@conform-to+zod@1.1.2_zod@3.22.4/node_modules/@conform-to/zod/coercion.mjs
function coerceString(value, transform) {
  if (typeof value !== "string") {
    return value;
  }
  if (value === "") {
    return void 0;
  }
  if (typeof transform !== "function") {
    return value;
  }
  return transform(value);
}
function coerceFile(file) {
  if (typeof File !== "undefined" && file instanceof File && file.name === "" && file.size === 0) {
    return void 0;
  }
  return file;
}
function isFileSchema(schema) {
  if (typeof File === "undefined") {
    return false;
  }
  return schema._def.effect.type === "refinement" && schema.innerType() instanceof ZodAny && schema.safeParse(new File([], "")).success && !schema.safeParse("").success;
}
function enableTypeCoercion(type) {
  var cache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Map();
  var result = cache.get(type);
  if (result) {
    return result;
  }
  var schema = type;
  if (type instanceof ZodString || type instanceof ZodLiteral || type instanceof ZodEnum || type instanceof ZodNativeEnum) {
    schema = anyType().transform((value) => coerceString(value)).pipe(type);
  } else if (type instanceof ZodNumber) {
    schema = anyType().transform((value) => coerceString(value, (text) => text.trim() === "" ? Number.NaN : Number(text))).pipe(type);
  } else if (type instanceof ZodBoolean) {
    schema = anyType().transform((value) => coerceString(value, (text) => text === "on" ? true : text)).pipe(type);
  } else if (type instanceof ZodDate) {
    schema = anyType().transform((value) => coerceString(value, (timestamp) => {
      var date = new Date(timestamp);
      if (isNaN(date.getTime())) {
        return timestamp;
      }
      return date;
    })).pipe(type);
  } else if (type instanceof ZodBigInt) {
    schema = anyType().transform((value) => coerceString(value, BigInt)).pipe(type);
  } else if (type instanceof ZodArray) {
    schema = anyType().transform((value) => {
      if (Array.isArray(value)) {
        return value;
      }
      if (typeof value === "undefined" || typeof coerceFile(coerceString(value)) === "undefined") {
        return [];
      }
      return [value];
    }).pipe(new ZodArray(_objectSpread2(_objectSpread2({}, type._def), {}, {
      type: enableTypeCoercion(type.element, cache)
    })));
  } else if (type instanceof ZodObject) {
    var _shape = Object.fromEntries(Object.entries(type.shape).map((_ref) => {
      var [key, def] = _ref;
      return [
        key,
        // @ts-expect-error see message above
        enableTypeCoercion(def, cache)
      ];
    }));
    schema = new ZodObject(_objectSpread2(_objectSpread2({}, type._def), {}, {
      shape: () => _shape
    }));
  } else if (type instanceof ZodEffects) {
    if (isFileSchema(type)) {
      schema = anyType().transform((value) => coerceFile(value)).pipe(type);
    } else {
      schema = new ZodEffects(_objectSpread2(_objectSpread2({}, type._def), {}, {
        schema: enableTypeCoercion(type.innerType(), cache)
      }));
    }
  } else if (type instanceof ZodOptional) {
    schema = anyType().transform((value) => coerceFile(coerceString(value))).pipe(new ZodOptional(_objectSpread2(_objectSpread2({}, type._def), {}, {
      innerType: enableTypeCoercion(type.unwrap(), cache)
    })));
  } else if (type instanceof ZodDefault) {
    schema = anyType().transform((value) => coerceFile(coerceString(value))).pipe(new ZodDefault(_objectSpread2(_objectSpread2({}, type._def), {}, {
      innerType: enableTypeCoercion(type.removeDefault(), cache)
    })));
  } else if (type instanceof ZodCatch) {
    schema = new ZodCatch(_objectSpread2(_objectSpread2({}, type._def), {}, {
      innerType: enableTypeCoercion(type.removeCatch(), cache)
    }));
  } else if (type instanceof ZodIntersection) {
    schema = new ZodIntersection(_objectSpread2(_objectSpread2({}, type._def), {}, {
      left: enableTypeCoercion(type._def.left, cache),
      right: enableTypeCoercion(type._def.right, cache)
    }));
  } else if (type instanceof ZodUnion) {
    schema = new ZodUnion(_objectSpread2(_objectSpread2({}, type._def), {}, {
      options: type.options.map((option) => enableTypeCoercion(option, cache))
    }));
  } else if (type instanceof ZodDiscriminatedUnion) {
    schema = new ZodDiscriminatedUnion(_objectSpread2(_objectSpread2({}, type._def), {}, {
      options: type.options.map((option) => enableTypeCoercion(option, cache)),
      optionsMap: new Map(Array.from(type.optionsMap.entries()).map((_ref2) => {
        var [discriminator, option] = _ref2;
        return [discriminator, enableTypeCoercion(option, cache)];
      }))
    }));
  } else if (type instanceof ZodTuple) {
    schema = new ZodTuple(_objectSpread2(_objectSpread2({}, type._def), {}, {
      items: type.items.map((item) => enableTypeCoercion(item, cache))
    }));
  } else if (type instanceof ZodNullable) {
    schema = new ZodNullable(_objectSpread2(_objectSpread2({}, type._def), {}, {
      innerType: enableTypeCoercion(type.unwrap(), cache)
    }));
  } else if (type instanceof ZodPipeline) {
    schema = new ZodPipeline(_objectSpread2(_objectSpread2({}, type._def), {}, {
      in: enableTypeCoercion(type._def.in, cache),
      out: enableTypeCoercion(type._def.out, cache)
    }));
  } else if (type instanceof ZodLazy) {
    schema = lazyType(() => enableTypeCoercion(type.schema, cache));
  }
  if (type !== schema) {
    cache.set(type, schema);
  }
  return schema;
}

// node_modules/.pnpm/@conform-to+zod@1.1.2_zod@3.22.4/node_modules/@conform-to/zod/parse.mjs
function getError(zodError, formatError) {
  var result = {};
  for (var issue of zodError.errors) {
    var name = formatPaths(issue.path);
    switch (issue.message) {
      case conformZodMessage.VALIDATION_UNDEFINED:
        return null;
      case conformZodMessage.VALIDATION_SKIPPED:
        result[name] = null;
        break;
      default: {
        var _issues = result[name];
        if (_issues !== null) {
          if (_issues) {
            result[name] = _issues.concat(issue);
          } else {
            result[name] = [issue];
          }
        }
        break;
      }
    }
  }
  return Object.entries(result).reduce((result2, _ref) => {
    var [name2, issues] = _ref;
    result2[name2] = issues ? formatError(issues) : null;
    return result2;
  }, {});
}
function parseWithZod(payload, options) {
  return parse(payload, {
    resolve(payload2, intent) {
      var errorMap = options.errorMap;
      var schema = enableTypeCoercion(typeof options.schema === "function" ? options.schema(intent) : options.schema);
      var resolveSubmission = (result) => {
        var _options$formatError;
        return {
          value: result.success ? result.data : void 0,
          error: !result.success ? getError(result.error, (_options$formatError = options.formatError) !== null && _options$formatError !== void 0 ? _options$formatError : (issues) => issues.map((issue) => issue.message)) : void 0
        };
      };
      return options.async ? schema.safeParseAsync(payload2, {
        errorMap
      }).then((result) => resolveSubmission(result)) : resolveSubmission(schema.safeParse(payload2, {
        errorMap
      }));
    }
  });
}
var conformZodMessage = {
  VALIDATION_SKIPPED: "__skipped__",
  VALIDATION_UNDEFINED: "__undefined__"
};

export {
  getZodConstraint,
  parseWithZod
};
//# sourceMappingURL=/build/_shared/chunk-MRTMKYB5.js.map
