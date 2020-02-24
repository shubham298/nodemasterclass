//@desc        Get all Bootcamps
//@route       Get /api/v1/bootcamps
//@access      Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Show all bootcamp'
    })
}

//@desc        Get single Bootcamp
//@route       Get /api/v1/bootcamp/:id
//@access      Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Show bootcamp ${req.params.id}`
    })
}

//@desc        Create new bootcamp
//@route       Post /api/v1/bootcamps
//@access      Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Create new bootcamp'
    })
}

//@desc        Update new bootcamp
//@route       PUT /api/v1/bootcamps/:id
//@access      Private
exports.updateBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({
            success: true,
            msg: `update bootcamp ${req.params.id}`
        })
}

//@desc        Delete new bootcamp
//@route       DELETE /api/v1/bootcamps/:id
//@access      Private
exports.deleteBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({
            success: true,
            msg: `Delete bootcamp ${req.params.id}`
        })
    }