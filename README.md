# Express TypeScript TypeORM SQLite Authentication System

This project is a boilerplate for building an authentication system using Node.js, Express, TypeScript, TypeORM, SQLite, bcrypt, and JWT. It includes features for user registration, login, and JWT-based authentication.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)

## Introduction

This project demonstrates how to create a secure authentication system with TypeScript, Node.js, and Express. It uses TypeORM to interact with an SQLite database and bcrypt for hashing passwords. JWT is used for generating tokens that manage user sessions securely.

## Features

- User registration with email and password
- User login with JWT token generation
- Secure password hashing with bcrypt
- JWT-based authentication

## Technologies Used

- Node.js
- Express
- TypeScript
- TypeORM
- SQLite
- bcrypt
- JWT
- dotenv

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/lucasffa/express-ts-typeorm.git
    ```

2. Navigate to the project directory:

    ```sh
    cd express-ts-typeorm
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    JWT_SECRET=your_secret_key_here
    ```

## Usage

### Running the Development Server

To start the development server with live reloading, run:

```sh
npm run dev
```

### Building and Running in Production

To build the project and start the production server, run:

```sh
npm run build
npm start
```

## Project Structure

The project structure is as follows:

```
src/
│   app.ts              # Entry point of the application
├── config/
│   └── database.ts     # Database configuration
├── controllers/
│   └── userController.ts # User controller with registration and login logic
├── entities/
│   └── user.ts         # User entity definition
├── repositories/
│   └── userRepository.ts # User repository
├── services/
│   └── userService.ts  # User service for business logic
└── routes/
    └── userRoutes.ts   # User routes definition
```

### Environment Variables

The project requires the following environment variables:

- `JWT_SECRET`: Secret key used for signing JWT tokens.

### Endpoints

The following endpoints are available in the application:

#### Register a New User

- **URL**: `/users/register`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "email": "user@example.com",
        "password": "password123"
    }
    ```
- **Response**:
    - `201 Created`: User successfully registered.
    - `400 Bad Request`: User already exists.

#### Login a User

- **URL**: `/users/login`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
        "email": "user@example.com",
        "password": "password123"
    }
    ```
- **Response**:
    - `200 OK`: Login successful, returns JWT token.
    - `401 Unauthorized`: Invalid credentials.
