import { styles } from "@/app/styles/style"
import { FC } from "react"


type Props = {
    user: any
}

export const ChangePassword:FC<Props> = ({user}) => {
    return(
        <>
            <div className="w-full flex flex-col justify-center">
                <h2> Change Password </h2>
                <form className="flex-col gap-3">
                    <input className={`${styles.input} mb-3`} type="text" placeholder="your name" />
                    <input className={`${styles.input} mb-3`} type="email"  placeholder="your email"/>
                    <input className={styles.input} type="password" placeholder="password" />
                </form>
            </div>
        </>
    )
}