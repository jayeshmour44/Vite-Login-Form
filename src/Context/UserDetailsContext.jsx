import { createContext, useEffect, useState } from "react";
import React from "react";

export const UserDetailsContext = createContext();

export const UserDetailsProvider = ({ children }) => {
  const [details, setDetails] = useState ([]);


  const addDetail = (data) => {
    setDetails((prev) => [...prev, data]);
  };

  const deleteDetail = (index) => {
    setDetails(details.filter((_, i) => i !== index));
  };

  const updateDetail = (index, updatedData) => {
    const newDetails = [...details];
    newDetails[index] = updatedData;
    setDetails(newDetails);
  };

  return (
    <UserDetailsContext.Provider
      value={{ details, addDetail, deleteDetail, updateDetail }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
};
