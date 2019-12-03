const {
	override,
	addLessLoader,
	babelInclude,
	addDecoratorsLegacy,
	addWebpackResolve
} = require("customize-cra");
const path = require("path");

const addCustomize = () => config => {
	if (process.env.NODE_ENV === "production") {
		config.devtool = false; //去掉map文件
		config.module.rules.push({
			loader: "webpack-ant-icon-loader",
			enforce: "pre",
			include: [require.resolve("@ant-design/icons/lib/dist")]
		});
		let splitChunksConfig = config.optimization.splitChunks;

		Object.assign(splitChunksConfig, {
			chunks: "all",
			cacheGroups: {
				marked: {
					test: module => {
						return /highlight/.test(module.context);
					}, // 直接使用 test 来做路径匹配，抽离react相关代码
					chunks: "initial",
					name: "marked",
					reuseExistingChunk: true,
					priority: -16
				}
			}
		});
	}
	return config;
};

module.exports = override(
	addLessLoader({
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
