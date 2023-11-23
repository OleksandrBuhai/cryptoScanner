

import React from 'react'
import style from './input.module.css'

export default function Input({value,setValue,}) {
  return (
    <div>
            <input
                    className={style.input}
                    type='text'
                    value={value}
                    onChange={setValue}
                    placeholder='type coin or nft name'
                />
    </div>
  )
}
