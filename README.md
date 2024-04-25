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
- Location/area*
- [anything else?]

## To-do:

- design data structure
  - need to be able to relate categories to places. Should this be one-to-many or many-to-many?
- create instructions for forking and editing data structure
- protect `main` branch
- add clear instructions about what _not_ to add, e.g. personal data
