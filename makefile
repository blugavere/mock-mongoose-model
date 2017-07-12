.PHONY: test

clean:
	rm -rf coverage dist .nyc_output

test:	clean
	make lint
	./node_modules/.bin/nyc ./node_modules/.bin/mocha src test

lint:
	./node_modules/.bin/eslint src test

coverage:
	./node_modules/.bin/nyc report --reporter=text-lcov | coveralls
