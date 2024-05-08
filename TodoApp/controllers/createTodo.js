//import the model
const Todo = require('../models/Todo')

//define route handler
exports.createTodo = async(req,res)=>{
    try {
        //extract title & description from request body
        const {title, description} =req.body;

        //create a new todo obj & insert in db
        const response = await Todo.create({title, description});

        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry created successfully'
        })
    } catch (error) {
        console.error(error);
        console.log(error)
        res.status(500)
        .json({
            success:false,
            data:'internal server error',
            message: error.message
        })
    }
}