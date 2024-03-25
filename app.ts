const person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number,string];//tuple type - adds clarity of what type is expected.
} ={
    name: 'zz',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2,'author']
}

person.role.push['admin']; // push works - its exception
//person.role[1] = 10; // it is allowed without explicit tuple type definition in object because without it its only array of either string or number (string | number)[]
//person.role = [0,'sadsa', 'a']// error
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}


console.log(person.name)