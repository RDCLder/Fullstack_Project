CREATE TABLE user {
    id SERIAL PRIMARY KEY,
    username varchar(30),
    bio varchar(100)
};

CREATE TABLE community {
    id SERIAL PRIMARY KEY,
    title varchar(30),
    description varchar (10000)
};

----------------------------
-- REFERENCING TABLES
----------------------------

CREATE TABLE rule {
    id SERIAL PRIMARY KEY,
    title varchar(50),
    body varchar(200)
    community_id INTEGER REFERENCES community (id)
};

CREATE TABLE topic {
    id SERIAL PRIMARY KEY,
    title varchar(50),
    author_id INTEGER REFERENCES user (id),
    community_id INTEGER REFERENCES community (id)
};

CREATE TABLE comment {
    id SERIAL PRIMARY KEY,
    author_id INTEGER REFERENCES user (id),
    topic_id INTEGER REFERENCES community (id),
    parentComment_id INTEGER REFERENCES comment (id), -- Can be null if there is no parent comment
    body varchar(1000)
};

------------------------------
-- RELATIONAL TABLES (viable?)
------------------------------

-- Tables that connect two or more other tables
-- e.g. user profile which has all that user's topics and comments
-- e.g. community page which has all the topics for that community
-- The following tables are only examples of specific profiles or communities

-- CREATE TABLE ray {
--     username Ray,
--     followCommunity [INTEGER REFERENCE community (id)],
--     followUser [INTEGER REFERENCE user (id)],
--     topic
-- };