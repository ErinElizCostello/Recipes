import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { deleteIngredient } from '../../../state/actions/ingredientsList'
import { deleteCuisine } from '../../../state/actions/cuisines'
import { deleteIntolerance } from '../../../state/actions/intolerances'
import { deleteMealType } from '../../../state/actions/mealType'
import { deleteDiet } from '../../../state/actions/dietType'
import { deleteMaximumReadyTime } from '../../../state/actions/maximumReadyTime'
import { sliders, slidersDelete } from '../../../state/actions/sliderActions'

import { useStylesChipsArea } from '../../styles/homePage/chipsArea'
import Chip from '@material-ui/core/Chip';


const ChipsArea = () => {
  const classes = useStylesChipsArea()

  const dispatch = useDispatch()

  const maximumReadyTime = useSelector(state => state.maximumReadyTime)
  const ingredients = useSelector(state => state.ingredientsList)
  const dietTypes = useSelector(state => state.dietTypes)
  const cuisines = useSelector(state => state.cuisines)
  const intolerances = useSelector(state => state.intolerances)
  const mealType = useSelector(state => state.mealType)
  const slider = useSelector(state => state.sliders)

  const formTypesSingleOption = [dietTypes, mealType, maximumReadyTime]
  const formTypesMultipleOptions = [ingredients, cuisines, intolerances]

  const onDeleteItem = (formType, id) => {
    if (formType === ingredients) {
      const deletedIngredient = ingredients.filter(theIngredient => theIngredient.id !== id)
      dispatch(deleteIngredient(deletedIngredient))
    }

    if (formType === cuisines) {
      const deletedCuisine = cuisines.filter(cuisine => cuisine.id !== id)
      dispatch(deleteCuisine(deletedCuisine))
    }

    if (formType === intolerances) {
      const deletedIntolerance = intolerances.filter(intolerance => intolerance.id !== id)
      dispatch(deleteIntolerance(deletedIntolerance))
    }

    if (formType === mealType) {
      dispatch(deleteMealType([]))
    }

    if (formType === dietTypes) {
      dispatch(deleteDiet([]))
    }

    if (formType === maximumReadyTime) {
      dispatch(deleteMaximumReadyTime([]))
    }

    if (formType === sliders) {
      const deletedSlider = Object.keys(slider).filter(slider => slider.id === id)
      dispatch(slidersDelete(deletedSlider))
    }

  }

  return (
    <div className={classes.display}>
      {
        formTypesSingleOption.map(formType =>
          !Array.isArray(formType) && !formType.length ?
            <div className={classes.chipMargin}>
              <Chip
                label={
                  formType === maximumReadyTime ?
                    `${formType.theItem} Minutes`
                    : formType.theItem
                }
                onDelete={() => onDeleteItem(formType, formType.id)}
                color="secondary"
              />
            </div>
            : null
        )
      }
      {
        formTypesMultipleOptions.map(formType =>
          formType.length ?
            formType.map(item =>
              <div className={classes.chipMargin}>
                <Chip
                  label={
                    formType === intolerances ?
                      `No ${item.theItem}`
                      : item.theItem
                  }
                  onDelete={() => onDeleteItem(formType, item.id)}
                  color="secondary"
                />
              </div>
            )
            : null
        )
      }
    </div>
  );
}

export default ChipsArea;


{/* <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClearList()}
        >
          Clear List
      </Button> */}

// const onClearList = () => {
  //   dispatch(clearIngredientsList([]))
  //   dispatch(clearCuisine([]))
  //   dispatch(clearIntolerances([]))
  //   dispatch(clearMealType([]))
  //   dispatch(clearDiet([]))
  // }


 // sliderArray.length ? 
          // sliderArray.map(nutrition => 
            // <Chip
            //         label={
                      // `${
                        // 'Nutrition applied'
                    //   }: 
                    // ${slider[nutrition][min]} - ${slider[nutrition][max]}`
                  // }
                  //   onDelete={() => onDeleteItem('sliders', slider)}
                  //   color="secondary"
                  // />
          // )
          // : null
        // }
