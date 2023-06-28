# Gift.io
### An API to save information of gifts you would like to win

You can access the API Reference here: https://documenter.getpostman.com/view/28143552/2s93z9c3Hx

> In the root folder of project you can use the *Gift.io.postman_collection.json* to import the requests on your postman software.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
```

Create at root folder the `.env` file with the application port and path to save database file (sqlite), follow the `.env.example` in the root folder.

### Create database

Run prisma migration to create the database structure

```bash
$ npx prisma migrate dev
```
### Run server

Follow the scripts on the *package.json* you can run the application with the follow command

```bash
$ npm run dev
```


If an error occurs regarding the prism when trying to run the application. You can try running the command to create the prisma client (if it wasn't created with the migrations command). And try running the server again.

```bash
$ npx prisma generate
```

### Access the database
To view the database info you can use the prisma studio with the following command

```bash
$ npx prisma studio
```
---

## Application definition

### Functional requisites

- [X] Should be able to create a user;
- [ ] Should be able to auth user;
- [X] Should be able to create a gift for the user
- [X] Should be able to mark a gift as received
- [X] Should be able to edit a gift details
- [X] Should be able to remove a gift
- [X] Create API documentation

### Future features

- [ ] Improve all unit tests
- [ ] Implement errors handling
- [ ] Implement body validation
- [ ] Implement authentication middleware
- [ ] Create password crypto in database

Made with ☕ and 🤯 by [Thiego Moura](https://thiegomoura.github.io/me/)