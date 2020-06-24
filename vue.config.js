module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    },
    productionSourceMap: false, 
    chainWebpack: config => {
        //删除预加载文件
        config.plugins.delete('prefetch')
    }
}