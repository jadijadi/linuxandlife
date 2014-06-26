module.exports =
	prompts: false  # REQUIRED!!! Don't ask for TOS on traivs
	templateData:
		site:
			url: 'http://bevry.github.io/query-engine/'
		package: require('./package.json')
	environments:
		development:
			templateData:
				site:
					url: '/'