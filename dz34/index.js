1
// В массив const brandsArr = ['google', 'apple', 'microsoft'] добавьте строки 'xiaomi', 'huawei', 'oneplus'
// Для сохранения новых элементов используйте как минимум два разных способа, 
// экспериментируйте и постарайтесь понять разницу между разными способами. Выведите результаты всех найденных способов в консоль.

// const brandsArr = ['google', 'apple', 'microsoft'];
// console.log(brandsArr);

// const NewbransArr = brandsArr.splice( 0,0,'xiaomi', 'huawei', 'oneplus');
// console.log(brandsArr);


// Создайте массив имен и с добавьте в конец массива новое имя использую prompt, 
// после таким же образом добавляем второе имя, только уже в начало массива



let names = ['hgth','byby', 'kyky'];

let newName = prompt("Введите новое имя для добавления в конец массива:");
names.push(newName);

let newNameStart = prompt("Введите новое имя для добавления в начало массива:");
names.unshift(newNameStart);

console.log("Массив имен после добавления в конец и в начало:", names);



// let dates = ["01.03.2024", "03.03.2026", "17.02.2024"];
// console.log(dates);
//  let firstfdates = dates.shift();  //извлекает  первый элемент из массива




// 3
// У вас есть массив colors, содержащий цвета. Используйте метод splice,
//  чтобы удалить второй элемент массива и затем добавить новый элемент "green". Выведите обновленный массив в консоль.
// let colors = ['red', 'orange', 'blue', 'yellow'];
// console.log(colors);

// let Newcolors = colors.splice(1, 1, 'green');
// console.log(Newcolors, colors);


// 4
// // У вас есть массив numbers, содержащий числа от 1 до 10. Используйте метод slice, 
// // чтобы получить подмассив, содержащий элементы с пятого по восьмой включительно. Выведите полученный подмассив в консоль.

// let num = [1,2,3,4,5,6,7,8,9,10];
// console.log(num);

// let newnum=num.slice(4,8);
// console.log(newnum);