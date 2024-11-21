// event => btn 이동
const eventLeftBtn = document.querySelector('.btn_l');
const eventRightBtn = document.querySelector('.btn_r');

eventRightBtn.addEventListener('click',function(){
    const event_wrap = document.querySelector('.main_area');
    const events = document.querySelectorAll('.main_area>div');
    const eventWidth = events[0].offsetWidth;
    const lastEvent = events[events.length-1];
    event_wrap.prepend(lastEvent);

    event_wrap.style.transition = 'none';
    event_wrap.style.transform = `translateX(-${eventWidth}px)`;
    setTimeout(() => {
        event_wrap.style.transition = 'transform .3s ease';
        event_wrap.style.transform = 'translateX(0)';
    }, 0);
});

eventLeftBtn.addEventListener('click',function(){
    const event_wrap = document.querySelector('.main_area');
    const events = document.querySelectorAll('.main_area>div');
    const eventWidth = events[0].offsetWidth;

    event_wrap.style.transition = 'transform .3s ease';
    event_wrap.style.transform = `translateX(-${eventWidth}px)`;
    setTimeout(() => {
        const firstEvent = events[0];
        event_wrap.appendChild(firstEvent);
        event_wrap.style.transition = 'none';
        event_wrap.style.transform = 'translateX(0)';
    }, 300);
});


