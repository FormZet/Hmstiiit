import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Herolist from './components/Hero-list/hero-list.jsx';
import Modalpage from './components/Modal-page/modal-page.jsx';
import {Route} from  'react-router-dom';


      class App extends Component   {
  constructor() {
    super();

    this.state = {
      appName: 'Hmshit', 
      heroList: [
            {
              name: 'Genji',
              desc: 'TAAAA',
              img: 'https://pp.userapi.com/c840427/v840427878/27ff9/H7hr4PdzpMo.jpg?ava=1'
            },
            {
              name: 'Hanzo',
              desc: 'SHAAA',
              img: 'https://pp.userapi.com/c840427/v840427878/27ff9/H7hr4PdzpMo.jpg?ava=1'
            },
            {
              name: 'McCree',
              desc: 'CHIIII',
              img: 'https://pp.userapi.com/c840427/v840427878/27ff9/H7hr4PdzpMo.jpg?ava=1'
            },
            {
              name: 'Tracer',
              desc: 'DAAAA',
              img: 'https://pp.userapi.com/c840427/v840427878/27ff9/H7hr4PdzpMo.jpg?ava=1'
            }
          ]

       }
 

  return (
    <>
    <Navbar appName={this.state.appName}/>
      <Route path ="/Hero-list" component={Herolist}/>
      <Route path ="/Modal-page" component={Modalpage}/>
  
    </>
  )     

     }
} 

  export default App;