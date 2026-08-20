-- Inicialización automática del esquema y tabla
CREATE SCHEMA IF NOT EXISTS other;

CREATE TABLE IF NOT EXISTS other.words (
    id SERIAL PRIMARY KEY,
    word VARCHAR(5) UNIQUE NOT NULL
);

-- Carga inicial de 100 palabras de 5 letras en inglés
INSERT INTO other.words (word) VALUES
('APPLE'), ('BEACH'), ('CRANE'), ('DANCE'), ('EAGLE'),
('FLAME'), ('GRAPE'), ('HOUSE'), ('IMAGE'), ('JUICE'),
('KNIFE'), ('LEMON'), ('MUSIC'), ('NIGHT'), ('OCEAN'),
('PIANO'), ('QUEEN'), ('RIVER'), ('SMILE'), ('TABLE'),
('UNCLE'), ('VOICE'), ('WATER'), ('YOUTH'), ('ZEBRA'),
('BREAD'), ('CHAIR'), ('DREAM'), ('EARTH'), ('FRUIT'),
('GHOST'), ('HEART'), ('LIGHT'), ('MONEY'), ('PEACE'),
('PLANT'), ('ROUND'), ('SUGAR'), ('TIGER'), ('TRAIN'),
('WORLD'), ('ANGLE'), ('BLACK'), ('CLOUD'), ('DRIVE'),
('FLOOR'), ('GREEN'), ('HORSE'), ('LAUGH'), ('MOUSE'),
('PAPER'), ('PHONE'), ('RADIO'), ('SHIRT'), ('SPACE'),
('STONE'), ('SWEET'), ('TRACK'), ('WATCH'), ('WHITE'),
('ALONE'), ('BRAVE'), ('CLEAN'), ('DRINK'), ('EARLY'),
('FRESH'), ('GLASS'), ('HEAVY'), ('HOTEL'), ('LARGE'),
('LUNCH'), ('MARCH'), ('NORTH'), ('PAINT'), ('POWER'),
('QUIET'), ('SHARP'), ('SHEEP'), ('SHORT'), ('SLEEP'),
('SMART'), ('SOUND'), ('SOUTH'), ('STAND'), ('STORM'),
('TASTE'), ('THICK'), ('TOUCH'), ('TOWER'), ('TRUCK'),
('BROWN'), ('CLOCK'), ('FIELD'), ('FRONT'), ('GREAT'),
('PARTY'), ('PIECE'), ('PILOT'), ('PLATE'), ('POINT')
ON CONFLICT (word) DO NOTHING;
