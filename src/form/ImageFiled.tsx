import React, { FC, RefObject, useState } from 'react'
import Error from './Error'

type Props = {
    name: string
    register?: () => string | RefObject<HTMLInputElement> | ((instance: HTMLInputElement | null) => void) | null | undefined
    errors?: any
}

const CoverImageField: FC<Props> = ({name, register, errors={}}) => {       
    const [img, setImg] = useState('')
    const onChange = (e: any) => {
        let value = e.currentTarget.files[0]
        let url = URL.createObjectURL(value)
        setImg(url)
    }

    return (
        <div className='field imgField'>
            <div>
                <img className='coverImg' src={img}/>
                <label htmlFor={name}>{name}</label>
            </div>
            <input name={name} type='file' accept="image/x-png,image/jpeg" onChange={onChange} ref={register}/>
            {errors[name] && <Error error={errors[name].message}/>}
        </div>
    )
}

export default CoverImageField
