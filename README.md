## Weather App

### Getting Started
```
$ git clone git@github.com:blakeyoder/Weather-App.git
$ yarn install && yarn run start
```

This will boot a server up at `localhost:3000`

### Interacting with the app
This application allows you to query for weather based off a number of query criteria. Weather can be queried via
either a city, a zip code, or a pair of coordinates (longitude and latitude).

On first load, the application will request you for permission to access your browser-based location. If granted, this will auto-query the api based off the returned coordinates, render that data set to the screen and store the result in `localStorage` (this is so that the browser does not need to make unnecessary network requests on first page load).

The application also allows you to easily toggle temperature units between Celsius and Fahrenheit. When toggled, you'll notice that the chart re-renders and animates the temperature column back in.

Lastly, the application also stores and renders the users 3 most recent searches. This is a config value that can easily be adjusted. The searches are also stored in browser `localStorage` so that the searches persist across page refreshes.

Cheers!
