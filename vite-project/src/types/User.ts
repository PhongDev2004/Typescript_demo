export type hairType = {
  color: string
  type: string
}
export type addressType = {
  address: string
  city: string
  coordinates: {
    lat: number
    lng: number
  }
  postalCode: string
  state: string
}
export type companyType = {
  address: addressType
  department: string
  name: string
  title: string
}
export type cryptoType = {
  coin: string
  wallet: string
  network: string
}
export type bankType = {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}
export type User = {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: 'male' | 'female' | 'other' 
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height?: number
  weight?: number
  eyeColor?: string
  hair?: hairType
  domain: string
  ip: string
  address: addressType
  macAddress: string
  university: string
  bank: bankType
  company: companyType
  ein: string
  ssn: string
  userAgent: string
  crypto: cryptoType
}