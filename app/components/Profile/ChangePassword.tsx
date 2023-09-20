import { styles } from "@/app/styles/style";
import { useChangePasswordMutation } from "@/redux/features/user/userApi";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";

type Props = {
  user: any;
};

export const ChangePassword: FC<Props> = ({ user }) => {
  const [oldPassword, setOldPass] = useState("");
  const [newPassword, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [changePassword, {isSuccess, error}] = useChangePasswordMutation()

  const handlePassChange = async (e: any) => {
    e.preventDefault()
    if(newPassword != confirmPass){
        toast.error("Password is not match")
    }else{
        await changePassword({
            oldPassword,
            newPassword, 
        })
    }
  };

  useEffect(() => {
    if(isSuccess){
        toast.success("Password has changed")
    }
    if(error){
        console.log(error);
    }
  }, [isSuccess, error])

  return (
    <>
      <div className="w-full 800px:pl-20">
        <h4 className="text-center text-[25px] font-Poppins mb-5 text-black dark:text-white">
          {" "}
          Change Password{" "}
        </h4>
        <form onSubmit={handlePassChange}>
          <div className="w-[80%] m-auto">
            <div className="w-[100%]  pb-4">
              <label className="block pb-2">Old Password</label>
              <input
                type="text"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={oldPassword}
                onChange={(e) => setOldPass(e.target.value)}
              />
            </div>
            <div className="w-[100%]  pb-4">
              <label className="block pb-2">New Password</label>
              <input
                type="text"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={newPassword}
                onChange={(e) => setNewPass(e.target.value)}
              />
            </div>
            <div className="w-[100%]  pb-4">
              <label className="block pb-2">Confirm New Password</label>
              <input
                type="text"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>
            <div className="w-[96%]">
              <input
                className={`w-full h-[40px] border border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </div>
          </div>
        </form>
        <br />
      </div>
    </>
  );
};
