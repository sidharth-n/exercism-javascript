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
export function cookingStatus(timeLeft) {
  switch (timeLeft){
    case 0 : return 'Lasagna is done.';
      break;
    case undefined : return 'You forgot to set the timer.';
      break;
      default : return 'Not done, please wait.';
  }
}

export function preparationTime(layers,time = 2){
return layers.length*time;
}

export function quantities(layers){
  const obj = {
    noodles : 0,
    sauce : 0
  }
  for (let i = 0;i<layers.length;i++){
    switch (layers[i]){
      case 'noodles': obj.noodles +=50;
        break;
        case 'sauce': obj.sauce +=0.2;
        break;
    }
  }
  return obj;
}

export function addSecretIngredient(friendsList,myList){
  myList.push(friendsList[friendsList.length -1]);
}

export function scaleRecipe (recipe,no){
  const cloneRecipe = Object.assign({}, recipe);
  for(let x in cloneRecipe)
    {
      cloneRecipe[x] *= no/2;
    }
  return cloneRecipe;
}