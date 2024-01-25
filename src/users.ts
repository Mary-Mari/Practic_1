
interface User {   //Здесь создается интерфейс User, который определяет структуру объектов пользователя
    userid: string;
    name: string;
    gender: string;
}

// создание массива пользователя
const usersArray: User [] = [

    {
     userid:' 127e4567-e89b-12d3-a458-426614174000',
     name: 'John',
     gender: 'man'
    },
    
    {
     userid: '127e4567-e89a-12f3-a458-327395154000',
     name: 'Anna',
     gender: 'woman'
    }  
    
    ];

    export default usersArray; //экспортирует массив usersArray