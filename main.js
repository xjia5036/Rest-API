const apiKey = 'WnT3tM7yyIFoy87hCRiEM4LolX43DCiEKfVpshIs'; // My NASA API key

// Get the date input element
const dateInput = document.getElementById('date');

// When the date selection changes, call fetchAPOD function
dateInput.addEventListener('change', function() {
    fetchAPOD(dateInput.value); // Pass the selected date to fetchAPOD function
});        

function fetchAPOD() {
    const date = document.getElementById('date').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the returned data

            // Display title and explanation
            document.getElementById('title').innerText = data.title;
            document.getElementById('explanation').innerText = data.explanation;

            // Display image or video based on media type
            if (data.media_type === 'image') {
                document.getElementById('apodImg').src = data.url;
                document.getElementById('apodImg').style.display = 'block';
                document.getElementById('apodVideo').style.display = 'none';
                document.getElementById('container').style.display = 'none';
            } else if (data.media_type === 'video') {
                document.getElementById('apodVideo').src = data.url;
                document.getElementById('apodVideo').style.display = 'block';
                document.getElementById('container').style.display = 'block';
                document.getElementById('apodImg').style.display = 'none';
            }
        })
        .catch(error => console.error('Error fetching APOD:', error));
}

// Call the function to load APOD of selected
fetchAPOD()






//   let url= 'https://api.nasa.gov/planetary/apod?api_key=WnT3tM7yyIFoy87hCRiEM4LolX43DCiEKfVpshIs';

//   async function getData(url) {
//     let result = await fetch(url);
//     let jsonResult = await result.json();
//     console.log(jsonResult)
//     try {
//         let result = await fetch(url);
//         let jsonResult = await result.json();
//         let temperature = jsonResult.current.temp_c;
//         console.log(temperature);

//         let image = jsonResult.current.condition.icon;
//         let altText = jsonResult.current.condition.text;

//         const content = document.querySelector("#weather-info");
//         content.innerHTML =  `
//             <p>Right now temp is ...${temperature}</p>
//             <p>
//                 <img src=${image} alt=${altText}/> ${altText}
//             </p>
//         `


//     } catch(error) {
//         console.log('error:', error);

//     }
    
//   }
//   getData(url)