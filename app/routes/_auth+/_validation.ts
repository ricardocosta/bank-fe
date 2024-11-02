import { z } from "zod";

export const codeQueryParam = "code";
export const targetQueryParam = "target";
export const typeQueryParam = "type";
export const redirectToQueryParam = "redirectTo";

const types = ["onboarding", "reset-password", "change-email"] as const;
export type VerificationTypes = z.infer<typeof VerificationTypeSchema>;

export const VerificationTypeSchema = z.enum(types);

export const VerifySchema = z.object({
  [codeQueryParam]: z.string().min(6).max(6),
  [typeQueryParam]: VerificationTypeSchema,
  [targetQueryParam]: z.string(),
  [redirectToQueryParam]: z.string().optional(),
});
