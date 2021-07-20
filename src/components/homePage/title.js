import React from 'react';

// import '../styles/homePage/title.css'
import {useStylesTitleHomePage} from '../styles/homePage/title'

const Title = () => {
  const classes = useStylesTitleHomePage()

  return (
    <div className={classes.font}
    // className='font'
    >
      HUNGRY
    </div>
  );
}

export default Title;