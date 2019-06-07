var width, height;
var sizeContainer = document.getElementById('size');
$(window).on('load resize', function() {
    width = this.innerWidth;
    height = this.innerHeight;
    sizeContainer.innerHTML = width + 'x' + height; // For demo purposes
});
