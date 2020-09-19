import React from 'react';
import ShowHideSlider from './showHideSlider'
import ShowHideSelect from './showHideSelect'
import { sliderInformation, sliderInformationVitamins, selectInformation } from './formInformation'

const ShowHideContainer = () => {


  return (
    <div>
      {selectInformation.map(e => <ShowHideSelect e={e} />)}
      {sliderInformation.map(e => <ShowHideSlider e={e} />)}
      {sliderInformationVitamins.map(e => <ShowHideSlider e={e} />)}
    </div>
  )
}

export default ShowHideContainer