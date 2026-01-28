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


async function deletecourse(req,res){
     

  try{
  const {id} = req.params;

  const course = await courseModel.findByIdAndDelete(id)

  if(!course){
    return res.status(404).json({
      success:false,
      message:"course not found"
    })
  }


  res.status(200).json({
     success:true,
    message:"course  deleted successfully"
  })

}
catch(err){
   
  res.status(500).json({
    success:false,
    message:"Server error"
  })
}
  


}
async function updatecourse(req, res) {
  try {
    const { id } = req.params;
    const { price } = req.body;

    if (price === undefined || price <= 0) {
      return res.status(400).json({
        message: "Invalid price",
        success: false
      });
    }

    const course = await courseModel.findById(id);

    if (!course) {
      return res.status(404).json({
        message: "course not found",
        success: false
      });
    }

    course.price = price;
    await course.save();

    res.status(200).json({
      message: "course updated successfully",
      success: true
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      success: false
    });
  }
}

module.exports = {createcourse,deletecourse,updatecourse}