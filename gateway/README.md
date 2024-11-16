# Gateway

This is the API Gateway for routing requests to microservices.

## Features

- Routes requests to category, challenge, item, and user services.
- Implements JWT-based authentication.
- Centralized entry point for all client requests.

## Environment Variables

- `PORT`: Gateway port (default: 4000)
- `JWT_SECRET`: Secret key for JWT token validation.

## Run the Gateway

### Local

1. Install dependencies: `npm install`
2. Start the server: `npm start`

### Docker

1. Build the image: `docker build -t gateway .`
2. Run the container: `docker run -p 4000:4000 gateway`

## Services

- Category Service: `http://localhost:4001`
- Challenge Service: `http://localhost:4002`
- Item Service: `http://localhost:4003`
- User Service: `http://localhost:4004`
