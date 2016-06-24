# Introduction

Generate Html documentation from Markdown or Haml with ease, from the comfort of your favourite distraction free text editor. Preview your Markdown or Haml code in your web browser, generate Html and automatically optimise your images when you're done. No more time wasted clicking through endless menus and prompts, fumbling around with bloated word processors in attempts to structure, format, resize, or drop some thing in place then drag it around. Documentr makes generating hierarchical documentation fast and enjoyable.

Documentr uses the [Middleman](https://middlemanapp.com/) static site generator written in Ruby, to generate hierarchical html documents. This makes Documentr extendable with support for multiple pages, layout templates, integrations, and much more! Anybody who is familiar with Ruby on Rails will find Documentr familiar to use.

Documentr is intended to be a simplistic 'framework', used to generate Html documents that are cross compatible with a wide array of applications and use cases. 

It is suggested that the use of CSS is kept to a minimum and JavaScript is avoided, however feel free to break these guidelines if you so desire.

# Getting started

This section assumes you have Ruby installed, are familiar with basic web development and 'cloud computing' concepts, and a terminal interface.

    $ git clone https://github.com/webdev-kiwi/documentr
    $ bundle install

## Directory structure

* build
* data
  * defaults.yaml
* source
  * images
    * graph-1.gif
  * layouts
    * layout.haml
  * empty.md
  * example.md
  * index.haml
  * readme.md
* config.rb
* Gemfile

### build directory

The build directory contains the generated HTML files, and optimised images.

### data directory

The data directory contains the default data, such as title and author page variables for use within the source files.

### source directory

The source directory is your working directory, containing your source files the generator will use to build your output files from.

### config.rb

This file contains the config and settings for use by the generator. You should only need to touch this file if you are customising Documentr.

### Gemfile

Again, you should only need to touch this file if you are customising Documentr.

## Middleman server

Start the Middleman development server, with default options by typing:

    $ bundle exec middleman server

Now, to preview your document simply open a web browser and type *localhost:4567/* into your address bar. You may overide the default port to *4568* for example, with:

    $ bundle exec middleman server --port=4568

# The template engine

Like Ruby on Rails, Middleman makes use of [Tilt](https://github.com/rtomayko/tilt/) a generic interface to multiple Ruby template engines. This allows Documentr source code to be written in an array of markdown and markup languages, whichever you're more comfortable using.

Beautiful, DRY, well-indented, clear markup: templating haiku. [Haml Tutorial](http://haml.info/tutorial.html).

Prefer to write your documentation in [Markdown]('https://guides.github.com/features/mastering-markdown/')?

## Setting template engines

Template engine options are set in **config.rb** the default settings for use with Haml are shown below:

    set :haml, { :ugly => false, :format => :html5 }

And for Markdown, with the Kramdown engine:
  
    set :markdown, :fenced_code_blocks => true, :smartypants => true

For more information on template engine options, see [Template engine options](https://middlemanapp.com/basics/template_engine_options/)

## Frontmatter

Frontmatter allows page specific variables to be included at the top of a template using the YAML format.

Documentr default values are set in **data/defaults.yaml**

### Page variables

* title:
* description:
* version:
* date:
* author:
* copyright:

You may override these at the top of any source file, like so:

    ---  
    title: ""   
    description: ""   
    version: "Markdown"   
    date: ""   
    author: "" 
    copyright: ""   
    title: "Example"   
    copyright: ""   
    ---

# Helpers

## Middleman-Livereload

[Middleman-Livereload](https://github.com/middleman/middleman-livereload) is an extension for the Middleman static site generator that adds livereloading functionality. Live Reload is a system to automatically reload a web page when the source files for that web page are changed. This is particularly useful for previewing your documents without the need to refresh your browser.

Coupled with the Chrome [RemoteLiveReload](https://chrome.google.com/webstore/detail/remotelivereload/jlppknnillhjgiengoigajegdpieppei) extension, every time you hit save in your text-editor your browser will automatically refresh the page allowing for seamless previews of your document. Images and other assets will also be automatically reloaded as they're added, or replaced.

Some users may experience issues using Middleman-Livereload in certain situations. An alternative to Middleman-Livereload is [node-livereload](https://github.com/napcs/node-livereload) an implementation of the LiveReload server in Node.js.

## Section index generator

Yaml Frontmatter

    ---  
    sections:  
    - "Section 1"  
      - headings:  
        - "heading 1"  
        - "heading 2"  
        - subs:  
          - "sub heading 1"  
          - "sub heading 2"  
        - "heading 3"  
    - "Section 2"  
      - headings:  
        - "heading 1"  
        - "heading 2"
    ---

Section index is generated from a nested structure, 3 levels deep, like so:

    section has many headings
    heading belongs to section
    heading has many subs
    Sub belongs to heading

## Automatic image sizes

Documentr will automatically add image sizes to these tags based on the image dimensions.

## Image optimisation

At build time, Documentr will automatically compress images using the [middleman-imageoptim](https://github.com/plasticine/middleman-imageoptim) gem and it's dependencies.

# Publishing Documentr files

## Middleman build

    $ bundle exec middleman build

Your documentation is now ready in your **build/** folder!