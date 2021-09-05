const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const Todo = require('../models/Todo');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('Hi! Your Backend Is UP Now! ^^ Good Luck! <3')
});

router.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  const n = await Todo.find().count();
  if(todos){
    for(i = n; i>=0; i--){
      alt = todos[i];
    }
    return res.status(200).json({ todos });
  } else {
    return res.status(404).send('Список Todo пустой!');
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

router.post('/registration', async (req, res) => {
  const { email, password, confirmpassword} = req.body;
  if(password == confirmpassword){
    const user = await User.findOne({email: email});
  if (user){
    res.status(409).send('Такая электронная почта уже занята. Попробуйте использовать другой email адресс для регистрации!');
  } else{
      const user = new User({
        email: email,
        password: password,
        role: 'USER'
      })

      await user.save()
      res.status(201).json(user) 
  }
  }
  else{
    res.status(500).send('Подтверждение пароля отличается от пароля, попробуйте ещё раз');
  }  
})

module.exports = router;