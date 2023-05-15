// let conman = {
//     title: 'Bruce',
// };

// let addPower = function (power: number) {
//     return function (hero: any) {
//         return {
//             title: hero.title,
//             power: power,
//         }
//     }
// };

// conman = addPower(7)(conman);
// console.log(conman);

let AddPower = function (power: number) {
    return function (targetClass: any) {
        return class {
            title: string = new targetClass().title;
            power: number = power;
        }
    }
}

@AddPower(7)
class CommonMan {
    title: string = 'Bruce';
}

console.log(new CommonMan().power);