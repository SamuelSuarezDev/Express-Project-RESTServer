const { Router } = require("express")
const {usersGet,usersPost,usersPatch,usersDelete,usersPut} = require('../controllers/user')
const {check} = require("express-validator")
const router = Router()


router.get('/:id', usersGet)
router.post('/',[check("correo", "el correo no es válido").isEmail()], usersPost)
router.put('/:id', usersPut)
router.patch('/', usersPatch)
router.delete('/:id', usersDelete)


module.exports = router