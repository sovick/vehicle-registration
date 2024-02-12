node version : 20.9.0

# Steps to Execute the Project

1. Clone the Project
2. copy `.env.example to .env` and update the details
3. Create a database on mysql server.
4. run `npm install`
5. run `npm run build`
6. run `npx typeorm migration:run -d ./dist/app/db/index.js` to add the migrations
7. run `npm run start` to start the server.
