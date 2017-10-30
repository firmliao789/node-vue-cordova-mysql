grant all privileges on test.* to 'www'@'%' identified by 'www';

use test;

create table users (
    id varchar(50) not null,
    name varchar(100) not null,
    phone bigint not null,
    email varchar(30) ,
    passwd varchar(20) not null,
    gender bool not null,
    birth varchar(10) ,
    createdAt bigint not null,
    updatedAt bigint not null,
    version bigint not null,
    primary key (id)
) engine=innodb;