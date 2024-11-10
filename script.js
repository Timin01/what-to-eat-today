body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
    font-family: "微軟正黑體", sans-serif;
}

.container {
    text-align: center;
}

/* 外框設計 */
.wheel-outer {
    width: 320px;
    height: 320px;
    margin: 20px auto;
    border: 10px solid #333;
    border-radius: 50%;
    position: relative;
    background: #fff;
}

/* 指針設計 */
.pointer-container {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
}

.pointer {
    font-size: 40px;
    color: #ff0000;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
}

.wheel-container {
    width: 300px;
    height: 300px;
    margin: 10px;
    position: relative;
    overflow: hidden;
}

.wheel {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99);
}

.food-item {
    position: absolute;
    width: 50%;
    height: 50%;
    transform-origin: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    box-sizing: border-box;
}

.food-item span {
    transform: rotate(-60deg);
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-shadow: 1px 1px 1px rgba(255,255,255,0.5);
}

/* 為每個食物項目設置不同的背景顏色 */
.food-item:nth-child(1) { background: #FF9AA2; }
.food-item:nth-child(2) { background: #FFB7B2; }
.food-item:nth-child(3) { background: #FFDAC1; }
.food-item:nth-child(4) { background: #E2F0CB; }
.food-item:nth-child(5) { background: #B5EAD7; }
.food-item:nth-child(6) { background: #C7CEEA; }

button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background-color: #45a049;
}

.result {
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    min-height: 40px;
}
  
