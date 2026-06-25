SELECT * FROM world_food;

SELECT country FROM world_food;

SELECT
  country,
  wheat_production
FROM world_food;

SELECT rice_production
FROM world_food
WHERE country = 'United States';

SELECT country
FROM world_food
WHERE wheat_production > 20;

SELECT country
FROM world_food
WHERE country LIKE 'U%';

SELECT country
FROM world_food
WHERE country LIKE '%a';
