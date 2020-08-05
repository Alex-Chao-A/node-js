const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const router = require("./router.js")


app.use('/static',express.static(path.join(__dirname, 'public')))
//处理 www-xlurlencoded- 请求方式
app.use(bodyParser.urlencoded({ extended: false }));
//处理 json 的请求方式
app.use(bodyParser.json());
app.use(router);

app.listen(3000,()=>{
	console.log("running .....")
})
