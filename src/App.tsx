import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    console.log('Appf rendering')
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <div>This is APP component</div>
}


function Rating() {
    console.log('Rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}


function Star() {
    console.log('Star rendering')
    return <div>star</div>
}


function Accordion() {
    console.log('Accordion rendering')
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
