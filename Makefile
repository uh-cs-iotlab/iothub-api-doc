.PHONY: build run watch

all: build test

build:
	npm install && gulp build

run:
	node .

watch:
	gulp

test:
	node . & gulp