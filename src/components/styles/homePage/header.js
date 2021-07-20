import { makeStyles } from '@material-ui/core/styles';
import headerImage from '../../../images/header-image-ella-olsson-unsplash.jpg'

export const useStylesHeaderHomePage = makeStyles({
  background: {
    backgroundImage: `url(${headerImage})`, height: '100vh', backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  navbar: {
    display: 'flex', 
    direction: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    marginRight: 20
  },
  titleSpacing: {
    display: 'flex', 
    direction: 'row', 
    justifyContent: 'center',
    marginBottom: 20
  }
})