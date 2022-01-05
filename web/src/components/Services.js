import React,{useState} from 'react'
import './Services.css'
import "aos/dist/aos.css";

const notes =[
    {
        id: '1',
        img: "https://www.myafricanrep.com/wp-content/uploads/2021/02/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg",
        header: "Website Development",
        details: "I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts....",
    },
    {
        id: '2',
        img: "https://licreativetechnologies.com/wp-content/uploads/2020/03/Web-Development.jpg",
        header: "Back-end Solutions",
        details: "I use various web technologies such as Node and Sql to develop various functionalities of a given site. I develop creative and responsive website layouts....",
    },
    {
        id: '3',
        img: "https://media.istockphoto.com/photos/circuit-board-picture-id1145585734?k=20&m=1145585734&s=612x612&w=0&h=BWthKyWj7tFIH_hixXUXW-Gqo5Q2gxFoYCj6XSUNB2A=",
        header: "UI/UX Design / System Development",
        details: "With the help of Adobe XD I am able to come Up with various designs that help me come up with the best user interfaces. I also at times create system by the help of Java ....",
    }
];
const Services = () => {
    const [cards] = useState(notes);
    return (
        <div className="cont" id="services">
        <div className="content" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
           {cards.map((project)=>{
               return(
                <Names key={notes.id} {...project}/>
               );
           })}
        </div>
        </div>
    );
}
const Names =(props)=>{
const {id,img,header,details} = props;
return(
         <div className="project1" key={id}>
                    <img src={img} alt="design" width="30%" height="20%" />
                    <h1>{header}</h1>
                    <p>{details}</p>
        </div>
);
}
export default Services
