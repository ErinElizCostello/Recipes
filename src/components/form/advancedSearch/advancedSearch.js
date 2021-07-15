import React from 'react';

import { selectInformation } from '../formLabels/select'

import { makeStyles } from '@material-ui/core/styles';

// import { useStyles } from '../../styles/homePage/advancedSearch'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import NutritionSliderDialog from '../advancedSearch/nutritionSliderDialogue';
import Ingredients from './ingredients';
import SelectForm from './selectForm';


///??? when i import its no doing the thing right?????

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',

    // backgroundColor: 'white',
    // opacity: .5
  },
  gridList: {
    display: 'flex',

    flexWrap: 'nowrap',
    direction: 'row',
    alignItems: 'center',
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
    marginTop: 17,
    marginLeft: 10
  }
}));


const AdvancedSearch = () => {
  const classes = useStyles()

  return (
    <div>
      <Ingredients />
      <div
        className={classes.root}
      >
        <GridList className={classes.gridList} cols={6}>
          {selectInformation.map(selectFormInformation => <GridListTile key={Math.random()}><SelectForm selectFormInformation={selectFormInformation.stuff} />
          </GridListTile>
          )}
          <GridListTile className={classes.nutrition}>
            <NutritionSliderDialog />
          </GridListTile>
        </GridList>
      </div>
    </div>
  );
}

export default AdvancedSearch;





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