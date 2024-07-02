var first = `${`
\
<div id="raj-coder">Powered by <a id="raj-link" href="https://rajhacker2.blogspot.com">Raj Hacker</a></div></div>`}`; document.write(first)

const download = document.querySelector('.download-btn');
const process = document.querySelector('.process');
const countdown = document.querySelector('.countdown');

const pleaseWaitText = document.querySelector('.pleaseWait-text');



const manualDownloadText = document.querySelector('.manualDownload-text');


const manualDownloadLink = document.querySelector('.manualDownload-link');
var timeLeft = 6;

download.addEventListener('click', () => {
  download.style.display = "none";
  countdown.innerHTML = `<span>${timeLeft}</span> %`;
process.style.display = "block";
  var downloadTimer = setInterval(function timeCount() {
    timeLeft--;
    countdown.innerHTML = ` <span>${timeLeft}</span> %`;

    if (timeLeft <= 0) {
      clearInterval(downloadTimer); 
      
      
      
      pleaseWaitText.style.display = "block";

      
      countdown.style.display = "none";
      
      process.style.display = "none";
      window.location.href = download_href;
      
      manualDownloadLink.href = download_href;


      setTimeout(() => {
            
       
        pleaseWaitText.style.display = "none";
     manualDownloadText.style.display = "block";
        
      }, 1000);
    }
  }, 1000);
  
});

document.addEventListener('DOMContentLoaded', function() {
            var elementId = "raj-coder";
            
            var redirectURL = "https://rajhacker2.blogspot.com";

            var element = document.getElementById(elementId);

            if (element) {
                var elementStyle = window.getComputedStyle(element);
                if (elementStyle.display === 'none') {
                    window.location.href = redirectURL;
                }
            }
        });
        
        document.addEventListener('DOMContentLoaded', function() {
  var elementId = "raj-link";

  var redirectURL = "https://rajhacker2.blogspot.com";

  var element = document.getElementById(elementId);

  if (element) {
    var elementStyle = window.getComputedStyle(element);
    if (elementStyle.display === 'none') {
      window.location.href = redirectURL;
    }
  }
}); 
