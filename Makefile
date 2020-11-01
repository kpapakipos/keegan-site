SHELL := /usr/local/bin/fish
.PHONY: prepare run-front run-back build test full-run

prepare:
	cd frontend && npm install

run-front:
	cd frontend && npm start

run-back:
	flask run

build:
	cd frontend && npm run build

test:
	cd frontend && npm run test

full-run:
	make prepare build run-back