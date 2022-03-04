const getMoviePopular = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`)
    return await res.json();
};

const getMovieTopRated = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}`)
    return await res.json();
};

const getMovieUpcoming = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}`)
    return await res.json();
};

window.addEventListener('DOMContentLoaded', () => {
    getMoviePopular().then((data) => {
        const movies = data.results
            
        let HTMLCard = ''
        const container = document.getElementById('popular-movie-list')
        
        for (let index = 0; index < 5; index++) {
            const data = movies[index]
            const year = new Date(data.release_date).getFullYear()

            HTMLCard += `
            <a href="/detail.html?id=${data.id}" class="card">
                <img class="card__image" src="${IMAGEBASEURL}/${data.poster_path}"/>
                <div class="card__content">
                    <p class="card__title">${data.title} (${year})</p>
                </div>
            </a>
            `
        }

        container.innerHTML = HTMLCard
    });

    
    getMovieTopRated().then((data) => {
        const movies = data.results
            
        let HTMLCard = ''
        const container = document.getElementById('top-rated-movie-list')
        
        for (let index = 0; index < 5; index++) {
            const data = movies[index]
            const year = new Date(data.release_date).getFullYear()

            HTMLCard += `
            <a href="/detail.html?id=${data.id}" class="card">
                <img class="card__image" src="${IMAGEBASEURL}/${data.poster_path}"/>
                <div class="card__content">
                    <p class="card__title">${data.title} (${year})</p>
                </div>
            </a>
            `
        }

        container.innerHTML = HTMLCard
    });

    
    getMovieUpcoming().then((data) => {
        const movies = data.results
            
        let HTMLCard = ''
        const container = document.getElementById('upcoming-movie-list')
        
        for (let index = 0; index < 5; index++) {
            const data = movies[index]
            const year = new Date(data.release_date).getFullYear()

            HTMLCard += `
            <a href="/detail.html?id=${data.id}" class="card">
                <img class="card__image" src="${IMAGEBASEURL}/${data.poster_path}"/>
                <div class="card__content">
                    <p class="card__title">${data.title} (${year})</p>
                </div>
            </a>
            `
        }

        container.innerHTML = HTMLCard
    });
})

