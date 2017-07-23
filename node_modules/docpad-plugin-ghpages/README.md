# [GitHub Pages](http://pages.github.com/) Deployer Plugin for [DocPad](http://docpad.org)

<!-- BADGES/ -->

[![Build Status](https://img.shields.io/travis/docpad/docpad-plugin-ghpages/master.svg)](http://travis-ci.org/docpad/docpad-plugin-ghpages "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/docpad-plugin-ghpages.svg)](https://npmjs.org/package/docpad-plugin-ghpages "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/docpad-plugin-ghpages.svg)](https://npmjs.org/package/docpad-plugin-ghpages "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/docpad/docpad-plugin-ghpages.svg)](https://david-dm.org/docpad/docpad-plugin-ghpages)
[![Dev Dependency Status](https://img.shields.io/david/dev/docpad/docpad-plugin-ghpages.svg)](https://david-dm.org/docpad/docpad-plugin-ghpages#info=devDependencies)<br/>
[![Gratipay donate button](https://img.shields.io/gratipay/docpad.svg)](https://www.gratipay.com/docpad/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


Deploy to Github Pages easily via `docpad deploy-ghpages`


## Install

```
docpad install ghpages
```


## Usage

### Project Pages
This plugin works with GitHub Pages for Projects (e.g. `http://username.github.io/project` via `gh-pages` branch on `https://github.com/username/project`) with no configuration or setup required.

Simply run `docpad deploy-ghpages --env static` to deploy the contents of your `out` directory directly to your repository's `gh-pages` branch.


### Profile/Organisation Pages
This plugin also works with GitHub Pages for Profiles and Organisations (e.g. `http://username.github.io` via `master` branch on `https://github.com/username/username.github.io`) via any of the following options:

#### Two Repositories
Setup one repository called `username.github.io` which will be your target repository, and one called `website` which will be your source repository.

Inside your `website` repository, add the following to your [docpad configuration file](http://docpad.org/docs/config):

``` coffee
plugins:
	ghpages:
		deployRemote: 'target'
		deployBranch: 'master'
```

And run the following in terminal:

```
git remote add target https://github.com/username/username.github.io.git
```

Then when you run `docpad deploy-ghpages --env static` inside your website repository, the generated `out` directory will be pushed up to your target repository's `master` branch.


#### Multiple Branches
If you would like to have your source and generated site on the same repository, you can do this by the following.

Move the source of your website to the branch `source`, and the following to your [docpad configuration file](http://docpad.org/docs/config):

``` coffee
plugins:
	ghpages:
		deployRemote: 'origin'
		deployBranch: 'master'
```

Then when you run `docpad deploy-ghpages --env static` inside your website repository's `source` branch, the generated `out` directory will be pushed up to same repository's `master` branch.


#### Polluting the Root Directory
The final option is to not use this plugin and have the `out` directory be your website's root directory, so instead of say `your-website/src/documents/index.html` being outputted to `your-website/out/index.html`, instead it will be outputted to `you-website/index.html`. This is the way Jekyll works, however we don't recommend it as it is very messy and commits the out files into your repository.

To do this, add the following to your [docpad configuration file](http://docpad.org/docs/config):

``` coffee
outPath: '.'
```

### Custom Domains
If you're using [GitHub Pages Custom Domains](https://help.github.com/articles/setting-up-a-custom-domain-with-pages):

- Place your `CNAME` file at `src/files/CNAME` so it gets copied over to `out/CNAME` upon generation and consequently to the root of the `gh-pages` branch upon deployment
- Use a DocPad version 6.48.1 or higher


### Debugging
Depending on circumstances, the github pages plugin might not work and you'll see an error. You can debug this by running the deploy with the `-d` flag like so `docpad deploy-ghpages -d`. That will tell you at which step the deploy failed.

- If the deploy fails fetching the origin remote, it means that you do not have the remote "origin", you will need to add it, or update the `deployRemote` setting to reflect your desired remote.

- If the deploy fails on the push to github pages, you may need to specify your username and password within the remote. You can do this by running:

	``` bash
	node -e "console.log('https://'+encodeURI('USERNAME')+':'+encodeURI('PASSWORD')+'@github.com/REPO_OWNER/REPO_NAME.git')"
	```

	Replace the words in capitals with their actual values and press enter. This will then output the new remote URL, you then want to copy it and run `git remote rm origin` and `git remote add origin THE_NEW_URL` and try the deploy again.

	On OSX you may be able to avoid this step by running `git config --global credential.helper osxkeychain` to tell git to save the passwords to the OSX keychain rather than asking for them every single time.

- If you get EPERM or unlink errors, it means that DocPad does not have permission to clean up the git directory that it creates in the out folder. You must clean this up manually yourself by running `rm -Rf ./out/.git`



<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/docpad/docpad-plugin-ghpages/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/docpad/docpad-plugin-ghpages/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)
- Avi Deitcher (https://github.com/deitch)
- Sergey Lukin <contact@sergeylukin.com> (https://github.com/sergeylukin)

### Sponsors

No sponsors yet! Will you be the first?

[![Gratipay donate button](https://img.shields.io/gratipay/docpad.svg)](https://www.gratipay.com/docpad/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Avi Deitcher](https://github.com/deitch) — [view contributions](https://github.com/docpad/docpad-plugin-ghpages/commits?author=deitch)
- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/docpad/docpad-plugin-ghpages/commits?author=balupton)
- [KyleAMathews](https://github.com/KyleAMathews) — [view contributions](https://github.com/docpad/docpad-plugin-ghpages/commits?author=KyleAMathews)
- [RobLoach](https://github.com/RobLoach) — [view contributions](https://github.com/docpad/docpad-plugin-ghpages/commits?author=RobLoach)
- [Sergey Lukin](https://github.com/sergeylukin) <contact@sergeylukin.com> — [view contributions](https://github.com/docpad/docpad-plugin-ghpages/commits?author=sergeylukin)

[Become a contributor!](https://github.com/docpad/docpad-plugin-ghpages/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2013+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

<!-- /LICENSE -->


