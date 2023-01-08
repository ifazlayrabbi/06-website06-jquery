
// document.getElementsByTagName('h1')[0].style.color='green';
// document.getElementsByTagName('button')[0].style.color='red';

// set value - one css property
$('button').css('color', 'blue')
$('h1').css('font-size', '3rem')
$('h1').css('color', 'green')



// see value - one css property
console.log($('h1').css('font-size'))
console.log($('p').css('font-size'))




// add class
$('h1').addClass('large property')
// $('h1').addClass('large')
// $('h1').removeClass('large property')

// document.getElementsByTagName('h1')[0].classList.add('large')
// document.getElementsByTagName('h1')[0].classList.add('property')
// document.getElementsByTagName('h1')[0].classList.remove('large')
// document.getElementsByTagName('h1')[0].classList.toggle('large')

// query the existance of a class
console.log($('h1').hasClass('large'))








// attribute = href, target, src, alt, style, class, id, height, width, type, value 
// change attribute values


// document.getElementsByTagName('a')[0].setAttribute('href', 'https://www.google.com');
$('a').attr('href', 'https://www.google.com')

// console.log(document.getElementsByTagName('a')[0].getAttribute('href'));
console.log($('a').attr('href'))
console.log($('img').attr('src'))
console.log($('h1').attr('class'))
console.log($('h1').attr('style'))

console.log(document.getElementsByTagName('img')[0].attributes)
console.log(document.getElementsByTagName('h1')[0].attributes)







// add text
$('h1').text('jQuery')
// $('h1').html('<em>click</em>')
// document.querySelector('h1').textContent='good'
// document.querySelector('h1').innerHTML='<i>ABC</>'








// $('h1').click(function(){
//     $('h1').css('color', 'purple')
//     setTimeout(function(){$('h1').css('color', 'green')}, 500)
// })
$('h1').on('mouseover', function(){
    $('h1').css('color', 'purple')
    setTimeout(function(){
        $('h1').css('color', 'green')}, 500)
})

$('input').keydown(function(event){
    // console.log(event.key)
})
$(document).keydown(function(event2){
    $('p').text(event2.key)
})
// text = textContent, html = innerHTML
// document.getElementsByTagName('p')[1].innerHTML = event2.key








$('button').click(function(){
    // console.log(this)
    // console.log(this.innerHTML)
    $('input').attr('value', this.innerHTML)
})
// $(document).keydown(function(event){
//     console.log(event.key)
// })

// for(var i=0; i<7; i++)
//     document.getElementsByTagName('button')[i].addEventListener('click', function(){
//         // console.log(this)
//         // console.log(this.innerHTML)
//         document.getElementsByTagName('input')[0].setAttribute('value', this.innerHTML)
//     })

// document.addEventListener('keydown', function(event){
//     console.log(event.key)
// })






// add or remove elements

// $('p').before('<input type="submit">')
// $('p').after('<input type="submit">')
// $('p').append('<input type="submit">')
// $('p').prepend('<input type="submit">')
// $('button').remove()




// jquery animation

$('button').click(function(){
    // $('a').hide()
    // $('a').show()
    // $('a').toggle()

    // $('a').fadeOut()
    // $('a').fadeIn()
    // $('a').fadeToggle()

    // $('a').slideUp()
    // $('a').slideDown()
    // $('a').slideToggle()

    // $('a').animate({opacity: 0.5})
    // $('a').animate({margin: '50%'})
    // $('a').animate({backgroundColor: "#FFFFFF"}, 1500)

    // $('a').slideUp().slideDown().animate({opacity: 0.5})
    $('a').slideUp().delay(800).fadeIn()
})







let buttonNumbers = $('button').length
console.log(buttonNumbers)



$('button').click(function(){
    let letter = this.innerHTML
    // console.log(letter)
    playSound(letter)
})
$(document).keydown(function(event){
    // console.log(event.key)
    playSound(event.key)
})





// for(let i=0; i<buttonNumbers; i++)
//     document.getElementsByTagName('button')[i].addEventListener('click', function(){
//         var letter = this.innerHTML
//         playSound(letter)
//     })



function playSound(letter){
    console.log(letter)
    switch(letter){
        case 'w':
            var sound = new Audio('sounds/tom-1.mp3')
            sound.play()
            break
        case 'a':
            sound = new Audio('sounds/tom-2.mp3')
            sound.play()
            break
        case 's':
            sound = new Audio('sounds/tom-3.mp3')
            sound.play()
            break
        case 'd':
            sound = new Audio('sounds/tom-4.mp3')
            sound.play()
            break
        case 'j':
            sound = new Audio('sounds/snare.mp3')
            sound.play()
            break
        case 'k':
            sound = new Audio('sounds/kick-bass.mp3')
            sound.play()
            break
        case 'l':
            sound = new Audio('sounds/crash.mp3')
            sound.play()        
    
    }
}







