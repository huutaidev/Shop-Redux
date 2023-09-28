import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch('https://redux-http-fb415-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json')
      const data = await res.json();
      return data;
    }
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotifications({
        open: true,
        message: 'Sending Request Failed',
        type: 'error'
      })
      )
    }
  }
};
//redux thunk
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotifications({
        open: true,
        message: 'Sending Request',
        type: 'warning'
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        'https://redux-http-fb415-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        }
      );
      const data = await res.json();
      dispatch(
        uiActions.showNotifications({
          open: true,
          message: 'Sent Request Successfully',
          type: 'success'
        })
      );
    };
    try {
      await sendRequest()
    } catch (err) {
      dispatch(uiActions.showNotifications({
        open: true,
        message: 'Sending Request Failed',
        type: 'error'
      })
      )
    }
  }
}