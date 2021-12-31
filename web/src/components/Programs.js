import React from 'react'
import {ProgressBar} from "react-progressbar-fancy";
import './Program.css'

const Programs = () => {
    return (
        <div className='pg' id="portfolio">
            <div className="program">
            <div className='lang'>Languages</div>
            <div className='prog'>
            <h1>Html</h1>
            <ProgressBar score={95} label='95%' progressColor='green'/>
            </div>
            <div className='prog'>
            <h1>Css</h1>
            <ProgressBar score={70} label='70%'/>
            </div>
            <div className='prog'>
            <h1>Javascript</h1>
            <ProgressBar score={75} label='75%' progressColor='blue'/>
            </div>
            <div className='prog'>
            <h1>ReactJs</h1>
            <ProgressBar score={85} label='85%'/>
            </div>
            <div className='prog'>
            <h1>NodeJs</h1>
            <ProgressBar score={80} label='80%' progressColor='purple'/>
            </div>
            <div className="dot"><h1>.</h1></div>
            </div>
            
        </div>
    )
}

export default Programs

