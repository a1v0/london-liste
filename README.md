# London-Liste

A simple web app to display a1v0's et al. hot tips for London.

## London data

There is no clever database behind this app. Instead, all London tips are included in single array of objects.

The data points we are collecting are as follows (* denotes a mandatory field):

- Name*
- Description/notes
- Website
- Approximate cost*
- Type/category (e.g. restaurant, museum)
  - we need to come up with a definitive list of types, rather than allowing free user input, so that it's easy to filter on type
  - should a user be able to set multiple values here?
- Location/area*
  - we need to come up with a definitive list of areas, rather than allowing free user input, so that it's easy to filter on areas
  - should a user be able to set multiple values here?
- [anything else?]

## How to use this repo

### Forking

To begin, you need to create a fork of the repo. On the [repo homepage](https://github.com/a1v0/london-liste), look for the green button near the top that says "Code". Just above and to the right is a button called "Fork".

## To-do

- design data structure
  - need to be able to relate categories to places and types
    - do we need any other relational structures?
  - how do we assign a unique and permanent slug to each place?
    - I think it'll be OK, for now, to do a manual check for duplicates before committing a new piece of data
- create instructions for forking and editing data structure
- ~~protect `main` branch~~
- add clear instructions about what _not_ to add, e.g. personal data
- get colour scheme
- create basic design and discuss with stakeholders
- 404 page
- favicon
