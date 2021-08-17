# Repo-Provas (back-end)
I created this website to help students (and for other students to help me) to get better grades! By sharing the tests and searching the ones you need. 🤓📚

![Peek repoprovas](https://user-images.githubusercontent.com/81389119/129644788-5a35f509-c16d-4127-8192-897f0583db0f.gif)

## About
This is a web apllication built to help students with teachers that are hard to understand. You can send a test to the website, you can see all the tests of a certain subject or a teacher.
Below are the implemented features:

* Send tests to the website
* Search tests by the teacher or the subject
* List of teachers and their tests
* List of subjects and their tests
* As you click on the selected test, a new window opens and shows the test

## Technologies
The following tools and frameworks were used in the construction of the project:

* Node.js
* Express
* PostgreSQL
* Jest
* Typescript


## How to Run
1. Clone this repository
2. Clone the front-end repository at https://github.com/LiaXimenes/repo-provas-front
3. Follow instructions to run front-end https://github.com/LiaXimenes/repo-provas-front
4. Create a database using the ``dump.sql`` file inside the ``dump``
- 4.1 Open your terminal in the same path as the ``dump.sql`` file is located.
- 4.2 Access PostgreSQL
```bash
sudo su postgres
psql postgres
```
- 4.3 Create a database
```bash
CREATE DATABASE [database_name];
```
- 4.4 Then, quit psql and import the dump.sql file to your database
```bash
\q
psql [database_name] < dump.sql
```
- 4.5 Finally, you can connect your terminal on your database!
```bash
\c [database_name]
```
5. Install dependencies
```bash
npm i
```
6. Run the back-end with
```bash
npm run dev
```
