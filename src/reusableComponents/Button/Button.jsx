

import React from 'react'
import style from './button.module.css'

export default function Button({ onClickHandler, content }) {
    return (
        <div>
            <button className={style.button} onClick={onClickHandler}>
                <span>
                    {content}
                  
                </span>
            </button>
        </div>
    )
}
