export abstract class AbstractProvider {
    getNews (provider): any {
        const request = new XMLHttpRequest();
        request.open('GET', provider, false);  // `false` makes the request synchronous
        request.send(null);
        if (request.status === 200) {
            return JSON.parse(request.responseText);
        }
    }
}

export default AbstractProvider;