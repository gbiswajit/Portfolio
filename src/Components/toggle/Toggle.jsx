import React from 'react'
import "../toggle/toggle.css"
import { WbSunnySharp, Brightness2Sharp } from '@material-ui/icons'
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };
    return (
        <div className='t'>
            <WbSunnySharp style={{ color: "orange" }} />
            <Brightness2Sharp style={{ color: "black" }} />
            <div className="t-btn" onClick={handleClick}
                style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Toggle