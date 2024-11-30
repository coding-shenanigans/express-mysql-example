# Express + MySQL Example

This repository provides a basic example of an Express.js app that connects to a MySQL database.

## Local MySQL with Docker

This section walks through the steps needed to set up a MySQL database locally in a docker container.

```bash
# create a local MySQL docker container
docker run -d --name local-mysql -e MYSQL_ROOT_PASSWORD=your_root_password -p 3306:3306 mysql

# shell into the MySQL container
docker exec -it local-mysql /bin/bash

# connect to the MySQL database
mysql -u root -p

# you'll be prompted for the root password used in the docker run command
```

```sql
-- set up database
CREATE DATABASE your_database_name;

USE your_database_name;

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    done BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO todos (title) VALUES ('Code some shenanigans');
```

## Run Express App

Create a `.env` file and copy the contents from the `.env.example` file. Then, replace the `DB_` values.

```bash
# .env sample values
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_root_password
DB_NAME=your_database_name
```

Start the app

```bash
# download all dependencies
npm install

# start app
npm start
```

Send a request:
http://localhost:9000/todos
