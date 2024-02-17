
import React from "react";


const Locations = () =>{


    return(
        <>
        <div className=" bg-img">
            <div className="w-full h-full py-[50px] malnred">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62333399.522118926!2d30.2754865!3d-17.5299937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573378b945575%3A0x172ecdb86ca74c71!2sSandton%2C%202196%2C%20South%20Africa!5e0!3m2!1sen!2sng!4v1708112911397!5m2!1sen!2sng"
             width="600" 
             height="450" 
             style={{border:"0"}} 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"
             className="w-[100%]">
             </iframe>
            </div>
            <h3 className="text-[20px] py-[20px] text-center ">Address: 68 Mont Serrat 3 Denis street, MorningSide, 2196 Johannesburg, South Africa</h3>
        </div>
        </>
    )
}

export default Locations