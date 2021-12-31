import React,{useState} from 'react'
import './Navbar.css'
import {HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
    const [click,setClick] = useState(false);

    const handleClick =()=>{
        setClick(!click);
    }
    const closeMenu =() => {setClick(true)}

    return (
        <>
            <nav className='navbar'>
                <Link to="/" className="navbar-logo">Willy|Dev</Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to='#home' className="nav-links" 
                        onClick={closeMenu}>Home</Link>
                    </li>

                    <li className='nav-item'>
                        <Link smooth to='#about' className="nav-links" 
                        onClick={closeMenu}>About</Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link smooth to='#services' className="nav-links" 
                        onClick={closeMenu}>Services</Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link smooth to='#portfolio' className="nav-links" 
                        onClick={closeMenu}>Portfolio</Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link smooth to='#contacts' className="nav-links" 
                        onClick={closeMenu}>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
