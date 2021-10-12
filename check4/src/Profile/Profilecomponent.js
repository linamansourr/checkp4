import React, { Component } from 'react'
import PropTypes  from "prop-types"


const About = (props) =>{
    console.log(props)
    return (

        
       
             <div className="props-me" style={{width:'50%' ,  margin:'10px auto 30px auto' , boxShadow:'0 5px 10px 2px rgba(0,0,0,0.25)' , padding:'20px', color:'black'}}>
                 <h1>
                     Hello I'am {props.name} {props.firstname}
                 </h1>
                 {props.children}
                 <h3>
                     {props.discription}

                 </h3>
                 <p> {props.age} </p>
                 <p>{props.hobbies}</p>
                 <p>{props.university}</p>
                 <p>{props.trainingcenter}</p>
                 <p>{props.email}</p>

             </div>
                
    )
}

Component.propType = {
    name : PropTypes.string , age : PropTypes.number , hobbies : PropTypes.string , university : PropTypes.string ,
    trainingcenter : PropTypes.string , email : PropTypes.string
}


export default About