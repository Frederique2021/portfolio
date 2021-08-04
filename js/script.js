  const isElementInViewport = element => {
    const rectangle = element.getBoundingClientRect();
    return (
      rectangle.top >= 0 &&
      rectangle.left >= 0 &&
      rectangle.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rectangle.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  // Fonction showElements
  const showElements = elements => {
    for (let i = 0; i < elements.length; i++) {
      if (isElementInViewport(elements[i])) {
        elements[i].classList.add("in-view");
      }
    }
  };
  
  // On appelle notre fonction pour qu'elle s'éxécute
  window.onload = () => {
    const elements = document.querySelectorAll(".experiences ul li");
    showElements(elements);
  
    window.addEventListener("resize", () => showElements(elements));
    window.addEventListener("scroll", () => showElements(elements));
  };

  // Sliders projet NOVART 

  const items = document.querySelectorAll('img');
  const nbSlide = items.length;
  const suivant = document.querySelector('.right');
  const precedent = document.querySelector('.left');
  let count = 0;

  function slideSuivante(){
      items[count].classList.remove('active');

        if(count < nbSlide - 1){
            count++;
        } else {
            count = 1;
        }

        items[count].classList.add('active')
  }
  suivant.addEventListener('click', slideSuivante)

  function slidePrecedente(){
      items[count].classList.remove('active');

        if(count > 1){
            count--;
        } else {
            count = nbSlide - 1;
        }

        items[count].classList.add('active')
        
  }
  precedent.addEventListener('click', slidePrecedente)
