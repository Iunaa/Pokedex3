import React, {useContext} from "react";
import pokeball from "../../../assets/img/pokeball.png";
import list from "../../../assets/img/list.png";
import back from "../../../assets/img/back.png";
import style from "../Header/header.module.scss";

const Header = () => {
  
    return (
        <>
        <div className={style.picture}>
            
            <img className={style.picture__logo} src={pokeball}/>
            <img className={style.picture__list} src={list}/>   
            
        </div>
        <div className={style.arrow}>
            <img className={style.picture__arrow} src={back}/>
        </div>
        
        </>
    )
}

export default Header