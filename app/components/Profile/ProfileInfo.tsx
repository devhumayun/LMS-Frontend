import Image from 'next/image'
import React, {FC} from 'react'
import avaterDefault from '../../../public/assests/avatar.png'

type Props = {
    user:any,
    avater: string | null
}

export const ProfileInfo:FC<Props> = ({user, avater}) => {
    return(
        <>
            <div className='w-full'>
                <div>
                    <Image 
                        src={user.avater || avater ? user.avater || avater : avaterDefault}
                        alt=''
                    />
                </div>
            </div>
        </>
    )
}