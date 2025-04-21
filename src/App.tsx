import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
      <>
          <PageTittle title='This if App component' />
          <input type={"date"}/>
        <Accordion />
        <Rating value={2}/>
        <Rating value={4}/>
      </>

  );
}

type PageTittleType = {
    title: string
}

function PageTittle(props: PageTittleType) {
    return <h1>{props.title}</h1>
}

export default App;

