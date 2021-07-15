// import React, { useEffect, useState } from 'react';

// import { useStylesNavigationBar } from '../styles/navigationBar';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Menu from './menu'
// import SettingsMenu from './settingsMenu'
// import SettingsIcon from '@material-ui/icons/Settings';
// import { Typography } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';




// const NavigationBar = () => {
//   const classes = useStylesNavigationBar();

//   const [displayWelcomeMessage, setDisplayWelcomeMessage] = useState(false)

//   useEffect(() => {
//     localStorage.getItem('User') ?
//       setDisplayWelcomeMessage(true) : setDisplayWelcomeMessage(false)
//   }, []);

//   return (
//     <div className={classes.root} >
//       <AppBar elevation={0} position="static" style={{background: 'white'}} className={classes.appBar}>
//       <Grid container direction='row'>
//           <Grid item xs={5}>
//           <Menu />
//           </Grid>
//           {/* <Grid item xs ={3}></Grid> */}
//           <Grid item xs={6}>
//           {
//             displayWelcomeMessage ?
//               <Typography edge="end" className={classes.welcomeMessage}>
//                 {`Welcome ${JSON.parse(localStorage.getItem('User')).payload.user}!!`}
//               </Typography>
//               : null
//           }
//           </Grid>
//           <Grid item xs={1}>
//           <SettingsMenu>
//             <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
//               <SettingsIcon />
//             </IconButton>
//           </SettingsMenu>
//           </Grid>
          
//         </Grid>
//       </AppBar>
//     </div>
//   );
// }

// export default NavigationBar

 {/* <IconButton edge="start"  color="inherit" aria-label="menu" > */}
              {/* <MenuIcon className={classes.menuButton} /> */}
            {/* </IconButton> */}