// limit - slide
const carData = {
    domestic: [
    {
        name: '현대',
        img: 'img/domestic/c2-1.png',
        models: [
            { name: 'G90', img: 'img/domestic/hd_1.png' },
            { name: 'GV60', img: 'img/domestic/hd_2.png' },
            { name: 'GV70', img: 'img/domestic/hd_3.png' },
            { name: '넥쏘', img: 'img/domestic/hd_4.png' },
            { name: '디올뉴그랜저', img: 'img/domestic/hd_5.png' },
            { name: '디올뉴코나', img: 'img/domestic/hd_6.png' },
            { name: '베뉴', img: 'img/domestic/hd_7.png' },
            { name: '스타리아', img: 'img/domestic/hd_8.png' },
            { name: '쏠라티', img: 'img/domestic/hd_9.png' },
            { name: '아이오닉5', img: 'img/domestic/hd_10.png' },
            { name: '아이오닉6', img: 'img/domestic/hd_11.png' },
            { name: '캐스퍼', img: 'img/domestic/hd_12.png' },
            { name: '팰리세이드', img: 'img/domestic/hd_13.png' },
            { name: '포터2', img: 'img/domestic/hd_14.png' },
        ]
    },
    {
    name: '기아',
          img: 'img/domestic/c2-2.png',
          models: [
              { name: 'EV3', img: 'img/domestic/kia_1.png' },
              { name: 'EV9', img: 'img/domestic/kia_2.png' },
              { name: 'K3', img: 'img/domestic/kia_3.png' },
              { name: 'K5', img: 'img/domestic/kia_4.png' },
              { name: 'K8', img: 'img/domestic/kia_5.png' },
              { name: 'k9', img: 'img/domestic/kia_6.png' },
              { name: '니로 플러스', img: 'img/domestic/kia_7.png' },
              { name: '니로', img: 'img/domestic/kia_8.png' },
              { name: '니로EV', img: 'img/domestic/kia_9.png' },
              { name: '더뉴EV6', img: 'img/domestic/kia_10.png' },
              { name: '더뉴K8', img: 'img/domestic/kia_11.png' },
              { name: '레이', img: 'img/domestic/kia_12.png' },
              { name: '레이EV', img: 'img/domestic/kia_13.png' },
              { name: '모닝', img: 'img/domestic/kia_14.png' },
              { name: '봉고3', img: 'img/domestic/kia_15.png' },
              { name: '봉고3EV', img: 'img/domestic/kia_16.png' },
              { name: '셀토스', img: 'img/domestic/kia_17.png' },
              { name: '스포티지', img: 'img/domestic/kia_18.png' },
              { name: '쏘렌토', img: 'img/domestic/kia_19.png' },
              { name: '카니발', img: 'img/domestic/kia_20.png' },
          ]
      },
      {
        name: '쉐보레',
        img: 'img/domestic/c2-3.png',
        models: [
            { name: '올뉴콜로라도', img: 'img/domestic/Chevrolet_1.png' },
            { name: '타호', img: 'img/domestic/Chevrolet_2.png' },
            { name: '트래버스', img: 'img/domestic/Chevrolet_3.png' },
            { name: '트랙스 크로스오버', img: 'img/domestic/Chevrolet_4.png' },
            { name: '트레일블레이저', img: 'img/domestic/Chevrolet_5.png' },
        ]
      },
      {
        name: 'KGM',
        img: 'img/domestic/c2-4.png',
        models: [
            { name: '더 뉴 토레스', img: 'img/domestic/kgm_1.png' },
            { name: '렉스턴 뉴 아레나', img: 'img/domestic/kgm_2.png' },
            { name: '렉스턴 스포츠 칸', img: 'img/domestic/kgm_3.png' },
            { name: '렉스턴 스포츠', img: 'img/domestic/kgm_4.png' },
            { name: '액티언', img: 'img/domestic/kgm_5.png' },
            { name: '코란도 EV', img: 'img/domestic/kgm_6.png' },
            { name: '코란도', img: 'img/domestic/kgm_7.png' },
            { name: '토레스', img: 'img/domestic/kgm_8.png' },
            { name: '토레스EVX', img: 'img/domestic/kgm_9.png' },
            { name: '티볼리 에어', img: 'img/domestic/kgm_10.png' },
            { name: '티볼리', img: 'img/domestic/kgm_11.png' },
        ]
      },
      {
        name: '르노코리아',
        img: 'img/domestic/c2-5.png',
        models: [
            { name: 'QM6', img: 'img/domestic/renault_1.png' },
            { name: 'SM6', img: 'img/domestic/renault_2.png' },
            { name: '그랑 콜레오스', img: 'img/domestic/renault_3.png' },
            { name: '마스터', img: 'img/domestic/renault_4.png' },
            { name: '아르카나', img: 'img/domestic/renault_5.png' },
        ]
      },
  ],
  foreign: [
      {
          name: '벤츠',
          img: 'img/foreign/c1-1.png',
          models: [
              { name: 'GLC-Class', img: 'img/foreign/benz_1.png' },
              { name: 'G-Class', img: 'img/foreign/benz_2.png' },
              { name: 'Maybach GLS', img: 'img/foreign/benz_3.png' },
              { name: 'AMG GT', img: 'img/foreign/benz_4.png' },
              { name: 'S-Class', img: 'img/foreign/benz_5.png' },
              { name: 'Maybach', img: 'img/foreign/benz_6.png' },
              { name: 'C-Class', img: 'img/foreign/benz_7.png' },
              { name: 'EQS', img: 'img/foreign/benz_8.png' },
              { name: 'EQE', img: 'img/foreign/benz_9.png' },
          ]
      },
      {
          name: 'BMW',
          img: 'img/foreign/c1-2.png',
          models: [
              { name: '2 Series', img: 'img/foreign/bmw_1.png' },
              { name: '1 Series', img: 'img/foreign/bmw_2.png' },
              { name: 'New 2 Series', img: 'img/foreign/bmw_3.png' },
              { name: '6 Series', img: 'img/foreign/bmw_4.png' },
              { name: '4 Series', img: 'img/foreign/bmw_5.png' },
              { name: 'M5', img: 'img/foreign/bmw_6.png' },
              { name: 'iX3', img: 'img/foreign/bmw_7.png' },
              { name: 'M3', img: 'img/foreign/bmw_8.png' },
              { name: 'M4', img: 'img/foreign/bmw_9.png' },
          ]
      },
      {
          name: '아우디',
          img: 'img/foreign/c1-3.png',
          models: [
              { name: 'A7', img: 'img/foreign/Audi_1.png' },
              { name: 'e-tron', img: 'img/foreign/Audi_2.png' },
              { name: 'Q3', img: 'img/foreign/Audi_3.png' },
              { name: 'A6', img: 'img/foreign/Audi_4.png' },
              { name: 'Q8', img: 'img/foreign/Audi_5.png' },
              { name: 'Q7', img: 'img/foreign/Audi_6.png' },
              { name: 'A4', img: 'img/foreign/Audi_7.png' },
              { name: 'A5', img: 'img/foreign/Audi_8.png' },
              { name: 'e-tron GT', img: 'img/foreign/Audi_9.png' },
          ]
      },
      {
          name: '포드',
          img: 'img/foreign/c1-4.png',
          models: [
              { name: 'Explorer', img: 'img/foreign/ford_1.png' },
              { name: 'Bronco', img: 'img/foreign/ford_2.png' },
              { name: 'Ranger', img: 'img/foreign/ford_3.png' },
              { name: 'Expedition', img: 'img/foreign/ford_4.png' },
              { name: 'Mustang', img: 'img/foreign/ford_5.png' },
          ]
      },
      {
          name: '지프',
          img: 'img/foreign/c1-5.png',
          models: [
              { name: 'Renegade', img: 'img/foreign/jeep_1.png' },
              { name: 'Gladiator', img: 'img/foreign/jeep_2.png' },
              { name: 'Grand Cherokee', img: 'img/foreign/jeep_3.png' },
              { name: 'Avenger', img: 'img/foreign/jeep_4.png' },
              { name: 'Wrangler', img: 'img/foreign/jeep_5.png' },
          ]
      },
      {
          name: '벤틀리',
          img: 'img/foreign/c1-6.png',
          models: [
              { name: 'Continental GT', img: 'img/foreign/Bentley_1.png' },
              { name: 'Flying Spur', img: 'img/foreign/Bentley_2.png' },
              { name: 'Bentayga', img: 'img/foreign/Bentley_3.png' },
              { name: 'The New Flying Spur', img: 'img/foreign/Bentley_4.png' },
          ]
      },
      {
          name: '볼보',
          img: 'img/foreign/c1-7.png',
          models: [
              { name: 'XC90', img: 'img/foreign/volvo_1.png' },
              { name: 'S90', img: 'img/foreign/volvo_2.png' },
              { name: 'V90 Cross Country', img: 'img/foreign/volvo_3.png' },
              { name: 'C40 Recharge', img: 'img/foreign/volvo_4.png' },
              { name: 'XC60', img: 'img/foreign/volvo_5.png' },
              { name: 'XC40', img: 'img/foreign/volvo_6.png' },
              { name: 'XC40 Recharge', img: 'img/foreign/volvo_7.png' },
              { name: 'S60', img: 'img/foreign/volvo_8.png' },
              { name: 'V60 Cross Country', img: 'img/foreign/volvo_9.png' },
              { name: 'EX30', img: 'img/foreign/volvo_10.png' },
          ]
      },
      {
          name: '포르쉐',
          img: 'img/foreign/c1-8.png',
          models: [
              { name: '718 Boxster', img: 'img/foreign/Porsche_1.png' },
              { name: '718 Cayman', img: 'img/foreign/Porsche_2.png' },
              { name: '911', img: 'img/foreign/Porsche_3.png' },
              { name: 'Taycan', img: 'img/foreign/Porsche_4.png' },
              { name: 'Panamera', img: 'img/foreign/Porsche_5.png' },
              { name: 'Macan', img: 'img/foreign/Porsche_6.png' },
              { name: 'Cayenne', img: 'img/foreign/Porsche_7.png' },
              { name: 'The New Panam', img: 'img/foreign/Porsche_8.png' },
              { name: 'Macan Electric', img: 'img/foreign/Porsche_9.png' },
              { name: 'The new Taycan', img: 'img/foreign/Porsche_10.png' },
              { name: 'The New 911', img: 'img/foreign/Porsche_11.png' },
          ]
      },
      {
        name: '미니',
        img: 'img/foreign/c1-9.png',
        models: [
            { name: 'Clubman', img: 'img/foreign/mini_1.png' },
            { name: 'Convertible', img: 'img/foreign/mini_2.png' },
            { name: 'Countryman', img: 'img/foreign/mini_3.png' },
            { name: 'Cooper', img: 'img/foreign/mini_4.png' },
        ]
    },
  ]
};

