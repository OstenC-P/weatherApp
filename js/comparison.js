// // Set appId
// const appId = 'd7f8df21d04497dce95d0a71d094abbf';

// // getDataForCity function that fetches weather info from openweathermap api
// const getDataForCity = city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
//   .then(response => response.json());

// // createCardHtml function used to render the weather info 
// const createCardHtml = (name, emoji, temp, feelsLike, description) => `
//   <div class="card">
//     <div class="row no-gutters align-items-center">    
//       <div class="col-2 h2 pl-1 pt-1 text-center">                
//         ${emoji}
//       </div>
//       <div class="col-10">
//         <div class="card-body">
//           <div class="row card-title justify-content-between align-items-center mr-3 mb-1">
//             <h4>${name}</h4>
//             <h6>${temp}c, feels like ${feelsLike}c</h6>
//           </div>
//           <div class="row">
//             <h5 class="card-subtitle text-muted">${description}</h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// `;

// // emojis object used to find the right emoji from the icon code sent from the api
// const emojis = {
//   '01d': '☀️',
//   '02d': '⛅️',
//   '03d': '☁️',
//   '04d': '☁️',
//   '09d': '🌧',
//   '10d': '🌦',
//   '11d': '⛈',
//   '13d': '❄️',
//   '50d': '💨',
//   '01n': '☀️',
//   '02n': '⛅️',
//   '03n': '☁️',
//   '04n': '☁️',
//   '09n': '🌧',
//   '10n': '🌦',
//   '11n': '⛈',
//   '13n': '❄️',
//   '50n': '💨',
// };

// // selecting all the things needed
// const goButton = document.querySelector('#go-button');
// const cityInput = document.querySelector('#city-input');
// const weatherContainer = document.querySelector('#weather-container');


// // --------SCRAPPED MIGHT COME BACK TO AFTER THE COURSE: ----------
// //sCRAPPED BECAUSE VERY FIDDLY WITH EVERY VARAIBLE NEED TO BE MDOFIED AND NOT INTERRUPTING THE EXISTING CODE BASE, FOR EXAMPLE;
// // const wetaherContainer = documentquerySelector("#weather-container2")
// // for every variable etc.
// // then.comtemp = .temp - .temp2 
// //new div element for results weather-diff whilist still working without causing a ton of errors to solve it...


// // Set appId
// // const appId = 'd7f8df21d04497dce95d0a71d094abbf';

// // // getDataForCity function that fetches weather info from openweathermap api
// // const getDataForCity = city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
// //   .then(response => response.json());

// // // createCardHtml function used to render the weather info 
// // const createCardHtml = (name, emoji, temp, feelsLike, description) => `
// //   <div class="card">
// //     <div class="row no-gutters align-items-center">    
// //       <div class="col-2 h2 pl-1 pt-1 text-center">                
// //         ${emoji}
// //       </div>
// //       <div class="col-10">
// //         <div class="card-body">
// //           <div class="row card-title justify-content-between align-items-center mr-3 mb-1">
// //             <h4>${name}</h4>
// //             <h6>${temp}c, feels like ${feelsLike}c</h6>
// //           </div>
// //           <div class="row">
// //             <h5 class="card-subtitle text-muted">${description}</h5>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // `;

// // // emojis object used to find the right emoji from the icon code sent from the api
// // const emojis = {
// //   '01d': '☀️',
// //   '02d': '⛅️',
// //   '03d': '☁️',
// //   '04d': '☁️',
// //   '09d': '🌧',
// //   '10d': '🌦',
// //   '11d': '⛈',
// //   '13d': '❄️',
// //   '50d': '💨',
// //   '01n': '☀️',
// //   '02n': '⛅️',
// //   '03n': '☁️',
// //   '04n': '☁️',
// //   '09n': '🌧',
// //   '10n': '🌦',
// //   '11n': '⛈',
// //   '13n': '❄️',
// //   '50n': '💨',
// // };

// // // selecting all the things needed
// // const goButton = document.querySelector('#go-button');
// // const cityInput = document.querySelector('#city-input');
// // const weatherContainer = document.querySelector('#weather-container');

// // event listener for a click event on the  button
// goButton.addEventListener('click', () => {
//   // get the city from the input field
//   const city = cityInput.value;


  
//   // get the weather data for the city
//   getDataForCity(city)
//     .then(data => {
//       // get the data we need for our html from the response
//       const name = data.name;
//       const emoji = emojis[data.weather[0].icon];
//       const temp = data.main.temp;
//       const feelsLike = data.main.feels_like;
//       const description = data.weather[0].description;
//       const comparison = 

//       // create the card html
//       const cardHtml = createCardHtml(name, emoji, temp, feelsLike, description);

//       // render!
//       weatherContainer.innerHTML = cardHtml;
//     });
// });