#SHELL := /usr/local/bin/fish
.PHONY: lint fix prepare-back-python prepare-back-node prepare-front prepare run-front run-back build test full-run

lint:
	standard

fix:
	standard --fix

prepare-back-python:
	cd backend && conda env update -f environment.yml

prepare-back-node:
	cd backend && npm install

prepare-front:
	cd frontend && npm install

prepare:
	make prepare-back-node prepare-front

run-front:
	cd frontend && npm start

run-back:
	nodemon backend/app.js

build:
	cd frontend && npm run build

test:
	cd frontend && npm run test

full-run:
	make prepare build run-back