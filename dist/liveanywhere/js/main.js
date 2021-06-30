// function chatInit(selector) {
//   document.addEventListener('DOMContentLoaded', () => {
//     if (!window.LIVE_CHAT_UI) {
//       let chat = document.querySelector(selector);
//       let toggles = chat.querySelectorAll('.toggle')
//       let close = chat.querySelector('.close')
//       let input = chat.querySelector('.chat-input');
//       let messages = chat.querySelector('.messages');
      
//       window.setTimeout(() => {
//         chat.classList.add('is-active')
//       }, 1000)
      
//       toggles.forEach( toggle => {
//         toggle.addEventListener('click', () => {
//           chat.classList.add('is-active')
//         })
//       })
      
//       close.addEventListener('click', () => {
//         chat.classList.remove('is-active')
//       })
      
//       document.onkeydown = function(evt) {
//           evt = evt || window.event;
//           var isEscape = false;
//           if ("key" in evt) {
//               isEscape = (evt.key === "Escape" || evt.key === "Esc");
//           } else {
//               isEscape = (evt.keyCode === 27);
//           }
//           if (isEscape) {
//               chat.classList.remove('is-active')
//           }
//       };

//       input.addEventListener('keyup', function(evt) {
//         const message = this.value;
//         console.log(message);
//         if (evt.key === 'Enter' || evt.keyCode === 13) {


//           let messageStr = message.toString();
//           let div = document.createElement("div");
//           div.classList.add('message');
//           let p = document.createElement("p")
//           p.classList.add('text');

//           p.innerHTML = message;
//           div.append(p);

//           messages.append(div);
//           console.log(this);
//           this.value = '';
//           console.log(div);
//         }
//       })
      
//       window.LIVE_CHAT_UI = true
//     }
//   })
// }

// chatInit('#chat-app')


(function () {
  $('p').addClass('wow');
  $('p').attr('data-wow-offset', 400)
  $('p.art').addClass('fadeInLeft');
  $('p.fench').addClass('fadeInRight');
  $('p.speaker').addClass('fadeInUp', 500);

  new WOW().init();
})()