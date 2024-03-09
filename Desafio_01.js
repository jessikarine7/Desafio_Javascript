function searchUser (users, searchValue){
  return new Promise((resolve, reject) => {
    const findUser = users.find(user => 
      Object.values(user).some(value => 
        String(value).includes(searchValue)
      )
    );
    findUser ? resolve(findUser) : reject({ message: 'Usuário não encontrado' });
  });
};

const users = [
  { name: 'usuario 1', age: 20 , email: 'usuario1@gmail.com' },
  { name: 'usuario 2', age: 30 , email: 'usuario2@gmail.com' },
  { name: 'usuario 3', age: 30 , email: 'usuario3@gmail.com' },
  { name: 'usuario 4', age: 40 , email: 'usuario4@gmail.com' },
];

searchUser(users, 50)
  .then((result) => {
    console.log('Usuário encontrado:', result);
  })
  .catch((error ) => {
    console.error(error.message);
  })