document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('movingImg');

  // 初始位置在屏幕中间
  let x = (window.innerWidth - img.width) / 2;
  let y = (window.innerHeight - img.height) / 2;

  let speedX = 2;  // 水平速度
  let speedY = 2;  // 垂直速度

  function animate() {
    x += speedX;
    y += speedY;

    // 边界反弹
    if (x + img.width > window.innerWidth || x < 0) speedX = -speedX;
    if (y + img.height > window.innerHeight || y < 0) speedY = -speedY;

    img.style.left = x + 'px';
    img.style.top = y + 'px';

    requestAnimationFrame(animate);
  }

  animate();

  // 窗口大小改变时，保证图片仍在可视区域
  window.addEventListener('resize', () => {
    if (x + img.width > window.innerWidth) x = window.innerWidth - img.width;
    if (y + img.height > window.innerHeight) y = window.innerHeight - img.height;
  });
});
