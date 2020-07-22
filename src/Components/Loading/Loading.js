import React from 'react';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import style from './Loading.module.css';
const Loading = ()=>{
    return(
        <div className={style.container}>
            <h1 className={style.title}>Loading...</h1>
            <AutorenewIcon className={style.title}/>
        </div>
    )
}

export default Loading;