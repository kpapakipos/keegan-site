#SHELL := /usr/local/bin/fish
.PHONY: prepare-back prepare-front prepare run-front run-back build test full-run

prepare-back:
	cd backend && npm install

prepare-front:
	cd frontend && npm install

prepare:
	make prepare-back prepare-front

run-front:
	cd frontend && npm start

run-back:
	node app.js

build:
	cd frontend && npm run build

test:
	cd frontend && npm run test

full-run:
	make prepare build run-back