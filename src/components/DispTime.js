import React from "react"

const DispTime=()=>{
    let today= new Date()
    let date = today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate()
    let time1= today.getHours()+":"+ today.getMinutes()+":"+today.getSeconds()
    let date1= new Date().toLocaleDateString();
    let time= new Date().toLocaleTimeString();

    return(
        <div className="DispTime">
       <h1>Hello here You will se updated Date & Time</h1>
       <p>Todays Date is: {date}</p>
       <p>Todays Date is: {date1}</p>
       <p>Current Time is {time1}</p>
       <p>Current Time is {time}</p>
      </div>
    )
}
export default DispTime;