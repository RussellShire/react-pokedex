# A Pokedex created in React

A Pokedex with basic info for each Pokemon that is both searchable and filterable.

# Hosted

https://russellshire.github.io/react-pokedex/

# Project specifications

- Using the pokeapi to get data
- Calls to the api should be minimal
- Users can hover over a pokemon to reveal more information about them
- Users can search for a pokemon name to filter the pokemon on display
- Users can filter pokemon by their type
- Search and filter can be performed at the same time
- More filters can be added at a later date
- No libraries or depencancies should be added except React and pokeapi

# Optional To Do:

- Stop intersection observer when there is no more data to load from API
- move intersection observer into custom hook - https://www.youtube.com/watch?v=wkztoWlwTXU&ab_channel=QixotlLFC
- Restyle loading animation for bottom of screen
- Currently new cards only load if bottom of screen is there, but user won't feel need to scroll down if line of cards isn't full
- Rename filters
- Add second dropdown for another filter
- Add animation for cards loading in
- Filter out pokemon from end of pokedex that are region specific or 'cosplay' types
- Fix UI bug where pokemon names over two lines become left aligned
- Add comma between Types when there are multiple types
- Sometimes images do not load (especially back images), make so they don't show broken if they haven't loaded. Seems to be some back images are null

# Credit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Usage

Tested and working on React 18.2.0, November 2022

```
# Install dependencies
npm install
```

```
# Run app
npm start
```

```
# Build app
npm run build
```

```
# npm run deploy

Updates hosted Github Pages
```
