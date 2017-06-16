/*
  Here is a guide for the steps you could take:
*/
// 1. First select and store the elements you'll be working with
const API_KEY = "?client_id=8538a1744a7fdaa59981232897501e04";
const MAIN = "https://api.soundcloud.com/users/";
var artist;
var artistId;
var data;
// 2. Create your `onSubmit` event for getting the user's search term
document.getElementById("submit").addEventListener("click",getArtist);



// 3. Create your `fetch` request that is called after a submission
function getUser() {
  axios.get(MAIN + artist + API_KEY).then(function(response) {
    data = response.data;
    console.log("data: ", data);
    getTracks(data);
    return data;
  });
}

function getArtist(){
  artist = document.getElementById("artist").value;
  getUser();
  return
}
function getTracks(data){
   artistId = data.id;
   axios.get("https://api.soundcloud.com/"+"tracks/"+artistId+API_KEY).then(function(response){
   trackData = response.data;
   console.log("data: ", trackData);
     return data;
   });
   
}

// 4. Create a way to append the fetch results to your page

// 5. Create a way to listen for a click that will play the song in the audio play
