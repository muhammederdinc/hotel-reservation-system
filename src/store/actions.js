export default {
  fetchHotelList({ commit }) {
    fetch('https://5f6d939160cf97001641b049.mockapi.io/tkn/hotels')
      .then((response) => response.json())
      .then((data) => commit('setHotelList', data));
  },
  fetchHotelDetailList({ commit }) {
    fetch('https://5f6d939160cf97001641b049.mockapi.io/tkn/hotel-details')
      .then((response) => response.json())
      .then((data) => commit('setHotelDetailList', data));
  },
};