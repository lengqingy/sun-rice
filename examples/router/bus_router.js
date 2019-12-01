/*
 * @Author: your name
 * @Date: 2019-11-26 10:47:58
 * @LastEditTime: 2019-12-01 21:57:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sun-rice/examples/router/bus_router.js
 */
'use strict'

const AddressPicker = resolve =>
  require(['../pages/address-picker'], resolve)

const routes = [
  {
    path: '/bus/address-picker',
    component: AddressPicker,
    name: 'AddressPicker',
    meta: { title: 'address-picker' }
  }
]

export default routes
