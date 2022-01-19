import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'
import Routes from './Routes'
import { HashRouter } from 'react-router-dom'

export default props =>

<HashRouter>
<div className="app">
    <Logo/>
    <Nav/>
    <Routes/>
    <Footer/>
</div>
</HashRouter>
