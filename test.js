// https://rallycoding.herokuapp.com/api/music_albums
// write a function to retrieve a blob of json.
// make an ajax request! Use the "fetch" function.
/*
const fetchAlbums = () => {
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then(json => console.log(json));
}
*/
const fetchAlbums = async () => {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json();
  console.log(json);
}

fetchAlbums();