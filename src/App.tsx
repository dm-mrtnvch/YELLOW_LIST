import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            <OnOff/>

            <Accordion titleValue={'Menu'} collapsed={false}/>
            <UncontrolledAccordion titleValue={'menu'}/>
            <UncontrolledRating />

            {/*<UncontrolledRating/>*/}
            {/*<Rating value={1}/>*/}

            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={5}/>*/}
            {/*<Accordion titleValue={'Меню'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'раз'} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}


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
