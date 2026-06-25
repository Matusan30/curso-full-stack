CREATE TABLE visited_countries (
	id SERIAL PRIMARY KEY,
	country_code CHAR(2) NOT NULL UNIQUE
);

CREATE TABLE countries (
	id SERIAL PRIMARY KEY,
	country_code CHAR(2),
	country_name VARCHAR(100)
);
