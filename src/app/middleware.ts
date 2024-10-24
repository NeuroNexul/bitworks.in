import { auth } from "@/auth/auth.config";
import { NextRequest } from "next/server";

export default auth(async function middleware(req: NextRequest) {
  // Your custom middleware logic goes here
});
