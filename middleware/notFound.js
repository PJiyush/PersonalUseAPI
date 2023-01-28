const notFound = (req,res)=>{
    res.send('<h1>Route Does not exist</h1>').status(404)
}

module.exports = notFound