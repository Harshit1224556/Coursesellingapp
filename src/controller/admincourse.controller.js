const courseModel = require('../models/course.model')

async function createcourse(req,res){
      const {title,description, price, category, thumbnail, status,createdBy} = req.body

      const course = await courseModel.create({
          title,
          description,
          price,
          category,
          thumbnail,
          status,
            createdBy: req.admin._id

         
      })
      res.json({
        message:"new course create successfully"
      })
}


module.exports = {createcourse}