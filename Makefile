ADONIS = node ace
DOCKER = docker-compose

# docker
up:
	$(DOCKER) up -d && npm run dev

down:
	$(DOCKER) down

# run 
nrd:
	npm run dev

# install
install:
	npm install

# list
list:
	$(ADONIS) list

routes:
	$(ADONIS) list:routes

# migration
fresh:
	$(ADONIS) migration:fresh

refresh:
	$(ADONIS) migration:refresh

reset:
	$(ADONIS) migration:reset

roll:
	$(ADONIS) migration:rollback
	
run:
	$(ADONIS) migration:run

status:	
	$(ADONIS) migration:status

# db
seed:
	$(ADONIS) db:seed

truncate:
	$(ADONIS) db:truncate

wipe:
	$(ADONIS) db:wipe

# make
controller:
	$(ADONIS) make:controller

command:
	$(ADONIS) make:command

event:
	$(ADONIS) make:event

exception:
	$(ADONIS) make:exception

factory:
	$(ADONIS) make:factory

listener:
	$(ADONIS) make:listener

middleware:
	$(ADONIS) make:middleware

migration:
	$(ADONIS) make:migration

model:
	$(ADONIS) make:model

preload:
	$(ADONIS) make:preload

provider:
	$(ADONIS) make:provider

seeder:
	$(ADONIS) make:seeder

service:
	$(ADONIS) make:service

test:
	$(ADONIS) make:test

validator:
	$(ADONIS) make:validator

view:
	$(ADONIS) make:view



