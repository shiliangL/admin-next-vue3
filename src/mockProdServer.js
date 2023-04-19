// import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import { createProdMockServer } from 'vite-plugin-mock/client'
import userModule from '../mock/user'
import tableModule from '../mock/table'

export function setupProdMockServer () {
  createProdMockServer([
    ...userModule,
    ...tableModule
  ])
}
