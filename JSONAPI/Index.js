const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjFkMmU0YjFjNGMxNGFhYTk4YTY0ZWI3NWFjMmQxYiIsInN1YiI6IjY1ZTA1MDQwMzkxYjljMDE4NjgyOGZmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sW4H-AvPRcTUVxjEQDmvyp3efO-Z9KubjsURqAQfjvg'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    