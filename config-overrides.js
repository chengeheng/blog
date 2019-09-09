const {
    override,
    fixBabelImports,
    addLessLoader,
    babelInclude
} = require("customize-cra");
const path = require("path");

module.exports = override(
    fixBabelImports("antd", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css"
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#1DA57A" }
    }),
    babelInclude([path.resolve("src")])
);
