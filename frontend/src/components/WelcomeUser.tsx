import { Typography } from "antd";

import { useAppSelector } from "../store/hooks";

const WelcomeUser = () => {
  const username = useAppSelector((state) => state.user.data.user_fullname);
  return (
    <Typography.Text className="h-fit rounded-full bg-accent p-6 text-main-text">
      Добро пожаловать: {username}
    </Typography.Text>
  );
};

export default WelcomeUser;
