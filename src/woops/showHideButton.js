// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux'

// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

// import SliderForm from './sliderForm'
// import TimeSlider from './timeSlider'
// import {sliders, slidersDelete} from '../../state/actions/sliderActions'
// import AddIcon from '@material-ui/icons/Add';

// import { sliderInformation, 
//   // sliderInformationVitamins, timeSliderInformation, selectInformation, ingredientsInformation 
// } from './formInformation'

// const ShowHideButton = (props) => {

//   const dispatch = useDispatch()

//   const info = props.selectInfo
  
//   const minimumValue = props.e.minimum
//   const maximumValue = props.e.maximum
//   const label = props.e.checkBoxLabel


//   const [checked, setChecked] = useState(false);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   const notChecked = () => {
//     dispatch(slidersDelete(label))
//   }

//   const automaticDisp = () => {
//     dispatch(sliders([minimumValue, maximumValue], label))
//   }

//   return (
//     <div>
//       <FormControlLabel
//         control={
//           <Checkbox
//           icon={<AddIcon />}
//           checkedIcon={<AddIcon />}
//             checked={checked}
//             onChange={handleChange}
//             name="checked"
//             color="secondary"
//           />
//         }
//         label={label}
//       />
//       {
//       checked && props.type === 'timeSlider' ? <TimeSlider /> :
//         checked && props.selectInfo ? <SelectForm info={info} /> :
//         checked && props.type === 'addNutrition' ? <ShowHideButton type={'nutrition'} />:
//         checked && props.type === 'addVitamins' ? <ShowHideButton type={'vitamins'} /> :

//         checked  && props.type === 'nutrition' ?
//         sliderInformation.map(e => <ShowHideSlider e={e} />) : null}
//         checked ? <SliderForm theInfo={info} /> : notChecked()}
//       {checked ? automaticDisp() : null}
//     </div>
//   )
// }

// export default ShowHideButton