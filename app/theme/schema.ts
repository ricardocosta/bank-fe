import { z } from "zod";

export const ThemeSwitchSchema = z.object({
  theme: z.enum(["system", "light", "dark"]),
});
