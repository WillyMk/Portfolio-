import React,{useEffect} from 'react'
import Image from "../assets/o.jpg"
import './Abilities.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Abilities = () => {
    useEffect(()=>{
        AOS.init();
    },[]);
    return (
        <div className="feature" id="about">
        <div className="title-text" data-aos="zoom-in">
            <p>Who am I</p>
            <h1>About Me</h1>
        </div>
        <div className="feature-box">
            <div className="features" data-aos="fade-right">
                <h1>Myself</h1>
                <div className="features-desc">
                    <div className="feature-icon">
                        <i className="fas fa-comment-dots"></i>
                    </div>
                    <div className="feature-text">
                        <p>I am a young developer currently residing in Nairobi, Kenya.I am a diligent, hardworking and result oriented guy.
                            I always work towards achieving best result on each project I lay my hands on.
                        </p>
                    </div>
                </div>

                <h1>About Me</h1>
                <div className="features-desc">
                    <div className="feature-icon">
                        <i className="fab fa-black-tie"></i> 
                    </div>
                    <div className="feature-text">
                        <p>I’m Wilson Mwangi, a professional and talentedWeb Developer with front end  and Back end development skills.
                             I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. 
                            I honed my skills at web development and Design</p>
                    </div>
                </div>

                <h1>Languages</h1>
                <div className="features-desc">
                    <div className="feature-icon">
                        <i className="fab fa-angellist"></i>
                    </div>
                    <div className="feature-text">
                        <p>I develop websites with HTML, CSS and JavaScript. 
                            I use ReactJs framwork for the front end and Node Js for the Back end.
                            I have top skills in using design softwares like Figma, Adobe XD</p>
                    </div>
                </div>

                
            </div>
            <div className="features-img" data-aos="fade-left">
                <img src={Image} alt=""/>
            </div>
        </div>
    </div>
    )
}

export default Abilities
