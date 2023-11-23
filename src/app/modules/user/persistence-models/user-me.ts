export interface IUserMePersistenceModel {
  "id": number
  "name": string,
  "photo": string | null,
  "email": string,
  "role": {
    "id": number,
    "name": string,
    "slug": string
  }
}
