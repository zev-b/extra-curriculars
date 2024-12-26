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
