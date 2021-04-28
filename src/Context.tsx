import * as React from "react";

type ContextProps = {
  getCharId: (id: selectedCharProps) => void;
  selectedCharId: number;
};

type selectedCharProps = {
  id: number;
};

export const Context = React.createContext<ContextProps>({
  getCharId: () => null,
  selectedCharId: 0,
});

export const ContextProvider: React.FC = ({ children }) => {
  const [selectedCharId, setSelectedCharId] = React.useState(0);

  const getCharId = ({ id }: selectedCharProps) => {
    setSelectedCharId(id);
  };

  return (
    <Context.Provider
      value={{
        selectedCharId,
        getCharId,
      }}
    >
      {children}
    </Context.Provider>
  );
};
