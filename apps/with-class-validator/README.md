# with-class-validator

This app demonstrates how to use `class-validator` with Express. The following steps will guide you through running the application and testing the API with both valid and invalid data using `curl`.

## Prerequisites

- Node.js and npm installed
- Nx workspace set up
- `curl` installed (available by default on most Unix-like systems)
- Optionally, `jq` for pretty-printing JSON responses (see instructions below)

## How to Run the Application

1. Clone the repository and navigate to the root directory of your project.
2. Install the dependencies:
    
    ```bash
    npm install
    ```
    
3. Serve the `with-class-validator` application:
    
    ```bash
    nx serve with-class-validator
    ```
    
4. The application should now be running on `http://localhost:3333`.

## Testing the Application

### Valid Data Example

Use the following `curl` command to send valid data to the `sign-up` endpoint:

```bash
curl --request POST \
  --url http://localhost:3333/auth/sign-up \
  --header 'Content-Type: application/json' \
  --data '{
  "username": "john",
  "email": "john@example.com",
  "password": "secret1234"
}'
```

### Expected Response (Valid Data):

```json

{
  "message": "User registered successfully",
  "data": {
    "username": "john",
    "email": "john@example.com"
  }
}
```

### Invalid Data Example

Now, try sending invalid data (e.g., an invalid email and a short password):

```bash

curl --request POST \
  --url http://localhost:3333/auth/sign-up \
  --header 'Content-Type: application/json' \
  --data '{
  "username": "j",
  "email": "not-an-email",
  "password": "short"
}'
```

Expected Response (Invalid Data):

```json
{
  "message": "Validation failed",
  "errors": [
    {
      "field": "username",
      "issues": ["username must be longer than or equal to 2 characters"]
    },
    {
      "field": "email",
      "issues": ["email must be an email"]
    },
    {
      "field": "password",
      "issues": ["password must be longer than or equal to 8 characters"]
    }
  ]
}
```

To make the JSON response easier to read, you can use `jq`, a command-line tool that formats JSON.

### Example with Pretty-Printed JSON:

```bash
curl --request POST \
  --url http://localhost:3333/auth/sign-up \
  --header 'Content-Type: application/json' \
  --data '{
  "username": "john",
  "email": "john@example.com",
  "password": "secret1234"
}' | jq
```

This will output the JSON in a more readable format:

```json
{
  "message": "User registered successfully",
  "data": {
    "username": "john",
    "email": "john@example.com"
  }
}
```