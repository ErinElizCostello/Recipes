// import React, { Fragment, useState } from 'react';

// import clsx from 'clsx';



// import { useStylesNavigationBar } from '../styles/navigationBar'
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';
// import LoggedOutMenu from './loggedOutMenu'
// import LoggedInMenu from './loggedInMenu'
// import logoImage from '../../logo/logoImage.png'
// import logoText from '../../logo/logoText.png'


// const Menu = () => {
//   const classes = useStylesNavigationBar();

//   const [state, setState] = useState({ drawer: false });

//   const toggleDrawer = (anchor, open) => (event) => {
//     // checkIfUserIsLoggedIn()
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
    
//     <div
//       className={clsx(classes.list)}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
      
//       {
//        localStorage.getItem('User') ?
//         <LoggedInMenu />
//         :
//         <LoggedOutMenu />
//       }
//     </div>
//   );

//   return (
//     <div>
//       <div>
//         <Fragment key={'left'}>
//           <Button onClick={toggleDrawer('left', true)}>
//           <img src={logoImage} style={{height: 100}} />
//           <img src={logoText} style={{height: 200}} />
//           </Button>
//           <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
//             {list('left')}
//           </Drawer>
//         </Fragment>
//       </div>
//     </div>
//   );
// }

// export default Menu;



// const checkIfUserIsLoggedIn = () => {

  //   const token = JSON.parse(localStorage.getItem('User')) ? JSON.parse(localStorage.getItem('User')).token : ''

  //   fetch(`http://localhost:3001/checkUser`, {
  //     headers: {
  //       "Authorization": `bearer ${token}`
  //     }
  //   })
  //     // .then(res => res.json())
  //     .then(response => {
  //       if (response.status === 401) {
  //         localStorage.removeItem('User')          // <Redirect to={{ pathname: '/login' }}></Redirect>
  //       } 
  //       // }
  //       // )
  //       // }
  //     })
  // }
