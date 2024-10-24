let elMovieList = document.querySelector('.movie-list')
let elSearchInput = document.querySelector('.search-input')
let elCategoryForm = document.querySelector('.category-form')
let elCategorySelect = document.querySelector('.category-list')

let categories = []

function getCategories() {
  movies.forEach(movie => {
    movie.Categories.split('|').forEach(category => {
      if (!categories.includes(category)) {
        categories.push(category)
      }
    })
  })
}

getCategories()

function renderCategories() {
  categories.forEach(category => {
    let newOption = document.createElement('option')
    
    newOption.value = category
    newOption.textContent = category
    
    elCategorySelect.appendChild(newOption)
  })
}

renderCategories()

function getYouTubeThumbnail(id) {
  return `http://i3.ytimg.com/vi/${id}/hqdefault.jpg`
}

function renderMovies(movies) {
  let result = ''
  
  movies.slice(0, 12).forEach(movie => {
    result += `
    <div class="col-4 mb-3 ">
    <div class="card h-100 ">
    <img class='card-img-top' src="${getYouTubeThumbnail(
      movie.ytid
    )}" height='250' alt="">
    
    <div class="card-body">
    <h5 class="card-title">${movie.Title}</h5>
    
    <p><b>Year:</b> ${movie.movie_year}</p>
    
    <p><b>Rating:</b> ${movie.imdb_rating}</p>
    
    <p><b>Category:</b> ${movie.Categories}</p>
    
    <p><b>Language:</b> ${movie.language}</p>
    </div>
    
    <div class="card-footer">
    <button class="btn btn-outline-primary">More</button>
    </div>
    </div>
    </div>
    `
  })
  
  elMovieList.innerHTML = result
}

elSearchInput.addEventListener('input', () => {
  let inputValue = elSearchInput.value.trim()
  
  const SEARCH_QUERY = new RegExp(inputValue, 'gi')
  
  let filteredMovies = movies.filter(movie =>
    String(movie.Title).match(SEARCH_QUERY)
  )
  
  if (filteredMovies.length > 0) {
    renderMovies(filteredMovies)
  } else {
    renderMovies(movies)
  }
})

elCategoryForm.addEventListener('change', () => {
  let optionValue = elCategorySelect.value
  
  let filteredMovies = movies.filter(movie =>
    movie.Categories.includes(optionValue)
  )
  
  if (filteredMovies.length > 0) {
    renderMovies(filteredMovies)
  } else {
    renderMovies(movies)
  }
})

renderMovies(movies)
