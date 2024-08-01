document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value; 

    fetch(`/search?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayResults(data.Search);
            } else {
                document.getElementById('results').innerHTML = '<p>No results found.</p>';
            }
        })
        .catch(error => console.error('Error:', error));
});

function displayResults(movies) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    movies.forEach(movie => { 
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
            <h2>${movie.Title}</h2>
            <p>Year: ${movie.Year}</p>
        `;

        resultsContainer.appendChild(movieDiv);
    });
}
