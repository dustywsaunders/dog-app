export const ADD_POINT = 'ADD_POINT'

export function addPoint() {
  return {
    type: 'ADD_POINT',
    payload: {
      points: 1
    }
  }
}
