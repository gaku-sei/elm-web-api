#!/bin/sh

# Print commands as we go
set -x

npm run jshint || exit 1

elm-make src/elm/CI.elm --output elm.html || exit 1
elm-make src/elm/DisableStorage.elm --output elm-disable-storage.html || exit 1
elm-make ../examples/src/WindowExample.elm --output window.html || exit 1
elm-make ../examples/src/DocumentExample.elm --output document.html || exit 1
elm-make ../examples/src/LocationExample.elm --output location.html || exit 1
elm-make ../examples/src/StorageExample.elm --output storage.html || exit 1

# Always exit 0 if we get this far ... the SauceLabs matrix takes over
mocha --delay src/run.js || exit 0
