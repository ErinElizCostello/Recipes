import React from 'react';

const CaloricBreakdownRP = (props) => {

  return(
    <div>
      Protein: {props.cb.percentProtein}%<br />
      Fat: {props.cb.percentFat}%<br />
      Carbs: {props.cb.percentCarbs}%<br />
    </div>
  )
}

export default CaloricBreakdownRP