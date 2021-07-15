import { makeStyles } from '@material-ui/core/styles';

export const useStylesAdmin = makeStyles({
  listStyle: {
    listStyleType: 'none'
  },
  user: {
    margin: 20
  },
  deleteButton: {
    marginRight: 10
  },
  divider: {
    borderTop: '1px solid grey', 
    margin: 5
  }
})