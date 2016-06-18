# Documentr
Makes generating hierarchical documentation fast and enjoyable, from the comfort of your favourite code editor with your mechanical keyboard! No more time wasted clicking through endless menus and prompts, or attempting to drag and drop things into place using a track-pad.

Documentr uses the [Middleman](https://middlemanapp.com/) static site generator writen in Ruby, to generate hierarchical html documents. Documentr is highly hackable with support for multiple pages, layout templates and much more!

While the example is written with Haml, you may prefer Markdown, used in this way documentr feels very similar to writing GitHub documentation files, just like this one.

Middleman makes use of [Tilt](https://github.com/rtomayko/tilt/), a generic interface to multiple Ruby template engines. Which allows documentr files to be written in an array of markdown and markup languages, whichever you're more comfortable using.

## Getting started

    $ git clone https://github.com/webdev-kiwi/documentr
    $ bundle install
    $ bundle exec middleman server

## Creating a documentr doc
Open, source/index.haml in your favourite code editor and start typing.
    
    %h1 My first documentr doc
    %p Isn't this easy?

### Config
Config is done using YAML Frontmatter

#### Defaults
Defaults are set in data/defaults.yaml

    title: "Untitled"
    description: "No description"
    version: "draft"
    date: ''
    author: "Unknown"
    copyright: ''

#### Override defaults
Alternatively, defaults may also be overridden at the very top of your index.haml file like so:

    ---
    title: "My first documentr doc"
    description: "Setting documentr config"
    copyright: "2016 Example"
    ---

### Generating a "Sections" index
Documentr will generate a "Sections" index, similar to a table of contents, based on what is included in the documents YAML Frontmatter. Sections index is generated from a nested structure like so.

    section has many headings
    heading belongs to sections
    heading has many subs
    Sub belongs to headings

#### Example:
    ---
    copyright: "2016 Example"
    sections:
    - "My first documentr doc"
    - headings:
      - "heading 1"
      - "heading 2"
      - subs:
        - "sub heading 1"
        - "sub heading 2"
    - "Section 2"
    - "Section 3"
    - headings:
      - "heading 1"
    - "Section 4"
    ---
    %h1 My first documentr doc
    %p Isn't this easy?
    %h2 heading 1
    %p content for section 1, heading 1
    %h2 heading 2
    %p content for section 1, heading 2
    %h3 sub heading 1
    %p content for heading 2, sub heading 1
    %h3 sub heading 2
    %p content for heading 2, sub heading 2
    %h1 Section 2
    %p content for section 2
    %h1 Section 3
    %p content for section 3
    %h2 Heading 1
    %p content for section 3, heading 1
    %h1 Section 4
    %p content for section 4

## Previewing a documentr doc
Open your browser to:

    localhost:4567

Documentr makes use of live-reloading using middleman-livereload

## Publishing a documentr doc

    $ bundle exec middleman build
    
Your documentation is now ready in build/