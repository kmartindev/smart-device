const parallaxArea = document.querySelector('[data-el="parallax"]');
const layers = parallaxArea.querySelectorAll('[data-el="layer"]');

const parallax = (evt) => {
  const parallaxWidth = parallaxArea.offsetWidth;
  const parallaxHeight = parallaxArea.offsetHeight;
  const coordX = evt.clientX - parallaxWidth / 2;
  const coordY = evt.clientY - parallaxHeight / 2;

  layers.forEach((layer) => {
    const layerSpeed = layer.dataset.speed;
    const x = (coordX * layerSpeed).toFixed(0);
    const y = (coordY * layerSpeed).toFixed(0);
    layer.setAttribute('style', `transform: translate3d(${x}px, ${y}px, 0)`);
  });
};

const stopParallax = () => {
  layers.forEach((layer)=>{
    layer.removeAttribute('style');
  });
};

parallaxArea.addEventListener('mousemove', parallax);
parallaxArea.addEventListener('mouseout', stopParallax);
