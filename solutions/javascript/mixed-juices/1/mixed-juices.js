// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
  break;
    case 'Energizer': 
      return 1.5
  break;
    case 'Green Garden':
      return 1.5
  break;
   case 'Tropical Island':
      return 3
  break;
    case 'All or Nothing':
      return 5
  break;
   default:
    return 2.5
  break;
}
}
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let totalWedges = 0;
  let limesCut = 0;
  let i = 0;

  while (totalWedges < wedgesNeeded && i < limes.length) {
    switch (limes[i]) {
      case 'small':
        totalWedges += 6;
        break;
      case 'medium':
        totalWedges += 8;
        break;
      case 'large':
        totalWedges += 10;
        break;
    }

    limesCut++;
    i++;
  }

  return limesCut;
}


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const prepTimes = {
    'Pure Strawberry Joy': 0.5,
    'Energizer': 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5,
  };

  let index = 0;
  let remainingTime = timeLeft;

  do {
    if (index >= orders.length) break;

    const currentDrink = orders[index];
    const prepTime = prepTimes[currentDrink] || 2.5;

    if (remainingTime > 0) {
      remainingTime -= prepTime;
      index++;                  
    } else {
      break;
    }

  } while (true);

  return orders.slice(index);
}

