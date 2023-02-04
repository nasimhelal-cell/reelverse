const movieArr = [
  {
    title: "Hawa",
    year: 2022,
    ticketPrice: 300,
    posterUrl:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg",
  },
  {
    title: "Title 2",
    year: 2022,
    ticketPrice: 500,
    posterUrl:
      "https://www.themoviedb.org/t/p/original/tqTZUwcpdDlZfNi3ojqd6tqqFcg.jpg",
  },
  {
    title: "Title 3",
    year: 2022,
    ticketPrice: 80,
    posterUrl:
      "https://c8.alamy.com/comp/E7PYXN/the-amazing-spider-man-2-year-2014-usa-director-marc-webb-andrew-garfield-E7PYXN.jpg",
  },
  {
    title: "Title 4",
    year: 2022,
    ticketPrice: 500,
    posterUrl: "https://m.media-amazon.com/images/I/81nGkful2jL._AC_SY679_.jpg",
  },
  {
    title: "Title 5",
    year: 2022,
    ticketPrice: 500,
    posterUrl:
      "https://www.themoviedb.org/t/p/original/tqTZUwcpdDlZfNi3ojqd6tqqFcg.jpg",
  },
  {
    title: "Title 2",
    year: 2022,
    ticketPrice: 500,
    posterUrl: "images/movie card.jpg",
  },
];

// movie card making with dynamic content
function displayMovies() {
  const movies = document.querySelector(".movies");
  for (let i = 0; i < movieArr.length; i++) {
    const movieCard = document.createElement("div");
    movieCard.classList.add(
      "card",
      "movie",
      "p-0",
      "col",
      "shadow",
      "border-0",
      "rounded-3"
    );
    movieCard.innerHTML = `
            <div class="movie-poster">
                <img src="${movieArr[i].posterUrl}" class="card-img-top w-100" >
            </div>
            <div class="card-body">
                <h5 class="card-title fw-bold">${movieArr[i].title} <small>(${movieArr[i].year})</small></h5>
                <p class="text-danger fw-bold">${movieArr[i].ticketPrice} ৳</p>
                <button class="btn btn-dark fw-bold book-ticket">Book Ticket</button>
            </div>`;
    movies.append(movieCard);
  }
}
displayMovies();
//display modal
function displayModal() {
  const bookTickets = document.querySelectorAll(".book-ticket");
  const modalWindow = document.querySelector(".modal-window");
  for (let i = 0; i < bookTickets.length; i++) {
    bookTickets[i].addEventListener("click", () => {
      for (let j = 0; j < movieArr.length; j++) {
        if (i == j) {
          const title = movieArr[j].title;
          const year = movieArr[j].year;
          const ticketPrice = movieArr[j].ticketPrice;
          const vat = (ticketPrice * 7) / 100;
          const subTotalPrice = vat + ticketPrice;

          modalWindow.style.opacity = 1;
          modalWindow.style.visibility = "visible";

          modalWindow.innerHTML = `
            <span class="close-btn"><b>X</b></span>
            <h2 class="fw-bold">${title} (${year})</h2>
            <h5><strong>Price:</strong> ${ticketPrice} ৳</h5>
            <h5><strong>VAT:</strong> ${vat} ৳</h5>
            <h5><strong>Sub-total:</strong> ${subTotalPrice} ৳</h5>
            <button class="btn btn-danger fw-bold mt-4 buy-now">BUY NOW</button>`;

          //hide modal window
          const closeBtn = document.querySelector(".close-btn");
          closeBtn.addEventListener("click", () => {
            modalWindow.style.opacity = 0;
            modalWindow.style.visibility = "hidden";
          });
        }
      }
    });
  }
}
displayModal();
