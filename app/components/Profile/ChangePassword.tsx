import { styles } from "@/app/styles/style";
import { FC, useState } from "react";

type Props = {
  user: any;
};

export const ChangePassword: FC<Props> = ({ user }) => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handlePassChange = (e: any) => {};

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
              <label className="block pb-2">Your Full Name</label>
              <input
                type="text"
                placeholder="your name"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={oldPass}
                onChange={(e) => setOldPass(e.target.value)}
              />
            </div>
            <div className="w-[100%]  pb-4">
              <label className="block pb-2">Your Full Name</label>
              <input
                type="text"
                placeholder="your name"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={oldPass}
                onChange={(e) => setOldPass(e.target.value)}
              />
            </div>
            <div className="w-[100%]  pb-4">
              <label className="block pb-2">Your Full Name</label>
              <input
                type="text"
                placeholder="your name"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={oldPass}
                onChange={(e) => setOldPass(e.target.value)}
              />
            </div>
            <div className="w-[100%]">
              <input
                className={`h-[40px] border border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer`}
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
