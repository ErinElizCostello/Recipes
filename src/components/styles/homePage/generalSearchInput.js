import { makeStyles } from '@material-ui/core/styles';

export const useStylesGeneralSearch = makeStyles({
  
  display: {
    display: 'flex',
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    backgroundColor: 'rgba(255,255,255)',
    borderRadius: '5px',
    width: 500,
    height: 60
  },
submit: {
  margin: 20
}

})