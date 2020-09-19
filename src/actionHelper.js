// import React from 'react';

// const ActionHelper = () => {

//   const list = [
//     {
//       add: 'fat',
//       delete: 'deleteFat',
//       type: 'FAT'
//     }
//   ]
//   return (
//     <div>
//      {list.map(e => {
//        `export const ${e.add} = ( listValues ) => {
//         return({
//           type: 'SET_${e.type}',
//           data: { min: listValues[0], max: listValues[1] }
//         })
//       }
      
//       export const delete${e.delete} = ( listValues ) => {
//         return({
//           type: 'DELETE_${e.type}',
//           data: listValues
//         })
//       }`
//      })}
//     </div>
//   )
// }

// export default ActionHelper