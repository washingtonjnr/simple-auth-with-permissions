export interface Report {
  id: number;
  title: string;
  status: string;
}

export interface AdminData {
  name: string;
  email: string;
  reports: Report[];
}

export interface AdminResponse {
  message: string;
  data: AdminData;
}
