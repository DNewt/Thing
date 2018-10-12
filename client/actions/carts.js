import request from '../utils/api'

function loading () {
  return {
    type: 'CART_LOADING',
    isFetching: true,
    isAuthenticated: true
  }
}

export function confirm_shop (cart) {
  return dispatch => {
    dispatch(loading())
    return request('post', 'cart/save', cart)
      .then((response) => {
          console.log(response);
          //the data is now coming back to here ! check the chrome dev tools 
      })
      .catch(err => {
        dispatch(loginError(err.response.body.message))
      })
  } 
}
