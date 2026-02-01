document.addEventListener('DOMContentLoaded', function() {
    //const optionsLists = document.querySelectorAll('.select-box .options');
    const selectBoxes = document.querySelectorAll('.select-box');
    const selectOption = document.querySelectorAll('.select-box .option');
    //const selectOptionMulti = document.querySelectorAll('.select-box .f_chk');
    selectBoxes.forEach(e => {
      e.addEventListener('click', function() {
        
        if (e.classList.contains('disabled')) return;

        if(e.classList.contains('on')){
          closeAllOptions();
        }else{
          //e.querySelector('.options').classList.toggle('on');
          closeAllOptions();
          e.classList.toggle('on');
        }
      });
    });
    selectOption.forEach(e=>{
      e.addEventListener('click',(event)=>{
        event.stopPropagation();
        let selectBox = e.closest('.select-box');
        let selectInput = selectBox.querySelector('.select-input');
        selectInput.value = e.textContent;
        closeAllOptions();
      });
    });
    // selectOptionMulti.forEach(e=>{
    //   e.addEventListener('click',(event)=>{
    //     let selectBox = e.closest('.select-box');
    //     let selectInput = selectBox.querySelector('.select-input');
    //     let chked = selectBox.querySelectorAll('.f_chk input[type=checkbox]:checked');
    //     let chkCount = chked.length;
    //     let arr= []
    //     chked.forEach((chk)=>{
    //         arr.push(chk.closest('.f_chk').querySelector('.f_chk_txt').textContent)
    //     })
        
    //     if(chkCount > 0){
    //      // selectInput.value = chkCount + '개 선택' + ' ('+ arr.join(', ') +')'
    //       selectInput.value = arr.join(', ')
    //     }else{
    //       selectInput.value = '';
    //     }
        
    //   });
    // });
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.select-box')) {
        closeAllOptions();
      }
    });
    function closeAllOptions() {
      selectBoxes.forEach(e => {
        e.classList.remove('on');
      });
    }

    selectBoxes.forEach(e=>{
      if(e.querySelector('.f_chk')){
        let selectInput = e.querySelector('.select-input');
        let chked = e.querySelectorAll('.f_chk input[type=checkbox]:checked');
        let chkCount = chked.length;
        let arr= []
        chked.forEach((chk)=>{
            arr.push(chk.closest('.f_chk').querySelector('.f_chk_txt').textContent)
        })
        
        if(chkCount > 0){
          selectInput.value = chkCount + '개 선택' + ' ('+ arr.join(', ') +')' 
        }else{
          selectInput.value = '';
        }
      }
    });
    
    
    
    const nav = document.querySelector('.nav');
    const nav_close = document.querySelector('.nav_close');
    const nav_btn = document.querySelector('.btn_nav');

    nav_close.addEventListener('click',()=>{
        nav.classList.remove('on');
    });
    nav_btn.addEventListener('click',()=>{
        nav.classList.add('on');
    });
});


function reset(target){
  let this_form  = target.closest('form');
  this_form.reset();
}

function open_modal(target){
  const modal = document.querySelector('.modal.'+target+'');
  modal.classList.add('on');
}

function close_modal(target){
  const modal = target.closest('.modal');
  modal.classList.remove('on');
}