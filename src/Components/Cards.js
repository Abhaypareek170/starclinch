import React from "react";
import { Data } from "../Data";
const Cards = () => {
  return (
    <>
  <div className="container">
    <div className="row">
    
       {Data.map((ele)=>{
        return(
      <div className="col-12 col-md-6 col-lg-4">
    <div className="card" style={{borderRadius:"50rem"}}>
  <img src={ele.img} alt={ele.title} class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer row align-items-center">
    <div class="col-sm-4">
      <img  src={ele.image.img_1} alt={ele.title} class="card-img-top" />
    </div>
    <div class="col-sm-4">
      <img  src={ele.image.img_2} alt={ele.title} class="card-img-top" />
    </div>
    <div class="col-sm-4">
      <img  src={ele.image.img_3} alt={ele.title} class="card-img-top"/>
    </div>
  </div>
</div>
</div>
      
      )})}
    
      </div>
      </div>
    </>
  );
};

export default Cards;


 {/* //     <div className="card">
      //     <div>
      //   <img className="card-img-top" src={ele.img} alt={ele.title}/>
      // </div>
      // <div className="card-body">
      //   <div className="card-text">
      //     <h1>{ele.title}</h1>
      //     <p>{ele.type}</p>
      //   </div>
      //   <p>Location</p>
      //   <div>
      //     <p>Event Booking</p>
      //     <p>{ele.event}</p>
      //   </div>
      //   <div className="container-fluid mt-3 d-flex flex-row" >
      //     <div><img className="p-2" src={ele.image.img_1} alt={ele.title} style={{maxHeight: "50px", maxWidth: "50px"}}/></div>
      //     <div><img className="p-2" src={ele.image.img_2} alt={ele.title} style={{maxHeight: "50px", maxWidth: "50px"}}/></div>
      //     <div><img className="p-2" src={ele.image.img_3} alt={ele.title} style={{maxHeight: "50px", maxWidth: "50px"}}/></div>
      //   </div>
      // </div>
      // <div>
      //   <p>SELECT</p>
      // </div>
//     </div> </div> */}