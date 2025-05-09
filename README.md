# User Management API

A RESTful API for user management built with Express.js, featuring user registration, authentication, and CRUD operations.

## Features

- User Registration
- User Authentication (Login)
- Add New Users
- Update User Information
- Delete Users
- JWT-based Authentication
- Protected Routes

## Tech Stack

- Node.js
- Express.js
- bcryptjs (Password Hashing)
- jsonwebtoken (JWT Authentication)
- cors (Cross-Origin Resource Sharing)
- dotenv (Environment Variables)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/nicoleelieza/user-management-api.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```
PORT=3000
JWT_SECRET=your_super_secret_key_123
```

4. Start the server:
```bash
npm run dev
```

## API Endpoints

### Public Routes

1. **Register a User**
   - POST `/api/register`
   - Request Body:
   ```json
   {
     "username": "testuser",
     "password": "password123",
     "role": "user"
   }
   ```

2. **Login**
   - POST `/api/login`
   - Request Body:
   ```json
   {
     "username": "testuser",
     "password": "password123"
   }
   ```

### Protected Routes (Require JWT Token)

3. **Add User**
   - POST `/api/users`
   - Headers: `Authorization: Bearer <token>`
   - Request Body:
   ```json
   {
     "username": "newuser",
     "password": "newpassword",
     "role": "admin"
   }
   ```

4. **Update User**
   - PUT `/api/users/:id`
   - Headers: `Authorization: Bearer <token>`
   - Request Body:
   ```json
   {
     "username": "updatedusername",
     "role": "admin"
   }
   ```

5. **Delete User**
   - DELETE `/api/users/:id`
   - Headers: `Authorization: Bearer <token>`

## Testing with Postman

1. Import the API collection into Postman
2. Start the server: `npm run dev`
3. Test endpoints in this order:
   - Register a user
   - Login to get JWT token
   - Use the token to test protected routes

## Project Structure

```
/user-management-api
  /controllers
    userController.js
  /models
    user.js
  /routes
    userRoutes.js
  /middleware
    auth.js
  app.js
  package.json
  .env
  .gitignore
```

## Error Handling

The API includes error handling for:
- Invalid credentials
- Missing or invalid tokens
- User not found
- Invalid request data

## Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected routes
- Environment variables for sensitive data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.