import { styles } from "@/app/styles/style";
import React, { FC, useRef, useState } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";

type Props = {
  setRoute: (route: string) => void;
};

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};

export const Verification: FC<Props> = ({ setRoute }) => {
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleVerification = async () => {
    setInvalidError(true)
  }

  return (
    <>
      <div>
        <h2 className={`${styles.title}`}> Account Verification Code </h2>
        <div className="w-full flex flex-col items-center justify-center mt-2">
          <div className="w-[70px] h-[70px] rounded-full bg-[#497DF2] flex items-center justify-center mb-6">
            <VscWorkspaceTrusted size={30} />
          </div>
          <div className="m-auto flex items-center justify-around mb-6">
            {Object.keys(verifyNumber).map((key, index) => (
              <input
                type="number"
                key={key}
                ref={inputRefs[index]}
                className={`w-[65px] h-[65px] bg-transparent border-[1px] rounded-[10px] flex ml-2 items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${
                  invalidError
                    ? "shake border-red-500"
                    : "dark:border-white border-[#0000004a]"
                }`}
                placeholder=""
                maxLength={1}
                value={verifyNumber[key as keyof VerifyNumber]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button className={`${styles.submitBtn}`} onClick={handleVerification}>Verify OTP</button>
          </div>
          <br />
          <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
            Go back to sign in?{" "}
            <span
              className="text-[#2190ff] pl-1 cursor-pointer"
              onClick={() => setRoute("Login")}
            >
              Sign in
            </span>
          </h5>
        </div>
      </div>
    </>
  );
};
