import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'
import Home from '../components/Home/Home'

export default props =>
<div className="app">
    <Logo/>
    <Nav/>
    <Home/>
    <Footer/>
</div>