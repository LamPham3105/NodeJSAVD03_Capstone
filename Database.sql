-- ENUM
CREATE TYPE user_role AS ENUM ('admin', 'Singer', 'user');

-- USERS
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    account VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    nationality VARCHAR(100),
    chanal_name VARCHAR(100),
    avatar TEXT,
    desciption TEXT,
    refresh_token TEXT,
    password TEXT NOT NULL,
    banner TEXT,
    role user_role NOT NULL
);

INSERT INTO users (account, name, nationality, chanal_name, avatar, desciption, refresh_token, password, banner, role)
VALUES
('john123', 'John Doe', 'USA', 'JohnVibes', NULL, 'Just music', NULL, 'pass123', NULL, 'user'),
('amy2022', 'Amy Smith', 'UK', 'AmyWorld', NULL, 'Singer-songwriter', NULL, 'pass123', NULL, 'Singer'),
('admin01', 'Admin One', 'USA', NULL, NULL, NULL, NULL, 'adminpass', NULL, 'admin'),
('alex87', 'Alex Jordan', 'Canada', 'AlexBeats', NULL, NULL, NULL, 'pass123', NULL, 'user'),
('jane_doe', 'Jane Doe', 'Australia', 'JaneChill', NULL, NULL, NULL, 'pass123', NULL, 'user'),
('maxpower', 'Max Power', 'USA', 'MaxTune', NULL, NULL, NULL, 'pass123', NULL, 'Singer'),
('lilyrose', 'Lily Rose', 'France', 'LilyPop', NULL, NULL, NULL, 'pass123', NULL, 'Singer'),
('zackm', 'Zack Morris', 'Germany', 'ZackZone', NULL, NULL, NULL, 'pass123', NULL, 'user'),
('eve11', 'Eve Lin', 'China', 'EveSounds', NULL, NULL, NULL, 'pass123', NULL, 'Singer'),
('noahx', 'Noah Xu', 'Singapore', 'NoahBeats', NULL, NULL, NULL, 'pass123', NULL, 'user');

-- GENRES
CREATE TABLE genres (
    genre_id SERIAL PRIMARY KEY,
    name_genre VARCHAR(100) NOT NULL,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO genres (name_genre) VALUES
('Pop'), ('Rock'), ('Jazz'), ('Classical'), ('Hip-Hop'), ('EDM'), ('Reggae'), ('Folk'), ('Country'), ('Blues');

-- SONGS
CREATE TABLE songs (
    song_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    genre_id INT REFERENCES genres(genre_id),
    song_name VARCHAR(255) NOT NULL,
    viewer INT DEFAULT 0,
    duration VARCHAR(10),
    popular BOOLEAN DEFAULT FALSE,
    description TEXT,
    song_image TEXT,
    public_date TIMESTAMP,
    file_path TEXT,
    discuss_quality INT
);

INSERT INTO songs (user_id, genre_id, song_name, viewer, duration, popular, description, public_date)
VALUES
(1, 1, 'Song A', 120, '3:30', true, 'Hit song', NOW()),
(2, 2, 'Song B', 90, '4:15', false, 'Smooth vibes', NOW()),
(3, 3, 'Song C', 70, '5:00', true, 'Instrumental magic', NOW()),
(4, 4, 'Song D', 55, '2:45', false, 'Relax tune', NOW()),
(5, 5, 'Song E', 300, '3:10', true, 'Trending now', NOW()),
(6, 6, 'Song F', 60, '4:00', false, 'Fresh drop', NOW()),
(7, 7, 'Song G', 45, '2:50', false, 'Nice rhythm', NOW()),
(8, 8, 'Song H', 88, '3:40', true, 'Upbeat', NOW()),
(9, 9, 'Song I', 110, '3:20', true, 'Best of week', NOW()),
(10, 10, 'Song J', 200, '4:30', false, 'New single', NOW());

-- COMMENTS
CREATE TABLE comments (
    discuss_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    song_id INT REFERENCES songs(song_id),
    content TEXT NOT NULL,
    discuss_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    replay_discuss_id INT REFERENCES comments(discuss_id)
);

INSERT INTO comments (user_id, song_id, content)
VALUES
(1, 1, 'Love this!'),
(2, 1, 'So good'),
(3, 2, 'Nice beat'),
(4, 3, 'Relaxing tune'),
(5, 4, 'Awesome'),
(6, 5, 'My favorite'),
(7, 6, 'Cool vibes'),
(8, 7, 'Not bad'),
(9, 8, 'Repeat mode!'),
(10, 9, 'Fire track');

-- LIST_FRIENDS
CREATE TABLE list_friends (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    friend_id INT REFERENCES users(user_id),
    room_chat VARCHAR(255)
);

INSERT INTO list_friends (user_id, friend_id, room_chat)
VALUES
(1, 2, 'room1'),
(1, 3, 'room2'),
(2, 4, 'room3'),
(2, 5, 'room4'),
(3, 6, 'room5'),
(4, 7, 'room6'),
(5, 8, 'room7'),
(6, 9, 'room8'),
(7, 10, 'room9'),
(8, 1, 'room10');

-- MESSAGES
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    id_sender INT REFERENCES users(user_id),
    content_mess TEXT,
    time_send TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    room_chat VARCHAR(255)
);

INSERT INTO messages (id_sender, content_mess, room_chat)
VALUES
(1, 'Hey!', 'room1'),
(2, 'Hi!', 'room1'),
(3, 'What’s up?', 'room2'),
(4, 'Hello!', 'room3'),
(5, 'Yo!', 'room4'),
(6, 'Wassup!', 'room5'),
(7, 'Hi again', 'room6'),
(8, 'Heyy', 'room7'),
(9, 'Peace!', 'room8'),
(10, 'Hola!', 'room9');

-- PLAYLISTS
CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    image_path TEXT,
    playlist_name VARCHAR(255),
    description TEXT,
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO playlists (user_id, playlist_name, description)
VALUES
(1, 'Workout', 'Energetic songs'),
(2, 'Chill', 'Relax tunes'),
(3, 'Party', 'High vibes'),
(4, 'Jazz Nights', 'Smooth jazz'),
(5, 'Morning', 'Wake-up mix'),
(6, 'Focus', 'No distraction'),
(7, 'Sleep', 'Calm tracks'),
(8, 'Drive', 'Road songs'),
(9, 'Throwback', 'Old hits'),
(10, 'Favorites', 'Top picks');

-- PLAYLIST_SONGS
CREATE TABLE playlist_songs (
    id SERIAL PRIMARY KEY,
    playlist_id INT REFERENCES playlists(id),
    song_id INT REFERENCES songs(song_id)
);

INSERT INTO playlist_songs (playlist_id, song_id)
VALUES
(1, 1), (1, 2), (2, 3), (2, 4), (3, 5),
(4, 6), (5, 7), (6, 8), (7, 9), (8, 10);

-- PLAYLIST_FOLLOWS
CREATE TABLE playlist_follows (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    playlist_id INT NOT NULL,
    followed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    CONSTRAINT fk_playlist FOREIGN KEY (playlist_id) REFERENCES playlists(id) ON DELETE CASCADE,
    CONSTRAINT unique_user_playlist UNIQUE (user_id, playlist_id)
);

INSERT INTO playlist_follows (user_id, playlist_id)
VALUES
(1, 2), (2, 3), (3, 4), (4, 5), (5, 6),
(6, 7), (7, 8), (8, 9), (9, 10), (10, 1);
