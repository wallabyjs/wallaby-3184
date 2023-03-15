const describe = setupMiniflareIsolatedStorage();

import { expect, test } from "vitest";
import { handleRequest } from "./index.js";

describe("handleRequest", () => {
  test("responds with url", async () => {
    const req = new Request("http://localhost/");
    const res = await handleRequest(req);
    expect(await res.text()).toBe("URL: http://localhost/");
  });
});