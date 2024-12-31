document.addEventListener("DOMContentLoaded", () => {
    const text = "人啊，认识你自己！点燃内心的火焰🔥";
    const typingSpeed = 100; // 每个字母出现的速度 (毫秒)
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typing").textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // 开始打字效果
    typeWriter();
});
