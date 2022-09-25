//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const eAge = 31557600;
export const age = (planet,newAge) => {
  switch (planet){
    case 'mercury' :return Number((newAge/(0.2408467*eAge)).toFixed(2));
      break;
      case 'venus' : return Number((newAge/(0.61519726*eAge)).toFixed(2));
      break;
      case 'earth' : return Number((newAge/(1*eAge)).toFixed(2));
      break;
      case 'mars' : return Number((newAge/(1.8808158*eAge)).toFixed(2));
      break;
      case 'jupiter' : return Number((newAge/(11.862615*eAge)).toFixed(2));
      break;
      case 'saturn' : return Number((newAge/(29.447498*eAge)).toFixed(2));
      break;
      case 'uranus' : return Number((newAge/(84.016846*eAge)).toFixed(2));
      break;
      case 'neptune' : return Number((newAge/(164.79132*eAge)).toFixed(2));
      break;
  }
};
