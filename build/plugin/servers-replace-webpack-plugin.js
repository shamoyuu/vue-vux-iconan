function ServersReplaceWebpackPlugin(options) {
    this.options = options;
}

ServersReplaceWebpackPlugin.prototype.apply = function (compiler) {
    let that = this;

    compiler.plugin('emit', function (compilation, callback) {
        // 检查所有编译好的资源文件，替换所有需要替换的地方
        for (var filename in compilation.assets) {
            if (filename.endsWith(".js")) {
                console.info("filename =", filename);
                let newFile = compilation.assets[filename].source().toString();

                let servers = that.options;
                for (let key in servers) {
                    newFile = newFile.replace("<<<" + key + ">>>", servers[key]);
                }

                compilation.assets[filename] = {
                    source: function () {
                        return newFile;
                    },
                    size: function () {
                        return newFile.length;
                    }
                };
            }
        }

        callback();
    });
};

module.exports = ServersReplaceWebpackPlugin;