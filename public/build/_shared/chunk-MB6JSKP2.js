import {
  require_react
} from "/build/_shared/chunk-Y27R3AJV.js";
import {
  __toESM
} from "/build/_shared/chunk-LTRR4HZE.js";

// node_modules/.pnpm/remix-utils@7.5.0_@remix-run+node@2.4.1_typescript@5.3.3__@remix-run+react@2.4.1_react-dom@18_nrqyp3z7n6agbckuq7y7k5vlxq/node_modules/remix-utils/build/react/honeypot.js
var React = __toESM(require_react(), 1);
var HoneypotContext = React.createContext({});
function HoneypotInputs({ label = "Please leave this field blank" }) {
  let context = React.useContext(HoneypotContext);
  let { nameFieldName = "name__confirm", validFromFieldName = "from__confirm", encryptedValidFrom } = context;
  return React.createElement(
    "div",
    { id: `${nameFieldName}_wrap`, style: { display: "none" }, "aria-hidden": "true" },
    React.createElement("label", { htmlFor: nameFieldName }, label),
    React.createElement("input", { id: nameFieldName, name: nameFieldName, type: "text", defaultValue: "", autoComplete: "nope", tabIndex: -1 }),
    validFromFieldName && encryptedValidFrom ? React.createElement(
      React.Fragment,
      null,
      React.createElement("label", { htmlFor: validFromFieldName }, label),
      React.createElement("input", { id: validFromFieldName, name: validFromFieldName, type: "text", value: encryptedValidFrom, readOnly: true, autoComplete: "off", tabIndex: -1 })
    ) : null
  );
}
function HoneypotProvider({ children, ...context }) {
  return React.createElement(HoneypotContext.Provider, { value: context }, children);
}

export {
  HoneypotInputs,
  HoneypotProvider
};
//# sourceMappingURL=/build/_shared/chunk-MB6JSKP2.js.map
