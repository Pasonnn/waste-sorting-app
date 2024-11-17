# Waste Sorting App

The **Waste Sorting App** is a microservices-based application that helps users manage waste more effectively. It consists of 4 microservices (`User`, `Category`, `Challenge`, and `Item`) and a `Gateway` service to centralize API calls.

## **Architecture**

The application follows a **microservices architecture** and uses the following components:

- **User Service**: Handles user authentication, registration, and profile management.
- **Category Service**: Manages waste categories such as recyclables, organic waste, and non-recyclables.
- **Challenge Service**: Provides challenges to users to encourage sustainable waste practices.
- **Item Service**: Tracks specific waste items, their properties, and disposal methods.
- **Gateway**: Acts as a centralized API gateway to route requests to the appropriate microservice.

---

## **Microservices**

### **1. User Service**

Handles user-related functionality such as registration, login, and profile management.

#### Endpoints

| Method | Endpoint          | Description                      |
| ------ | ----------------- | -------------------------------- |
| POST   | `/users/register` | Register a new user              |
| POST   | `/users/login`    | Log in a user                    |
| GET    | `/users/profile`  | Get user profile (Authenticated) |

#### Technologies

- **Framework**: Node.js, Express
- **Database**: MongoDB

---

### **2. Category Service**

Manages categories of waste for easier classification.

#### Endpoints

| Method | Endpoint             | Description                        |
| ------ | -------------------- | ---------------------------------- |
| POST   | `/categories/create` | Create a new waste category        |
| GET    | `/categories/all`    | Get all waste categories           |
| GET    | `/categories/:id`    | Get details of a specific category |
| PUT    | `/categories/:id`    | Update a specific category         |
| DELETE | `/categories/:id`    | Delete a specific category         |

#### Technologies

- **Framework**: Node.js, Express
- **Database**: MongoDB

---

### **3. Challenge Service**

Encourages sustainable practices through challenges.

#### Endpoints

| Method | Endpoint             | Description                         |
| ------ | -------------------- | ----------------------------------- |
| POST   | `/challenges/create` | Create a new challenge              |
| GET    | `/challenges/all`    | Get all challenges                  |
| GET    | `/challenges/:id`    | Get details of a specific challenge |
| PUT    | `/challenges/:id`    | Update a specific challenge         |
| DELETE | `/challenges/:id`    | Delete a specific challenge         |

#### Technologies

- **Framework**: Node.js, Express
- **Database**: MongoDB

---

### **4. Item Service**

Tracks waste items and provides disposal instructions.

#### Endpoints

| Method | Endpoint        | Description                    |
| ------ | --------------- | ------------------------------ |
| POST   | `/items/create` | Create a new waste item        |
| GET    | `/items/all`    | Get all waste items            |
| GET    | `/items/:id`    | Get details of a specific item |
| PUT    | `/items/:id`    | Update a specific item         |
| DELETE | `/items/:id`    | Delete a specific item         |

#### Technologies

- **Framework**: Node.js, Express
- **Database**: MongoDB

---

### **Gateway Service**

The **Gateway** acts as the entry point for the app, routing requests to the appropriate microservice.

#### Routing Table

| Endpoint        | Target Microservice |
| --------------- | ------------------- |
| `/users/*`      | User Service        |
| `/categories/*` | Category Service    |
| `/challenges/*` | Challenge Service   |
| `/items/*`      | Item Service        |

#### Technologies

- **Framework**: Node.js, Express
