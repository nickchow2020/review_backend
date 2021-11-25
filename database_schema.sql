CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(28),
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL CHECK (position('@' IN email) > 1),
    is_admin BOOLEAN NOT NULL DEFAULT FALSE,
    avatar_url TEXT NOT  NULL DEFAULT 'local'
);

CREATE TABLE counties (
    id SERIAL PRIMARY KEY,
    county_name TEXT NOT NULL,
    state TEXT NOT NULL
);

CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    city TEXT NOT NULL,
    county INTEGER REFERENCES counties ON DELETE CASCADE
);

CREATE TABLE dog_place_type (
    place_type VARCHAR(25) PRIMARY KEY
);

CREATE TABLE dog_place_detail (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    address TEXT NOT NULL,
    description TEXT NOT NULL,
    phone TEXT NOT NULL,
    city INTEGER REFERENCES cities ON DELETE CASCADE,
    place_type TEXT REFERENCES dog_place_type on DELETE CASCADE,
    zipcode TEXT NOT NULL
);

CREATE TABLE review_comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users ON DELETE CASCADE,
    dog_place_id INTEGER REFERENCES dog_place_detail ON DELETE CASCADE,
    score INTEGER NOT NULL,
    comment TEXT NOT NULL
);

CREATE TABLE dog_place_image(
    id SERIAL PRIMARY KEY,
    place_id INTEGER REFERENCES dog_place_detail ON DELETE CASCADE,
    image_url TEXT NOT NULL
);