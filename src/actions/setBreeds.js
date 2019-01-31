
// import level from '../components/DogPicsContainer'

export const SET_BREEDS = 'SET_BREEDS';

export function setBreeds(allbreeds, level) {  

  return {
    type: SET_BREEDS,
    payload: {
      allbreeds,
      current: Object.keys(allbreeds)[Math.floor(Math.random() * level)] 
  }
}
}

// Object.keys(allbreeds).length