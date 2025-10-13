/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
 export function cookingStatus (minutes) {
   if (minutes === 0) {
     return 'Lasagna is done.';
   } else if (minutes > 0) {
     return 'Not done, please wait.';
   } else if (minutes === undefined) {
     return 'You forgot to set the timer.';
   }
 };

export function preparationTime (layers, minutes = 2) {
  return layers.length * minutes;
};

export function quantities (layers) {
 let noodleTotal = 0;
 let sauceTotal = 0;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') {
      noodleTotal++;
    } else if (layers[i] === 'sauce') {
      sauceTotal++;
    }
  };
  
  return {
    noodles: noodleTotal * 50,
    sauce: sauceTotal * 0.2,
  };
};

export function addSecretIngredient (friendsList, myList){
 let end = friendsList[friendsList.length - 1];
  myList.push(end);
};

export function scaleRecipe (recipe, number) {
 const scaledRecipe = {};

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * (number / 2);
  }

  return scaledRecipe;

};