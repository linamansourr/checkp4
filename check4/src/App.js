import React from 'react';
import './App.css';
import About from './Profile/Profilecomponent';
import Mypic from './Profile/photo/mee.jpg'

function App() {
  return (
    <div className="App">
        <img src={Mypic} alt = 'mee'/>
      <About firstname="Lina" name="Mansour"
      discription="I'am a Business Intelligence student and a beginner frontend developer"
      age=" Age : 20 years old"
      hobbies="Hobbies : Dance"
      university= "University : FSEGT"
      trainingcenter= "Training center : GoMyCode"
      email= "E-mail : mansourlina19@gmail.com"
      />
     
    </div>
   
  );
}

export default App;
