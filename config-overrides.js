const {
	override,
	fixBabelImports,
	addLessLoader,
	babelInclude,
	addWebpackResolve
} = require("customize-cra");
const path = require("path");

module.exports = override(
	// 参考https://www.jianshu.com/p/e1dbb940968d
	fixBabelImports("import", {
		libraryName: "antd",
		libraryDirectory: "es"
		// style: true
	}),
	addLessLoader({
		// modifyVars: {
		// 	"@primary-color": "#F5A623"
		// },
		javascriptEnabled: true
	}),
	babelInclude([path.resolve("src"), path.resolve("node_modules/cgh-ui")]),
	addWebpackResolve({
		extensions: [".js", ".jsx", ".json", ".css", ".less", ".jpg", ".png"],
		alias: {
			// 配置绝对路径
			style: path.resolve(__dirname, "src/style"),
			images: path.resolve(__dirname, "src/images")
		}
	})
);
