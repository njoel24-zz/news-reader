export const consts = {
    providers: [		
    {		
        name: "newsApi",		
        endpoint: "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=86c62a60437d495e8920c9703ccb1031"		
    },		
    {		
        name: "hackerNews",		
        endpoint: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"		
    },
    {		
        name: "googleNews",		
        endpoint: " https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=86c62a60437d495e8920c9703ccb1031"		
    },
    {		
        name: "nationalGeographic",		
        endpoint: "https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=86c62a60437d495e8920c9703ccb1031"		
    },
    {		
        name: "bbcNews",		
        endpoint: " https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=86c62a60437d495e8920c9703ccb1031"		
    },
    {		
        name: "cnnNews",		
        endpoint: "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=86c62a60437d495e8920c9703ccb1031"		
    },
    {		
        name: "redditNews",		
        endpoint: "https://newsapi.org/v1/articles?source=reddit-r-all&sortBy=top&apiKey=86c62a60437d495e8920c9703ccb1031"		
    },		
    ],
    expriringDate: Date.now() + 1000 * 60 * 60 * 24
}		
		
export default consts; 