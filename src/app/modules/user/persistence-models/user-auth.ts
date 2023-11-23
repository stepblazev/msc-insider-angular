export interface IUserAuthPersistenceModel {
  id: number;
  name: string;
  email: string;
  photo: string | null;
  role: {
    id: number;
    name: string;
    slug: string;
  };
}
