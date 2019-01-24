CREATE TABLE user {
    id SERIAL PRIMARY KEY,
    username varchar(30),
    bio varchar(100),
    post_id INTEGER REFERENCES topic (id),
    subscribe INTEGER REFERENCES subforum (id)
}
CREATE TABLE forum {
    subforum_id INTEGER REFERENCES subforum (id),
    post_id INTEGER REFERENCES topic (id)
}
CREATE TABLE subforum {
    id SERIAL PRIMARY KEY,
    title varchar(30),
    community_detail varchar (30),
    community_rules varchar,
    moderators_id INTEGER REFERENCES user (id),
    post_id INTEGER REFERENCES topic (id)
}
CREATE TABLE topic {
    id SERIAL PRIMARY KEY,
    title varchar(30),
    content varchar(200),
    post_comment INTEGER REFERENCES comment (id)
}
CREATE TABLE comment {
    id SERIAL PRIMARY KEY,
    content varchar(200),
    user_id INTEGER REFERENCES user (id)
}

