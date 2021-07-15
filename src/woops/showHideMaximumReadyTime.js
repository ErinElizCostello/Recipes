// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux'

// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

// import SliderForm from './sliderForm'
// import TimeSlider from './timeSlider'
// import { deleteMaximumReadyTime } from '../../state/actions/maximumReadyTime'
// import AddIcon from '@material-ui/icons/Add';
// import { SET_MAXIMUM_READY_TIME } from '../../state/constants';

// const ShowHideMaximumReadyTime = () => {

//   const dispatch = useDispatch()

//   const [checked, setChecked] = useState(false);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   const notChecked = () => {
//     dispatch(deleteMaximumReadyTime([]))
//     // dispatch(deleteAction([]))
//   }

//   // const automaticDisp = () => {
//   //   dispatch(maximumReadyTime([...15]))
//   // }

//   return (
//     <div>
//       <FormControlLabel
//         control={
//           <Checkbox
//             icon={<AddIcon />}
//             checkedIcon={<AddIcon />}
//             checked={checked}
//             onChange={handleChange}
//             name="checked"
//             color="secondary"
//           />
//         }
//         label='Add a maximum ready time'
//       />
//       { checked ? <TimeSlider /> : notChecked() }
      
//     </div>
//   )
// }

// export default ShowHideMaximumReadyTime