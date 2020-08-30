SHELL := /usr/local/bin/fish
.ONESHELL: default prepare run-front run-back run
.PHONY: default prepare run-front run-back run

default:
	echo 'make default was run!'

prepare:
	conda env update
	conda activate keegan-site
	cd frontend && npm install

run-front:
	npm run build
	npm run start &

run-back:
	flask run

run:
	conda activate keegan-site
	make run-back && make run-front