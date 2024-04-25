import {
  useUser
} from "/build/_shared/chunk-Z5YS2INQ.js";
import {
  Spacer
} from "/build/_shared/chunk-BZYNIG4G.js";
import {
  invariant
} from "/build/_shared/chunk-Z7BBCTBE.js";
import {
  Button
} from "/build/_shared/chunk-6RG3S7SV.js";
import {
  Icon
} from "/build/_shared/chunk-TLNAOKNL.js";
import {
  getUserImgSrc
} from "/build/_shared/chunk-JWYSQB4M.js";
import {
  Form,
  Link
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-LTRR4HZE.js";

// empty-module:#app/utils/auth.server
var require_auth = __commonJS({
  "empty-module:#app/utils/auth.server"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// node_modules/.pnpm/date-fns@3.1.0/node_modules/date-fns/toDate.mjs
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new argument.constructor(+argument);
  } else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") {
    return new Date(argument);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}

// node_modules/.pnpm/date-fns@3.1.0/node_modules/date-fns/constants.mjs
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;

// node_modules/.pnpm/date-fns@3.1.0/node_modules/date-fns/isDate.mjs
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/.pnpm/date-fns@3.1.0/node_modules/date-fns/isValid.mjs
function isValid(date) {
  if (!isDate(date) && typeof date !== "number") {
    return false;
  }
  const _date = toDate(date);
  return !isNaN(Number(_date));
}

// node_modules/.pnpm/date-fns@3.1.0/node_modules/date-fns/_lib/addLeadingZeros.mjs
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

// node_modules/.pnpm/date-fns@3.1.0/node_modules/date-fns/formatISO9075.mjs
function formatISO9075(date, options) {
  const _date = toDate(date);
  if (!isValid(_date)) {
    throw new RangeError("Invalid time value");
  }
  const format = options?.format ?? "extended";
  const representation = options?.representation ?? "complete";
  let result = "";
  const dateDelimiter = format === "extended" ? "-" : "";
  const timeDelimiter = format === "extended" ? ":" : "";
  if (representation !== "time") {
    const day = addLeadingZeros(_date.getDate(), 2);
    const month = addLeadingZeros(_date.getMonth() + 1, 2);
    const year = addLeadingZeros(_date.getFullYear(), 4);
    result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
  }
  if (representation !== "date") {
    const hour = addLeadingZeros(_date.getHours(), 2);
    const minute = addLeadingZeros(_date.getMinutes(), 2);
    const second = addLeadingZeros(_date.getSeconds(), 2);
    const separator = result === "" ? "" : " ";
    result = `${result}${separator}${hour}${timeDelimiter}${minute}${timeDelimiter}${second}`;
  }
  return result;
}

// node_modules/.pnpm/date-fns@3.1.0/node_modules/date-fns/parseISO.mjs
function parseISO(argument, options) {
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);
  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  const timestamp = date.getTime();
  let time = 0;
  let offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  } else {
    const dirtyDate = new Date(timestamp + time);
    const result = /* @__PURE__ */ new Date(0);
    result.setFullYear(
      dirtyDate.getUTCFullYear(),
      dirtyDate.getUTCMonth(),
      dirtyDate.getUTCDate()
    );
    result.setHours(
      dirtyDate.getUTCHours(),
      dirtyDate.getUTCMinutes(),
      dirtyDate.getUTCSeconds(),
      dirtyDate.getUTCMilliseconds()
    );
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length
      );
    }
  }
  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)"
  );
  const captures = dateString.match(regex);
  if (!captures)
    return { year: NaN, restDateString: "" };
  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null)
    return /* @__PURE__ */ new Date(NaN);
  const captures = dateString.match(dateRegex);
  if (!captures)
    return /* @__PURE__ */ new Date(NaN);
  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = /* @__PURE__ */ new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures)
    return NaN;
  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z")
    return 0;
  const captures = timezoneString.match(timezoneRegex);
  if (!captures)
    return 0;
  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// app/routes/profile+/_profile.tsx
var import_auth = __toESM(require_auth(), 1);

// app/utils/meta.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/meta.ts"
  );
  import.meta.hot.lastModified = "1704639630682.4873";
}
function routeLoaderData(matches, matchId) {
  const match = matches.find(({ id }) => id === matchId);
  invariant(match, "Router loader data not found");
  return match.data;
}

// app/routes/profile+/_profile.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/profile+/_profile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/profile+/_profile.tsx"
  );
  import.meta.hot.lastModified = "1713392235804.2356";
}
var meta = ({
  matches
}) => {
  const rootData = routeLoaderData(matches, "root");
  const displayName = rootData.user?.name;
  return [{
    title: `Profile | ${displayName}`
  }, {
    name: "description",
    content: `Profile of ${displayName}`
  }];
};
function ProfileRoute() {
  _s();
  const user = useUser();
  const userDisplayName = user.name ?? user.username;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mb-48 mt-36 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "4xs" }, void 0, false, {
      fileName: "app/routes/profile+/_profile.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container flex flex-col items-center rounded-3xl bg-muted p-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-52", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: userDisplayName, className: "h-52 w-52 rounded-full object-cover", src: getUserImgSrc(user.image?.id) }, void 0, false, {
        fileName: "app/routes/profile+/_profile.tsx",
        lineNumber: 60,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/profile+/_profile.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/profile+/_profile.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/profile+/_profile.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, { size: "sm" }, void 0, false, {
        fileName: "app/routes/profile+/_profile.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-h2", children: userDisplayName }, void 0, false, {
          fileName: "app/routes/profile+/_profile.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/profile+/_profile.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-muted-foreground", children: [
          "Joined ",
          formatISO9075(parseISO(user.createdAt))
        ] }, void 0, true, {
          fileName: "app/routes/profile+/_profile.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/logout", className: "mt-3", method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "pill", type: "submit", variant: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "scale-125 max-md:scale-150", name: "exit", children: "Logout" }, void 0, false, {
          fileName: "app/routes/profile+/_profile.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/profile+/_profile.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/profile+/_profile.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 flex gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: "notes", children: "My notes" }, void 0, false, {
            fileName: "app/routes/profile+/_profile.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/profile+/_profile.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: "/settings/profile", children: "Edit profile" }, void 0, false, {
            fileName: "app/routes/profile+/_profile.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/profile+/_profile.tsx",
            lineNumber: 89,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile+/_profile.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile+/_profile.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile+/_profile.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile+/_profile.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s(ProfileRoute, "BPnln+wUpxLjLAxQmw7xYz9C+QI=", false, function() {
  return [useUser];
});
_c = ProfileRoute;
var _c;
$RefreshReg$(_c, "ProfileRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProfileRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/profile+/_profile-ZS4AX33H.js.map
