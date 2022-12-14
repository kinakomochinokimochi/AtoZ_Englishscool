'use script';

// 三本線メニュー
const header_top_menuButton = document.getElementById("header_top_menuButton");
      menuButton_mask = document.getElementById("menuButton_mask");
      humbuger_menu =  document.getElementById("humbuger_menu");
      humbuger_menu_lists = document.querySelectorAll('.humbuger_menu_list > a');
      humbuger_menu_btn = document.getElementById("humbuger_menu_btn");

document.addEventListener('DOMContentLoaded',function() {
  header_top_menuButton.addEventListener('click',() => {
    header_top_menuButton.classList.toggle('active');
    menuButton_mask.classList.toggle('active');
    humbuger_menu.classList.toggle('active');
    
    humbuger_menu_lists.forEach(humbuger_menu_list => {
      humbuger_menu_list.addEventListener('click', () => {
        header_top_menuButton.classList.remove('active');
        menuButton_mask.classList.remove('active');
        humbuger_menu.classList.remove('active');
      });
    });
    humbuger_menu_btn.addEventListener('click', () => {
      header_top_menuButton.classList.remove('active');
      menuButton_mask.classList.remove('active');
      humbuger_menu.classList.remove('active');
      });
  });
});


// heroテキスト表示
const hero_txts = document.querySelectorAll(".hero_txts_txt");
window.addEventListener("load",() => {
  hero_txts.forEach( hero_txt => {
    hero_txt.classList.add('show');
  });
});


// スクロールしたらpageTopボタン表示
const pageTop = document.getElementById("pageTop");
let beforeScrollValue = 0;

window.addEventListener('scroll', () => {
  if(window.scrollY > beforeScrollValue){
    // 下にスクロールした場合の処理
    pageTop.classList.add('show');
  }
    // 上にスクロールしてTOPまできた場合の処理
  if(window.scrollY === 0){
    pageTop.classList.remove('show');
  }
  beforeScrollValue = window.scrollY;
});




// スクロール表示
const section_titles = document.querySelectorAll(".section_title");
const feature_lists = document.querySelectorAll(".feature_list_txt");
const voice_lists = document.querySelectorAll(".voice_list");

document.addEventListener("scroll", () => {
  section_titles.forEach( section_title => {
    const getElementDistance = section_title.getBoundingClientRect().top + section_title.clientHeight * 0.6;
    if(window.innerHeight > getElementDistance) {
      section_title.classList.add("show");
    }
  });
  feature_lists.forEach( feature_list => {
    const getElementDistance = feature_list.getBoundingClientRect().top + feature_list.clientHeight * 0.6;
    if(window.innerHeight > getElementDistance) {
      feature_list.classList.add("show");
    }
  });
  voice_lists.forEach( voice_list => {
    const getElementDistance = voice_list.getBoundingClientRect().top + voice_list.clientHeight * 0.6;
    if(window.innerHeight > getElementDistance) {
      voice_list.classList.add("show");
    }
  });
});

// FAQドロップメニュー
const FAQ_dts = document.querySelectorAll(".summary_card_txt_FAQ_dt");

FAQ_dts.forEach(FAQ_dt => {
  FAQ_dt.addEventListener('click', () => {
    FAQ_dt.classList.toggle("active");
    FAQ_dt.nextElementSibling.classList.toggle("active");
  });
});

// 個人保護法にチェックがはいったら確認ボタンを押せるようにする
const privacy_check = document.getElementById("privacy");
const form_submit = document.getElementById("form_submit");

privacy_check.addEventListener('change', () =>  {
  if(privacy_check.checked) {
    form_submit.classList.add("active");
    form_submit.style.cursor= "pointer";
  }
  else {
    form_submit.classList.remove("active");
    form_submit.style.cursor= "not-allowed";
  }
});