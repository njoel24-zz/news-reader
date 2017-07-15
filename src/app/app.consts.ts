export const consts = {
    newsApi: {
        name: "newsApi",
        endpoint: "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=86c62a60437d495e8920c9703ccb1031"
    },
    hackerNews: {
        name: "hackerNews",
        endpoint: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    },

    expriringDate: Date.now() + 1000 * 60 * 60
}

export default consts;