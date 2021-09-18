import { serve } from "https://deno.land/x/sift@0.3.5/mod.ts";

import { handleQuotes } from "./handlers/quotes.ts";
import { handleRemarks } from "./handlers/remarks.ts";

serve({
  "/quotes": handleQuotes,
  "/remarks": handleRemarks,
});
