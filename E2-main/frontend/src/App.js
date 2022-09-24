import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LoginScreen from "./screens/LoginScreen"
import ProfileScreen from "./screens/ProfileScreen"


const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
          <Routes>
            <Route path='/' element={<LoginScreen />} exact />
            <Route path='/profile' element={<ProfileScreen />} exact />
          </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App;