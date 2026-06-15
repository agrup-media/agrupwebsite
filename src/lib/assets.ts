import { existsSync } from "node:fs";
import path from "node:path";

export function publicAssetExists(src: string) {
  if (!src.startsWith("/")) {
    return false;
  }

  return existsSync(path.join(process.cwd(), "public", src));
}
