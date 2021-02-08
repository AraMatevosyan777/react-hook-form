import React, { FC, RefObject } from 'react'
import Error from './Error'

type Props = {
    name: string
    register?: () => string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null | undefined
    errors?: any
}

const Field: FC<Props> = ({name, register, errors={}}) => {
    
    return (
        <div className='field'>
            <label htmlFor={name}>{name}</label>
            <input autoComplete='off' name={name} ref={register}/>
            {errors[name]?.type === 'required' && <Error error={errors[name].message}/>}
        </div>
    )
}

export default Field
