let sliderButtons = document.getElementsByClassName('sliderPass')
let slider = document.querySelector('#sliderDiv')
let sliderInner = document.querySelector('#sliderDiv div')
let sliderPosition = 0

Object.values(sliderButtons).forEach((element) => {
    element.addEventListener('click', ()=>{
        if(element.id == 'sliderForward' && sliderPosition/slider.clientWidth * -1 != sliderInner.childElementCount - 1){
            sliderInner.style.transform = `translateX(${sliderPosition - slider.clientWidth}px)`
            sliderPosition -= slider.clientWidth
            sliderButtons[0].classList.remove('sliderPassHidden')
            if(sliderPosition/slider.clientWidth * -1 != sliderInner.childElementCount - 2){
                sliderButtons[1].classList.add('sliderPassHidden')
            }
        } else if(element.id == 'sliderBackward' && sliderPosition/slider.clientWidth * -1 != 0){
            sliderInner.style.transform = `translateX(${sliderPosition + slider.clientWidth}px)`
            sliderPosition += slider.clientWidth
            sliderButtons[1].classList.remove('sliderPassHidden')
            if(sliderPosition/slider.clientWidth * -1 == 0){
                sliderButtons[0].classList.add('sliderPassHidden')
            }
        }
    })
});
