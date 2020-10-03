import React, { useState, createContext, useMemo } from "react";

const DescrContext = createContext();
// контекст необходимый для Background, получает описание погоды с Cards
const DescrProvider = (props) => {
  const [cardDescr, handleCardDescr] = useState("");
  const providerValue = useMemo(() => ({ cardDescr, handleCardDescr }), [
    cardDescr,
    handleCardDescr
  ]);

  return (
    <DescrContext.Provider value={providerValue}>
      {props.children}
    </DescrContext.Provider>
  );
};

export { DescrContext, DescrProvider };
