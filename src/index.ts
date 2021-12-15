import path from "path";

function getFilename(first: string): string {
  if (isW32()) {
    return path.win32.basename(first, path.extname(first));
  }

  return path.basename(first, path.extname(first));
}

function isW32(): boolean {
  return process.platform === "win32";
}
export { getFilename };
