import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';

const Recipe = (props) => {
   return (
<GridListTile >
        <div style={{ width: '170px', display: 'flex', flexDirection: 'row' }}>
          <div >
            <img src={props.e.image} style={{ height: '200px', width: '600px' }} alt={"recipe"} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', lineHeight: '80%' }}>
            <p>{props.e.title}</p><br /><br />
          </div>
        </div>
      </GridListTile>
   )
}

export default Recipe