const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    switch(statusCode){
        case 400:
            res.json({
                title:"validation failed",
                message:err.mesaage,
                stackTracer:err.stack})
        case 401:
            res.json({title:"unAuthorized Error",
            message:err.mesaage,
            stackTracer:err.stack})

        case 403:
            res.json({title:"ForBidden",
                message:err.mesaage,
                stackTracer:err.stack})
        case 404:
            res.json({title:"Not Found",
                message:err.mesaage,
                stackTracer:err.stack})
        case 500:
            res.json({title:"server Error",
                message:err.mesaage,
                stackTracer:err.stack})
        default:
            console.log("No ERRor")
            break;
        }

    }

module.exports=errorHandler