drop database mypastie_database;
drop user developer;

create database mypastie_database;
create user developer with password 'developer';
grant all privileges on database mypastie_database to developer;