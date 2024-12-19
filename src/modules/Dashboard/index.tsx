import { useDashboardController } from "./useDashboardController";

export function Dashboard() {
  const { goToAdmin, goToUser } = useDashboardController();

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 my-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Bem-vindo ao Tivit Dashboard!
      </h1>

      <p className="text-center text-gray-600 mb-6">
        Escolha um dos painéis abaixo para acessar:
      </p>

      <div className="flex flex-col justify-center items-center space-y-4">
        <button
          onClick={goToAdmin}
          className="w-full max-w-[280px] px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Página do administrador
        </button>

        <button
          onClick={goToUser}
          className="w-full max-w-[280px] px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Página do usuário
        </button>
      </div>
    </div>
  );
}
