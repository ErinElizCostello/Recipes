import React from 'react';
import Chip from '@material-ui/core/Chip';


const ChipsOptions = (props) => {

  const chipsOptions = props.chipsOptions
  return (
    <div>
      {
        // chipsOptions.map(option =>
          console.log(chipsOptions)
          // <div style={{ margin: 10 }}>
          //   <Chip
          //     label={option}
          //     color="primary"
          //   />
          // </div>
        // )
      }
    </div>
  );
}

export default ChipsOptions;