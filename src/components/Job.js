import React from "react";

const Job  = (props) => {

    // props.title 
    // props.country 
    // props.contractType 
    // props.city
    // props.country 
// console.log(props);
// console.log(props.title);

   // destructuring 
// const { title, country, city, className, contractType } = props; 
// console.log(title)


// props.classname : red ou blue ou green ...
  return (

  
  
  <div className ={`job ${props.className}`} >
      {/* className = job red */}
         {/* className = job green ...*/}
     <h3> {props.title} </h3> 

     <div> 
     <span> {props.contractType} </span>
     <span> {props.country} </span>
     <span> {props.city} </span>
     </div>
     
     
  </div>
  )
}

export default Job ;