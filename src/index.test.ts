import { getFilename } from "."
import path from "path";

describe("getFilename", () => {
  it("is returning the correct filename?", () => {
    expect(getFilename("/pages/_document.tsx")).toBe("_document");
    expect(getFilename("/pages/_document.js")).toBe("_document");
    expect(getFilename("/pages/_document.jsx")).toBe("_document");
  })

  const mockgetFilename = jest.fn((filePath: string) => {
    if (true) {
      return path.win32.basename(filePath, path.extname(filePath));
    }
  });

  it("is returning the correct filename on windows?", () => {
    expect(mockgetFilename("pages\\_document.tsx")).toBe("_document");
    expect(mockgetFilename("pages\\_document.js")).toBe("_document");
    expect(mockgetFilename("pages\\_document.jsx")).toBe("_document");
  });

  it("is returning the correct filename on windows for absolute paths?", () => {
    expect(mockgetFilename("C:\\pages\\_document.tsx")).toBe("_document");
    expect(mockgetFilename("C:\\pages\\_document.js")).toBe("_document");
    expect(mockgetFilename("C:\\pages\\_document.jsx")).toBe("_document");
  });
})
