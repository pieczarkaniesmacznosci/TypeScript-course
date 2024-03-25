enum Role{
    ADMIN, READ_ONLY, AUTHOR
}

const person ={
    name: 'zz',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role:Role.ADMIN
}

// person.role.push['admin']; // push works - its exception
//person.role[1] = 10; // it is allowed without explicit tuple type definition in object because without it its only array of either string or number (string | number)[]
//person.role = [0,'worker', 'a']// error
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

if(person.role === Role.ADMIN){
    console.log('its admin')
}

console.log(person.name)