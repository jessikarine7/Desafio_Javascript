const users = [
  { name: 'usuario 1', age: '20', email: 'usuario1@gmail.com' },
  { name: 'Usuario 2', age: 30 , email: 'usuario2@gmail.com' },
];

function searchUser (){
  return new Promise((resolve, reject) => {
    const findUser = users.find(user => 
      Object.values(user).some(value => 
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    findUser ? resolve(findUser) : reject({ message: 'Usuário não encontrado' });
  });
};

const searchValue = '30';

searchUser(users, searchValue)
  .then((result) => {
    console.log('Usuário encontrado:', result);
  })
  .catch((error ) => {
    console.error(error.message);
  })