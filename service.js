const db = require("./db.js")
exports.list = (req,res) => {
	let sql = "select * from sys_user";
	db.base(sql,null,(result)=>{
		res.json(result);
	})
}

exports.dicList = (req,res)=>{
	let sql = "select * from t_dictionary"
	db.base(sql,null,(result)=>{
		res.json(result)
	})
}