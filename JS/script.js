const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

// Lets divide our canvas into 10 by 10 small squares  
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;



ctx.fillStyle = "#ff0";
// ctx.strokeStyle = "green";
ctx.fillRect(100, 25, scale, scale);
// ctx.strokeRect(food.x, food.y,scale,scale);