import './sass/main.scss';
import axios from 'axios';
import Notiflix from 'notiflix';
// import articlesList from './templates/card.hbs';
import NewsApiService from './js/news-service';

const form = document.querySelector('#search-form')
const input = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search')
const moreBtn = document.querySelector('.load-more')

const gallaryContainer = document.querySelector('.gallery')
console.log(moreBtn)
console.log(searchBtn)
console.log(input)
console.log(form)


const newsApiService = new NewsApiService();
const baseURL = 'https://pixabay.com/api/';

const API_KEY = "24466537-61204298f78e089c867532473";

form.addEventListener('submit', onSearch)

function onSearch(evt) {
    evt.preventDefault();
    newsApiService.query = input.value;
    // newsApiService.resetPage();
    newsApiService.fetchArticles().then(appendArticlesMarkUp)
}



moreBtn.addEventListener('click', onLoadMore)


function onLoadMore() {
newsApiService.fetchArticles().then(appendArticlesMarkUp)
}

function appendArticlesMarkUp() {
    gallaryContainer.insertAdjacentHTML('beforeend',
     `   <div class="photo-card">
    <img src="${hits.webformatURL}" alt="${tags}" loading="lazy" />
    <div class="info">
         <p class="info-item">
        <b>${likes}</b>
         </p>
        <p class="info-item">
         <b>${views}</b>
             </p>
         <p class="info-item">
            <b>${comments}</b>
             </p>
        <p class="info-item">
             <b>${downloads}</b>
            </p>
         </div>
    </div>`)
}

 
