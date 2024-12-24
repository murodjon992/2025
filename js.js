var tabrik = document.querySelector('.tabrik');
tabrik.innerHTML = tabrik.textContent.replace(/\S/g,'<span>$&</span>')

const animation = anime.timeline({
  targets: '.tabrik span',
  easing: 'easeInOutExpo',
  loop:true
});
animation.add({
  rotate: function(){
      return anime.random(-360,360)
  },
  translateX: function(){
      return anime.random(-600,600)
  },
  translateY: function(){
      return anime.random(-400,400)
  },
  duration: 7000,
  delay: anime.stagger(100)
})
.add({
  rotate:0,
  translateX:0,
  translateY:0,
  duration:7000,
  delay: anime.stagger(80)
})


function vaqt(){
    const sekund = 1000,
    minut = sekund * 60,
    soat = minut * 60,
    kun = soat * 24;

    
    let yangi_yil = 'Jan 1, 2025 00:00:00',
    countDown = new Date(yangi_yil).getTime(),

    x = setInterval(function () {
        let now = new Date().getTime(),
        distance = countDown - now
        
        if(countDown - now < 0) {
            tabrik.style.opacity = 1
        } 
        document.getElementById('days').innerHTML = Math.floor(distance / (kun))
        document.getElementById('hours').innerHTML = Math.floor((distance % (kun)) / (soat))
        document.getElementById('minutes').innerHTML = Math.floor((distance % (soat)) / (minut))
        document.getElementById('seconds').innerHTML = Math.floor((distance % (minut)) / (sekund))
         
    });

    
}

vaqt()