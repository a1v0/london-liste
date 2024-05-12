# London-Liste

A simple web app to display a1v0's et al. hot tips for London.

## London data

There is no clever database behind this app. Instead, all London tips are included in single array of objects.

The data points we are collecting are as follows (\* denotes a mandatory field):

- Name\*
- Description/notes
- Website
- Approximate cost\*
- Type/category (e.g. restaurant, museum)
  - we need to come up with a definitive list of types, rather than allowing free user input, so that it's easy to filter on type
  - should a user be able to set multiple values here?
- Location/area\*
  - we need to come up with a definitive list of areas, rather than allowing free user input, so that it's easy to filter on areas
  - should a user be able to set multiple values here?
- [anything else?]

## How to use this repo

### Forking

To begin, you need to create a fork of the repo. On the [repo homepage](https://github.com/a1v0/london-liste), look for the green button near the top that says "Code". Just above and to the right is a button called "Fork".

## To-do

1. create instructions for forking and editing data structure
2. add clear instructions about what _not_ to add, e.g. personal data
3. get colour scheme
4. ensure page titles get updated during navigation
5. create decent home page
6. make list views clear
    - ensure that section titles and item titles aren't _both_ `<h2>` tags
7. enable multiple categories per item
8. make the list-view short description of each item be the first bullet point, not the long description
9. change the way categories work so that they have a display name. Use OOP to achieve this
