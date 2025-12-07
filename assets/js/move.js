document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('movingImg');

  let x = 0;
  let speedX = 2;
  let direction = 1;

  function animate() {
    x += speedX * direction;

    const containerWidth = img.parentElement.offsetWidth;
    const maxX = containerWidth - img.width;

    if (x >= maxX) direction = -1;
    if (x <= 0) direction = 1;

    img.style.left = x + 'px';

    requestAnimationFrame(animate);
  }

  animate();
});
