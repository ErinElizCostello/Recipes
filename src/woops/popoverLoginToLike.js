// import React from 'react';

// import {useStylesPopoverLoginToLike} from '../styles/popoverLoginToLike'

// import Popover from '@material-ui/core/Popover';
// import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';


// const PopoverLoginToLike = (props) => {

//   const classes = useStylesPopoverLoginToLike();

//   const openOrClosePopover = props.openOrClosePopover[0]
//   const popoverHandleClose = props.openOrClosePopover

//   const popoverOpen = Boolean(openOrClosePopover);
//   const popoverId = popoverOpen ? 'simple-popover' : undefined;

//   return (
//     <Popover
//       id={popoverId}
//       open={popoverOpen}
//       anchorEl={openOrClosePopover}
//       onClose={popoverHandleClose[1]}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'center',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'center',
//       }}
//     >
//       <Typography className={classes.typography}><Link to='/login'>Login</Link> or <Link to='/signUp'>sign up</Link> to like you favorite recipes!</Typography>
//     </Popover>
//   );
// }

// export default PopoverLoginToLike;