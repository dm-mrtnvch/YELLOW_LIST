import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import {Rating} from './components/Rating/Rating';


function App() {
    console.log('App rendering')
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            Article 1
            <Rating value={5}/>
            <Accordion titleValue={'Меню'}/>
            <Accordion titleValue={'раз'} />
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
