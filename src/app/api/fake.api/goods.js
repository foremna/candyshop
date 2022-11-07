import { tastesObject as tastes } from './category'

const goods = [
  {
    id: 1,
    name: 'Cucumber pedant',
    img: require('../../../assets/images/1.jpg'),
    category: tastes.iceCream,
    price: 10
  },
  {
    id: 2,
    name: 'Pocket Port',
    img: require('../../../assets/images/2.jpg'),
    category: tastes.iceCream,
    price: 13
  },
  {
    id: 3,
    name: 'Milk pig',
    img: require('../../../assets/images/3.jpg'),
    category: tastes.iceCream,
    price: 17
  },
  {
    id: 4,
    name: 'Papricola Italiano',
    img: require('../../../assets/images/4.jpg'),
    category: tastes.marmalade,
    price: 21
  },
  {
    id: 5,
    name: 'Chilean badass',
    img: require('../../../assets/images/5.jpg'),
    category: tastes.marmalade,
    price: 24
  },
  {
    id: 6,
    name: 'Deadpan',
    img: require('../../../assets/images/6.jpg'),
    category: tastes.marmalade,
    price: 26
  },
  {
    id: 7,
    name: 'Peanuts vs Grapes',
    img: require('../../../assets/images/7.jpg'),
    category: tastes.marshmallow,
    price: 32
  },
  {
    id: 8,
    name: 'Innocent wine',
    img: require('../../../assets/images/8.jpg'),
    category: tastes.marshmallow,
    price: 30
  },
  {
    id: 9,
    name: 'Endless explosion',
    img: require('../../../assets/images/9.jpg'),
    category: tastes.marshmallow,
    price: 38
  },
  {
    id: 10,
    name: 'Celery soul',
    img: require('../../../assets/images/10.jpg'),
    category: tastes.lemonade,
    price: 42
  },
  {
    id: 11,
    name: 'Ninja-strike wasabi',
    img: require('../../../assets/images/11.jpg'),
    category: tastes.lemonade,
    price: 45
  },
  {
    id: 12,
    name: 'Mushroom shake',
    img: require('../../../assets/images/12.jpg'),
    category: tastes.lemonade,
    price: 47
  },
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(goods)
    }, 2000)
  })

const update = (id, data) =>
  new Promise((resolve) => {
    const good = JSON.parse(localStorage.getItem('good'))
    const goodIndex = good.findIndex((u) => u.id === id)
    good[goodIndex] = { ...good[goodIndex], ...data }
    localStorage.setItem('good', JSON.stringify(good))
    resolve(good[goodIndex])
  })

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(goods.find((taste) => taste.id.toString() === id))
    }, 1000)
  })

export default {
  fetchAll,
  update,
  getById
}