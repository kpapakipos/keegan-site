SHELL := /usr/local/bin/fish

default:
	echo 'make was run!'

prepare:
	conda env create -f environment.yml --force
	ca keegan-site
	npm install

prepare-run:
	make prepare
	echo $$FLASK_APP
	flask run

run:
	flask run

.EXPORT_ALL_VARIABLES:
	FLASK_APP = backend/app
	FLASK_ENV = development

.PHONY: default prepare prepare-run run