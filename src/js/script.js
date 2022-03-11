// // timer start
// const showTimeLess = () => {
//     const addZero =  (x) => {return ((x < 10)? '0' : '') + x}
//     let timeLeft = Math.round (.001 * (sessionStorage.getItem ('timeset') - performance.now ()));
//     document.getElementById ('my_timer').textContent = [addZero(Math.floor (timeLeft / 3600)), addZero(Math.floor ((timeLeft / 60) % 60)), addZero  (timeLeft % 60)].join (':');
//     if (timeLeft) setTimeout (showTimeLess, 345);
// }
// let innerTimeLeft = document.getElementById ('my_timer').textContent.split (':');
//     sessionStorage.setItem ('timeset', (innerTimeLeft [0] * 3600 + innerTimeLeft [1] * 60 + +innerTimeLeft [2]) * 1000);
//     showTimeLess ();
// // timer end

// // start actual date
// const actualData = document.querySelector(`#actual_data`)
// let date = new Date();
// let output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
// actualData.append(output);
// //  actual date end

// // tel mask start
// inp.onclick = () => {
//     inp.value = "+38(0";
// }
// let old = 0;
// inp.onkeydown = () => {
//     let curLen = inp.value.length;
//     if (curLen < old){
//         old--;
//         return;
//     }
//     if (curLen == 7) inp.value = inp.value + ")";
//     if (curLen == 7) inp.value = inp.value + "-";
//     if (curLen == 12) inp.value = inp.value + "-"; 
//     if (curLen == 15) inp.value = inp.value + "-";  
//     if (curLen > 17) inp.value = inp.value.substring(0, inp.value.length - 1);
//     old++;
// }
// // tel mask end


const contant = document.querySelectorAll(`.content`);
const contentBuy = document.querySelectorAll(`.content__buy`);
contant.forEach( item => { 
    item.onmouseover = () => {
        console.log(`mause_on`);

        console.log(item.children[3]);
        console.log(item.classList);
        item.classList.add(`hover-shadow-content`)
        item.children[3].classList.add(`dspl-block-buy`)

    }
})
contant.forEach( item => { 
    item.onmouseout = () => {
        console.log(`mause_leave`);

        item.classList.remove(`hover-shadow-content`)
        item.children[3].classList.remove(`dspl-block-buy`)

    }
})
// rentItem.forEach( item => { 
//     item.onmouseover = (e) => {
//         // console.log(item.children[2]);
//         item.children[1].classList.add(`rentTextBlock`)
//         item.children[2].classList.add(`rentBtnBorder`)
//         // console.log(document.body.scrollHeight);
//         // console.log(window.pageYOffset); 
//     }
// })
// rentItem.forEach( item => { 
//     item.onmouseout = (e) => {
//         // console.log(item.children[1].classList);
//         item.children[1].classList.remove(`rentTextBlock`)
//         item.children[2].classList.remove(`rentBtnBorder`)
//     }
// })



