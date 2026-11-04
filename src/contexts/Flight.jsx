import { createContext, useContext, useRef, useState } from "react";

const FlightContext = createContext(null);

export const FlightProvider = ({ children }) => {
  const progress = useRef(0);
  const scrollEl = useRef(null);
  const [chapter, setChapter] = useState(-1);

  return (
    <FlightContext.Provider
      value={{ progress, scrollEl, chapter, setChapter }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export const useFlight = () => {
  const context = useContext(FlightContext);

  if (!context) {
    throw new Error("useFlight must be used within a FlightProvider");
  }

  return context;
};
