/*
  Here is a guide for the steps you could take:
*/
// 1. First select and store the elements you'll be working with
const API_KEY = "?client_id=8538a1744a7fdaa59981232897501e04";
const MAIN = "https://api.soundcloud.com/users/";
var artist;
var artistId;
var data;
var songs = document.querySelector(".results")
var trackData;
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
   console.log(artistId);
   axios.get(MAIN + artistId +"/tracks"+API_KEY).then(function(response){
   trackData = response.data;
   console.log("data: ", response.data);
     album()
     return
   });


   
}

function album(){
  console.log("final", trackData)
  for (i=0; i <=10;i++){
  let track = document.createElement("div");
  songs.appendChild(track)

  let albumCover= document.createElement("img");
  albumCover.classList.add("cover");
  albumCover.src = trackData[i].artwork_url;
  songs.appendChild(albumCover);
  
  // let songTitle=document.createElement("p");
  // songTitle.textContent = trackData[i]
  // songTitle.classList.add("title");

  // songs.appendChild(songTitle)

  // let bandName=document.createElement("p");
  // songs.classList.add("band");
  // songs.appendChild(bandName)
  }
}
  


// 4. Create a way to append the fetch results to your page

// 5. Create a way to listen for a click that will play the song in the audio play
