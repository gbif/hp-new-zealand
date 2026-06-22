[![GBIF Hosted Portal](https://docs.gbif.org/style/gbif-hosted-portal.svg)](https://github.com/gbif/hosted-portals)
[![Build Status](https://builds.gbif.org/job/hp-new-zealand/badge/icon)](https://builds.gbif.org/job/hp-new-zealand/lastBuild/console)
<!-- License badge example: [![CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY%2D-SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/) -->

# GBIF Hosted Portal: GBIF New Zealand

This Jekyll website, **https://www.gbif.org.nz/**, makes use of a theme and biodiversity widgets developed by the GBIF network.

You can find information on editing this site and more on [gbif/hosted-portals](https://github.com/gbif/hosted-portals)

> Infrastructure provided by [GBIF](https://www.gbif.org/)

## Local setup

Note, if you’re using Windows, the preference is for running this repo on WSL, as Ruby isn’t Windows native. The below instructions are for installing this repo on WSL.

### Installing Ruby on WSL
1. Install Ruby on your WSL (Ruby install docs https://www.ruby-lang.org/en/documentation/installation/#apt) 

```
sudo apt-get install ruby-full
```

You should now be able to see your version of ruby with `ruby -v`

2. Install Jekyll

```
sudo gem install jekyll bundler
```

### Running locally 
1. Follow the [RubyInstaller instructions for setting up Jekyll locally](jekyllrb.com/docs/installation/windows). Jekyll is a Ruby gem (see Jekyll’s [Ruby 101](https://jekyllrb.com/docs/ruby-101/) page).
2. Open repo in VS Code. Because Ruby for Windows doesn’t come with everything that this repo needs, note that you may need to add some gems when running `bundle install`. The error messages will let you know. 
3. In your VS Code terminal, run `bundle install` (to install gems)
4. Run `bundle exec jekyll serve`.This will run the site locally on **4000**.

Other helper commands are in the Jekyll documentation (if needed - things like ‘clean’ and ‘build’).

### Release

When a branch is merged to the `master` branch, it will build on the test environment [https://hp-new-zealand.gbif-staging.org/] (this can take up to 5-10 mins).
Before a release, check the staging environment to ensure everything is displaying as expected.

1. Create new tag on Github (following versioning). Target `master` branch
2. Write release notes
3. Set as latest release
4. Set a title
5. Click release, which will push to prod. This may take up to an hour to build.
