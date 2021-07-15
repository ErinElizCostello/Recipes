// import React, { useState } from 'react';

// import { selectInformation } from '../formLabels/select'

// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import Chip from '@material-ui/core/Chip';
// // import tileData from './tileData';
// import { Button, Typography } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     // backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     flexWrap: 'nowrap',
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: 'translateZ(0)',
//   },
//   title: {
//     color: '#2e2e2e'
//     // theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },

//   option: {
//     margin: 30
    
//   }
// }));


// const SelectOptions = () => {

//   const classes = useStyles();

//   const [showTheOptions, setShowTheOptions] = useState(null)
//   const [options, setOptions] = useState('false')

//   const showOptions = (menuOptions) => {
//     // console.log(menuOptions)
//     // setShowTheOptions(true)
//     setOptions(menuOptions)
//     console.log(options)
//   }

//   return (
//     <div>
//       <div className={classes.root}>
//         {/* <GridList className={classes.gridList} cols={3.0}> */}
//         <div style={{display: 'flex', direction: 'row', flexWrap: 'no-wrap', justifyContent: 'flex-start'}}>
//           {selectInformation.map(tile => (
//             <div className={classes.option}>
//             {/* <Button onClick={showOptions(tile.stuff.menuItem)}> */}
//             {/* <GridListTile key={Math.random()}> */}
              
             
              
//               <Typography>{tile.stuff.label}</Typography>
//               {/* </Button> */}

//               {/* <div>
//                 {tile.stuff.menuItem.map(item =>
//                   <Chip
//                     label={item}

//                     color="primary"
//                   />
//                 )}
//               </div> */}
//             {/* </GridListTile> */}
//             {/* </Button> */}
//             </div>
//           ))}
//         {/* </GridList> */}
//         </div>
//       </div>
//       {/* <div>
//         {
//          console.log(options)
//                 // <Chip
//                 //   label={item}
//                   // onDelete={() => onDeleteItem(formType, formType.id)}
//                 //   color="primary"
//                 // />
              
          
//         }
//       </div> */}
//     </div>
//   );
// }

// export default SelectOptions;


{/* <img src={tile.img} alt={tile.title} /> */ }
{/* <GridListTileBar
              title={tile.stuff.label}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.stuff.label}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            /> */}