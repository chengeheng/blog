const {
	override,
	fixBabelImports,
	addLessLoader,
	babelInclude
} = require("customize-cra");
const path = require("path");

module.exports = override(
	fixBabelImports("import", {
		libraryName: "antd",
		libraryDirectory: "es",
		style: true
	}),
	addLessLoader({
		modifyVars: {
			"@primary-color": "#F5A623"
		},
		javascriptEnabled: true
	}),
	babelInclude([path.resolve("src")])
);
