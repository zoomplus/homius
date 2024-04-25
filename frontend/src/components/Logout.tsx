import { Typography } from "antd";

import { useAppDispatch } from "../store/hooks";
import { SET_LOGOUT } from "../store/slices/user";

const Logout = () => {
  const dispatcher = useAppDispatch();
  const logoutHandler = () => {
    dispatcher(SET_LOGOUT());
  };
  return (
    <Typography.Text
      className="h-fit cursor-pointer rounded-full bg-accent p-3 sm:p-4 md:p-6"
      onClick={logoutHandler}
    >
      Выход
    </Typography.Text>
  );
};

export default Logout;
