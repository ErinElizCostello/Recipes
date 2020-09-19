// import React from 'react';
// import { useDispatch } from 'react-redux'

// import { makeStyles } from '@material-ui/core/styles';
// import Slider from '@material-ui/core/Slider';
// import Typography from '@material-ui/core/Typography';

// import { protein } from '../../actions/protein'



// const useStyles = makeStyles({
//   root: {
//     width: 300,
//   },
// });

// const marks = [
//   {
//     value: 0,
//     label: '0 grams',
//   },
//   {
//     value: 120,
//     label: '120 grams',
//   },
// ];

// function valuetext(value) {
//   return `${value} grams`;
// }



// const Protein = () => {

//   const classes = useStyles();
//   const dispatch = useDispatch()

//   const [value, setValue] = React.useState([0, 120]);
//   const valueObject = {}

//   const handleChange = (event, newValue) => {
//     setValue(newValue);

//     dispatch(protein(newValue));
//   };

//   return (
//     <div className={classes.root}>
//       <Typography id="range-slider" gutterBottom>
//         Amount of Protein
//       </Typography>
//       <Slider
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="on"
//         aria-labelledby="range-slider"
//         getAriaValueText={valuetext}
//         marks={marks}
//         min={0}
//         max={120}
//       />
//     </div>
//   )
// }

// export default Protein