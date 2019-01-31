
export const SET_BREEDS = 'SET_BREEDS';

export function setBreeds(allbreeds) {  

  return {
    type: SET_BREEDS,
    payload: {
      allbreeds,
      current: [ Object.keys(allbreeds)[Math.floor(Math.random() * 3)] ]
      
  }
}
}
