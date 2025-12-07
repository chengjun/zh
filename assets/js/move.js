const img = document.getElementById('movingImg');
let x = 0, speed = 1.5, direction = 1;

function animate() {
  const container = img.parentElement;
  const maxRight = container.offsetWidth - img.width;

  x += speed * direction;

  if (x >= maxRight) direction = -1;
  if (x <= 0) direction = 1;

  img.style.left = x + 'px';

  requestAnimationFrame(animate);
}

animate();
