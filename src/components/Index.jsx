import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './home/Home.jsx'
import WhoWeAre from './whoweare/WhoWeAre.jsx'
import WhatWeDo from './whatwedo/WhatWeDo.jsx'
import Contact from './contact/Contact.jsx'
import WhatWeThink from './whatwethink/WhatWeThink.jsx'
import Career from './career/Career.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Index = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/whoweare' element={<WhoWeAre/>}  />
        <Route path='/whatwedo' element={<WhatWeDo/>}  />
        <Route path='/whatwethink' element={<WhatWeThink/>}  />
        <Route path='/career' element={<Career/>}  />
        <Route path='/contact' element={<Contact/>}  />

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Index
