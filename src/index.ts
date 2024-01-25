import usersArray from './users';
import userInfo from './userInfo'; 




// Определение интерфейса для результата
interface UserJobPosition {
    name: string;
    position: string;
    age: number;
    gender: string;
}

// Функция для преобразования массива пользователей
function getUsersJobPositions(users: any[]): UserJobPosition[] {
    return users.map(user => ({
      name: user.name,
      position: user.position, 
      age: user.age,
      gender: user.gender,
    }));
  }

// Создание переменной usersPositions и присвоение ей результатов вызова функции
const usersPositions: UserJobPosition[] = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions);