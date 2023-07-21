// javascript object
const user = { id: 11, name: 'akber', job: 'actor' };
const stringified = JSON.stringfy(user);

const shop = {
    name: 'Alia store',
    address: 'Ranbir road',
    profit: 15000,
    products: ['laptop', 'pepsi', 'mobile'],
    owner: {
        name: 'alia',
        profession: 'actor'
    },
    isExpensive: false
}
const shopstringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopstringified);
const converted = JSON.parse(shopstringified);
console.log(converted);