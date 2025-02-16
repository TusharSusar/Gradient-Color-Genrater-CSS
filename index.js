  const btn = document.getElementById('btn');
  const color = document.querySelector('.colCode')
  
  const changeCol = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let col = Math.floor(Math.random() * 100);
  let opacity = Math.random().toFixed(2);
  let r2 = Math.floor(Math.random() * 255);
  let g2 = Math.floor(Math.random() * 255);
  let b2 = Math.floor(Math.random() * 255);
  let col2 = Math.floor(Math.random() * 100);
  let opacity2 = Math.random().toFixed(2);
  
  let deg = 90;
  
  // let bodyCol = document.body.style.backgroundImage = `linear-gradient(${deg}deg, rgba(${r},${g},${b},${opacity}) 50%, rgba(${r2},${g2},${b2},${opacity}) 100%)`
  let bodyCol = document.body.style.backgroundImage = `linear-gradient(to right, rgb(${r},${g},${b}), rgb(${r2},${g2},${b2}))`
  
  color.textContent = `${bodyCol}`
  }
  
  btn.addEventListener('click', changeCol);
  
  color.addEventListener('click', () => {
  alert(`Color Copied to Clicpboard`)
  navigator.clipboard.writeText(color.innerText);
  })
