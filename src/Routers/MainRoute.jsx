import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Girls from '../Pages/Girls'
import Boys from '../Pages/Boys'
import Jewelery from '../Pages/Jewelery'
import Electronics from '../Pages/Electronics'
import Login from '../Pages/Login'

function MainRoute() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/girls' element={<Girls/>}></Route>
                <Route path='/Boys' element={<Boys/>}></Route>
                <Route path='/jewelery' element={<Jewelery/>}></Route>
                <Route path='/electronics' element={<Electronics/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
        </div>
    )
}

export default MainRoute