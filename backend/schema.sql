CREATE TABLE IF NOT EXISTS pastes (
    "id" TEXT PRIMARY KEY,
    "content" TEXT NOT NULL,
    "views" BIGINT DEFAULT 0,
    "single_view" BOOLEAN DEFAULT false,
    "expires_at" TIMESTAMP WITHOUT TIME ZONE,
    "created_at" TIMESTAMP WITHOUT TIME ZONE DEFAULT(NOW() AT TIME ZONE 'utc')
);

-- ALTER TABLE pastes ADD COLUMN single_view BOOLEAN DEFAULT false;

CREATE OR REPLACE FUNCTION deleteExpiredPastes() RETURNS trigger AS $pastes_expire$ BEGIN
DELETE FROM pastes
WHERE "expires_at" IS NOT NULL
    AND "expires_at" < now() AT TIME ZONE 'utc';
RETURN NEW;
END;
$pastes_expire$ LANGUAGE plpgsql;

CREATE TRIGGER checkPastes BEFORE
INSERT
    OR
UPDATE ON pastes FOR STATEMENT EXECUTE PROCEDURE deleteExpiredPastes();
