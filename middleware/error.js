const error = (err,req,res)=>{
    res.send('<h1>An Error Occured</h1>').status(500)
    console.log(err);
}

module.exports = error

