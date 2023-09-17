import React, { FC } from "react";
import { Box, Modal } from "@mui/material";
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setRoute: (route: string) => void;
  activeItem: any;
  component: any;
};

export const CustomModal: FC<Props> = ({
  open,
  setOpen,
  setRoute,
  activeItem,
  component: Component,
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[95%] m-auto  800px:w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
          <Component setOpen={setOpen} setRoute={setRoute} />
        </Box>
      </Modal>
    </>
  );
};
