export const tastesObject = {
  iceCream: { id: 13, name: 'Ice cream', value: 'ice cream' },
  marmalade: { id: 14, name: 'Marmalade', value: 'marmalade' },
  marshmallow: { id: 15, name: 'Marshmallow', value: 'marshmallow' },
  lemonade: { id: 16, name: 'Lemonade', value: 'lemonade' },
}

export const tastes = [
  { id: 13, name: 'Ice cream', value: 'ice cream' },
  { id: 14, name: 'Marmalade', value: 'marmalade' },
  { id: 15, name: 'Marshmallow', value: 'marshmallow' },
  { id: 16, name: 'Lemonade', value: 'lemonade' },
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(tastes)
    }, 2000)
  })

export default {
  fetchAll
}