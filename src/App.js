import {Component} from 'react';
import React from 'react';
import SortingVisualizer from './SortingVisualizer';
import './bootstrap/dist/css/bootstrap.min.css'
import PopUp from './Popup.jsx'
import './App.css';

class App extends Component {
  render() { 
    return ( 
      <div className="App ">
      <SortingVisualizer></SortingVisualizer>
      <PopUp/>
    </div>
     );
  }
}
export default App;