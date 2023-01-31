To run this project locally:
1. Run `npm install`.
2. Create a `.env` file and add the content of the `.env.sample` file and the relevant values.
3. Use `npm start` to run the application (please make sure the database is running before making requests).
4. Use `npm test` to run the tests (please make sure the application is running).

Database:

Install requirements:
 - docker (https://docs.docker.com/get-docker/)

To initialize this project, run `docker compose up` from the root of this project. This will build and seed the database. By default the database runs on port `5432` and is also exposed on `5432`, if you want to change this you can update `docker-compose.yml`.