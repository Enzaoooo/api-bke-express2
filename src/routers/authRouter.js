import express from 'express'
import loginController from '../controllers/Auth/loginController.js' 
import signup from '../controllers/auth/signupController.js'
import logout from '../controllers/Auth/logoutController.js'

const router = express.Router()


router.post ('/signup', signupController)
router.post ('/login', loginController)
router.post ('/logout', logoutController)

export default router