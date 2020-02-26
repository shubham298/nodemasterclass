
const Bootcamp=require('../models/Bootcamp')
const ErrorResponse=require('../utils/errorResponse')
const asyncHandler=require('../middleware/async')
//@desc        Get all Bootcamps
//@route       Get /api/v1/bootcamps
//@access      Public
exports.getBootcamps =asyncHandler( async (req, res, next) => {

        const bootcamps= await Bootcamp.find();
    if(!bootcamps){
        return next(new ErrorResponse('Bootcamp is empty',404))
    }
        res.status(201).json({
            success:true,
            data:bootcamps
        });
    
})

//@desc        Get single Bootcamp
//@route       Get /api/v1/bootcamp/:id
//@access      Public
exports.getBootcamp =asyncHandler( async (req, res, next) => {
        const bootcamp= await Bootcamp.findById(req.params.id);
        if(!bootcamp){
            return next(new ErrorResponse(`Bootcamp nottt found for id ${req.params.id}`,404))
        }
        res.status(200).json({
            success:true,
            data:bootcamp
        });
   
})

//@desc        Create new bootcamp
//@route       Post /api/v1/bootcamps
//@access      Private
exports.createBootcamp = asyncHandler( async (req, res, next) => {
   
        const bootcamp= await Bootcamp.create(req.body);
        if(!bootcamp){
            return next(new ErrorResponse(`Error for creating bootcamp`,404))
        }
        res.status(201).json({
            success:true,
            data:bootcamp
        });
    
})
 

//@desc        Update new bootcamp
//@route       PUT /api/v1/bootcamps/:id
//@access      Private
exports.updateBootcamp =asyncHandler(async (req, res, next) => {
 
    const bootcamp=await Bootcamp.findByIdAndUpdate(req.params.id,req.body,
        {
            new:true,//res will have updated data
            runValidators:true//it will run mongoose validator
        })
    
        if(!bootcamp){
            return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`,404))
        }
        res.status(200).json({success:true,data:bootcamp});
   
})

//@desc        Delete new bootcamp
//@route       DELETE /api/v1/bootcamps/:id
//@access      Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
 
        const bootcamp=await Bootcamp.findByIdAndDelete(req.params.id)   
        if(!bootcamp){
         return next(new ErrorResponse(`Bootcamp not found for id ${req.params.id}`,404))
        }
            res.status(200).json({success:true,count:Bootcamp.length,data:bootcamp});
        
    })