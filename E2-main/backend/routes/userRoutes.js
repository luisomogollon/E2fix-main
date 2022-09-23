import express from "express"

const router = express.Router()
import {
    authUser,
    getUsers,
    getUserProfile,
    updateUserProfile
} from "../controllers/userController.js"
import { protect } from '../middleware/authMiddleware.js'

router.route("/").get(getUsers)
router.post("/login", authUser)
//router.route("/:id").get(getUserProfile).put(updateUserProfile)
router
    .route("/profile")
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

export default router