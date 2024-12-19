import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
// Interfaces
import { LoginRequest } from "../../../core/interfaces/request/login.request";
// Components
import { useMemo } from "react";
import { Button } from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";
import { InputPassword } from "../../../shared/components/Input/types/Password";
import { SegmentControl } from "../../../shared/components/SegmentControl";

interface LoginFormProps {
  isPending: boolean;
  //
  control: Control<LoginRequest, any>;
  //
  errors: FieldErrors<LoginRequest>;
  //
  onSubmit: () => void;
  register: UseFormRegister<LoginRequest>;
}

export const LoginForm = ({
  errors,
  control,
  isPending,
  register,
  onSubmit,
}: LoginFormProps) => {
  const roleOptions = useMemo(() => {
    return [
      { label: "Usuário", value: "user" },
      { label: "Administrador", value: "admin" },
    ];
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit();
      }}
      className="mt-4 flex flex-col gap-4 px-6"
    >
      <Controller
        name="role"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <SegmentControl
              value={value}
              onChange={onChange}
              options={roleOptions}
            />
          );
        }}
      />

      <Input
        placeholder="Nome do usuário"
        error={errors.username?.message}
        {...register("username")}
      />

      <InputPassword
        type="password"
        placeholder="Senha"
        error={errors.password?.message}
        {...register("password")}
      />

      <Button type="submit" className="mt-2" isLoading={isPending}>
        Entrar
      </Button>
    </form>
  );
};
