import React from 'react';

import { useStylesForm} from '../styles/homePage/form'

import GeneralSearch from './generalSearch'
import ShowHideButton from './advancedSearch/showHideButton'
import ChipsArea from '../form/advancedSearch/chipsArea'



const Form = () => {
  const classes = useStylesForm()

  return (
    <div>
      <div className={classes.generalSearch}>
        <div>
          <GeneralSearch />
        </div>
        <div className={classes.chipsArea}>
          <ChipsArea />
        </div>
      </div>
      <div className={classes.display}>
        <ShowHideButton formType="advancedSearch" className={classes.text} />
      </div>
    </div>
  )
}

export default Form