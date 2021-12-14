import { atom } from 'recoil'

export const count = atom({
  key: 'counterState',
  default: 0,
})