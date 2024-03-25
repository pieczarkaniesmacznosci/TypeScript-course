//TS representation of object type
// const person: {
//     name: string;
//     age: number;
// } = {
const person ={
    name: 'zz',
    age: 30,
    hobbies: ['sports', 'cooking']
}

//let favoriteActivities:string[];
//let favoriteActivities:any[];
// favoriteActivities = ['swimming',1]

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    //console.log(hobby.map()) error as type of nobby is string not array
}


console.log(person.name)