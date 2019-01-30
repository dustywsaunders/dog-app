export const ADD_USER = 'ADD_USER'

export function addUser(firstName) {
  return {
    type: 'ADD_USER',
    payload: {
      firstName: firstName,
      points: 0
    }
  }
}
