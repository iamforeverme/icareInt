# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table command_to_device (
  id                        integer auto_increment not null,
  parameters                varchar(255),
  signal_type_id            integer,
  device_id                 integer,
  constraint pk_command_to_device primary key (id))
;

create table device (
  id                        integer auto_increment not null,
  mac                       varchar(255),
  version                   varchar(255),
  type                      varchar(255),
  constraint pk_device primary key (id))
;

create table location (
  id                        integer auto_increment not null,
  room_num                  varchar(255),
  bed_num                   varchar(255),
  build_num                 varchar(255),
  start_date                datetime,
  end_date                  datetime,
  protege_id                integer,
  device_id                 integer,
  constraint pk_location primary key (id))
;

create table monitor_data (
  id                        integer auto_increment not null,
  protege_id                integer,
  signal_type_id            integer,
  rec_time                  datetime,
  constraint pk_monitor_data primary key (id))
;

create table protege (
  id                        integer auto_increment not null,
  name                      varchar(255),
  id_card_num               varchar(255),
  telphone                  varchar(255),
  mobile                    varchar(255),
  contacts_name1            varchar(255),
  contacts_tel1             varchar(255),
  contacts_name2            varchar(255),
  contacts_tel2             varchar(255),
  history                   varchar(255),
  province                  varchar(255),
  city                      varchar(255),
  address                   varchar(255),
  photo_dir                 varchar(255),
  age                       integer,
  monitoring_level          varchar(255),
  constraint uq_protege_id_card_num unique (id_card_num),
  constraint pk_protege primary key (id))
;

create table signal_type (
  id                        integer auto_increment not null,
  type                      varchar(255),
  constraint pk_signal_type primary key (id))
;

create table staff (
  id                        integer auto_increment not null,
  staff_id                  varchar(255),
  name                      varchar(255),
  id_card_num               varchar(255),
  password                  varchar(255),
  gender                    varchar(255),
  age                       integer,
  tel                       varchar(255),
  constraint pk_staff primary key (id))
;

create table warning (
  id                        integer auto_increment not null,
  start_time                datetime,
  complete_time             datetime,
  solution                  varchar(255),
  staff_id                  integer,
  data_id                   integer,
  warning_type_id           integer,
  constraint pk_warning primary key (id))
;

create table warning_type (
  id                        integer auto_increment not null,
  type                      varchar(255),
  measurement               varchar(255),
  constraint pk_warning_type primary key (id))
;

alter table command_to_device add constraint fk_command_to_device_signalType_1 foreign key (signal_type_id) references signal_type (id) on delete restrict on update restrict;
create index ix_command_to_device_signalType_1 on command_to_device (signal_type_id);
alter table command_to_device add constraint fk_command_to_device_device_2 foreign key (device_id) references device (id) on delete restrict on update restrict;
create index ix_command_to_device_device_2 on command_to_device (device_id);
alter table location add constraint fk_location_protege_3 foreign key (protege_id) references protege (id) on delete restrict on update restrict;
create index ix_location_protege_3 on location (protege_id);
alter table location add constraint fk_location_device_4 foreign key (device_id) references device (id) on delete restrict on update restrict;
create index ix_location_device_4 on location (device_id);
alter table monitor_data add constraint fk_monitor_data_protege_5 foreign key (protege_id) references protege (id) on delete restrict on update restrict;
create index ix_monitor_data_protege_5 on monitor_data (protege_id);
alter table monitor_data add constraint fk_monitor_data_signalType_6 foreign key (signal_type_id) references signal_type (id) on delete restrict on update restrict;
create index ix_monitor_data_signalType_6 on monitor_data (signal_type_id);
alter table warning add constraint fk_warning_staff_7 foreign key (staff_id) references staff (id) on delete restrict on update restrict;
create index ix_warning_staff_7 on warning (staff_id);
alter table warning add constraint fk_warning_data_8 foreign key (data_id) references monitor_data (id) on delete restrict on update restrict;
create index ix_warning_data_8 on warning (data_id);
alter table warning add constraint fk_warning_warningType_9 foreign key (warning_type_id) references warning_type (id) on delete restrict on update restrict;
create index ix_warning_warningType_9 on warning (warning_type_id);



# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table command_to_device;

drop table device;

drop table location;

drop table monitor_data;

drop table protege;

drop table signal_type;

drop table staff;

drop table warning;

drop table warning_type;

SET FOREIGN_KEY_CHECKS=1;

