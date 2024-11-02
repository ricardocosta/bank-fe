// @epic-web/totp should be used server-side only. It imports `Crypto` which results in Remix
// including a big polyfill. So we put the import in a `.server.ts` file to avoid that
export { generateTOTP, getTOTPAuthUri, verifyTOTP } from "@epic-web/totp";
