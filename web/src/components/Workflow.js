import React,{useState} from 'react'
import './Workflow.css'
import "aos/dist/aos.css";

const notes =[
    {
        id: '1',
        img: "https://www.adlibweb.com/wp-content/uploads/2021/12/image1.jpg",
        header: "Discover",
        details: "I conduct user research to identify the problem I want to solve....",
    },
    {
        id: '2',
        img: "https://media.istockphoto.com/photos/office-responsive-devices-web-design-website-picture-id1201166649?k=20&m=1201166649&s=612x612&w=0&h=oLpzLwZhmRe9mFObnylKkE-xJbyYesh8l0Zxucb03gM=",
        header: "Define",
        details: "I brainstorm possible design solutions to the identified problem....",
    },
    {
        id: '3',
        img: "https://www.researchgate.net/profile/Zed-Zulkafli/publication/310463054/figure/fig2/AS:614131086393355@1523431669590/Paper-prototyping-development-of-wireframes-to-concretise-ideas-from-conceptual-design_Q320.jpg",
        header: "Ideate",
        details: "I create wireframes and sketches of the product I’m about to design....",
    },
    {
        id: '3',
        img: "https://3.imimg.com/data3/EP/BD/MY-10526898/prototype-development-250x250.jpg",
        header: "Prototype",
        details: "I create high fidelity design and prototype the screens....",
    },
    {
        id: '3',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZY0iyLDspHxr-DhKB-4RDlL8920awHfjvg&usqp=CAU",
        header: "Implement",
        details: "After designing , I deliver for implementation...",
    }
];
const Workflow = () => {
    const [cards] = useState(notes);
    return (
        <div className="workflow1" id="portfolio">
        <div className="workflow2">
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
         <div className="workflow" key={id}>
                    <img src={img} alt="design" width="30%" height="20%" />
                    <h1>{header}</h1>
                    <p>{details}</p>
        </div>
);
}
export default Workflow
