// referenced Clever Programmer YT for all of this code "All this goes in and makes spotify do the dirty work and we just pull the acces token from the URL"
export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = "http://localhost:3000/";

// Paste in client ID " " look at notes on iphone
const clientId = ""

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "app-remote-control"
];
 // pulling acces token out
export const getTokenFromUrl = () => {
    return window.location.hash
        // get the first substring
        .substring(1)
        .split('&')
        // Very Powerfull, goes to the & then splits, then takes value after = 
        .reduce((initial, item) => {
            let parts = item.split('=');
            // go into return array, then decode value, essentiall pulling access token
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;