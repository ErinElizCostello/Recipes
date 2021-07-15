import { makeStyles } from '@material-ui/core/styles';

export const useStylesNavigationBar = makeStyles((theme) => ({
  
// navigation bar
root: {
  display: 'flex',
  direction: 'row',
  flexGrow: 1,
  position: 'relative',
  zIndex: theme.zIndex.drawer + 1,
  background: 'white',
  height: 150,
  alignItems: 'center'
  // borderBottom: '1px solid #5e5e5e'
},

appBar: {
  background: 'white', 
  margin: 0
},

welcomeMessage: {
  color: '#5e5e5e'
},

menuButton: {
  marginRight: theme.spacing(3),
  fill: '#5e5e5e'
},

title: {
  flexGrow: 1,
},


//main menu
list: {
  width: 250,
},
fullList: {
  width: 'auto',
},


// links
links: {
  textDecoration: 'none', 
  color: '#5e5e5e'
},


//settings
settingsList: {
  width: 250,
},

}))