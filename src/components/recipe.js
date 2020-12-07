import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';

const Recipe = (props) => {
  return (
    <div>
      <div >
        <img src={props.recipe.image} alt={"recipe"} />
      </div>
      <div>
        <p>{props.recipe.title}</p><br /><br />
        <p>Ready Time:{props.recipe.readyMinutes}</p><br /><br />
        <p>{props.recipe.summary}</p><br /><br />
      </div>
    </div>
  )
}

export default Recipe

// return (
//   <GridListTile >
//           <div style={{ width: '170px', display: 'flex', flexDirection: 'row' }}>
//             <div >
//               <img src={props.recipe.image} style={{ height: '200px', width: '600px' }} alt={"recipe"} />
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', lineHeight: '80%' }}>
//               <p>{props.recipe.title}</p><br /><br />
//             </div>
//           </div>
//         </GridListTile>
//      )