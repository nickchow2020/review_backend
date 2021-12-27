-- delete existing datbase, and create a new database

DROP DATABASE IF EXISTS animal_parts_hospitals;
CREATE DATABASE animal_parts_hospitals;

-- connect to that database
\connect animal_parts_hospitals

-- create database tables
\i database_schema.sql

-- seed parks and hospitals datas
\i database_data-seed.sql

-- delete testing database if exist or create testing database
DROP DATABASE IF EXISTS animal_parts_hospitals_test;
CREATE DATABASE animal_parts_hospitals_test;

-- connect to testing database
\connect animal_parts_hospitals_test

-- create database tables
\i database_schema.sql

--seed database test data
\i database_data_seed_test.sql
