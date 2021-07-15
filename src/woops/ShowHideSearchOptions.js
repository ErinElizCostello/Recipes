//the parts of the form that you can choose to show or hide (everything except for general search)

// import React from 'react';

// import { selectInformation } from '../components/form/formLabels/select'

// import ShowHideSelect from './showHideSelect'
// import ShowHideButton from '../components/form/showHideForm/showHideButton'
// import SelectForm from '../components/form/selectForm';

// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import NutritionDrawerButton from './nutritionDrawerButton';
// import NutritionDrawer from './nutritionDrawer';
// import NutritionSliderDialog from '../components/form/advancedSearch/nutritionSliderDialogue';
// import Ingredients from '../components/form/ingredients';


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



// const ShowHideSearchOptions = () => {
//   const classes = useStyles();

//   return (
//     <div>
//       {/* <ShowHideButton formType='ingredients' /> */}
//       <Ingredients />

//       <div className={classes.root}>
//         <GridList className={classes.gridList} cols={6}>
//           {selectInformation.map(selectFormInformation => <GridListTile key={Math.random()}><SelectForm selectFormInformation={selectFormInformation.stuff} />
//           </GridListTile>
//           )}
//           <GridListTile className={classes.nutrition}>
//             <NutritionSliderDialog />
//           </GridListTile>
//         </GridList>
//       </div>

//       {/* <ShowHideButton formType='maximumReadyTime' /> */}
//       {/* <div style={{display: 'flex', direction: 'row', flexWrap: 'no-wrap', width: 400}}> */}

//       {/* {selectInformation.map(selectFormInformation => <div style={{margin: 10}}><ShowHideSelect key={Math.random()} selectFormInformation={selectFormInformation} /></div>)} */}
//       {/* </div> */}
//       {/* <ShowHideButton formType='nutrition' />
//       <ShowHideButton formType='vitamins' /> */}
//     </div>
//   )
// }

// export default ShowHideSearchOptions