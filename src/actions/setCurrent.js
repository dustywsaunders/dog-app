export const SET_CURRENT = 'SET_CURRENT';

export function setCurrent(current) {
  return {
    type: SET_CURRENT,
    payload: current
  }
}
