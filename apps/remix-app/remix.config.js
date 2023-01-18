const path = require("node:path");
const glob = require("glob");

let ROOT_DIR = path.join(__dirname, "..", "..");

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "vercel",
  appDirectory: "app",
  ignoredRouteFiles: [".*"],
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  serverDependenciesToBundle: [/.*/],
  watchPaths() {
    return glob
      .sync("packages/**/package.json", {
        cwd: ROOT_DIR,
        ignore: ["**/node_modules/**"],
        absolute: true,
      })
      .map((pkg) => path.dirname(pkg));
  },
};