function createCarBrandElement(car){
    const div = document.createElement('div');
    div.className = 'swiper-slide';
    div.innerHTML=`<div class="car-wrap" data-name="${car.name}"><img src="${car.img}" alt="${car.name}"><p>${car.name}</p></div>`;
    return div;
}

function createCarModelElement(model) {
    const div = document.createElement('div');
    div.className = 'selected-car';
    div.innerHTML = `<img src="${model.img}" alt="${model.name}"><p>${model.name}</p>`;
    return div;
}

function loadCarBrands(type) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = '';
    carData[type].forEach(car => {
        swiperWrapper.appendChild(createCarBrandElement(car));
    });
    swiperWrapper.style.transition = 'none';
    swiperWrapper.style.transform = 'translateX(0)';
}

function showCarModels(carName, type) {
    const selectedCarWrap = document.querySelector('.selectedCar_wrap');
    selectedCarWrap.innerHTML = '';
    const car = carData[type].find(c => c.name === carName);
    if (car) {
        car.models.forEach(model => {
            selectedCarWrap.appendChild(createCarModelElement(model));
        });
    }
}

function btnControlState(state){
    const leftBtn = document.querySelector('.swiper-button-prev');
    const rightBtn = document.querySelector('.swiper-button-next');
    if(state){
        leftBtn.style.display='inline-block';
        rightBtn.style.display='inline-block';
        leftBtn.addEventListener('click',() => {
            slideCards('left');
        });
        rightBtn.addEventListener('click',() => {
            slideCards('right');
        });
    }else{
        leftBtn.style.display='none';
        rightBtn.style.display='none';
        leftBtn.removeEventListener('click',() => {
            slideCards('left');
        });
        rightBtn.removeEventListener('click',() => {
            slideCards('right');
        });
    }
}

