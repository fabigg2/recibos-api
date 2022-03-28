

CREATE TABLE users (
    uid INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL
);

CREATE TABLE receipts (
    consecutive INT AUTO_INCREMENT PRIMARY KEY,
    owner VARCHAR(100) NOT NULL,
    addres VARCHAR(150),
    weight DOUBLE,
    unit_price DOUBLE,
    price DOUBLE,
    state VARCHAR(150),
    user_id INT,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP,
    CONSTRAINT fk_users FOREIGN KEY (userId)
    REFERENCES users(uid)

);
