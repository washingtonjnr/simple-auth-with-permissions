// Components
import { LoginForm } from "./components/LoginForm";
// Controller
import { useLoginController } from "./useLoginController";
// Service
import { useServices } from "../../app/hooks/useService";

export const Login = () => {
  const { authService } = useServices();
  //
  const { isPending, control, errors, register, handleSubmit } =
    useLoginController(authService);

  return (
    <>
      <header className="gap-4 flex flex-col items-center">
        <h1 className="text-xl font-mono tracking-[-0.5px] my-2 ">
          Faça login
        </h1>
      </header>

      <LoginForm
        errors={errors}
        control={control}
        isPending={isPending}
        register={register}
        onSubmit={() => handleSubmit()}
      />
    </>
  );
};
