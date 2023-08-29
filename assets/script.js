clock();

function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;

  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

  document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
}

setInterval(clock, 1000);




function copyText() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText
      ("#epouvaantail");
  var btn = document.querySelector("#discord-btn");
  btn.insertAdjacentHTML("beforebegin", 
  '<div class="copy" ><p>copy to the clipboard</p></div>');
  setTimeout('document.querySelector(".copy").remove(".copy")',1500)
}