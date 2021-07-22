import React from 'react';

import { useStylesSummary } from '../styles/recipePage/summary'
import Typography from '@material-ui/core/Typography';


const Summary = (props) => {
  const classes = useStylesSummary()

  const summary = props.recipeInformation.summary

  let editedSummary = ''
  
  //slicing off the end part of the summary (at the part with the "spoonacular score" which is a '%') because it contains dead links that Spoonacular inserts.
  let summaryArray = summary.split('').reverse()
  
  summaryArray.forEach(letter => letter === '%' ? editedSummary = summaryArray.slice(summaryArray.indexOf(letter) + 1, summaryArray.length).reverse().join('') + '.' : null
  )

  return (
    <div className={classes.summary}>
      <Typography dangerouslySetInnerHTML={{ __html: editedSummary }} /> 
    </div>
  );
}

export default Summary;