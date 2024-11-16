document.addEventListener('DOMContentLoaded', function() {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spinButton');
    const result = document.getElementById('result');
    let spinning = false;
    let currentRotation = 0;  // 追蹤目前的旋轉角度

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
        
        // 計算新的旋轉角度
        const extraSpins = 5; // 至少轉 5 圈
        const baseRotation = extraSpins * 360;
        const randomRotation = Math.random() * 360;
        const totalRotation = baseRotation + randomRotation;
        
        // 設置轉動動畫
        wheel.style.transition = 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
        wheel.style.transform = `rotate(${totalRotation}deg)`;
        currentRotation = totalRotation;
        
        setTimeout(() => {
            spinning = false;
            const finalRotation = totalRotation % 360;
            const itemIndex = Math.floor((360 - finalRotation) / 60) % 6;
            const selectedFood = items[itemIndex].querySelector('span').textContent;
            result.textContent = `今天吃：${selectedFood}！`;
        }, 3000);
    });
}); 
