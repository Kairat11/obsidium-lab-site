(function(){
  // Контакты бизнеса. Замените на настоящие перед запуском.
  // WHATSAPP: только цифры, с кодом страны, например 77011234567.
  var CONTACTS={whatsapp:"77475891209",whatsappLabel:"+7 747 589 12 09",telegram:"obsidium_lab",instagram:"obsidium_lab"};
  // Telegram и Instagram: имя без @. Пустое значение скрывает эту строку в контактах.

  var KK={
    "draft":"Сайттың жобасы: бағалар, фотолар мен байланыстар әзірге шамамен.",
    "nav1":"Қызметтер","nav2":"Дүкен","nav3":"Тапсырыс","nav4":"Сұрақтар",
    "eyebrow":"Астанада 3D басып шығару",
    "h1":"Моделіңізді басып шығарамыз немесе <em>оны нөлден жасаймыз</em>",
    "lead":"Дайын файлды жіберіңіз, біз оны мұқият басып шығарамыз. Тек идея ғана бар ма? Бөлшекті, ойыншықты немесе сыйлықты модельдеп, дайын бұйымды Астана бойынша жеткіземіз.",
    "cta1":"Өтінім қалдыру","cta2":"Дайын бұйымдар",
    "spec1":"қабат 0,12 мм-ден","spec2":"390 × 390 × 340 мм-ге дейін","spec3":"PLA, бірнеше түс",
    "f1b":"Бір сағатта жауап","f1":"жұмыс уақытында","f2b":"Kaspi","f2":"аударым немесе QR","f3b":"Жеткізу","f3":"Астана бойынша немесе өзі алып кету","f4b":"Фото","f4":"тапсырысты жібермес бұрын",
    "s-eyebrow":"Екі қызмет","s-h2":"Неден бастайтыныңызды таңдаңыз","s-p":"Модель файлы болса, бұл қарапайым басып шығару. Тек идея, эскиз немесе фото болса, модельдеуі бар толық қызмет.",
    "p-title":"Моделіңізді басып шығару","p-pill":"файл бар","p-price":"70 ₸-ден","p-unit":"грамына","p-note":"Нақты бағаны файлды тексергеннен кейін айтамыз. Ең аз тапсырыс 2 000 ₸.","p-extra":"Тіректерді алып тастау бағаға кіреді · Ертеңге шұғыл тапсырыс: +30%","d-terms":"Алдын ала төлем 50%, екі рет түзету бағаға кіреді. Күрделі жобалардың бағасын бөлек есептейміз.",
    "p-text":"Сіз STL, 3MF немесе OBJ жібересіз. Біз модельді тексеріп, баптауларды таңдап, басып шығарамыз.",
    "p-s1":"Файлды және түс бойынша тілегіңізді жібересіз","p-s2":"Нақты баға мен мерзімді айтамыз","p-s3":"Басып шығарамыз, фото жібереміз, жеткіземіз","p-btn":"Басып шығаруға тапсырыс",
    "d-title":"Толық қызмет: идеядан бұйымға дейін","d-pill":"идея бар","d-price":"15 000 ₸-ден","d-unit":"модельдеу және басып шығару",
    "d-text":"Не керек екенін сипаттаңыз: қосалқы бөлшек, органайзер, мүсінше, есімі жазылған сыйлық. Біз 3D-модель жасап, оны басып шығарамыз.",
    "d-s1":"Идеяңызды айтасыз, фото немесе өлшемдерін жібересіз","d-s2":"3D-модельді көрсетіп, түзетулерді келісеміз","d-s3":"Басып шығарып, дайын бұйымды тапсырамыз","d-btn":"Идеяны талқылау",
    "c-title":"Басып шығарудың шамамен құны","c-grams":"Модель салмағы, г","c-qty":"Саны, дана","c-mat":"Материал","c-o1":"PLA","c-o2":"PETG, беріктірек","c-o3":"PLA, бірнеше түс","c-total":"Барлығы шамамен",
    "c-note":"Модель салмағын слайсер көрсетеді. Салмағын білмейсіз бе? Файлды жіберіңіз, өзіміз есептейміз. Ең аз тапсырыс 2 000 ₸.",
    "sh-eyebrow":"Дүкен","sh-h2":"Дайын бұйымдар","sh-p":"Астанада 2–3 күнде тапсырыспен басып шығарамыз. Суретте 3D-визуализация, түсін таңдауға болады.","render":"3D-визуализация","buy":"Тапсырыс беру",
    "pr1":"VOXEL науасы","pr1d":"Кілт, сақина және ұсақ заттарға. Ø 19 см, күңгірт ақ.",
    "pr2":"SNOOVA органайзері","pr2d":"Биіктігі әртүрлі 5 бөлік, тұғырымен, 15,6 × 15,6 см.",
    "pr3":"STACKSEY косметика органайзері","pr3d":"3 қабат және қылқаламдарға арналған стақан, 22 × 16 × 14 см.",
    "sh-note":"Модельдер дизайны: simiu, коммерциялық лицензия бойынша.",
    "o-eyebrow":"Өтінім","o-h2":"Не басып шығару керек екенін айтыңыз","o-p":"Баға мен мерзімін айтып жауап береміз. Модель файлын немесе өлшемдері бар фотоны тіркеуге болады.",
    "seg1":"Модельді басып шығару","seg1s":"менде файл бар","seg2":"Толық қызмет","seg2s":"менде идея бар",
    "f-name":"Аты-жөніңіз","f-phone":"Телефон немесе WhatsApp","submit":"WhatsApp-қа жіберу",
    "q-eyebrow":"Сұрақтар","q-h2":"Жиі қойылатын сұрақтар",
    "q1":"Басып шығару қанша уақыт алады?","a1":"Шағын бұйымдар 1–2 күнде дайын болады. Ірі немесе күрделі модельдерге бір аптаға дейін кетуі мүмкін. Нақты мерзімді жұмыс басталмас бұрын айтамыз.",
    "q2":"Өз моделім болмаса, оны қайдан табуға болады?","a2":"Дайын модельдер Thangs және Printables сияқты сайттарда бар. Сілтемені жіберіңіз, модельдің басып шығаруға жарамдылығын тексереміз. Немесе толық қызметті таңдаңыз, біз бәрін өзіміз модельдейміз.",
    "q3":"Қандай материалдар мен түстер бар?","a3":"Қазір PLA-дан басып шығарамыз. Бұл ойыншықтарға, декорға және тұрмыстық заттарға арналған берік әрі қауіпсіз пластик. Түстер саны көбейіп келеді, қажетті түсті өтінімде көрсетіңіз.",
    "q4":"Қалай төлеуге болады?","a4":"Kaspi арқылы: аударым немесе QR. Толық қызмет үшін модель келісілгеннен кейін 50% алдын ала төлем аламыз.",
    "ft1":"Obsidium Lab · Астана","ft2":"ЖК · 3D басып шығару және модельдеу"
  };
  var FORM={
    ru:{print:["Что печатаем? Размер, цвет, количество","Например: держатель для наушников, чёрный, 2 штуки","Заявка откроется в WhatsApp. Файл модели (STL, 3MF, OBJ) или фото прикрепите прямо в чате."],
        design:["Опишите идею: что это, для чего, примерные размеры","Например: органайзер для специй в шкаф шириной 40 см","Заявка откроется в WhatsApp. Фото или эскиз можно прикрепить прямо в чате."]},
    kk:{print:["Не басып шығарамыз? Өлшемі, түсі, саны","Мысалы: құлаққап ұстағышы, қара, 2 дана","Өтінім WhatsApp-та ашылады. Модель файлын (STL, 3MF, OBJ) немесе фотоны чатқа тіркеңіз."],
        design:["Идеяңызды сипаттаңыз: бұл не, не үшін, шамамен өлшемдері","Мысалы: ені 40 см шкафқа арналған дәмдеуіш органайзері","Өтінім WhatsApp-та ашылады. Фото немесе эскизді чатқа тіркеуге болады."]}
  };
  var RU={};
  document.querySelectorAll('[data-i18n]').forEach(function(el){RU[el.dataset.i18n]=el.textContent});
  document.querySelectorAll('[data-i18n-html]').forEach(function(el){RU[el.dataset.i18nHtml]=el.innerHTML});
  var lang='ru',svc='print';

  function applyForm(){var f=FORM[lang][svc];document.getElementById('f-desc-label').textContent=f[0];document.getElementById('f-desc').placeholder=f[1];document.getElementById('f-hint').textContent=f[2]}
  function setLang(l){
    lang=l;var d=l==='kk'?KK:RU;
    document.documentElement.lang=l==='kk'?'kk':'ru';
    document.querySelectorAll('[data-i18n]').forEach(function(el){var v=d[el.dataset.i18n];if(v!=null)el.textContent=v});
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){var v=d[el.dataset.i18nHtml];if(v!=null)el.innerHTML=v});
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===l?'true':'false')});
    applyForm();
    try{localStorage.setItem('obsidium-lang',l)}catch(e){}
  }
  function setSvc(v){svc=v;document.getElementById(v==='design'?'svc-design':'svc-print').checked=true;applyForm()}

  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.lang)})});
  document.querySelectorAll('input[name=svc]').forEach(function(r){r.addEventListener('change',function(){setSvc(r.value)})});
  document.querySelectorAll('[data-svc]').forEach(function(a){a.addEventListener('click',function(){setSvc(a.dataset.svc)})});
  var MSG={
    ru:{svc:{print:"Печать модели",design:"Под ключ (идея)"},head:"Здравствуйте! Заявка с сайта Obsidium Lab",svcL:"Услуга",name:"Имя",phone:"Телефон",
        need:"Пожалуйста, опишите заказ.",nonum:"WhatsApp ещё не подключён. Напишите нам в Telegram: ",opened:"Открываем WhatsApp. Если окно не открылось, напишите нам на "},
    kk:{svc:{print:"Модельді басып шығару",design:"Толық қызмет (идея)"},head:"Сәлеметсіз бе! Obsidium Lab сайтынан өтінім",svcL:"Қызмет",name:"Аты",phone:"Телефон",
        need:"Тапсырысты сипаттаңыз.",nonum:"WhatsApp әлі қосылмаған. Бізге Telegram-да жазыңыз: ",opened:"WhatsApp ашылып жатыр. Терезе ашылмаса, бізге жазыңыз: "}
  };
  document.getElementById('c-wa').textContent=CONTACTS.whatsappLabel;
  [['c-tg',CONTACTS.telegram,'https://t.me/'],['c-ig',CONTACTS.instagram,'https://www.instagram.com/']].forEach(function(c){
    var el=document.getElementById(c[0]);
    if(c[1]){el.textContent='@'+c[1];el.href=c[2]+c[1]}else el.parentNode.hidden=true;
  });
  document.querySelectorAll('.prod-order').forEach(function(a){
    a.addEventListener('click',function(e){
      if(!CONTACTS.whatsapp)return;
      e.preventDefault();
      var card=a.closest('.prod'),name=card.querySelector('strong').textContent,price=card.querySelector('.prod-price').textContent;
      var hi=lang==='kk'?'Сәлеметсіз бе! Тапсырыс бергім келеді: ':'Здравствуйте! Хочу заказать: ';
      window.open("https://wa.me/"+CONTACTS.whatsapp+"?text="+encodeURIComponent(hi+name+" — "+price),"_blank","noopener");
    });
  });
  document.getElementById('order-form').addEventListener('submit',function(e){
    e.preventDefault();
    var t=MSG[lang],done=document.getElementById('f-done');
    var name=document.getElementById('f-name').value.trim(),phone=document.getElementById('f-phone').value.trim(),desc=document.getElementById('f-desc').value.trim();
    done.hidden=false;
    if(!desc){done.textContent=t.need;document.getElementById('f-desc').focus();return}
    if(!CONTACTS.whatsapp){done.textContent=t.nonum+(CONTACTS.telegram?'@'+CONTACTS.telegram:CONTACTS.whatsappLabel);return}
    var text=[t.head,t.svcL+": "+t.svc[svc],name&&(t.name+": "+name),phone&&(t.phone+": "+phone),"",desc].filter(function(x){return x!==""&&x!==false}).join("\n");
    window.open("https://wa.me/"+CONTACTS.whatsapp+"?text="+encodeURIComponent(text),"_blank","noopener");
    done.textContent=t.opened+CONTACTS.whatsappLabel;
  });

  var st=document.getElementById('stack');
  [40,54,66,76,84,90,94,94,90,84,76,66,54,40].forEach(function(w,i){var el=document.createElement('i');el.style.width=w+'%';el.style.animationDelay=(i*50)+'ms';st.appendChild(el)});

  var fmt=function(n){return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')+' ₸'};
  var g=document.getElementById('c-grams'),q=document.getElementById('c-qty'),m=document.getElementById('c-mat'),t=document.getElementById('c-total');
  function calc(){var v=(parseFloat(g.value)||0)*(parseInt(q.value,10)||0)*parseFloat(m.value);t.textContent=fmt(Math.max(v,2000))}
  [g,q,m].forEach(function(el){el.addEventListener('input',calc)});calc();

  var saved=null;try{saved=localStorage.getItem('obsidium-lang')}catch(e){}
  setLang(saved==='kk'?'kk':'ru');
})();
