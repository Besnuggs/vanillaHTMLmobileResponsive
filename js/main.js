//Animate Smooth Scroll
const smoothScroll = () => {
    console.log('fuck if this is not firing')
    const images = $('#images').position().top;
    $('html, body').animate({
        scrollTop: images
    }, 900)
}

$('#view-work').on('click', smoothScroll)
console.log()
