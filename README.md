# London-Liste

A simple web app to display a1v0's et al. hot tips for London. See the hosted site [here](https://london.a1v0.de/).

## London data

There is no clever database behind this app. Instead, all London tips are included in single array of objects.

The data points we are collecting are as follows (\* denotes a mandatory field):

- Name\*
- Description bullet points\*
- Approximate cost\*
- Type/category\*
- Location/area\*
- Website

## How to use this repo

This repo is simple enough to use. The key thing to remember is that anything you do on GitHub is in the public domain, so don't put any personal data here that you don't want the world to see.

### Forking

To begin, you need to create a fork of the repo. A fork is a copy of the repo which lives in your GitHub account. You can make your edits without affecting the main branch of the repo and, when the time comes, we can merge your changes into the main branch.

On the [repo homepage](https://github.com/a1v0/london-liste), look for the green button near the top that says "Code". Just above and to the right is a button called "Fork".

Click the button, create a fork, and you're ready to go.

### Adding locations

The file you will be working with is `app/places.js`. The file contains instructions on how to add locations.

0. Before beginning, go to your fork and press "Sync fork". This will ensure your fork is up to date with the main repo.
1. Find the `places` file in the GitHub file explorer.
2. In the top-right corner of the code box, click the pencil icon. This will open the file in Edit mode.
3. When you're done with your edit, click the green "Commit changes..." button at the top
   - Add a commit message in the imperative tense, e.g. "Add British Museum"

### Pull requests

Once you have made your edit(s), you will want to push them to the main branch.

0. Go to the main page of your fork.
1. Click "Contribute" and, in the drop-down, click "Open pull request"
2. Add a simple title, e.g. "New locations" and submit the pull request
3. I will need to approve your pull request before any of the changes go live

That's all there is to it!

## To-do

1. Create decent home page
2. Enable multiple categories per item
3. Change the way categories work so that they have a display name. Use OOP to achieve this
