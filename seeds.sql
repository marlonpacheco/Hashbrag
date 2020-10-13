-- drops database if exists --
DROP DATABASE IF EXISTS hashbrag;

--creates database--
CREATE DATABASE hashbrag;



USE hashbrag;
INSERT INTO activities (id, name, emoji, createdAt, updatedAt) VALUES ('1','#beach', 'island_emoji','2020-10-11 21:03:38','2020-10-11 21:03:38');
INSERT INTO activities (id, name, emoji, createdAt, updatedAt) VALUES ('2','#biking', 'bike_emoji','2020-10-11 21:03:38','2020-10-11 21:03:38');
INSERT INTO activities (id, name, emoji, createdAt, updatedAt) VALUES ('3','#hiking', 'boots_emoji','2020-10-11 21:03:38','2020-10-11 21:03:38');
INSERT INTO activities (id, name, emoji, createdAt, updatedAt) VALUES ('4','#coffee', 'coffe_emoji','2020-10-11 21:03:38','2020-10-11 21:03:38');
INSERT INTO users (username, password, createdAt, updatedAt) VALUES ('admin', '1234','2020-10-11 21:03:38','2020-10-11 21:03:38');
INSERT INTO posts (userusername, activity,  createdAt, updatedAt) VALUES ('admin', '#biking','2020-10-11 21:03:38','2020-10-11 21:03:38');