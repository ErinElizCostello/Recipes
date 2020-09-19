import React from 'react';

const SelectHelper = () => {

  let list = [
    'main course',
'side dish',
'dessert',
'appetizer',
'salad',
'bread',
'breakfast',
'soup',
'beverage',
'sauce',
'marinade',
'fingerfood',
'snack',
'drink'
  ]

  return (
    <div>
      {list.map(e => '<MenuItem value="' + e + '">' + e + '</MenuItem>') }
    </div>
  )
}

export default SelectHelper