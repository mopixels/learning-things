import * as React from "react";

type ContextProps = {
  selectedChar: (id: selectedCharProps) => void;
  selectedCharId: string;
};

type selectedCharProps = {
  id: string;
};

export const Context = React.createContext<ContextProps>({
  selectedChar: () => null,
  selectedCharId: "",
});

export const ContextProvider: React.FC = ({ children }) => {
  const [selectedCharId, setSelectedCharId] = React.useState(null);

  const selectedChar = ({ id }: selectedCharProps) => {
    setSelectedCharId(id);
  };

  return (
    <Context.Provider
      value={{
        selectedCharId,
        selectedChar,
      }}
    >
      {children}
    </Context.Provider>
  );
};
