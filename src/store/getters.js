export default {
  getHotelLimitInfoById: (state) => (id) => state.hotelDetailList.find((hotel) => hotel.id === id),
};