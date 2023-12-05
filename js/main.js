function hoverImage() {
    var image = document.getElementById('myImage');
    image.src = 'image/awake.png';
}
  
function changeImageSource() {
    var image = document.getElementById('myImage');
    var currentSource = image.src;
  
    
    if (currentSource.includes('sleep.png')) {
      image.src = 'image/awake.png';
    } else {
      image.src = 'image/sleep.png';
    }
  
   
    window.location.href = 'game.html'; // Change to the desired page URL
}
  
function restoreImage() {
    var image = document.getElementById('myImage');
    image.src = 'image/sleep.png';
}