import { createContext, useState } from "react";

const HotelReservationContext = createContext();
export default HotelReservationContext;

export function HotelReservationProvider({ children }) {
  const [hotelReservationData, setHotelReservationData] = useState(null);

  return (
    <HotelReservationContext.Provider value={{ hotelReservationData, setHotelReservationData }}>
      {children}
    </HotelReservationContext.Provider>
  );
}
