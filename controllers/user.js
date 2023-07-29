const { response, request } = require("express")

const usersGet = (req = request, res = response) => {

    const query = req.query

    res.json({
        response: "ok - controller",
        query
    })
}
const usersPost = (req, res = response) => {
    res.json({
        response: "ok - controller"
    })
}
const usersPut = (req, res = response) => {

    const {id} = req.params

    res.json({
        response: "ok - put",
        id,
    })
}
const usersDelete = (req, res = response) => {
    res.json({
        response: "ok - controller"
    })
}
const usersPatch = (req, res = response) => {
    res.json({
        response: "ok - controller"
    })
}

module.exports = {usersGet,usersPost,usersPatch,usersDelete,usersPut}