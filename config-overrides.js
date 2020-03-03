const {
	override,
	fixBabelImports,
	addLessLoader,
	babelInclude,
	addDecoratorsLegacy,
	addWebpackResolve
} = require("customize-cra");
const path = require("path");

const addCustomize = () => config => {
	if (process.env.NODE_ENV === "production") {
		config.devtool = false; //去掉map文件
		// config.module.rules.push({
		// 	loader: "webpack-ant-icon-loader",
		// 	enforce: "pre",
		// 	include: [require.resolve("@ant-design/icons/lib/dist")]
		// });
		let splitChunksConfig = config.optimization.splitChunks;

		// if (config.entry && config.entry instanceof Array) {
		// 	config.entry = {
		// 		main: config.entry,
		// 		vendor: [
		// 			"react",
		// 			"react-dom",
		// 			"react-router-dom",
		// 			"react-redux",
		// 			"redux",
		// 			"lodash",
		// 			"moment",
		// 			"react-router"
		// 		]
		// 	};
		// } else if (config.entry && typeof config.entry === "object") {
		// 	config.entry.vendor = [
		// 		"react",
		// 		"react-dom",
		// 		"react-router-dom",
		// 		"react-redux",
		// 		"redux",
		// 		"lodash",
		// 		"moment",
		// 		"react-router"
		// 	];
		// }

		Object.assign(splitChunksConfig, {
			chunks: "all",
			cacheGroups: {
				// reactBase: {
				// 	test: module => {
				// 		return /react|redux|prop-types/.test(module.context);
				// 	}, // 直接使用 test 来做路径匹配，抽离react相关代码
				// 	chunks: "initial",
				// 	name: "reactBase",
				// 	priority: -4
				// },
				// antd: {
				// 	test: module => /antd/.test(module.context),
				// 	chunks: "initial",
				// 	reuseExistingChunk: false,
				// 	name: "antd",
				// 	priority: -10
				// },
				marked: {
					test: module => {
						return /highlight/.test(module.context);
					}, // 直接使用 test 来做路径匹配，抽离react相关代码
					chunks: "initial",
					name: "marked",
					reuseExistingChunk: true,
					priority: -16
				}
				// vender: {
				// 	test: /[\\/]node_modules[\\/]/,
				// 	name: "vendor",
				// 	chunks: "initial",
				// 	reuseExistingChunk: true,
				// 	priority: -18
				// },
				// common: {
				// 	name: "common",
				// 	minSize: 1,
				// 	reuseExistingChunk: true,
				// 	priority: -20
				// }
			}
		});
	}
	return config;
};

module.exports = override(
	// 参考https://www.jianshu.com/p/e1dbb940968d
	fixBabelImports("antd", {
		libraryName: "antd",
		libraryDirectory: "lib"
		// style: true
	}),
	addLessLoader({
		// modifyVars: {
		// 	"@primary-color": "#F5A623"
		// },
		javascriptEnabled: true
	}),
	babelInclude([path.resolve("src"), path.resolve("node_modules/cgh-ui")]),
	addDecoratorsLegacy(),
	addWebpackResolve({
		extensions: [".js", ".jsx", ".json", ".css", ".less", ".jpg", ".png"],
		alias: {
			// 配置绝对路径
			style: path.resolve(__dirname, "src/style"),
			images: path.resolve(__dirname, "src/images")
		}
	}),
	addCustomize()
);
