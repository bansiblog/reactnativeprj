import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Card(props){
    console.log(props);
    return (
        <>
        
        <div className="cards">
        
          <div className="card">
             <img src={props.imgsrc} 
            alt="mypic" className="card_img" />
             <div className="card_info">
                <span className="card_category">
                    {props.title}
                </span>
                    <h3 className="card_title"> {props.sname} </h3>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    
                 
             </div>
          </div>
        </div>
        </>

    );
}


ReactDOM.render(
<>
<h1 className="heading_style"> List Of Top 5 Netflix Series in 2020 </h1>
<Card 
   imgsrc="https://i.pinimg.com/originals/67/5e/bc/675ebc2fd210a8bd5362928a51514960.jpg"
    title="A Netflix Orignal Series." sname="DARK" link="https://www.netflix.com/in/title/80100172"/>
<Card 
    
   imgsrc="https://tse1.mm.bing.net/th?id=OIP.Zw1GnFLXmAj9rC2yhpDdYgHaEH&pid=Api&P=0&w=304&h=170"
    title="A Netflix Orignal Series." sname="Extra Curicular" link="https://www.netflix.com/in/title/80990668"/>


<Card 
   imgsrc="https://tse1.mm.bing.net/th?id=OIP.b582knDtDZNVllK_V-PR9QHaK-&pid=Api&P=0&w=300&h=300"
    title="A Netflix Orignal Series." sname="Stranger Things" link="https://www.netflix.com/in/title/80057281"/>

<Card 
   imgsrc="https://image.tmdb.org/t/p/original/oTE13yLKzpNfGxdUcyEV6Am4WP2.jpg"
    title="A Netflix Orignal Series." sname="My First First Love" link="https://www.netflix.com/in/title/81026700"/>

<Card 
   imgsrc="https://tse1.mm.bing.net/th?id=OIP.7P3-KLcYgfnbEENChqDEjAHaJl&pid=Api&P=0&w=300&h=300"
    title="A Netflix Orignal Series." sname="The Vampire Diaries" link="https://www.netflix.com/in/title/70143860"/>

</>,
  document.getElementById("root")
);