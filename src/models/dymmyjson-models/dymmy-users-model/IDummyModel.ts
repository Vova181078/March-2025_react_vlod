import type { Hair } from "./Hair";
import type {Address} from "./Address.ts";
import type {Bank} from "./Bank.ts";
import type { Company } from "./Company.ts";


export interface IUsersDummy {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}

export interface ResponseDummyUsers {
  users: IUsersDummy[];
    total: number;
    skip: number;
    limit: number;

}