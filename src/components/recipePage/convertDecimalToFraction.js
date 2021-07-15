export const convertDecimalToFraction = (itemAmount, numberOfServings) => {

  if (numberOfServings === undefined) {
    numberOfServings = 1
  }

  const totalAmount = itemAmount * numberOfServings

  const fractions = [['25', ' 1/4'], ['50', ' 1/2'], ['75', ' 3/4'], ['00', '']]

  //we round to the nearest quarter because for some reason the Spoonacular API gives the ingredient "amount" in weird decimal numbers that are not compatible for cooking
  let numerator = (Math.round(totalAmount * 4) / 4).toFixed(2).split('.')[0]
  const decimal = (Math.round(totalAmount * 4) / 4).toFixed(2).split('.')[1]

  let answerInFractions = ''

  fractions.forEach(fraction =>
    fraction[0] === decimal ?
      answerInFractions = numerator + fraction[1]
      : null
  )

  return answerInFractions[0] === '0' ?
    answerInFractions.slice(1)
    : answerInFractions
}