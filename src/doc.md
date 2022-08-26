# Documentation for api boilerplate

## Packager install
1. npm i express
2. npm i body-parser
3. npm i mongoose
4. npm i bcrypt
5. npm i dotenv
6. npm i jsonwebtoken
7. npm i @hapi/joi
8. npm i -g nodemon
9. npm i cors
10. npm i swagger-jsdoc swagger-ui-express 

## All Endpoint

### Register user for token
- http:localhost:3000/api/v1/auth/register
- Method POST
- Body 
  {
     "name":"andersonp",
     "email":"andersonp@gmail.com",
     "password": "123456"
  }
- Response
    {
        "error": null,
        "data": {
            "name": "andersonp",
            "email": "andersonp@gmail.com",
            "password": "$2b$10$RZ4pZQmhdVvWJaUja2vnU.Oj5tC8EqvKjgF0OtIeUbBMAfZvT2JB.",
            "_id": "6309079242169ba380eef2b5",
            "date": "2022-08-26T17:49:06.884Z",
            "__v": 0
        }
    }

- http:localhost:3000/api/v1/auth/login
- Method POST
- Body
   {
     "email":"andersonp@gmail.com",
     "password": "123456"
   }
- Response
   {
     "error": null,
     "data": "welcome..."
   }
- Headers
   auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjE1NDE1OTYsImRhdGEiOnsibmFtZSI6ImFuZGVyc29ucCIsImlkIjoiNjMwOTA3OTI0MjE2OWJhMzgwZWVmMmI1In0sImlhdCI6MTY2MTUzNzk5Nn0.vvkgWKJ5lFMrt978DZLdhZqsw9PcIJ4lTyym-uylEaY

   