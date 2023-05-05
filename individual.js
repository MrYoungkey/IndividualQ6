// Form validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');

form.addEventListener('submit', (event) => {
  if (nameInput.value === '' || emailInput.value === '' || commentsInput.value === '') {
    event.preventDefault();
    alert('Please fill out all fields.');
  }
});

// Google Maps integration
function initMap() {
  // Replace latitude and longitude with your own coordinates
  const myLatLng = { lat: 6.0987, lng: 39.2207 };
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng,
  });
  
  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: 'My Location',
  });
}