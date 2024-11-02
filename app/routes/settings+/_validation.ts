import { z } from "zod";

import { EmailSchema } from "#app/utils/user-validation.ts";

export const ChangeEmailSchema = z.object({
  email: EmailSchema,
});
