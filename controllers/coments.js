const Coment = require("../models/coment");


const postComent = async (req, res)=>{
    const {body} = req;
    const data = await Coment.create(body)
    res.send({data})

}

module.exports = postComent