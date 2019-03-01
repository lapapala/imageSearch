// const API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.getPopular&csrf=json&nojsoncallback=1&api_key=6b3575d10435de5f010fc941f5eff94a&per_page=20';
const API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6b3575d10435de5f010fc941f5eff94a&sort=relevance&extras=url_s&format=json&nojsoncallback=1';

// 'https://api.flickr.com/services/rest?method=flickr.photos.search&csrf=&api_key=fa7faa312ec83899b70fa363d473a10d&format=json&hermes=1&hermesClient=1&reqId=8b796466&nojsoncallback=1'


export default {
    search(searchTerm) {
        const url = `${API_URL}&text=${searchTerm}`;
        return fetch(url)
         .then(response => response.json())
         .then(result => {
             return result.photos
         });
    }
}