import { makeStyles } from '@material-ui/core/styles';
import headerImage from '../../images/lauren-mancke-sil2Hx4iupI-unsplash.jpg'


export const useStylesFavoritesPage = makeStyles({
  background: {
    backgroundImage: `url(${headerImage})`, height: '100vh', backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

  spacingUnderHeader: {
    margin: 200
  },

  //text
  textHeader: {
    fontSize: 50,
    textAlign: 'center',
    color: '#5e5e5e',
  },

  //icon
  icon: {
    fontSize: 100,
    color: '#debc23',
    marginTop: 50
  },

  noSavedRecipes: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    color: '#5e5e5e',
    marginTop: 100
  },

  //???
  spacingBelowHeader: {
    margin: 100
  },

  numberRecipesSaved: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 17,
    color: '#5e5e5e', 
  },

  spinnerSpacing: {
    display: 'flex', 
    direction: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})