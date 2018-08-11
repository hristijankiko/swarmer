const path = require("path");

const rendererConfig = {
    mode: "development",
    target: "electron-renderer",
    entry: {
        app: "./src/app",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"

            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".json", ".js", ".jsx"]
    },
}

const mainConfig = {
    mode: "development",
    target: "electron-main",
    entry: {
        main: "./src/main/main"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"

            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".json", ".js", ".jsx"]
    },
}

module.exports = [rendererConfig, mainConfig];
