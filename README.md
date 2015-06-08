Drupal Starter
============

Simple Drupal starter with useful modules, bootstrap, npm, bower and some helpful grunt tasks.

##Installation

**Step 1**

Clone the repo, create a new blank database, and install Drupal as usual. 

Alternatively, using drush: drush site-install standard --account-name=admin --account-pass=admin --db-url=mysql://[db_user]:[db_password]@[db_host]/[db_name]

or for a sqlite database: drush site-install standard --account-name=admin --account-pass=admin --db-url=sqlite://sites/default/files/.ht.sqlite

**Step 2**

Once Drupal is installed, in the following order run:

npm install
bower install
grunt firstrun

##Included Drupal modules

Please see basicdrupal.make file

##Available Grunt tasks

1. Sass
2. Less
3. Concat
4. Uglify
5. Autoprefixer
6. Browsersync
7. Imagemin
8. Responsive Images
9. Copy
3. Watch

##Available Grunt commands:

####Grunt firstinstall

```Use when first cloning repo. Runs Copy, Sass, Concat and Uglify```

####Grunt build

```Use to manually compile Sass and JS```

####Grunt

```Use during development. Turns on BrowserSync for live reloading, compiles sass as a watch task```
