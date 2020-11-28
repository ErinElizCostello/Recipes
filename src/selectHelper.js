import React from 'react'

const ActionHelper = () => {

  let arr = ['alcohol', 'caffeine', 'calories', 'carbs', 'copper', 'calcium', 'choline', 'cholesterol', 'fat', 'fiber', 'fluoride', 'saturatedFat', 'folate', 'folicAcid', 'iodine', 'iron', 'magnesium', 'manganese', 'phosphorus', 'potassium', 'protein', 'selenium', 'sodium', 'sugar', 'zinc', 'vitaminA', 'vitaminC', 'vitaminD', 'vitaminE', 'vitaminK', 'vitaminB1', 'vitaminB2', 'vitaminB3', 'vitaminB5', 'vitaminB6', 'vitaminB12']

  return (
    <div>
      {arr.map(e => `{ what: '${e}', min: listValues[0], max: listValues[1] },`)}
    </div>
  )
}

export default ActionHelper


// import React from 'react';

// const SelectHelper = () => {

//   let list = [
//     'main course'',
// 'side dish'',
// 'dessert'',
// 'appetizer'',
// 'salad'',
// 'bread'',
// 'breakfast'',
// 'soup'',
// 'beverage'',
// 'sauce'',
// 'marinade'',
// 'fingerfood'',
// 'snack'',
// 'drink'
//   ]

//   return (
//     <div>
//       {list.map(e => '<MenuItem value="' + e + '">' + e + '</MenuItem>') }
//     </div>
//   )
// }

// export default SelectHelper