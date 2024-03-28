import React from 'react';
import './styles/main.scss';
import Header from './components/header/Header';
import TextEditor from './components/textEditor/TextEditor';

function Main() {
  return (
    <div className="main">
      <Header/>
      <TextEditor/>
    </div>
  );
}

export default Main;
