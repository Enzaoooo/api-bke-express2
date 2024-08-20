import express from 'express'
import loginController from '../controllers/auth/loginController.js'
import logoutController from '../controllers/auth/logoutController.js'
import signupController from '../controllers/Auth/signupController.js'

const router = express.Router()

router.post('/signup', signupController)
router.post('/login', loginController)
router.post('/logout', logoutController)

export default router