import React from 'react';

import {useStylesTitleHomePage} from '../styles/homePage/title'


const Title = () => {
  const classes = useStylesTitleHomePage()

  return (
    <div className={classes.font}>
      HUNGRY
    </div>
  );
}

export default Title;