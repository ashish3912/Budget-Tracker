import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Toggle from "react-toggle";
import "react-toggle/style.css" 
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

  const DarkToggle = () => {
      
    const getPrefColorScheme = () => {
      if(!window.matchMedia) return;
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    const getInitialMode = () => {
      const savedMode = JSON.parse(localStorage.getItem('isDark'))
      const userPrefersDark = getPrefColorScheme();

      if('isDark' in localStorage){
         return savedMode;
      }
      else if(userPrefersDark){
        return true;
      }
      else{
        return false;
      }
    }
    const [isDark, setIsDark] = useState(getInitialMode);

    useEffect(() => {
      localStorage.setItem('isDark',JSON.stringify(isDark))
        if (isDark) {
            document.documentElement.setAttribute('data-theme', DARK_THEME);
        } else {
            document.documentElement.setAttribute('data-theme', LIGHT_THEME)
        }
     }, [isDark]);

      return (
        <Toggle
          checked={isDark}
          onChange={event => setIsDark(event.target.checked)}
          icons={{ checked: "🌙", unchecked: "🔆" }}
          aria-label="Dark mode"
        />
      );
};

export default DarkToggle;