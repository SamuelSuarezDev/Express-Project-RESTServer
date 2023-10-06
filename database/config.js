    const mongoose = require("mongoose")


    const dbConection = async () => {

        try {

            await mongoose 
            .connect(process.env.MONGODB_CNN)   
            .then(() => console.log("Database connected!"))
            .catch(err => console.log(err));


        } 
        
        catch(error) {
        console.log(Error)
        throw new Error("Error en db")

        }




    }

    module.exports = {
        dbConection
    }