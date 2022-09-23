import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            userName: user.userName,
            email: user.email,
            countryCode: user.countryCode,
            phone: user.phone,
            name: user.name,
            lastname: user.lastname,
            dateOfBirth: user.dateOfBirth,
            country: user.country,
            nickname: user.nickname,
            description: user.description,
            idPhoto: user.idPhoto,
            profilePicture: user.profilePicture,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error("Invalid email or password")
    }
})

// Private = Auth User

// @desc    Get all users
// @route   GET /api/users
// @access  Public, must be Private and only AdminUser
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({}).select("-password")
    res.json(users)
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Public, must be Private
const getUserProfile = asyncHandler(async (req, res) => {
    console.log(req.user._id)
    const user = await User.findById(req.user._id).select("-password")
    if (user) {
        res.json(user)
    } else {
        res.status(404)
        throw new Error("User not found")
    }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Public, must be Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.userName = req.body.userName || user.userName
        user.email = req.body.email || user.email
        user.countryCode = req.body.countryCode || user.countryCode
        user.phone = req.body.phone || user.phone
        user.name = req.body.name || user.name
        user.lastname = req.body.lastname || user.lastname
        user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth
        user.country = req.body.country || user.country
        user.nickname = req.body.nickname || user.nickname
        user.description = req.body.description || user.description
        user.idPhoto = req.body.idPhoto || user.idPhoto
        user.profilePicture = req.body.profilePicture || user.profilePicture
        if (req.body.password) {
            user.password = req.body.password
        }
        const updatedUser = await user.save()

        res.json({
            _id: user._id,
            userName: user.userName,
            email: user.email,
            countryCode: user.countryCode,
            phone: user.phone,
            name: user.name,
            lastname: user.lastname,
            dateOfBirth: user.dateOfBirth,
            country: user.country,
            nickname: user.nickname,
            description: user.description,
            idPhoto: user.idPhoto,
            profilePicture: user.profilePicture,
        })
    } else {
        res.status(404)
        throw new Error("User not found")
    }
})


export {
    authUser,
    getUsers,
    getUserProfile,
    updateUserProfile
}