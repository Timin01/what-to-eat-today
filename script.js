document.addEventListener('DOMContentLoaded', function() {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spinButton');
    let spinning = false;

    // 設置食物項目的位置
    const items = document.querySelectorAll('.food-item');
    items.forEach((item, index) => {
        const rotation = (index * 60) + 'deg';
        item.style.transform = 'rotate(' + rotation + ')';
    });

    spinButton.addEventListener('click', function() {
        if (spinning) return;
        spinning = true;
        
        // 隨機旋轉角度
        const rotation = 3600 + Math.random() * 360;
        
        wheel.style.transform = `rotate(${rotation}deg)`;
        
        setTimeout(() => {
            spinning = false;
        }, 3000);
    });
});
