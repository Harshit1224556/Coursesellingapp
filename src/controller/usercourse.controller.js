
const userModel = require('../models/user.model')

const courseModel  = require('../models/course.model')


async function purchasecourse(req,res)
{

    try{

        const userId = req.user._id;

        const {courseId} = req.params;



        const course = await courseModel.findById(courseId)

        if(!course){
            return res.status(404).json({
                success:false,
                message:"course not found"
            })
        }

        const user = await userModel.findById(userId)


        if(user.purchasecourse.includes(courseId)){
            return res.status(400).json({
                success:false,
                message:"course already purchased"
            })
        }

        user.purchasecourse.push(courseId)
        await user.save()

        res.status(200).json({
            success:true,
            message:"course purchased  successfully"
            
        })

    }

    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}


async function seepurchasedcourse(req,res){
    try{

        const userId = req.user._id

        const user = await userModel.findById(userId)
        .populate("purchasecourse")

        res.status(200).json({
            success:true,
            count:user.purchasecourse.length,
            course:user.purchasecourse

        })
    }

    catch(err){
        message:err.message
    }
}

async function seecourse(req,res){
   
    try{
        const course = await courseModel.find({})

       res.status(200).json({
         success:true,
         count:course.length,
         course
           
       })
    }

    catch(err){

        res.status(404).json({
        success:false,
        message:err.message
        })
        
    }
}



module.exports = {seecourse,purchasecourse,seepurchasedcourse}