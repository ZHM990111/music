const path = require('path');

export default {
    alias: {
        '@': path.resolve(__dirname, 'src')
    },
    //按需加载
    "extraBabelPlugins": [
        ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
    ]
}