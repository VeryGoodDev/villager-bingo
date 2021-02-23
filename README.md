A small Preact app I made for making villager hunting in Animal Crossing New Horizons a little more enjoyable, especially with friends. Currently fixing build problems, feel free to clone and run the repo locally to see it, or check back another time for a working link.

## Features
- Generate a bingo card with random villagers
- Optionally choose a "target villager" that you're hoping to find, which uses them as the free space
- Optionally exclude villagers from being included on the generated bingo card (useful to avoid getting a card with villagers you already have on your island)
- Print card

## Features/bug fixes left before I consider this complete
- Generating a new card should clear previously marked squares
  - And probably have a warning that this will happen
  - Above warning will be toggleable in settings
- Option to print card with no images
- Tweak a couple things about the UI on mobile screens
- Full accessibility audit
  - I will be paying special attention to the settings dialog, and in particular the screen reader experience in the villager selection boxes (as I am not 100% sure how that experience is)
  - I developed with accessibility as a primary concern from the start of this project and am reasonably confident that it already does well in that regard, but if I missed anything, I'd like to do what I can to address it

## Potential future enhancements
- Add option to disable images
- Investigate caching images as base64 strings
- Bingo detection (count total bingos)
- Look into making this installable as a PWA
- Translation
  - The API provides villager names in several languages, so that's easy to use
  - Also may look into cheap/free options to translate the UI into all languages for which there is a villager name
  - In addition to browser language from `navigator.languages`, also maybe add a way for the user to choose a language preference
  - Default to English for languages not present in the API
- Loading screen while villagers/preferences load on page load
- Allow multiple bingo cards
