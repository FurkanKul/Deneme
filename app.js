document.getElementById('activityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const location = document.getElementById('location').value;
    const participants = document.getElementById('participants').value;
  
    if(title && location && participants) {
      const activity = document.createElement('div');
      activity.classList.add('activity');
      activity.innerHTML = `
        <h3>${title}</h3>
        <p>Konum: ${location}</p>
        <p>Katılımcı sayısı: ${participants}</p>
      `;
  
      document.getElementById('map').appendChild(activity);
      alert('Etkinlik başarıyla oluşturuldu!');
    } else {
      alert('Lütfen tüm alanları doldurun!');
    }
  });
  