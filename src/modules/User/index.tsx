import { useServices } from "../../app/hooks/useService";
import { LaunchScreen } from "../../shared/components/LaunchScreen";
import { useUserController } from "./useUserController";

export const User = () => {
  const { userService } = useServices();
  //
  const { user, isLoading, isSuccess } = useUserController(userService);

  if (isLoading) return <LaunchScreen isLoading />;

  return (
    <div className="w-full flex flex-col items-center justify-center my-12 px-4">
      {!isSuccess && (
        <h1 className="text-xl font-bold text-center text-red-500 justify-center">
          Erro ao buscar os dados do usuário!
        </h1>
      )}

      {isSuccess && user && (
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-800">
            {user.data.name}
          </h1>

          <p className="text-lg text-center text-gray-600">{user.data.email}</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700">Compras</h2>
            <ul className="mt-4 space-y-4">
              {user.data.purchases.map((purchase) => (
                <li
                  key={purchase.id}
                  className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  <span className="text-lg text-gray-700">{purchase.item}</span>
                  <span className="text-lg text-gray-500">{`R$ ${purchase.price.toFixed(
                    2
                  )}`}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
