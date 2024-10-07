function toggleMenu() {
  const sideMenu = document.getElementById("side-menu");
  if (sideMenu.classList.contains("closed")) {
      sideMenu.classList.remove("closed");
      sideMenu.classList.add("open");
  } else {
      sideMenu.classList.remove("open");
      sideMenu.classList.add("closed");
  }
}
// Pop-up açma fonksiyonu
function openPopup(buttonType) {
  var popup = document.getElementById('popup');
  var popupText = document.getElementById('popup-text');

  if (buttonType === 'katil') {
      popupText.innerHTML = 'Katılma Ekranı';
  } else if (buttonType === 'olustur') {
      popupText.innerHTML = 'Oluşturma Ekranı';
  }

  popup.style.display = 'flex';
}

// Pop-up kapatma fonksiyonu
function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
} 