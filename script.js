var bookGallery = document.getElementById("bookGallery");
var searchBar = document.getElementById("searchBar"); 
var searchButton = document.getElementById("searchButton");
var dropDown = document.getElementById("dropDown");

var lineNumber = document.getElementById("dropDown").value;

dropDown.addEventListener("change", function(event) {
  lineNumber = event.target.value
  console.log (event)
})

searchBar.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchForGenre();
    }
  });

  searchButton.addEventListener("click", function (event) {
    searchForGenre();
  });

function searchForGenre () {
    var genre = searchBar.value;
    console.log ("genre", genre)

var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c4dc3d6d4msha9ce12242f545eep10232fjsn910475d71a81',
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
	}
};

fetch(`https://hapi-books.p.rapidapi.com/week/${genre}/${lineNumber}`, options)
	.then(response => response.json())
	.then(response => processResponse(response))
	.catch(err => console.error(err));
	}


function processResponse(response) {

    var result = response;
    console.log (result)
 
    for (var book of result) {        
      console.log (book)
      var bookItem = `
          <div class="bookItem">

              <img src="${book.cover}" alt="" />
              <p>${book.name}</p>
              <p>${book.url}</p>
          </div>
      `;

      bookGallery.innerHTML += bookItem;
    }

} 



      // var bookItem = `
      //     <div class="bookItem">

      //     <img src="${result[0].cover}" alt="" />
      //         <p>${result[0].name}</p>
      //         <p>${result[0].url}</p>
      //         <img src="${result[1].cover}" alt="" />
      //         <p>${result[1].name}</p>
      //         <p>${result[1].url}</p>
      //         <img src="${result[2].cover}" alt="" />
      //         <p>${result[2].name}</p>
      //         <p>${result[2].url}</p>
      //         <img src="${result[3].cover}" alt="" />
      //         <p>${result[3].name}</p>
      //         <p>${result[3].url}</p>
      //         <img src="${result[4].cover}" alt="" />
      //         <p>${result[4].name}</p>
      //         <p>${result[4].url}</p>
      //         <img src="${result[5].cover}" alt="" />
      //         <p>${result[5].name} </p>
      //         <p>${result[5].url} </p>
      //     </div>
      // `;



