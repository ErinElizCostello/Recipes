import { makeStyles } from '@material-ui/core/styles';
import headerImage from '../../../images/lauren-mancke-sil2Hx4iupI-unsplash.jpg'


export const useStylesFavoritesPage = makeStyles({
  background: {
    backgroundImage: `url(${headerImage})`, height: '100vh', backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
})