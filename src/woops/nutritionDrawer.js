import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import { sliderInformationNutrition } from '../components/form/formLabels/nutritionSliders'
import ShowHideSlider from './showHideSlider';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // appBar: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  // },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.default,
  //   padding: theme.spacing(3),
  // },
}));

const NutritionDrawer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <NutritionDrawerButton> */}
      
        <Drawer
          className={classes.drawer}
          // variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right"
        >
          <div className={classes.toolbar} />
          {sliderInformationNutrition.map(nutritionSlider => <ShowHideSlider sliderInformation={nutritionSlider} />)}
        </Drawer>
      {/* </NutritionDrawer> */}
    </div>
  );
}

export default NutritionDrawer