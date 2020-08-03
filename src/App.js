import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {add, remove} from './action/Actions'

function App(props) {
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={props.add} >+</button>
      <span> {props.count}</span>
      <button onClick={props.remove} > -</button>
    </div>
  );
}



 const mapStateToProps = state=>{

  return {
 count : state
   }
 }


  const mapDispatchToProps=dispatch =>{
    return { 
      add:()=> {dispatch (add())},
      remove:()=> {dispatch (remove())}
    

    
  }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App)