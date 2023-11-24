import React, { useEffect } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Posts  from './Posts';
import Loader from "./Loaders";

const Main = () => {
   const [theme, setTheme] = useState(null);
   
   
   useEffect(() => {
      import('Sharedlib/theme').then((sharedTheme) => {
         setTheme(sharedTheme.default);
         console.log('here theme',sharedTheme.default);
         
      }).catch((error) => {
         console.log('Error loading shared theme', error);
      })
   }, []);
   
   if (!theme) {
      return (
        <Loader />
      );
    }

   return (
      <ThemeProvider theme={theme}>
         <Posts />
      </ThemeProvider>
      )
}

export default Main;