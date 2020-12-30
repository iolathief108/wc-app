import {createGlobalState} from 'react-hooks-global-state'


/*
*
* */
const initialState = {
  checkoutUpdated: false,
  wishlistUpdated: true,
  shippingInfoUpdated: false
};
export const { useGlobalState:useUpdateDetect } = createGlobalState(initialState);






