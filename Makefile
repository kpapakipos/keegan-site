SHELL := /usr/local/bin/fish
.ONESHELL: default prepare run-front run-back
.PHONY: default prepare run-front run-back

prepare:
	cd frontend && npm install

run-front:
	cd frontend && npm start

run-back:
	flask run