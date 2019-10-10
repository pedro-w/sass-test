const path = require("path");

module.exports = {
    mode: "production",
    entry: {
	theme: ["./src/index.js", "./src/theme.sass"],
    },
    output: {
	path: path.resolve(__dirname, "build")
    },
    module: {
	rules: [
	    {
		test: /\.sass$/,
		use: [
		    {
			loader: "css-loader"
		    },
		    {
			loader: "sass-loader?indentedSyntax",
			options: {
			    includePaths: [
				"node_modules/font-awesome/scss"
			    ]
			}
		    }
		]
	    },
	    {
		test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
		use: [
		    {
			loader: "file-loader",
			options: {
			    name: "[name].[ext]?[hash]",
			    outputPath: "css/fonts/",
			    publicPath: "fonts/"
			}
		    }
		]
	    }
	]
    }
}

