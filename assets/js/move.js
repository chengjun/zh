const img = document.getElementById('movingImg');
let x = 0;
let y = 0;
let speedX = 2;
let speedY = 2;

// 移动图片的函数
function animate() {
  // 更新位置
  x += speedX;
  y += speedY;

  // 边界检测（碰到窗口边缘反弹）
  if (x + img.width > window.innerWidth || x < 0) {
    speedX = -speedX;
  }
  if (y + img.height > window.innerHeight || y < 0) {
    speedY = -speedY;
  }

  // 应用位置
  img.style.left = x + 'px';
  img.style.top = y + 'px';

  // 循环执行
  requestAnimationFrame(animate);
  }

// 启动移动
animate();

