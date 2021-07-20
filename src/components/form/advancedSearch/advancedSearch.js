import React from 'react';

import { selectInformation } from '../formLabels/select'

import { makeStyles } from '@material-ui/core/styles';

// import { useStylesAdvancedSearch } from '../../styles/homePage/advancedSearch'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

import NutritionSliderDialog from '../advancedSearch/nutritionSliderDialogue';
import Ingredients from './ingredients';
import SelectForm from './selectForm';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';




const AdvancedSearch = () => {
  const classes = useStylesAdvancedSearch()
  const width = withWidth()

  const responsiveCols = () => {
   

    if (isWidthUp('lg', width)) {
      return 9;
    }

    if (isWidthUp('xs', width)) {
      return 1;
    }
  }

  return (
    <div>
      
      <Ingredients />
     
      <Grid
      container
      display= 'flex'
      flexWrap='wrap'
      justifyContent= 'space-between'
      overflow= 'hidden'
      >
      <div
        // className={classes.root}
      >
        {/* <div style={{marginLeft: 40}}></div> */}
        <ImageList className={classes.gridList} cols={0}>
        {/* <div className={classes.gridList}> */}
        
          {selectInformation.map(selectFormInformation => 
          <ImageListItem key={Math.random()}>
          {/* <div key={Math.random()}> */}
            <SelectForm selectFormInformation={selectFormInformation.stuff} />
            {/* </div> */}
          </ImageListItem>
          )}
          <ImageListItem className={classes.nutrition}>
          {/* <div className={classes.nutrition}> */}
            <NutritionSliderDialog />
          {/* </div> */}
          </ImageListItem>
          
        {/* </div> */}
        </ImageList>
        {/* <div style={{marginRight: 40}}></div> */}
      </div>
      </Grid>
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
}

export default AdvancedSearch;


///??? when i import its no doing the thing right?????



const useStylesAdvancedSearch = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    // whiteSpace: 'nowrap'
    // width: '100vw'

    // backgroundColor: 'white',
    // opacity: .5
  },

  cols: {
    [theme.breakpoints.up('xs')]: {
      width: 325
    },
    [theme.breakpoints.up('sm')]: {
      width: 500
    },
  },

  gridList: {
    // display: 'inline-block',
    // display: 'flex',
    // overflow: 'scroll',
    flexWrap: 'nowrap',
    [theme.breakpoints.up('xs')]: {
      width: 325
    },
    
    [theme.breakpoints.up('lg')]: {
      width: 1000
    },
    
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  // titleBar: {
  //   background:
  //     'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  // },
  nutrition: {
    marginTop: 8,
    marginLeft: 10
  }
}));




{/* <ShowHideSearchOptions /> */ }

// const useStyles = makeStyles((theme) => ({
  //   root: {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //     justifyContent: 'space-around',
  //     overflow: 'hidden',

  //     // backgroundColor: 'white',
  //     // opacity: .5
  //   },
  //   gridList: {
  //     display: 'flex',

  //     flexWrap: 'nowrap',
  //     direction: 'row',
  //     alignItems: 'center',
  //     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  //     transform: 'translateZ(0)',
  //   },
  //   title: {
  //     color: theme.palette.primary.light,
  //   },
  //   // titleBar: {
  //   //   background:
  //   //     'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  //   // },
  //   nutrition: {
  //     marginTop: 17,
  //     marginLeft: 10
  //   }
  // }));