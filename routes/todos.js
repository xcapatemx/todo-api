var express=require("express");
var router=express.Router();

var mongoose=require("mongoose");
var Todo=require("../models/Todo.js");

router.get("/",function(req,res,next){
	Todo.find(function(err,todos){
		if(err){
			return next(err);
		}else{
			res.json(todos);
		}

	});

});

router.post("/",function(req,res,next){
	Todo.create(req.body,function(err,todo){
		if(err){
			return next(err);
		}else{
			res.json(todo);
		}
	});
});

router.get("/:id",function(req,res,next){
	Todo.findById(req.params.id,function(err,todo){
		if(err){
			return next(err);
		}else{
			res.json(todo);
		}
	});
});

router.put("/:id",function(req,res,next){
	Todo.findByIdAndUpdate(req.params.id,req.body, function(err,todo){
		if(err){
			return next(err);
		}else{
			res.json(todo);
		}

	});

});

router.delete("/:id",function(req,res,next){
	Todo.findByIdAndRemove(req.params.id,req.body, function(err,todo){
		if(err){
			return next(err);
		}else{
			res.json(todo);
		}

	});

});
module.exports=router;