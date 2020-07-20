import React,{useEffect} from 'react';
import style from './NotFound.module.css';

const  NotFound = ()=> {
    useEffect(() => {
        document.title= '404 not found'
      },[])
    return (
        <div>
            <h1 className={style.h1}>404 Not Found</h1>
        </div>
    )
}
export default NotFound;