import express from 'express'
import { deleteContact, getAllUsers, getContacts, getUserById, updateUserData, userDelete } from '../controllers/admin-controller.js'
import { authMiddleware } from '../middlewares/auth-middleware.js'
import { adminMiddleware } from '../middlewares/admin-middleware.js'

const router = express.Router()


router.route('/users').get( authMiddleware,adminMiddleware,getAllUsers)
router.route('/contacts').get(authMiddleware,adminMiddleware,getContacts)
router.route('/delete/:id').delete(authMiddleware,adminMiddleware,userDelete)
router.route('/users/:id').get(authMiddleware,adminMiddleware,getUserById)
router.route('/update/:id').put(authMiddleware,adminMiddleware,updateUserData)
router.route('/remove/:id').delete(authMiddleware,adminMiddleware,deleteContact)

export default router