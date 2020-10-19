import React from "react";

export const SurveyContext = createContext({
  name: "",
  updateName: () => {},
  selection: [],
  updateSelection: () => {},
});

export const SurveyProvider = ({ children }) => {
  updateName = (newName) => {
    this.setState({ name: newName });
  };
  updateSelection = (newSelection) => {
    this.setState({ selection: newSelection });
  };

  state = {
    name: "",
    updateName: this.updateName,
    selection: [],
    updateSelection: this.updateSelection,
  };

  return (
    <SurveyContext.Provider value={state}>{children}</SurveyContext.Provider>
  );
};

export const SurveyConsumer = SurveyContext.Consumer;
