-- creo il mio databae 
CREATE DATABASE anime_db;

--tabella principale

CREATE TABLE anime_details (
    anime_id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(50),
    status VARCHAR(50),
    score FLOAT,
    episodes INT
);