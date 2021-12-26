import { getFilename } from ".";

describe("getFilename", () => {
  it("is returning the correct filename?", () => {
    expect(getFilename("/pages/_document.tsx")).toBe("_document");
    expect(getFilename("/pages/_document.js")).toBe("_document");
    expect(getFilename("/pages/_document.jsx")).toBe("_document");
  });

  it("is returning the correct filename on windows?", () => {
    expect(getFilename("pages\\_document.tsx")).toBe("_document");
    expect(getFilename("pages\\_document.js")).toBe("_document");
    expect(getFilename("pages\\_document.jsx")).toBe("_document");
  });

  it("is returning the correct filename on windows for absolute paths?", () => {
    expect(getFilename("C:\\pages\\_document.tsx")).toBe("_document");
    expect(getFilename("C:\\pages\\_document.js")).toBe("_document");
    expect(getFilename("C:\\pages\\_document.jsx")).toBe("_document");
  });
});
