document.addEventListener("DOMContentLoaded", () => {
    const text = "人啊，认识你自己！点燃内心的火焰🔥";
    const typingSpeed = 100; // 每个字母出现的速度 (毫秒)
    let index = 0;

    const typingElement = document.getElementById("typing");

    function typeWriter() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // 创建 Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                typeWriter(); // 开始打字效果
                observer.disconnect(); // 打字效果触发后停止监听
            }
        });
    });

    // 观察目标元素
    observer.observe(typingElement);
});
