//Q5) What will be the output of the following code?. Explain the reason behind your answer
import React, { createContext, useContext } from 'react';
const MyContext = createContext(1);
const MyComponent = () => (
 <>
 <p>{useContext(MyContext)}</p>
 <MyContext.Provider value={2}>
 <p>{useContext(MyContext)}</p>
 </MyContext.Provider>
 </>
);
export default MyComponent;


//   output will be 1 
// because 