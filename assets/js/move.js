document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('movingImg');

  let x = 0;           // 初始水平位置
  let speedX = 2;      // 水平速度
  let direction = 1;   // 1 向右，-1 向左

  function animate() {
    x += speedX * direction;

    const containerWidth = img.parentElement.offsetWidth;
    const maxX = containerWidth - img.width;

    // 碰到左右边界反弹
    if (x >= maxX) direction = -1;
    if (x <= 0) direction = 1;

    img.style.left = x + 'px';

    requestAnimationFrame(animate);
  }

  animate();

  // 窗口大小改变时，保证图片仍在容器内
  window.addEventListener('resize', () => {
    const containerWidth = img.parentElement.offsetWidth;
    if (x + img.width > containerWidth) x = containerWidth - img.width;
  });
});
