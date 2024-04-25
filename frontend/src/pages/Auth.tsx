import { Button, Input } from "antd";
import PhoneInput from "antd-phone-input";
import { PhoneNumber } from "antd-phone-input/types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { useLoginMutation } from "../store/api/authenticateApi";
import { useAppDispatch } from "../store/hooks";
import { SET_DATA, SET_TOKEN } from "../store/slices/user";

type Inputs = {
  phone: PhoneNumber;
  password: string;
};

const Auth = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<Inputs>();
  const [login, { error }] = useLoginMutation();
  const dispatcher = useAppDispatch();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await login({
        login: `${data.phone.countryCode}${data.phone.areaCode}${data.phone.phoneNumber}`,
        password: data.password,
      }).unwrap();

      if (result?.data) {
        dispatcher(SET_TOKEN(result.data.user.token));
        dispatcher(SET_DATA(result.data.user));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 flex h-fit w-full sm:w-1/2 md:w-1/3 flex-col gap-5 rounded bg-section p-6 shadow-xl transition-all hover:shadow-2xl"
      >
        <Controller
          name="phone"
          control={control}
          rules={{
            validate: (value) => {
              return !value.areaCode || !value.countryCode || !value.phoneNumber
                ? "Поле обязательно"
                : undefined;
            },
          }}
          render={({ field }) => (
            <PhoneInput
              size="large"
              placeholder="Телефон"
              country="ru"
              disableDropdown={true}
              status={errors.phone ? "error" : undefined}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Поле обязательно",
          }}
          render={({ field }) => (
            <Input.Password
              size="large"
              placeholder="Пароль"
              visibilityToggle={true}
              status={errors.password ? "error" : undefined}
              {...field}
            />
          )}
        />

        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </form>
    </div>
  );
};

export default Auth;
