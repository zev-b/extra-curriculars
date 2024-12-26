## Connecting to the Database:
__Connect to PostgreSQL using psql:__
```sh
psql -U <username> -d <database_name> -h <host> -p <port>
```
__Learn to use GUI tools like pgAdmin for a visual database interface.__

## Basic Commands:
__Create and drop databases:__
```sql
CREATE DATABASE mydb;
DROP DATABASE mydb;
```
__Connect to a database:__
```bash
\c mydb
```
__List databases:__
```bash
\l
```
__Quit psql:__
```bash
\q
```

## PostgreSQL Data Types
__Understand PostgreSQL's data types:__

### *Numeric:* `INTEGER`, `BIGINT`, `SERIAL`, `NUMERIC`

### *Character:* `VARCHAR(n)`, `CHAR(n)`, `TEXT`

### *Date/Time:* `DATE`, `TIMESTAMP`, `TIME`, `INTERVAL`

### *Boolean:* `BOOLEAN`

### *Arrays:* `TEXT[]`, `INTEGER[]`

### *JSON:* `JSON`, `JSONB`

##  SQL Basics in PostgreSQL
__Learn to write SQL queries specific to PostgreSQL:__

### DDL (Data Definition Language):
__Create tables:__
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);
```
__Drop tables:__
```sql
DROP TABLE users;
```
### DML (Data Manipulation Language):
__Insert data:__
```sql
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
```
__Update data:__
```sql
UPDATE users SET name = 'Alice Updated' WHERE id = 1;
```
__Delete data:__
```sql
DELETE FROM users WHERE id = 1;
```
__Select data:__
```sql
SELECT * FROM users;
```
### Advanced Queries:
#### 1. Use joins (`INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL OUTER JOIN`).
#### 2. Aggregate functions: `SUM`, `AVG`, `COUNT`, `MIN`, `MAX`.
#### 3. Subqueries and Common Table Expressions (CTEs):
```sql
WITH ranked_users AS (
  SELECT name, RANK() OVER (ORDER BY created_at DESC) AS rank
  FROM users
)
SELECT * FROM ranked_users WHERE rank <= 10;
```
