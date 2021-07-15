// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';

// import { sliderInformationNutrition } from '../components/form/formLabels/nutritionSliders'
// import ShowHideSlider from './showHideSlider';

// import Typography from '@material-ui/core/Typography';

// import { light } from '@material-ui/core/styles/createPalette';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import clsx from 'clsx';
// import Button from '@material-ui/core/Button';

// import SliderForm from '../components/form/sliderForm';




// const drawerWidth = 240;

// const useStylesDrawer = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing(3),
//   },
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// }));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     height: '100%',
//     color: '#2e2e2e'
//   },
//   heading: {

//     fontSize: theme.typography.pxToRem(16),
//     fontWeight: theme.typography.fontWeightLight,
//   },
//   accordian: {
//     display: 'flex',
//     direction: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: 140,
//     height: 56,
//     backgroundColor: 'white',
//     color: '#828282',
//     border: '#c2c2c2 1px solid',
//     '&:hover': {
//       border: 'black 1px solid',
//     },
//     //  font: theme.typography
//     // fontSize: theme.typography.pxToRem(16),
//     // fontWeight: theme.typography.fontWeightLight,
//     borderRadius: 4
//   },
//   buttonFont: {
//     fontWeight: light,
//     fontSize: theme.typography.pxToRem(16),
//     fontWeight: theme.typography.fontWeightLight,
//     marginLeft: 10
//   }
// }));

// const NutritionDrawerButton = () => {
//   const classes = useStyles();
//   const classesDrawer = useStylesDrawer()
  

//   const label = () => <Typography className={classes.buttonFont}>
//     Nutrition
//   </Typography>

//   // const anchor = 'right'

// const [state, setState] = React.useState({
//   right: false,
// });

// const toggleDrawer = (anchor, open) => 
// (event) => {
// //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
// //     return;
// //   }

//   setState({ ...state, 'right': open });
// };


// const sliders = (anchor) => (
//   <div
//     // className={clsx(classesDrawer.list, {
//     //   [classesDrawer.fullList]: anchor === 'top' || anchor === 'bottom',
//     // })}
//     role="presentation"
//     onClick={toggleDrawer(anchor, false)}
//     onKeyDown={toggleDrawer(anchor, false)}
//   >
//    {sliderInformationNutrition.map(nutritionSlider => <SliderForm sliderInformation={nutritionSlider} />)}
//   </div>
// );

//   return (
//     <div>
//        {['right'].map((anchor) => (
//         <React.Fragment key={anchor}>
//         <Button onClick={toggleDrawer(anchor, true)} 
//         className={classes.accordian}>
          
//           {label()}
//           <KeyboardArrowRightIcon />
//         </Button>

//         <Drawer
//           className={classesDrawer.drawer}
//           classes={{ paper: classesDrawer.drawerPaper}}
//           anchor={anchor}
//           variant="persistent"
//           open={state[anchor]} 
//           // onClose={toggleDrawer(anchor, false)}
//         >
//           <div className={classesDrawer.toolbar} />
//           {sliders(anchor)}
//         </Drawer>
//         </React.Fragment>
//        ))}
//     </div>
//     // <div className={classes.root}>
//     //   <Accordion className={classes.accordian}>
//     //     <AccordionSummary
//     //       expandIcon={<ArrowDropDownIcon />}
//     //       aria-controls="panel1a-content"
//     //       id="panel1a-header"
//     //     >
//     //       <Typography className={classes.heading}>Nutrition</Typography>
//     //     </AccordionSummary>
//     //     <AccordionDetails style={{height:1000}}>
//     //     <List component="nav" 
//     //     // aria-label="main mailbox folders"
//     //     >
//     //     {sliderInformationNutrition.map(nutritionSlider => 
//     //      <ListItem>
//     //     <SliderForm sliderInformation={nutritionSlider} />
//     //     </ListItem>
//     //     )}
//     //     {/* <ShowHideButton formType='nutrition' /> */}
//     //   {/* <ShowHideButton formType='vitamins' /> */}
//     //   </List>
//     //     </AccordionDetails>
//     //   </Accordion>
//     // </div>
//   );
// }

// export default NutritionDrawerButton;