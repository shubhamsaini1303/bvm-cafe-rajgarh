/* eslint-disable react/prop-types */

import { createContext } from "react";
// Create the context
const Context = createContext();

const MainContext = (props) => {
 

  return (
    <Context.Provider>

      {props.children}
    </Context.Provider>
  );
};

export default MainContext;
export { Context };
