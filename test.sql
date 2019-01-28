-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(20),
--     email VARCHAR(40),
--     bio VARCHAR(500)
-- );

-- CREATE TABLE community (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(30),
--     description VARCHAR(10000)
-- );

-- ----------------------------
-- -- REFERENCING TABLES
-- ----------------------------

-- CREATE TABLE rule (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100),
--     body VARCHAR(200),
--     community_id INTEGER REFERENCES community (id)
-- );

-- CREATE TABLE topic (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(100),
--     body VARCHAR(10000),
--     author_id INTEGER REFERENCES users (id),
--     community_id INTEGER REFERENCES community (id)
-- );

-- CREATE TABLE comment (
--     id SERIAL PRIMARY KEY,
--     body VARCHAR(2000),
--     author_id INTEGER REFERENCES users (id),
--     topic_id INTEGER REFERENCES community (id),
--     parent_id INTEGER REFERENCES comment (id) -- Can be null if there is no parent comment
-- );

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

-- INSERT INTO community VALUES (
--     DEFAULT,
--     'games',
--     'A community for discussing games.',
--     CURRENT_TIMESTAMP,
--     CURRENT_TIMESTAMP
-- );

-- INSERT INTO topic VALUES (
--     DEFAULT,
--     'Kingdom Hearts 3 is Releasing on Tuesday!!!',
--     'OMG OMG OMG OMG OMG.  It''s too bad I don''t have time to play it...',
--     CURRENT_TIMESTAMP,
--     CURRENT_TIMESTAMP,
--     3,
--     4
-- );