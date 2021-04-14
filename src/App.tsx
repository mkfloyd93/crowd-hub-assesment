import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import { Page } from './models/Pages';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Volunteering from './pages/Volunteering';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        bottom: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
    },
})

function getPageComponent(page: Page){
  switch(page) {
    case 'Home':
      return <Home></Home>;
    case 'Stories':
      return <Stories></Stories>;
    case 'Volunteering':
    default:
      return <Volunteering></Volunteering>;
                
  }
}

function App() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [headerTitle, setHeaderTitle] = useState<string>('Home')

  return (
    <div className={`App ${classes.root}`}>
        <Header title={headerTitle}></Header>
        {getPageComponent(currentPage)}
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} setHeaderTitle={setHeaderTitle}></Footer>
    </div>
  );
}

export default App;
