import React from 'react';

import { selectInformation } from '../formLabels/select'

import NutritionSliderDialog from '../advancedSearch/nutritionSliderDialogue';
import Ingredients from './ingredients';
import SelectForm from './selectForm';

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Grid from '@material-ui/core/Grid';


const AdvancedSearch = () => {
  const classes = useStylesAdvancedSearch()

  return (
    <div>
      <Grid
        container
        display='flex'
        direction='column'
        flexwrap='wrap'
        justifyContent='center'
        alignItems='center'
      >

        <Grid
          container
          display='flex'
          direction='row'
          flexwrap='wrap'
          justifyContent='center'
        >
          <Ingredients />
        </Grid>

        <div className={classes.spaceBetweenIngredientsAndImageList}></div>

        <Grid
          container
          display='flex'
          flexwrap='wrap'
          justifyContent='space-between'
          overflow='hidden'
        >
          <div>
            <ImageList className={classes.gridList} cols={0}>

              {selectInformation.map(selectFormInformation =>
                <ImageListItem key={Math.random()}>
                  <SelectForm selectFormInformation={selectFormInformation.stuff} />
                </ImageListItem>
              )}

              <ImageListItem className={classes.nutrition}>
                <NutritionSliderDialog />
              </ImageListItem>

            </ImageList>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdvancedSearch;



const useStylesAdvancedSearch = makeStyles((theme) => ({
 
  spaceBetweenIngredientsAndImageList: {
    margin: 20
  },

  gridList: {
    flexWrap: 'nowrap',
    [theme.breakpoints.up('xs')]: {
      width: 325
    },
    [theme.breakpoints.up('lg')]: {
      width: 1000
    },
    transform: 'translateZ(0)',
  },

  title: {
    color: theme.palette.primary.light,
  },
  
  nutrition: {
    marginTop: 8,
    marginLeft: 10
  }
}));