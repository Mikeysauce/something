CREATE DATABASE pern;

CREATE TABLE users (
    id uuid DEFAULT uuid_generate_v4 (),
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    password TEXT NOT NULL,
    phone VARCHAR,
    address VARCHAR,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id)
);

INSERT INTO users (first_name, last_name, email, password, phone, address) VALUES (
  'Michael',
  'Shelton',
  'the.mikex@gmazil.com',
  crypt('lolpassword', gen_salt('bf')),
  '01333333333',
  '40 sandpiper'
);