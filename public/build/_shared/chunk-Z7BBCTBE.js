// node_modules/.pnpm/@epic-web+invariant@1.0.0/node_modules/@epic-web/invariant/dist/index.js
var InvariantError = class _InvariantError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, _InvariantError.prototype);
  }
};
function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(typeof message === "function" ? message() : message);
  }
}

export {
  invariant
};
//# sourceMappingURL=/build/_shared/chunk-Z7BBCTBE.js.map
