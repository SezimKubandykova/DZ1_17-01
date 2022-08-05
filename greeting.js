const name = prompt('Введите ваше имя')
alert('Добро пожаловать, ' + name + '!')
const arr1 = ['Mia', 'Jack', 'Alex']
const arr2 = [1, 2, 45, 89, 5, 14]
if (arr1.length > arr2.length) {
  console.log('arr1 больше, чем arr2')
} else if (arr1.length < arr2.length) {
  console.log('arr1 меньше, чем arr2')
} else {
  console.log('arr1 равен arr2')
}