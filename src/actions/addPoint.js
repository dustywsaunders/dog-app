export const ADD_POINT = 'ADD_POINT'

export function addPoint(point) {
  console.log('addPoint action called')
  return {
    type: 'ADD_POINT',
    payload: {
      points: point
    }
  }
}
