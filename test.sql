CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    bio VARCHAR(100)
);

CREATE TABLE community (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    description VARCHAR(10000)
);

----------------------------
-- REFERENCING TABLES
----------------------------

CREATE TABLE rule (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    body VARCHAR(200),
    community_id INTEGER REFERENCES community (id)
);

CREATE TABLE topic (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    author_id INTEGER REFERENCES users (id),
    community_id INTEGER REFERENCES community (id)
);

CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    author_id INTEGER REFERENCES users (id),
    topic_id INTEGER REFERENCES community (id),
    parent_id INTEGER REFERENCES comment (id), -- Can be null if there is no parent comment
    body VARCHAR(1000)
);

------------------------------
-- RELATIONAL TABLES (viable?)
------------------------------

-- Tables that connect two or more other tables
-- e.g. user profile which has all that user's topics and comments
-- e.g. community page which has all the topics for that community
-- The following tables are only examples of specific profiles or communities

-- CREATE TABLE ray (
--     username Ray,
--     followCommunity [INTEGER REFERENCE community (id)],
--     followUser [INTEGER REFERENCE user (id)],
--     topic
-- );