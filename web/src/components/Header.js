import React,{useEffect} from 'react'
import Typed from "react-typed"
import VideoBg from "reactjs-videobg";
import Videos from './videos/video.mp4';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Header.css';

const Header =() => {
    useEffect(()=>{
        AOS.init();
    },[]);
    return (
        //header
        <div className="profile-container" id="home">
        <div className="video">
        <VideoBg>
          <VideoBg.Source src={Videos} type="video/mp4"/>
        </VideoBg>
      </div>
        <div className="profile-parent" >
            <div className="profile-details">
                <div className="column" data-aos="fade-right">
                    <div className="column-icon">
                    <a href="http://facebook.com/Wilson Mk" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/willy_youngDev" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                    </a>
                    </div>
                </div>
                <div className="profile-details-name" data-aos="fade-right">
                    <span>
                        {""}
                        Hello there 👋🏼 I'm
                    </span>
                </div>
                <span className="highlighted-text" data-aos="zoom-out"> Wilson Mwangi</span>
                <div className="profile-details-role">
                <span>
                        {""}
                        <h2>
                            {""}
                            <Typed
                            strings={["WEB DEVELOPER", "SYSTEM DEVELOPER","A JAVA DEVELOPER"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                            />
                        </h2>
                        <span className="profile-role-tagline" data-aos="fade-right">
                            Knack of building applications <br/> with front and backend operations
                        </span>
                    </span>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                </div>
            </div>
        </div>
    </div>
    );
}

export default Header;
