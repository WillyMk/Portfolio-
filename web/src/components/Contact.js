import React from 'react';
import {Wave} from 'react-animated-text'
import {Random} from 'react-animated-text'
import './Contact.css'
import emailjs from 'emailjs-com'

const Contact =() =>{

    const sentEmail=(e) =>{
        e.preventDefault();

        emailjs.sendForm('service_d8cw9wf',
        'template_0zo1eom',
        e.target,
        'user_G952580ZzYeciyIlcwCDC').then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
 
    }

   return(
        //contact form
        <div class="contactpic">
            <div className='anime'>
            <h1>Direct Lines</h1>
            <div className='ani'>
            <Wave text="+254 714566765"/>
            <Random text="+245 467321847"/>
            </div>
            </div>
        <div className="apps">
        <form className="form" onSubmit={sentEmail}>
            <h1>CONTACT ME 📲</h1>
            <label >Name</label>
            <input type="text" name="name" placeholder="Name"></input>
            <label>Email</label>
            <input type="email"  name="user_email" placeholder="Email"></input>
            <label>Message</label>
            <textarea  name="message" row="4" placeholder="Input your Message"></textarea>
            <button type="submit" value="Send" >Submit</button>
        </form>
        </div>
        </div>
       
    );
}

export default Contact

