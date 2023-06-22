# Influence Node Interview Kit

This project will serve as the base for the project you will build during your
technical interview. It consists of a node.js project with all of its source
code in `src/app.js`, as well as a `Dockerfile` to build the app inside a container.
There is also a `docker-compose.yaml` file, which will spawn  a container for
the app, as well as a **Postgres Database**

## Prerequisites
1. **Install Docker Compose:** Use any method of your choosing, but genrally installing Docker Desktop is the easiest: https://docs.docker.com/compose/install/
2. **Install node.js and npm:** These two programs come bundled together in the official installer. It is recommended to have the LTS release on your computer https://nodejs.org/en/download

NOTE: Docker desktop is [free for individuals](https://docs.docker.com/subscription/desktop-license/#:~:text=Docker%20Desktop%20is%20free%20for,also%20required%20for%20government%20entities.)


## Launching the App
To start the project, run `docker compose up` in a
terminal. This will ensure that all containers have been freshly built and
launch the app. All containers can be shut down with with `Ctrl + C` in the
terminal used to launch it.

Ports 8080 and 5432 will need to be available on your local machine for the app to launch properly.

## Verifying the App Works
Make a GET request using a REST client of your choice (hint hint, you will need
one) to `http://localhost:8080/hello_db`. This endpoint will respond with a
payload of `Database connected!` if the app can contact the postgres database.


## Working with this App
Now that the app works, you should know a few things about how to build on top of it for the interview process

#### Source Code Modifications
As configured in `docker-compose.yaml`, this app uses **nodemon** to search for code changes inside the project. When a file changes, node.js will be relaunched.

*You will not need to take any action yourself to run changed code*
#### Installing Packages
Should you decide to use a package not already installed in this project, you can do so using npm from inside the project directory

**You will need to rebuild your app:**

Start by using `Ctrl-C` in the terminal where you launched docker compose, and then run `docker compose build && docker compose up` to launch your app with your new packages

#### Connecting to the Database With Other Tools
This configuration of docker-compose exposes the database locally on port 5432. If you use the `psql` command line utility, you can connect with this command:
`psql postgres://interviewapp:pass@localhost/interview`

Or `pgcli postgres://interviewapp:pass@localhost/interview` if you use `pgcli`

For any other tools, you should know these connection details:
 - user: interviewapp
 - password: pass
 - dbname: interview