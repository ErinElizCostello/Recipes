// import React, { useEffect, useState } from 'react';

// import { useStylesNavigationBar } from '../../styles/navigationBar';
// import AppBar from '@material-ui/core/AppBar';
// import IconButton from '@material-ui/core/IconButton';
// import SettingsMenu from '../settingsMenu'
// import SettingsIcon from '@material-ui/icons/Settings';
// import Grid from '@material-ui/core/Grid';
// import logoImage from '../../../logo/logoImage.png'
// import logoText from '../../../logo/logoText.png'
// import LogOutUserButton from './logOutUserButton';
// import FavoritesLink from '../favoritesLink'
// import LoggedOutOptions from './loggedOutOptions';


// const FullPageNavigationBar = () => {

//   const classes = useStylesNavigationBar();

//   // const [displayWelcomeMessage, setDisplayWelcomeMessage] = useState(false)

//   // useEffect(() => {
//   //   localStorage.getItem('User') ?
//   //     setDisplayWelcomeMessage(true) : setDisplayWelcomeMessage(false)
//   // }, []);

//   return (
//     <div style={{ display: 'flex', direction: 'row', justifyContent: 'center', alignItems: 'center' }}>
//       <AppBar elevation={0} position="static" style={{ background: 'white' }} className={classes.appBar}>
//         <Grid container direction='row'>
//           <Grid item xs={4}>
//             <div style={{ display: 'flex', direction: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 20 }}>
//             {
//               localStorage.getItem('User') ?
//               <FavoritesLink /> : <LoggedOutOptions /> 
//             }
//             </div>
//           </Grid>
//           <Grid item xs={4}>
//             <div style={{ display: 'flex', direction: 'row', justifyContent: 'center', alignItems: 'center' }}>
//               <img src={logoImage} style={{ height: 100 }} />
//               <img src={logoText} style={{ height: 200 }} />
//             </div>
//           </Grid>
//           <Grid item xs={4}>
//             <div
//               style={{ display: 'flex', direction: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 20 }}>
//               {
//                 localStorage.getItem('User') ?
//                   <LogOutUserButton />
//                   : null
//               }
//               <SettingsMenu>
//                 <IconButton className={classes.menuButton} color="inherit" aria-label="menu" >
//                   <SettingsIcon />
//                 </IconButton>
//               </SettingsMenu>
//             </div>
//           </Grid>
//         </Grid>
//       </AppBar>
//     </div>
//   );
// }

// export default FullPageNavigationBar;


{/* <Grid item xs={6}>
            {
              displayWelcomeMessage ?
                <Typography edge="end" className={classes.welcomeMessage}>
                  {`Welcome ${JSON.parse(localStorage.getItem('User')).payload.user}!!`}
                </Typography>
                : null
            }
          </Grid> */}