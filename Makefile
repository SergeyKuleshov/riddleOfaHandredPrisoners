install:
	npm ci

publish:
	npm publish --dry-run

one-prison:
	node bin/one-prison.js
