const loadModule = async (modulePath: string) => {
  try {
    return await import(modulePath);
  } catch (e) {
    return await import("./path.js");
  }
};
let { default: path } = await loadModule("path");

function getFilename(filename: string): string {
  return path.basename(filename, path.extname(filename));
}

export { getFilename };
