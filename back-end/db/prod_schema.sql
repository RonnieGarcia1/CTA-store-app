DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    color TEXT,
    description TEXT,
    price INTEGER,
    image TEXT
);
