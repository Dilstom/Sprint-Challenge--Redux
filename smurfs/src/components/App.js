import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';
import { gettingSmurf, deleteSmurf } from '../actions';
import SmurfForm from './SmurfForm';

class App extends Component {
  componentDidMount() {
    this.props.gettingSmurf();
  }

  deletedSmurf = (id) => {
    console.log('clicked id: ', id)
    this.props.deleteSmurf(id)
  }
  render() {
    console.log('checking props: ', this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <div>
          {this.props.smurfs.map(item => {
            return ( 
               <div key={item.name} className='cardWrappers'> 
                     <p> Name: {item.name} </p>
                     <p> Age: {item.age} </p>
                     <p> Height: {item.height} </p>
                     <p> Id: {item.id} </p>
                     <button onClick={() => this.deletedSmurf(item.id)}> X </button>
               </div>)
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('our state in map: ', state)
  console.log('our smurf in map: ', state.smurfs)

  return {
    smurfs: state.smurfs
  }
}
export default connect(mapStateToProps, { gettingSmurf, deleteSmurf }) (App);
