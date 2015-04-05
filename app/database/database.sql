\c mypastie_database;

drop table users cascade;
drop table pasties cascade;
drop table tags cascade;
drop table filters cascade;
drop sequence user_seq;
drop sequence pastie_seq;
drop sequence tag_seq;
drop type state;

create type state as enum ('eliminado', 'creado', 'modificado');

create table users (
	id integer primary key,
	username varchar(16) unique not null ,
	password varchar(70) not null,
	email varchar(100) unique not null,
	name varchar(50) not null,
	lastname varchar(50),
	country varchar(50),
	city varchar(50),
	member_since timestamp not null, 
	last_seen timestamp
);

create table pasties (
	id integer primary key,
	private boolean not null,
	content text,
	title varchar(100),
	status state, 
	creation timestamp not null,
	last_modified timestamp,
	owner integer references users(id) on delete cascade
);

create table tags (
	id integer primary key,
	name varchar(50) unique not null,
	occurrences integer check (occurrences > 0),
	last_occurrence timestamp
);

create table filters ( 
	pastie_id integer references pasties(id) on delete cascade,
	tag_id integer references tags(id) on delete cascade,
	primary key(pastie_id,tag_id)
);

create sequence user_seq start 1;
create sequence pastie_seq start 1;
create sequence tag_seq start 1;

grant all on sequence user_seq to developer;
grant all on sequence pastie_seq to developer;
grant all on sequence tag_seq to developer;

grant all on table users to developer;
grant all on table pasties to developer;
grant all on table tags to developer;
