# User Service

The **User Service** handles user-related functionality, including registration, login, and profile management.

## **Endpoints**

| Method | Endpoint          | Description                      |
| ------ | ----------------- | -------------------------------- |
| POST   | `/users/register` | Register a new user              |
| POST   | `/users/login`    | Log in a user                    |
| GET    | `/users/profile`  | Get user profile (Authenticated) |

## **Technologies**

- **Framework**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
