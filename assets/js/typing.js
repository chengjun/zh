document.addEventListener("DOMContentLoaded", () => {
    const text = "《寄黄几复》    北宋·黄庭坚    我居北海君南海，寄雁传书谢不能。  桃李春风一杯酒，江湖夜雨十年灯。  持家但有四立壁，治病不蕲三折肱。  想见读书头已白，隔溪猿哭瘴溪藤。    人啊，认识你自己！点燃内心的火焰🔥 ";
    const typingSpeed = 150; // 每个字符出现的速度 (毫秒)
    let index = 0;

    const typingElement = document.getElementById("typing");

    function typeWriter() {
        if (index < text.length) {
            // 检测连续双空格（作为换行触发标识）
            if (text.charAt(index) === ' ' && text.charAt(index + 1) === ' ') {
                typingElement.innerHTML += '<br>'; // 插入换行标签
                index += 2; // 跳过两个空格，避免重复渲染
            } else {
                typingElement.innerHTML += text.charAt(index); // 渲染普通字符
                index++;
            }
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // 创建 Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.disconnect(); // 停止观察，避免重复触发
                }
            });
        },
        {
            threshold: 0.5, // 元素至少有 50% 可见时触发
            rootMargin: "0px 0px -10% 0px", // 调整视口范围，延迟触发
        }
    );

    // 观察目标元素
    observer.observe(typingElement);
});
