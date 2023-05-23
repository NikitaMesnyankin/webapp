create type countries as enum('RUS', 'BEL', 'ARM', 'KAZ', 'UNK');

create table users (
  id integer generated by default as identity,
  login varchar(50) not null unique,
  password varchar(60) not null,
  email varchar unique not null,
  is_activated boolean default false,
  activation_link uuid not null,
  nickname varchar(50) generated always as (login) stored,
  rating float not null default 0.00,
  about text,
  created_at timestamptz default now() not null,
  modified_at timestamptz default now() not null
);

create table films (
  id integer generated by default as identity,
  name text not null unique,
  country countries not null default 'UNK',
  author varchar not null,
  avg_rating float not null default 0.00,
  description text,
  created_at timestamptz default now() not null,
  modified_at timestamptz default now() not null
);

create table reviews (
  id integer generated by default as identity,
  author_id integer references users(id),
  film_id integer references films(id),
  content text,
  score float default 0.00,
  karma integer default 0,
  created_at timestamptz default now() not null,
  modified_at timestamptz default now() not null
)