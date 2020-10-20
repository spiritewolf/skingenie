import React, { useReducer, createContext } from "react";
import SurveyReducer from "./SurveyReducer";

const initialState = {
  responses: localStorage.getItem("responses"),
  loading: false,
};

export const SurveyContext = createContext(initialState);

export const SurveyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SurveyReducer, initialState);

  const getResponses = async (input) => {
    const res = await input;
    console.log(res);
    localStorage.setItem("responses", res);
    dispatch({
      type: "GET_RESPONSE",
      payload: res,
    });
    getResult();
  };
  const getResult = async () => {
    const result = await state.responses;
    if (result[0] == "a") {
      console.log("YEAH BABY");
    }
  };

  return (
    <SurveyContext.Provider
      value={{
        responses: state.responses,
        loading: state.loading,
        getResponses,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const SurveyConsumer = SurveyContext.Consumer;
