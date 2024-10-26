import { z } from "zod";

export const SidebarToggleSchema = z.object({
  sidebarState: z.enum(["expanded", "collapsed"]),
});
