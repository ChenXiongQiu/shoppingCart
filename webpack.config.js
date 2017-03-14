var htmlWebpackPlugin= require('html-webpack-plugin');
var path=require('path');
var distPath=path.join(__dirname,"/dist");
module.exports={
   entry:"./src/main.js",
   output:{
     path:distPath,
     filename:"build.js"},
   module:{
     loaders:[{
        test:/\.vue$/,
        exclude:/node_modules/,
        loader:'vue-loader'
    },{
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader?presets[]=es2015'
    },{
       test:/\.css$/,
       loader:"style-loader!css-loader!autoprefixer-loader"
     },
     {
       test:/\.less$/,
       loader:"style-loader!css-loader!less-loader"
     },
     {
       test:/\.sass$/,
       loader:"style-loader!css-loader!sass-loader"
     },
     {
       test:/\.(jpg|png|ttf)$/,
       loader:"url-loader?limit=4000000"
     }
     ]
   },
   plugins:[new htmlWebpackPlugin({
   title:'index', 
   filename:'index.html',
   template:'index1.html'
   })]

}