export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

     fetchArticles() {
        console.log(this)
return fetch(`https://pixabay.com/api/?key=24466537-61204298f78e089c867532473&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=&${this.page}`)
            .then(r => r.json())
            .then(data => {
                console.log(data)
                this.page += 1;

                return data.articles;
            });
    }
 

    //     resetPage() {
    //     this.page = 1;
    // }
        get query() {
        return this.searchQuery;
    }

        set query(newQuery) {
        this.searchQuery = newQuery;
    }
    
    
    
}



