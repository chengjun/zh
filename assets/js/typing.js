<script>
    const text = "王成军，南京大学新闻传播学院教授、博士生导师，计算传播学实验中心主任，紫金传媒智库高级研究员，中国新闻史学会智能与计算传播专委会副理事长（2024-2026），兼任香港城市大学互联网挖掘实验室研究员。他致力于采用计算社会科学视角研究人类传播行为，包括信息扩散、注意力流动和计算叙事，其研究成果发表于SSCI和SCI索引的期刊。近年主要研究兴趣为：一、发展叙事瀑流模型，开展一系列国际传播的计算叙事研究；二、构建计算中心论，提炼计算传播学的理论逻辑。出版专著《跨越网络的门槛：社交媒体上的信息扩散》（2022）；合著《计算传播学导论》(第2版，2024)、《社交网络上的计算传播学》(2015)。";
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
    window.onload = typeWriter;
</script>
