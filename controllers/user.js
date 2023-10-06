const { response, request } = require("express")
const { validationResult } = require("express-validator")

const Usuario = require("../models/user")
const bcryptjs = require("bcryptjs")

const usersGet = async (req = request, res = response) => {
    const {limit} = req.query
    const { id } = req.params

    let usuarios = {}
    if(id){
     usuarios = await Usuario.findById(id);
    }else{
     usuarios = await Usuario.find().limit(Number(limit));
    }
    res.json({
        usuarios
    })
}
const usersPost = async (req, res = response) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }


    const { id, nombre, password, rol, correo } = req.body
    const usuario = new Usuario({ id, nombre, password, rol, correo })
    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(password, salt)

    const existentEmail = await Usuario.findOne({ correo })
    if (existentEmail) {
        return res.json.satus(404).json({
            msg: "Correo ya existente"
        })
    }

    await usuario.save()


    res.json({
        response: "ok - controller",
        usuario
    })
}
const usersPut = async (req, res = response) => {

    const { id } = req.params
    const { password, google, correo, ...resto } = req.body
    if (password) {
        const salt = bcryptjs.genSaltSync()
        resto.password = bcryptjs.hashSync(password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto)
    res.json({
        response: "ok - put",
        id,
    })
}
const usersDelete = async (req, res = response) => {

    const { id } = req.params
    const usuario = await Usuario.findByIdAndDelete(id)
    res.json({
        response: "ok - delete",
        id,
    })
}
const usersPatch = (req, res = response) => {
    res.json({
        response: "ok - controller"
    })
}

module.exports = { usersGet, usersPost, usersPatch, usersDelete, usersPut }