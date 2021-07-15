import React from 'react';

import { useStylesHeaderHomePage } from '../styles/homePage/header'

import Form from '../form/form'
import Dialogue from '../dialogue/dialogue'
import Header from './header'


const HomePage = () => {
  const classes = useStylesHeaderHomePage()

  return (
    <div>
      <Dialogue dialogueType='loggedOut' />
      <div className={classes.background}>
        <Header />
        <Form />
      </div>
    </div>
  )
}

export default HomePage




{/* </div> */ }

{/* </div>
          </div>
        </div> */}



{/* <FullPageNavigationBar /> */ }
{/* <div style={{ display: 'flex', direction: 'row', justifyContent: 'center' }}>
        <div style={{ background: 'linear-gradient(to left, white, transparent)' }}>
          <div style={{ background: 'linear-gradient(to right, white, transparent)' }}> */}

{/* <div style={{ backgroundColor: 'rgba(255,255,255,0.60)', marginLeft: 200, marginRight: 200 }} > */ }



// var scrollToMe = document.getElementById("scrollToMeMyLove");

  // const scrollToBottom = () => {
    // window.scrollToMe.scrollIntoView({ behavior: "smooth" });
    // scrollToSearchesRef.current.scrollIntoView()
    // return showSearches.length ? setScroll(true) : setScroll(false)
  // };

  // useEffect( showSearches.length? setScroll(true): setScroll(false), []);

// useEffect(() => {
//   scrollToBottom()
// }, []);