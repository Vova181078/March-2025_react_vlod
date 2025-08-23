import type {Company} from "./Company.ts";
import type {Address} from "./Address.ts";


export interface IUsersJson {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}