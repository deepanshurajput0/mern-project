import express from 'express'
import { userController, LoginController, getUserController } from '../controllers/authController.js'
import { validate } from '../middlewares/validate-midd.js'
import { signupSchema } from '../validators/auth-validator.js'
import { ContactController, ServiceDataController, getServicesDataController } from '../controllers/conContoller.js'
import { authMiddleware } from '../middlewares/auth-middleware.js'
const router = express.Router()


router.post('/register',userController)
router.post('/login',LoginController)
router.get('/user',authMiddleware,getUserController)
router.post('/contact',ContactController)
router.post('/services',ServiceDataController)
router.get('/get-services',getServicesDataController)
export default router