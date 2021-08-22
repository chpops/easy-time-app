const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const Todo = require('../models/Todo');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('Hi! Your Backend Is UP Now! ^^ Good Luck! <3')
});

router.get('/todo', async (req, res) => {
  const todos = await Todo.find();
  const n = await Todo.find().count();
  
  if(todos){
    for(i = n; i>=0; i--){
      alt = todos[i];
      console.log(alt);
    }
    return res.status(200).json({todos});
  } 
  else {
    return res.status(404).send('Список ToDo пустой!');
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});

    if (!user) 
      return res.status(404).send('Пользователь с таким почтовым адресом не найден! Попробуйте изменить email адрес.');

    if (user.password !== password) 
      return res.status(401).send('Неправильный пароль! Попробуйте использовать другой пароль.');

		const token = jwt.sign({_id: user._id, email: user.email, password: user.password, role: user.role }, '0!Wh1_JwH2o3z', {expiresIn: 60 * 60});

    if(token){
      return res.status(200).json({
        token: token
      });
    } else{
      console.log('Непредвиденная ошибка при генерации JWT токена! Текущий токен: ' + token);
    }
});

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({email: email});
  if (user){
    res.status(409).json({
      message: 'Такая электронная почта уже занята. Попробуйте использовать другой email адресс для регистрации!'
    })
  } else{
      const user = new User({
        email: email,
        password: password,
        role: 'USER'
      })

      try{
        await user.save()
        res.status(201).json(user)
      } catch(e) {
        console.log(e.message)
      }
  }
})

module.exports = router;