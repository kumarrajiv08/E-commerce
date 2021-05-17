import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456',10),
    isAdmin: true
  },
  {
    name: 'Rajiv Kumar',
    email: 'Rajiv@example.com',
    password: bcrypt.hashSync('123456',10),

  },
  {
    name: 'Ethan Hunt',
    email: 'Ethan@example.com',
    password: bcrypt.hashSync('123456',10),

  },
]

export default users
