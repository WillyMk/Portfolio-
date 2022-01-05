import React,{useRef} from 'react';
import {Wave} from 'react-animated-text'
import {Random} from 'react-animated-text'
import './Contact.css'
import emailjs from 'emailjs-com'

const Contact =() =>{
    const textInput = useRef();
    const onTextFocus =() =>{ 
        textInput.current.focus();
    }
    const sentEmail=(e) =>{
        e.preventDefault();

        emailjs.sendForm('service_d8cw9wf',
        'template_0zo1eom',
        e.target,
        'user_G952580ZzYeciyIlcwCDC').then(res=>{
        alert('Message Sent Successfully');
        }).catch(err=> {console.log(err)
        alert("Something went wrong");
        });
    }
  
   return(
        //contact form
        <div class="contactpic" id="contacts">
            <div className='anime'>
            <h1>Direct Lines</h1>
            <div className='ani'>
            <Wave text="+254 714655688"/>
            <Random text="+254 754339083"/>
            </div>
            </div>
        <div className="apps">
        <form className="form" onSubmit={sentEmail}>
            <h1>CONTACT ME 📲</h1>
            <label >Name</label>
            <input type="text" name="name" placeholder="Name" required ref={textInput}></input>
            <label>Email</label>
            <input type="email"  name="user_email" placeholder="Email" required ref={textInput}></input>
            <label>Message</label>
            <textarea  name="message" row="4" placeholder="Input your Message" required ref={textInput}></textarea>
            <button onClick={onTextFocus} type="submit" value="Send" >Send Message</button>
        </form>
        </div>
        </div>
       
    );
}

export default Contact

