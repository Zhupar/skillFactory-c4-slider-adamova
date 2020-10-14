const btnLeft = document.getElementById("btn-left")
const btnRight = document.getElementById("btn-right")
const collImg = document.getElementsByClassName('img')
const arrImg = Array.from(collImg)

let i=0
arrImg[i].setAttribute('style','display: block')
btnLeft.addEventListener('click', function(event){
	arrImg.forEach( function(element, index) {
		element.removeAttribute('style')
	})
	
	if (i>0){
		arrImg[--i].setAttribute('style','display: block')
		
	} else {
		i=arrImg.length-1
		arrImg[i].setAttribute('style','display: block')
		
	}
})

btnRight.addEventListener('click', function(event){
	arrImg.forEach( function(element, index) {
		element.removeAttribute('style')
	})
	if (i<arrImg.length){
		arrImg[i++].setAttribute('style','display: block')
	} else {
		i=0
		arrImg[i].setAttribute('style','display: block')
		i++
	}
})
	

