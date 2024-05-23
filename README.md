# London-Liste

A simple web app to display a1v0's et al. hot tips for London.

## London data

There is no clever database behind this app. Instead, all London tips are included in single array of objects.

The data points we are collecting are as follows (\* denotes a mandatory field):

- Name\*
- Description bullet points\*
- Website
- Approximate cost\*
- Type/category (e.g. restaurant, museum)
  - we need to come up with a definitive list of types, rather than allowing free user input, so that it's easy to filter on type
  - should a user be able to set multiple values here?
- Location/area\*
  - should a user be able to set multiple values here?
- [anything else?]

## How to use this repo

### Forking

To begin, you need to create a fork of the repo. On the [repo homepage](https://github.com/a1v0/london-liste), look for the green button near the top that says "Code". Just above and to the right is a button called "Fork".

## To-do

1. create instructions for forking and editing data structure
2. add clear instructions about what _not_ to add, e.g. personal data
3. ensure page titles get updated during navigation
4. create decent home page
5. make list views clear
  - ensure that section titles and item titles aren't _both_ `<h2>` tags
6. enable multiple categories per item
7. make the list-view short description of each item be the first bullet point, not the long description
8. change the way categories work so that they have a display name. Use OOP to achieve this
