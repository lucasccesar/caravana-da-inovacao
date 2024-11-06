let sliderButtons = document.querySelectorAll('.sliderPass');
let diaButtons = document.querySelectorAll('.diaButton');
let cronogramas = document.getElementById('cronogramas');
let sobreCards = document.querySelectorAll('.sobreCards');
let linkedin = document.querySelector('.palestranteInfoDesktop div div svg');

cronogramas.style.transform = `translateX(${cronogramas.clientWidth * -1}px)`;

Object.values(sliderButtons).forEach((element) => {
    element.addEventListener('click', () => {
        let slider = element.parentElement.children[1]; // slider
        let sliderInner = slider.firstElementChild; // sliderInner
        element.classList.contains('sliderForward'); // element.id == 'sliderForward'
        let currentSliderButtons = [element.parentElement.firstElementChild, element.parentElement.lastElementChild];

        console.log(sliderInner.dataset.position);

        if (element.classList.contains('sliderForward') == true && (sliderInner.dataset.position / slider.clientWidth) * -1 != sliderInner.childElementCount - 1) {
            sliderInner.style.transform = `translateX(${sliderInner.dataset.position - slider.clientWidth}px)`;
            sliderInner.dataset.position = `${sliderInner.dataset.position - slider.clientWidth}`;
            currentSliderButtons[0].classList.remove('sliderPassHidden');
            if ((sliderInner.dataset.position / slider.clientWidth) * -1 != sliderInner.childElementCount - 2) {
                currentSliderButtons[1].classList.add('sliderPassHidden');
            }
        } else if (element.classList.contains('sliderBackward') == true && (sliderInner.dataset.position / slider.clientWidth) * -1 != 0) {
            sliderInner.style.transform = `translateX(${parseInt(sliderInner.dataset.position) + parseInt(slider.clientWidth)}px)`;
            sliderInner.dataset.position = `${parseInt(sliderInner.dataset.position) + parseInt(slider.clientWidth)}`;
            currentSliderButtons[1].classList.remove('sliderPassHidden');
            if ((sliderInner.dataset.position / slider.clientWidth) * -1 == 0) {
                currentSliderButtons[0].classList.add('sliderPassHidden');
            }
        }
    });
});

diaButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
        func(element, index);
    });
});

function func(e, i) {
    if (e.classList.contains('diaIndisponivel') != true) {
        cronogramas.style.transform = `translateX(${cronogramas.clientWidth * i * -1}px)`;
        document.querySelector('.diaSelecionado').classList.remove('diaSelecionado');
        e.classList.add('diaSelecionado');
    }
}

sobreCards.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        e.lastElementChild.style.height = `${e.lastElementChild.firstElementChild.clientHeight}px`;
        e.firstElementChild.classList.add('svgShrink');
        console.log(e.lastElementChild.firstElementChild.clientHeight);
    });
    e.addEventListener('mouseleave', () => {
        e.lastElementChild.style.height = `0px`;
        e.firstElementChild.classList.remove('svgShrink');
        console.log(e.lastElementChild.firstElementChild.clientHeight);
    });
});
