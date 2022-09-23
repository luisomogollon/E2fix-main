import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension"
import {
    userLoginReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
} from './reducers/userReducers'



const reducers = combineReducers({
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
})

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = configureStore(
    { reducer: reducers },
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store