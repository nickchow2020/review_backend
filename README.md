# Getting Started with Dog Park&Hospital Review BACKEND


## Before Start
1. download the repository from github 
2. run npm install 
3. run seed file with psql, seed file name "park_hospital.sql"
   1. example: psql <  park_hospital.sql
   
4. run nodemon server.js

## Available Scripts

In the project directory, you can run:

### `run nodemon server.js`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


# Dog Park&Hospital Review App
this application is for dog lover, who like to take care of them, having fun with them. User able to add any comments and pictures under the existing parks and hospitals. 

## Installation
```bash
npm install 
```

## Database Structure
the database have 8 tables,users,counties,cities,dog_place_type,dog_place_detail,review_comments,dog_place_image,and comment_likes.

```sql
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
      zipcode TEXT NOT NULL,
      lat FLOAT NOT NULL,
      lng FLOAT NOT NULL
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

   CREATE TABLE comment_likes(
      comment_id INTEGER REFERENCES review_comments ON DELETE CASCADE,
      likes INTEGER NOT NULL,
      dislikes INTEGER NOT NULL
   );
```
![database1](https://drive.google.com/file/d/1TPArmCj6PWV8si_cFb9JmNNF9ZzmwIHd/view?usp=sharing)
![database2](https://drive.google.com/file/d/1P59G4eFGPEBWOsQoq0VEsIH8nzje13bo/view?usp=sharing)

## Testing
to run the test simply with the following command
```bash
npm test 
```