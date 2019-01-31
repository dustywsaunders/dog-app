export const MINUS_POINT = 'MINUS_POINT'

export function minusPoint(point) {
  return {
    type: 'MINUS_POINT',
    payload: {
      points: point
    }
  }
}
