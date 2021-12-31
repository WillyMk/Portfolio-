import React from 'react'

import Header from '../Header'
import Abilities from '../Abilities'
import Footer from '../Footer';
import Services from '../Services'
import ServiceHead from '../ServiceHead'
import Workflow from '../Workflow'
import WorkflowHead from '../WorkflowHead'
import Programs from '../Programs'
import ContactHead from '../ContactHead'
import Contact from '../Contact'

const Home = () => {
    return (
        <div>
            <Header/>
            <Abilities/>
            <ServiceHead/>
            <Services/>
            <WorkflowHead/>
            <Workflow/>
            <Programs/>
            <ContactHead/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
