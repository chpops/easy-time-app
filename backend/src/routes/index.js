const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const Todo = require('../models/Todo');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    setTimeout(() => {
      res.send('Hi! Your Backend Is UP Now! ^^ Good Luck! <3');
    }, 2000);
});

router.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  const n = await Todo.find().count();
  if(todos){
    for(i = n; i>=0; i--){
      alt = todos[i];
    }
    setTimeout(() => {
      return res.status(200).json({ todos });
    }, 5000);
  } else {
    setTimeout(() => {
      return res.status(404).send('Список Todo пустой!');
    }, 3000);
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});

    if (!user) 
    setTimeout(() => {
      return res.status(404).send('Пользователь с таким почтовым адресом не найден! Попробуйте изменить email адрес.');
    }, 2500);

    if (user.password !== password) 
    setTimeout(() => {
      return res.status(401).send('Неправильный пароль! Попробуйте использовать другой пароль.');
    }, 2500);

		const token = jwt.sign({_id: user._id, email: user.email, password: user.password, role: user.role }, '0!Wh1_JwH2o3z', {expiresIn: 60 * 60});

    if(token){
      setTimeout(() => {
      return res.status(200).json({
        token: token
      });
    }, 3000);
    } else{
      console.log('Непредвиденная ошибка при генерации JWT токена! Текущий токен: ' + token);
    }
});

router.post('/registration', async (req, res) => {
  const { email, password, confirmpassword} = req.body;
  if(password == confirmpassword){
    const user = await User.findOne({email: email});
  if (user){
    setTimeout(() => {
      res.status(409).send('Такая электронная почта уже занята. Попробуйте использовать другой email адресс для регистрации!');
    }, 2500);
  } else{
      const user = new User({
        email: email,
        password: password,
        role: 'USER'
      })

      await user.save();
      setTimeout(() => {

        res.status(201).json(user) ;
      }, 2000);
  }
  }
  else{
    res.status(500).send('Подтверждение пароля отличается от пароля, попробуйте ещё раз');
  }  
})

module.exports = router;