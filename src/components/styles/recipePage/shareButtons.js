import { makeStyles } from '@material-ui/core/styles';

export const useStylesShareButtons = makeStyles({ 
  
  general: {
    display: 'flex', 
    direction: 'row', 
    justifyContent:'center', 
    alignItems: 'center'
  },
  
  shareButtons: {
    margin: 5
   },
})