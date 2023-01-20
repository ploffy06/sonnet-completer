import React, {useEffect, useState} from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [path, setPath] = useState('');
    const nav = useNavigate();

    useEffect(() => {
        nav(path)
    }, [path]);

    return (
        <div className="NavBar">
            <header onClick={() => {setPath('/')}}>SonnetCompleter</header>
            <header onClick={() => {setPath('/about')}}>About</header>
            <header onClick={() => {setPath('/changelog')}}>Log</header>
        </div>
    )
}

export default NavBar;