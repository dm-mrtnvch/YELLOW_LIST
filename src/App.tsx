import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';




function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(5)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)


    return (
        <div className="App">
            <OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>

            <UncontrolledAccordion titleValue={'Menu'}/>

            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>


            <UncontrolledRating/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

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