function slideCards(direction){
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const cards = Array.from(swiperWrapper.children).filter(card => card.style.display !== 'none');
    const cardWidth = cards[0].offsetWidth;
    const gap = 20;

    if( direction === 'left' ){
        const lastCard = cards[cards.length-1];
        swiperWrapper.prepend(lastCard);
        swiperWrapper.style.transition = 'none';
        swiperWrapper.style.transform = `translateX(-${cardWidth + gap}px)`;
        setTimeout(() => {
            swiperWrapper.style.transition = 'transform .3s ease';
            swiperWrapper.style.transform = 'translateX(0)';
        }, 0);
    }else if( direction === 'right' ){
        swiperWrapper.style.transition = 'transform .3s ease';
        swiperWrapper.style.transform = `translateX(-${cardWidth + gap}px)`;
        setTimeout(() => {
            const firstCard = cards[0];
            swiperWrapper.appendChild(firstCard);
            swiperWrapper.style.transition = 'none';
            swiperWrapper.style.transform = 'translateX(0)';
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const domesticBtn = document.querySelector('.domestic');
    const foreignBtn = document.querySelector('.foreign');
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const selectWrap = document.querySelector('.select_wrap');
    const closeBtn = document.querySelector('.select_wrap .out');
    const swiper = document.querySelector('.swiper');

    loadCarBrands('foreign');
    btnControlState(true);

    domesticBtn.addEventListener('click', (e) => {
        e.preventDefault();
        domesticBtn.classList.add('on');
        foreignBtn.classList.remove('on');
        swiper.style.justifyContent = 'center';

        loadCarBrands('domestic');
        btnControlState(false);
    });

    foreignBtn.addEventListener('click', (e) => {
        e.preventDefault();
        foreignBtn.classList.add('on');
        domesticBtn.classList.remove('on');
        loadCarBrands('foreign');
        btnControlState(true);
    });

    swiperWrapper.addEventListener('click', (e) => {
        const carWrap = e.target.closest('.car-wrap');
        if (carWrap) {
            const carName = carWrap.dataset.name;
            const type = domesticBtn.classList.contains('on') ? 'domestic' : 'foreign';
            showCarModels(carName, type);
        }

        if (window.innerWidth < 375) {
            selectWrap.style.display = 'none';
        } else {
            selectWrap.style.display = 'block';
        }
    });
    
    closeBtn.addEventListener('click', () => {
        selectWrap.style.display = 'none';
    });
});

// scroll btn
let links = gsap.utils.toArray("#only_desktop ul li a");

links.forEach(link => {
    let element = document.querySelector(link.getAttribute("href"));
    let linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top"
    });

    ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center"
    });

    link.addEventListener("click", e => {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
    });
});