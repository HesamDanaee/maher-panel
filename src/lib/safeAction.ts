import { createSafeActionClient } from "next-safe-action";

export const authAction = createSafeActionClient({
  async handleReturnedServerError(e) {
    return new Promise((_, rej) => rej(e));
  },
  async middleware() {},
});
