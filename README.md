# Documentr
Makes generating hierarchical documentation fast and enjoyable, from the comfort of your favourite code editor and your mechanical keyboard! No more time wasted clicking through endless menus and prompts, fumbling around with crowded word processor UI, or attempts to resize, drag or drop anything into place using a track-pad.

Documentr uses the [Middleman](https://middlemanapp.com/) static site generator written in Ruby, to generate hierarchical html documents. This makes Documentr highly extendable with support for multiple pages, layout templates, integrations, and much more!

These examples are written with Haml, but you may prefer Markdown, used in this way Documentr feels very similar to writing GitHub documentation files, and is compatible with GitHub Markdown files.

Like Ruby on Rails, Middleman makes use of [Tilt](https://github.com/rtomayko/tilt/), a generic interface to multiple Ruby template engines. This allows documentr files to be written in an array of markdown and markup languages, whichever you're more comfortable using.

## Getting started

    $ git clone https://github.com/webdev-kiwi/documentr
    $ bundle install
    $ bundle exec middleman server

## Creating a documentr doc
Open, __source/index.haml__ in your favourite code editor and start typing.
    
    %h1 My first documentr doc
    %p Isn't this easy?
    %p Your first doc is now ready to publish.

### Config
Config is done using YAML Frontmatter. Defaults are set in __data/defaults.yaml__

    title: "Untitled"
    description: "No description"
    version: "draft"
    date: ''
    author: "Unknown"
    copyright: ''

Alternatively, these may be set at the top of your index file, like so:

    ---
    title: "My first documentr doc"
    description: "Setting up documentr config"
    ---

### Generating a "Sections" index
Documentr will generate a "Sections" index, similar to a table of contents, based on what is included in the documents YAML Frontmatter. Sections index is generated from a nested structure like so.

    section has many headings
    heading belongs to section
    heading has many subs
    Sub belongs to heading

#### Example:
    ---
    title: "Documentr"
    description: "Sections index generation example"
    sections:
    - "Documentr Sections example"
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

    %h1 Documentr Sections example
    %p Run middleman server to preview your document

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

    $ bundle exec middleman server

Now, open your browser to:

    localhost:4567

Documentr takes advantage of middleman-livereload, automatically refreshing your browser preview anytime you hit save.

## Publishing a documentr doc

    $ bundle exec middleman build

Your documentation is now ready in your __build/__ folder.