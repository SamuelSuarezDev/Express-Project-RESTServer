const express = require('express')
require("dotenv").config()
var cors = require('cors')



class Server  {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    routes(){
       this.app.use("/api/users", require("../routes/user"))

    }

    listen(){
        this.app.listen(this.port, () => {console.log("HOLA", this.port)})
    }

}

module.exports = Server