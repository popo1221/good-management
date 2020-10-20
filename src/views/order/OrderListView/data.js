import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    type: '定制', // custom - 定制; normal - 普通
    product: {
      id: uuid(),
      name: '这是一块宝地'
    }, // 商品的ID
    productExtension: '这是一个定制的商品', // 定制商品的备注
    remark: '只收了钱', // 备注
    price: 20000, // 价格
    customer: {
      id: uuid(),
      name: '张三'
    }, // 顾客
    paidAmount: 1000, // 已付金额
    createdAt: 1522702800000,
    status: '已付定金', //状态： paidDeposit|paidAll 已付定金，已付全款
    history: [
      {
        description:'支付定金 1000',
        createdAt: 1522702800000,
      },
      {
        description:'支付余款 20000',
        createdAt: 1522702800000,
      }
    ]
  },
  {
    id: uuid(),
    type: '普通', // custom - 定制; normal - 普通
    product: {
      id: uuid(),
      name: '这是一块宝地'
    }, // 商品的ID
    //productExtension: '这是一个定制的商品', // 定制商品的备注
    remark: '已经付了', // 备注
    price: 20000, // 价格
    customer: {
      id: uuid(),
      name: '张三'
    }, // 顾客
    paidAmount: 20000, // 已付金额
    createdAt: 1522702800000,
    status: '已付全款', //状态： paidDeposit|paidAll 已付定金，已付全款
    history: [
      {
        description:'支付金额 20000',
        createdAt: 1522702800000,
      }
    ]
  },
];
