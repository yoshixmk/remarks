import { serve } from "https://deno.land/x/sift@0.3.5/mod.ts";

import { handleHomePage } from "./handlers/homePage.jsx";
import { handleQuotes } from "./handlers/quotes.ts";
import { handleRemarks } from "./handlers/remarks.ts";
import { handleTripPage } from "./handlers/tripPage.jsx";

serve({
  "/": handleHomePage,
  "/quotes": handleQuotes,
  "/remarks": handleRemarks,
  "/trip": handleTripPage,
});
