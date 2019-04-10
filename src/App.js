import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {

   const [personState, setPersonState]= useState({
     persons:[
       {id:'aa1',name:'max',age:28},
       {id:'aa2',name:'Manu',age:25},
       {id:'aa3',name:'Shubham',age:24}
     ],
     showPersons:false
   });

   const switchNameHandler = (newName) =>{
     console.log("Was Clicked!!");
     setPersonState({ persons:[
      {id:'aa1',name:newName,age:28},
      {id:'aa2',name:'Manu',age:25},
      {id:'aa3',name:'Shubham',age:28}
    ]})
   }

   const nameChangedHandler = (event,id) =>{
     const personIndex = personState.persons.findIndex(p => {
       return p.id=== id;
     });

     const person ={
          ...personState.persons[personIndex]
     }

     person.name=event.target.value;

     const persons =[...personState.persons];

     persons[personIndex]=person;

     setPersonState({showPersons:personState.showPersons, persons: persons})
   }

   const togglePersonsHandler = () =>{
     setPersonState({showPersons:!personState.showPersons,
      persons:[
        {id:'aa1',name:'max',age:28},
        {id:'aa2',name:'maxii',age:25},
        {id:'aa3',name:'Shubham',age:28}
      ]
    })
   }

   const deletePersonHandler = (index) =>{
      const person = [...personState.persons];
      person.splice(index,1);
      setPersonState({showPersons:personState.showPersons,
      persons:person
      })
   }
 
    return (
      <div className="App">
       <h1>Hi I'm a react app</h1>
       <p>This is really working</p>
       <button onClick={togglePersonsHandler}>Toggle Persons</button>
       { personState.showPersons ?
       <div>
       {personState.persons.map((person,index) => {
         return <Person name = {person.name} 
         age={person.age} 
         click= {() => deletePersonHandler(index)}
         key={person.id} 
         onChanged = {(event) => nameChangedHandler(event,person.id)}/>
       })}
       </div> : null
      }
      </div>
    );
  //  return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does it Work'));
}

export default App;
