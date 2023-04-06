import React from 'react'
import Cards from './Cards'
import './Singers.css'
import { Data } from "../Data";

const Singers = () => {
  return (
    <div className='Singers maxWidth'>
        <h1 className="SingersHeading">Shortlist</h1>
        <p className="medium">Details :</p>
        <div className="details_div">
            <div>
                <p className="mediumHeading">Event Date</p>
                <p className="smallHeading"> 2023-02-22</p>
            </div>
            <div>
                <p className="mediumHeading">Location</p>
                <p className="smallHeading"> Delhi, India</p>
            </div>
            <div className="budget_div">
                <p className="mediumHeading">Budget</p>
                <div className="budget_tag">
                    <p className="mediumHeading">₹500,000</p>
                </div>
            </div>
        </div>
        <center>
            <h1 className="SingersHeading1">Singers</h1>
            <p className="medium textmaxwidth">Select an artist that matches your vibe.</p>
        </center>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
            {Data.map((ele)=><Cards key={ele.id} ele={ele}/>)}
        </div>
    </div>
  )
}

export default Singers