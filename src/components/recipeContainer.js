import React from 'react'
import GridList from '@material-ui/core/GridList';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Recipe from "./recipe"


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


const RecipeContainer = () => {
  const classes = useStyles()
  const recipes = useSelector(state => state.recipeReducer.data)
  const loading = useSelector(state => state.recipeReducer.pending)


  return (
    <div>
      {loading ? "WAIT JUST ONE SEC BITCH IT'S LOADING" :
        // <Grid container spacing={1}>
        //   <Grid item md={4}></Grid>
        //   <Grid item md={4}>
        //     <GridList
        //       className={classes.gridList}
        //       cols={1.5}>
              // {
                recipes && recipes.map(e => <Recipe recipe={e} />)
              // }
        //     </GridList>
        //   </Grid>
        //   <Grid item md={4}></Grid>
        // </Grid>
      }
    </div>
  )
}

export default RecipeContainer