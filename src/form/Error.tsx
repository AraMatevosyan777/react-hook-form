import React, { FC } from 'react'

type Props = {
    error: string
}

const Error: FC<Props> = ({error}) => {
    return (
        <div className='error'>
            {error}
        </div>
    )
}

export default Error
