import { useServices } from "../../app/hooks/useService";
// Components
import { LaunchScreen } from "../../shared/components/LaunchScreen";
// Controller
import { useAdminController } from "./useAdminController";

export const Admin = () => {
  const { userService } = useServices();
  const { user, isLoading, isSuccess } = useAdminController(userService);

  if (isLoading) return <LaunchScreen isLoading />;

  return (
    <div className="w-full flex flex-col items-center justify-center my-12 px-4">
      {!isSuccess && (
        <h1 className="text-xl font-bold text-center text-red-500 justify-center">
          Erro ao buscar os dados do administrador!
        </h1>
      )}

      {isSuccess && user && (
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-800">
            {user.data.name}
          </h1>

          <p className="text-lg text-center text-gray-600">{user.data.email}</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700">Relatórios</h2>
            <ul className="mt-4 space-y-4">
              {user.data.reports.map((report) => (
                <li
                  key={report.id}
                  className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  <span className="text-lg text-gray-700">{report.title}</span>
                  <span
                    className={`text-lg ${
                      report.status === "Completed"
                        ? "text-green-800"
                        : "text-yellow-800"
                    }`}
                  >
                    {report.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
