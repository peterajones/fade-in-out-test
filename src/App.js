import React, {useState, useEffect} from 'react'
import './App.css';
import Card from './components/card/card.js'

function App() {
  const [isChecked, setIsChecked] = useState(false)

  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
    const text = document.querySelector('#toggle')
    const grpOne = document.getElementById('group-one')
    const grpTwo = document.getElementById('group-two')
    let grp1 = document.querySelectorAll("[data-group='grp-1']")
    let grp2 = document.querySelectorAll("[data-group='grp-2']");
    if(!isChecked) {
      text.textContent = "Show Group One"
      for(let j = 0; j < grp2.length; j++) {
        grp2[j].classList.add('fade-in')
        grp1[j].classList.add('fade-out')
        grp1[j].classList.remove('fade-in')
      }
      grpOne.classList.add('hide-group')
      grpTwo.classList.remove('hide-group')
    } else {
      text.textContent = "Show Group Two"
      grpOne.classList.remove('hide-group')
      grpTwo.classList.add('hide-group')
      for(let j = 0; j < grp2.length; j++) {
        grp1[j].classList.add('fade-in')
        grp1[j].classList.remove('fade-out')
        grp2[j].classList.add('fade-in')
      }
    }
  }

  function fadeIn() {
    let group1 = document.querySelectorAll("[data-group='grp-1']")
    for(let i = 0; i < group1.length; i++) {
      group1[i].classList.add('fade-in')
    }
  }

  useEffect(() => {
    fadeIn()
  }, [])

  return (
    <div className="App">
      <h1>Fade In/Out Test</h1>
      <div className="toggle">
        <input type="checkbox" name="checkbox" id="checkbox" onChange={toggleCheckbox} />
        <label htmlFor="checkbox" id='toggle'>Show Group Two</label>
      </div>
      <div className="wrapper">
        <div id='group-one'>
          <Card title={"One"} group={"grp-1"}/>
          <Card title={"Two"} group={"grp-1"}/>
          <Card title={"Three"} group={"grp-1"}/>
          <Card title={"Four"} group={"grp-1"}/>
          <Card title={"Five"} group={"grp-1"}/>
          <Card title={"Six"} group={"grp-1"}/>
        </div>
        <div id='group-two'>
          <Card title={"Seven"} group={"grp-2"}/>
          <Card title={"Eight"} group={"grp-2"}/>
          <Card title={"Nine"} group={"grp-2"}/>
          <Card title={"Ten"} group={"grp-2"}/>
          <Card title={"Eleven"} group={"grp-2"}/>
          <Card title={"Twelve"} group={"grp-2"}/>
          {/* <Card title={"Thirteen"} group={"grp-2"}/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
