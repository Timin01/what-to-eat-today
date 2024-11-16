document.addEventListener('DOMContentLoaded', function() {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spinButton');
    const result = document.getElementById('result');
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
        result.textContent = '';
        
        // 隨機旋轉角度（確保至少轉10圈）
        wheel.style.transition = 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
        const rotation = 3600 + Math.random() * 360;
        wheel.style.transform = `rotate(${rotation}deg)`;
        
        setTimeout(() => {
            spinning = false;
            const finalRotation = rotation % 360;
            const itemIndex = Math.floor((360 - (finalRotation % 360)) / 60);
            const selectedFood = items[itemIndex % 6].querySelector('span').textContent;
            result.textContent = `今天吃：${selectedFood}！`;
        }, 3000);
    });
}); 
