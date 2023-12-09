const path =require('path')

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:["style-loader","css-loader","postcss-loader","less-loader"] 
            },
            {
                test:/\.(png|jpe?g|svg|gif)$/,
                type:"asset",
                parser:{
                    dataUrlCondition:{
                        maxSize: 60 * 1024
                    }
                },
                generator:{
                    filename:"img/[name]_[hash:8][ext]"
                }
    }]
    }

}