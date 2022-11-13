let phrases = [
    { text: 'выбирать новую тачку', image: 'images/auto.jpg' },
    { text: 'ходить в горы', image: 'images/gor.jpg' },
    { text: 'валять пушка', image: 'images/push.jpg' },
    { text: 'смотреть, как делается ремонт', image: 'images/rem.jpg' },
    { text: 'играть в воллейбол', image: 'images/vb.gif' },
    { text: 'смотреть видюшки', image: 'images/vid.jpg' },
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }

  function updatecontent() {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  }
  
  let button = document.getElementById('nextidea');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    updatecontent()
  });

let intervalID = setInterval(() => {
    updatecontent()
  }, 3000);

setTimeout(()=>{
    clearInterval(intervalID)
}, 9000);