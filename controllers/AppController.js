// Access Key is recognized, user ids checked.
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET usdtflash.cc/api/users
exports.getUsers = (req, res) => {
  res.json(users);
};

// GET usdtflash.cc/api/users/:id
exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
};

// POST usdtflash.cc/api/users
exports.createUser = (req, res) => {
  // Example: assuming JSON body with { name, email }
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// PUT usdtflash.cc/api/users/:id
exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const updateUser = req.body;
  const existingUser = users.find(user => user.id === userId);
  if (!existingUser) {
    return res.status(404).json({ error: 'User not found' });
  }
  existingUser.name = updateUser.name || existingUser.name;
  existingUser.email = updateUser.email || existingUser.email;
  res.json(existingUser);
};

// DELETE usdtflash.cc/api/users/:id
exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  users.splice(index, 1);
  res.status(204).end();
};
