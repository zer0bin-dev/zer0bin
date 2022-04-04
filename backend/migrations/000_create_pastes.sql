create table if not exists pastes (
    "id" text primary key,
    "content" text not null,
    "views" bigint default 0,
    "single_view" boolean default false,
    "expires_at" timestamp without time zone,
    "created_at" timestamp without time zone default(now() at time zone 'utc')
);

create or replace function deleteExpiredPastes() returns trigger as $pastes_expire$ begin
delete from pastes
where "expires_at" is not null
    and "expires_at" < now() at time zone 'utc';
return new;
end;
$pastes_expire$ language plpgsql;

create trigger checkpastes before
insert
    or
update on pastes for statement execute procedure deleteExpiredPastes();
