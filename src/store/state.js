export default {
  snackbar: {},
  hotelList: [],
  definedCoupon: null,
  hotelDetailList: [],
  creditCard: JSON.parse(localStorage.getItem('creditCard')) || {},
  reservationStep: Number(localStorage.getItem('reservationStep')) || 1,
  reservationInformation: JSON.parse(localStorage.getItem('reservationInformation')) || {},
};
