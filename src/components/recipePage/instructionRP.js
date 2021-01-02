import React from 'react';

const InstructionRP = (props) => {

  const theStep = `${props.step.number}. ${props.step.step}`
  
  return(
    <div>
      {theStep}  
    </div>
  )
}

export default InstructionRP

