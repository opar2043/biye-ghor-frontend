import { Division } from "../app/constants/locationData"

type personType = {
    _id: string,
    name: string,
    number: string,
    adress: string,
    age: number,
    gender: string,
    color: string,
    hairColor: string,
    eyeColor: string,
    education: string,
    appoionmentAdress: string,
    isSeen: boolean,
    district: string,
    division: string,
    isApprove: boolean,
    images?: string[],
    userEmail?: string

}

export default personType




export type UserType = {
    _id: string,
    name: string,
    email: string,
    role: string
}

