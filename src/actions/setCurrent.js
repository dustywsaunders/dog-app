
export const SET_CURRENT = 'SET_CURRENT';

export function setBreeds(allbreeds) {  

  return {
    type: SET_CURRENT,
    payload: {
      current: Object.keys(allbreeds)[Math.floor(Math.random() * 3)]
      
  }
}
}
