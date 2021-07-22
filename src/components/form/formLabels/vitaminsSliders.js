///All of the form information and labels for the vitamin sliders

import { sliders, slidersDelete } from '../../../state/actions/sliderActions'


export const sliderInformationVitamins = [
  {
    checkBoxLabel: "Vitamin A",
    actionName: sliders,
    deleteAction: slidersDelete,
    sliderLabel: 'IU of Vitamin A',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 3300,
        label: '3300'
      }
    ],
    minimum: 0,
    maximum: 3300
  },
  {
    checkBoxLabel: "Vitamin C",
    actionName: sliders,
    deleteAction: slidersDelete,
    sliderLabel: 'Milligrams of Vitamin C',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 30,
        label: '30'
      }
    ],
    minimum: 0,
    maximum: 30
  },
  {
    checkBoxLabel: "Vitamin D",
    actionName: sliders,
    deleteAction: slidersDelete,
    sliderLabel: 'Micrograms of Vitamin D',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 40,
        label: '40'
      }
    ],
    minimum: 0,
    maximum: 40
  },
  {
    checkBoxLabel: "Vitamin E",
    actionName: sliders,
    deleteAction: slidersDelete,
    sliderLabel: 'Milligrams of Vitamin E',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 330,
        label: '330'
      }
    ],
    minimum: 0,
    maximum: 330
  },
  {
    checkBoxLabel: "Vitamin K",
    actionName: sliders,
    deleteAction: slidersDelete,
    sliderLabel: 'Micrograms of Vitamin K',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 40,
        label: '40'
      }
    ],
    minimum: 0,
    maximum: 40
  },
  {
    checkBoxLabel: "Vitamin B3",
    actionName: sliders,
    deleteAction: slidersDelete,
    sliderLabel: 'Milligrams of Vitamin B3',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 6,
        label: '6'
      }
    ],
    minimum: 0,
    maximum: 6
  },
  {
    checkBoxLabel: "Vitamin B6",
    actionName: sliders,
    deleteAction: slidersDelete,
    sliderLabel: 'Milligrams of Vitamin B6',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 170,
        label: '170'
      }
    ],
    minimum: 0,
    maximum: 170
  },
  {
    checkBoxLabel: "Vitamin B12",
    actionName: sliders,
    deleteAction: slidersDelete,
    sliderLabel: 'Micrograms of Vitamin B12',
    marks: [
      {
        value: 0,
        label: '0'
      },
      {
        value: 3,
        label: '3'
      }
    ],
    minimum: 0,
    maximum: 3
  }
]