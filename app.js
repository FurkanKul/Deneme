// Yan menüyü açma ve kapatma
function toggleMenu() {
  var menu = document.getElementById('side-menu');
  if (menu.classList.contains('open')) {
      menu.classList.remove('open');
  } else {
      menu.classList.add('open');
  }
}

// Pop-up açma fonksiyonu
function openPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'flex';
}

// Pop-up kapatma fonksiyonu
function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Form gönderme
document.getElementById('event-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Form verilerini işleyebilirsiniz.
  console.log('Etkinlik oluşturuldu!');
  closePopup();
});
