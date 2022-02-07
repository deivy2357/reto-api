
create table clientes
(
    id               varchar(36)  not null
        constraint clientes_pk
            primary key,
    nombre           varchar(50)  not null,
    apellidos        varchar(100) not null,
    fecha_nacimiento date         not null,
    created_at       timestamp,
    updated_at       timestamp
);