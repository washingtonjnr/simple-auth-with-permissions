import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
//
import toast from "react-hot-toast";
// Hooks
import { useAuth } from "../../app/hooks/useAuth";
// Interfaces
import { AuthService } from "../../core/entities/AuthService";
import { LoginRequest } from "../../core/interfaces/request/login.request";

const loginSchema = z.object({
  username: z
    .string()
    .nonempty("Nome de usuário é obrigatório"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .refine(
      (password) =>
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /\d/.test(password) &&
      {
        message:
          "Senha deve conter ao menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
      }
    ),
  role: z
    .string()
    .nonempty("Tipo é obrigatório")
    .refine((role) => ["admin", "user"].includes(role), {
      message: "O Tipo deve ser 'admin' ou 'user'",
    }),
});

export function useLoginController(authService: AuthService) {
  const { control, formState: { errors }, register, handleSubmit: hookFormHandleSubmit, } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
    // defaultValues: {
    //   role: "user",
    //   username: "user",
    //   password: "L0XuwPOdS5U",
    // :},
    defaultValues: {
      username: "admin",
      role: "admin",
      password: "JKSipm0YH",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginRequest) => authService.login(data),
  });

  const { updateSignedIn, updateUserRole } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);

      updateSignedIn(accessToken);
      updateUserRole(data.role);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao fazer login");
    }
  });

  return { control, isPending, errors, register, handleSubmit };
}
