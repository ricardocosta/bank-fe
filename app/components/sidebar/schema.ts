import { z } from "zod";

export const SidebarStateFormSchema = z.object({
  sidebarState: z.enum(["expanded", "collapsed"]),
});
