const $=s=>document.querySelector(s),E=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const SRC='Матеріал Victoria з чату. Переклади прикладів і пояснення «Додатково» — мої.';
const T=[
{id:'pres',c:'Граматика',t:'Present Simple vs Present Continuous',r:`<b>Present Simple</b> — регулярні дії, звички, факти, постійні стани, розклади. Маркери: always, usually, often, sometimes, seldom/rarely, never, every day, on Mondays, at weekends, once a week.<br>+ I/You/We/They work · He/She/It works<br>– do not (don’t) work · does not (doesn’t) work<br>? Do I/you/we/they work? Does he/she/it work?<br><br><b>Present Continuous</b> — дія зараз або тимчасова ситуація, особиста домовленість на близьке майбутнє, дратівлива повторювана дія з always/constantly. Маркери: now, right now, at the moment, currently, today, this week, these days, Look!, Listen!<br>+ am/is/are + V-ing · – am/is/are not + V-ing · ? Am/Is/Are + subject + V-ing?`,x:[['She teaches English at university.','Вона викладає англійську в університеті.'],['She doesn’t work on Sundays.','Вона не працює в неділю.'],['Does he usually drive to work?','Він зазвичай їздить на роботу машиною?'],['I am preparing a lesson now.','Я зараз готую урок.'],['They aren’t staying at home this week.','Цього тижня вони не сидять удома.'],['Are you meeting Anna tonight?','Ти сьогодні ввечері зустрічаєшся з Анною?']]},
{id:'stat',c:'Граматика',t:'Stative verbs (дієслова стану)',r:`Зазвичай не вживаються в Continuous. Групи: <b>думки</b> (know, believe, understand, remember, forget, mean, realise, recognise, suppose, agree, doubt, expect, imagine); <b>почуття</b> (like, love, hate, dislike, prefer, want, wish, need, care, mind, adore); <b>володіння</b> (have, own, possess, belong to, contain, include, consist of, lack); <b>відчуття</b> (see, hear, smell, taste, feel, sound, look, seem, appear); <b>існування</b> (be, exist, depend on, matter, deserve, resemble, concern); <b>міра</b> (weigh, measure, cost, fit, equal, amount to).<br><br><b>Головне правило:</b> Simple → стан / постійне значення; Continuous → дія / тимчасовий процес. Винятки: think, have, see, look, smell, taste, feel, appear, be, weigh, measure, fit.`,x:[['I think he is right. / I’m thinking about changing my job.','Я вважаю, що він правий. / Я обдумую зміну роботи.'],['I have a car. / I’m having lunch.','У мене є машина. / Я обідаю.'],['I see your point. / I’m seeing my doctor tomorrow.','Я розумію вашу думку. / Завтра я йду до лікаря.'],['He is rude. / He’s being rude today.','Він грубий (характер). / Він сьогодні поводиться грубо.'],['The soup tastes salty. / He’s tasting the soup.','Суп солоний на смак. / Він куштує суп.'],['The bag weighs 10 kg. / She’s weighing the suitcase.','Сумка важить 10 кг. / Вона зважує валізу.']]},
{id:'perf',c:'Граматика',t:'Present Perfect',r:`Вживаємо: результат важливий зараз; досвід без точного часу; дія почалася в минулому й триває; незавершений період (today, this week).<br>+ have/has + V3 · – have/has not + V3 · ? Have/Has + subject + V3?<br><b>Слова-маркери:</b> already (вже; перед V3), yet (ще/вже; кінець; – і ?), just (щойно; між have і V3), ever (?), never, recently (початок/кінець), lately (кінець), so far (поки що; кінець), for + період, since + початок, before (кінець).`,x:[['I have already finished the report.','Я вже закінчив звіт.'],['She hasn’t seen this film yet.','Вона ще не бачила цей фільм.'],['Have you ever been to Italy?','Ти коли-небудь був в Італії?'],['She has just left.','Вона щойно пішла.'],['I have lived here for 5 years.','Я живу тут 5 років.'],['She has worked here since 2019.','Вона працює тут з 2019 року.']]},
{id:'narr',c:'Граматика',t:'Narrative tenses і сполучники історії',r:`Спершу запитай: що сталося першим? Потім обирай час.<br><b>Past Simple</b> — V2 / did + inf: основні завершені події. <b>Past Continuous</b> — was/were + -ing: тло, тривала дія, перерваність. <b>Past Perfect</b> — had + V3: дія раніше за іншу в минулому.<br>З when/while довга фонова дія — Continuous, подія, що її перервала — Simple.<br><b>Конектори:</b> One day, At first · While, As · As soon as, After that · By the time, In the end.`,x:[['The bus arrived late.','Автобус приїхав із запізненням.'],['I was waiting when it arrived.','Я чекав, коли він приїхав.'],['I had missed the first bus.','Я пропустив перший автобус.']]},
{id:'psvp',c:'Граматика',t:'Past Simple vs Present Perfect',r:`<b>Past Simple</b> — завершений час: yesterday, last year, in 2020, ago.<br><b>Present Perfect</b> — досвід, результат, незавершений період: ever, never, just, yet, today (якщо день не закінчився).<br>Схема: Have you ever + V3? → Yes, I have. / No, I haven’t. Уточнення (When did you…? Who did you go with?) — Past Simple. Present Perfect не вживаємо із завершеним часом (yesterday).`,x:[['When did you see it? — I saw it last Friday.','Коли ти це бачив? — Минулої п’ятниці.'],['Have you seen it? — Yes, I have.','Ти це бачив? — Так.'],['She visited Rome twice in 2022.','Вона двічі була в Римі у 2022 році.'],['She has visited Rome twice in her life.','Вона двічі була в Римі за життя.']]},
{id:'time',c:'Граматика',t:'Прийменники й сполучники часу',r:`at — година, момент (at 6 p.m., at the weekend) · on — день, дата (on Monday, on 12 May) · in — місяць, рік, період, «через» (in June, in 2015, in two weeks) · during + іменник (during the lecture) · before / after · until — до кінцевої точки · between … and … · from … to ….<br>DURING + іменник, WHILE + речення · FOR + тривалість · SINCE + початок.`,x:[['during the 1990s','протягом 1990-х'],['until the museum closed','доки музей не зачинили'],['between 1999 and 2005','між 1999 і 2005']]},
{id:'ing',c:'Граматика',t:'Gerund / infinitive (лише вправи)',r:`Victoria надіслала вправи 4A, 4B, 4C і HW 1 без правила. <b>Додатково (моє):</b> після before/after/прийменників — V-ing (Before starting…); hope, decide, promise, would like — to + inf; avoid, imagine, miss, stop, interested in — V-ing.`,x:[]},
{id:'pe',c:'Лексика',t:'Люди, стосунки, характер',r:`Шаблони з чату: I get on well with ___ because ___. · I look up to ___ because ___. · I stay in touch with ___ by ___. · I take after ___ because ___. Прикметники характеру — у розділі «Лексика».`,x:[]},
{id:'wk',c:'Лексика',t:'Робота й професії',r:`Професії, види зайнятості (part-time, full-time, out of work), wages, career, qualification. Слова — у розділі «Лексика».`,x:[]},
{id:'fe',c:'Лексика',t:'Feelings: -ed vs -ing',r:`<b>-ed</b> — як почувається людина; <b>-ing</b> — те, що викликає почуття. Одна ситуація може бути frightening, а ви — frightened.`,x:[['The ending was surprising.','Кінцівка була несподіваною.'],['I felt embarrassed.','Мені було незручно.']]},
{id:'fl',c:'Лексика',t:'Кіно й історії',r:`Слова: plot, hero, characters, ending, storyteller, performance, fairytale, series, жанри. Вправи V1, V2 (заповнення слів і визначення жанру) відкриті — без ключів.`,x:[]},
{id:'gm',c:'Лексика',t:'Get / make і вибачення',r:`<b>How to apologise:</b> 1 Apologise (I’m really sorry. / Sorry to keep you waiting.) · 2 Take responsibility (It was my fault. / I made a mistake.) · 3 Give a reason (The traffic was terrible.) · 4 Offer an action (I’ll send the correct file immediately.) · 5 Respond.`,x:[['I got held up in traffic.','Я застряг у заторі.'],['I made a mistake with the booking.','Я помилився з бронюванням.']]},
{id:'tk',c:'Мовлення',t:'Small talk: почати, підтримати, завершити',r:`Кроки role-play: 1 Start politely · 2 Choose a safe topic · 3 Ask a follow-up question · 4 React · 5 Change topic once · 6 End politely. Завдання 5A–5C (рольові ігри), 4A–4C (ритм, shadowing — потрібне аудіо SB 1.08–1.09, його немає). Фрази — у «Лексика».`,x:[['Excuse me, is anyone sitting here? — No, go ahead.','Перепрошую, тут вільно? — Так, сідайте.']]},
{id:'rd',c:'Читання',t:'Тексти для читання (тільки перелік)',r:`Тексти й відкриті завдання з чату: <b>Pedro</b> (relationships); <b>Food is Free</b> (3A, 3B); <b>Suspended Coffees</b> (HW 2, 3A, 3B); <b>Happy to chat benches</b> (1A, 2A, 2B); <b>The message I nearly ignored</b> (S3); <b>When the audience chose the ending</b> (R1, R2). Повні тексти в застосунок не додано — вони є в чаті.`,x:[]}];
const G={pe:`teammate|товариш по команді
colleague|колега
manager|керівник
parents|батьки
grandparents|дідусь і бабуся
partner|партнер / партнерка
close friend|близький друг
be friendly with|мати дружні стосунки з
get on well with|добре ладнати з
look up to|поважати, брати за приклад
stay in touch with|підтримувати зв’язок з
take after|бути схожим на когось із родини
funny|смішний
kind|добрий
generous|щедрий
cheerful|життєрадісний
hard-working|працьовитий
reliable|надійний
easy-going|спокійний, невимушений
patient|терплячий
rude|грубий
helpful|готовий допомогти
bossy|любить командувати
tidy|охайний`,wk:`musician|музикант
mechanic|механік
shop assistant|продавець-консультант
financial consultant|фінансовий консультант
plumber|сантехнік
chef|шеф-кухар
gardener|садівник
journalist|журналіст
volunteer|волонтер
part-time|неповна зайнятість
full-time|повна зайнятість
out of work|без роботи
wages|заробітна плата
be responsible for|відповідати за
profession|професія
career|кар’єра
qualification|кваліфікація
run your own business|вести власний бізнес`,fe:`amazed / amazing|вражений / дивовижний|an amazing discovery
annoyed / annoying|роздратований / дратівливий|an annoying delay
bored / boring|нудьгуючий / нудний|a boring lecture
disappointed / disappointing|розчарований / невдалий|disappointing results
embarrassed / embarrassing|збентежений / незручний|an embarrassing mistake
excited / exciting|схвильований / захопливий|an exciting journey
frightened / frightening|наляканий / лячний|a frightening experience
surprised / surprising|здивований / несподіваний|surprising news
exhausted|виснажений|exhausted after a trip
nervous / worried|нервовий / стурбований|worried about a test
proud|гордий|proud of a friend
terrified|дуже наляканий|terrified of heights`,fl:`plot|сюжет|unexpected plot twist
hero / heroine|головний герой / героїня
characters|персонажі|well-developed characters
ending|кінцівка|an open ending
storyteller|оповідач|a skilled storyteller
performance|акторська гра, виступ|convincing performance
fairytale|казка|traditional fairytales
TV show / series|телепрограма, серіал
comedy|комедія
drama|драма
mystery|детективна історія
action / adventure film|бойовик / пригодницький фільм
horror film|фільм жахів
documentary|документальний фільм
biopic|біографічний фільм
animation|анімаційний фільм`,gm:`get lost|заблукати|I got lost on my way.
get held up|затриматися|I got held up in traffic.
get off|вийти з транспорту|I got off at the wrong stop.
get the day / time wrong|переплутати день / час|I got the date wrong.
make a mistake|припуститися помилки|I made a mistake with the booking.
make a call|зателефонувати|I need to make an urgent call.
make plans|будувати плани|I made other plans.
make a mess|наробити безладу|The children made a mess.
make an excuse|вигадати виправдання|Stop making excuses.
take responsibility|взяти відповідальність|It was my fault.`,tk:`Excuse me, is anyone sitting here?|Перепрошую, тут вільно?
Do you mind if …?|ввічливо попросити дозволу
Go ahead.|будь ласка, звісно
No problem.|без проблем
Help yourself.|пригощайтеся
Be my guest.|звісно, будь ласка
What about you?|А як щодо вас?
Nice to meet you.|приємно познайомитися
Nice talking to you.|було приємно поговорити
I’ve got to go.|мені треба йти
See you later.|до зустрічі
Enjoy your weekend.|гарних вихідних`,stat:`know|знати
believe|вірити, вважати
understand|розуміти
remember|пам’ятати
forget|забувати
mean|означати
prefer|надавати перевагу
need|потребувати
own|володіти
belong to|належати
contain|містити
seem|здаватися
cost|коштувати
weigh|важити
exist|існувати
depend on|залежати від`};
const V=Object.entries(G).flatMap(([tp,s])=>s.split('\n').map(l=>{const[en,uk,ex]=l.split('|');return{tp:tp=='stat'?'stat':tp,en,uk,ex}})).map((v,i)=>({...v,id:i}));
const VT={pe:'Люди й характер',wk:'Робота',fe:'Почуття',fl:'Кіно',gm:'Get/make',tk:'Small talk',stat:'Stative verbs'};
const QR=`pres|I usually sit in an office all day, but I ___ from home right now.|worked/I’ve worked/I’m working|2|right now → Present Continuous.
stat|I like tea, but I ___ coffee these days.|prefer/’ve preferred/preferred|0|prefer — дієслово стану, без Continuous.
stat|My car ___ a good clean at the moment.|needed/needs/has needed|1|need — дієслово стану → Present Simple.
pres|This week and next week, my friend and I ___ around the country.|travelled/have travelled/are travelling|2|Тимчасова ситуація → Continuous.
pres|Email: I ___ (save) up to buy a flat at the moment.|'m saving/am saving||at the moment → Present Continuous.
pres|Email: We ___ (watch) this really good series at the moment.|'re watching/are watching||at the moment → Continuous.
stat|Email: We all ___ (like) it a lot.|like||like — стан → Simple.
pres|Email: My closest friend ___ (study) for a PhD right now.|is studying/'s studying||right now → Continuous.
pres|Email: She ___ (always / win) unfortunately.|always wins||Звичка → Simple, 3-тя особа.
stat|Email: She ___ (not know) it.|doesn't know/does not know||know — стан → Simple.
pres|Email: I ___ (not work) this week.|'m not working/am not working||this week → Continuous.
pe|I’m going to ask my ___ if she can increase my pay.|colleague/manager/teammate|1|manager — керівник.
pe|I know a lot of people, but only a few are ___ friends.|big/close/near|1|close friend — близький друг.
pe|I work for a small company, so I have few ___.|colleagues/neighbours/teammates|0|colleagues — колеги по роботі.
pe|My ___ and I played well, but we lost the match.|partners/teammates/colleagues|1|teammates — по команді.
pe|When I was very young, I spent my summers at my ___ farm.|children’s/daughter’s/grandparent’s|2|Логіка тексту: ферма дідуся/бабусі.
ing|We ___ see you soon. (hope)|hoping to/hope/hope to|2|hope to + inf.
ing|I promise ___ all the dishes if you cook.|to clean/cleaning/clean|0|promise to + inf.
ing|After ___ the first page, I don’t think it’s for me.|read/to read/reading|2|Після прийменника — V-ing.
ing|I try to avoid ___ anything that I don’t enjoy.|do/doing/to do|1|avoid + V-ing.
ing|Tom and Mike have decided ___ a boat.|buying/to buy/buy|1|decide to + inf.
ing|Please stop ___ that loud noise!|make/to make/making|2|stop + V-ing.
fe|The ending was ___; nobody expected it.|surprised/surprising|1|-ing — що викликає почуття.
fe|I felt ___ when I forgot my lecturer’s name.|embarrassed/embarrassing|0|-ed — як почувається людина.
fe|This documentary is ___.|fascinated/fascinating|1|-ing — про річ.
fe|My neighbour’s loud music is really ___.|annoyed/annoying|1|-ing — про причину.
fe|The results were ___ after months of preparation.|disappointed/disappointing|1|-ing — результати.
fe|I’m ___ about the interview tomorrow.|excited/exciting|0|-ed — моє почуття.
narr|By the time we reached the station, the train ___.|left/had left|1|Раніше за прибуття → Past Perfect.
narr|While Mia ___, somebody knocked at the door.|read/was reading|1|Тло → Past Continuous.
narr|I couldn’t pay because I ___ my wallet earlier.|lost/had lost|1|earlier → Past Perfect.
narr|They ___ through the park when it started to rain.|were walking/had walked|0|Тривала дія, перервана подією.
narr|He was tired because he ___ until midnight the day before.|worked/had worked|1|Раніше за «was tired».
narr|We ___ a film when the electricity went off.|watched/were watching|1|Тривала дія → Continuous.
narr|I found my ticket while I ___ for my keys.|looked/was looking|1|while + тривала дія.
narr|Nobody knew that Alex ___ the tickets.|already booked/had already booked|1|Раніше за «knew» → Past Perfect.
psvp|I ___ that documentary yesterday.|have watched/watched|1|yesterday → Past Simple.
psvp|___ a short story?|Have you ever written/Did you ever write|0|Досвід → Present Perfect.
psvp|We ___ the final episode yet.|haven’t finished/didn’t finish|0|yet → Present Perfect.
psvp|She ___ the author at a festival last summer.|has met/met|1|last summer → Past Simple.
psvp|When ___ the latest episode?|have you seen/did you see|1|When…? → Past Simple.
psvp|Tom ___ in this city since 2021 and still lives here.|has lived/lived|0|since + триває → Present Perfect.
psvp|My parents ___ to Lviv two years ago.|have moved/moved|1|ago → Past Simple.
psvp|Look! Somebody ___ the window.|has broken/broke|0|Результат видно зараз.
psvp|I ___ the book in 2018.|have read/read|1|in 2018 → Past Simple.
gm|My bus ___ held up in the morning rush hour. (get/make, Past)|got||get held up.
gm|I ___ an embarrassing mistake in the online form. (get/make, Past)|made||make a mistake.
gm|Please don’t ___ a mess in the laboratory. (get/make)|make||make a mess.
gm|I ___ lost because my phone battery had died. (get/make, Past)|got||get lost.
gm|She ___ the date wrong and arrived a week early. (get/make, Past)|got||get the date wrong.
gm|They always ___ excuses when they are late. (get/make)|make||make excuses.
time|The old cinema opened ___ 1938.|in||Рік → in.
time|It closed ___ 17 November 2004.|on||Дата → on.
time|The exhibition runs ___ 2 May to 29 July.|from||from … to ….
time|The old market was rebuilt ___ 2015 and 2018.|between||between … and ….
time|We waited ___ the guide arrived.|until||until — до моменту.
time|The museum will reopen ___ a few weeks.|in||in + майбутній проміжок.`;
const Q=QR.split('\n').map((l,i)=>{const[tp,q,o,a,e]=l.split('|');return a===''?{id:i,tp,q,f:o.split('/'),e}:{id:i,tp,q,o:o.split('/'),a:+a,e}});
const TN=Object.fromEntries(T.map(t=>[t.id,t.t])),TN2={...VT,...TN};
let S={done:{},ln:{},fav:{},ok:0,no:0,wr:{},an:{},ts:{},rc:[]},PERSIST=true;
try{S={...S,...JSON.parse(localStorage.getItem('eng1')||'{}')}}catch(e){PERSIST=false}
const save=()=>{try{localStorage.setItem('eng1',JSON.stringify(S))}catch(e){PERSIST=false}};
const pct=(a,b)=>b?Math.round(100*a/b):0,nz=s=>String(s).toLowerCase().replace(/[’‘]/g,"'").replace(/\s+/g,' ').trim().replace(/[.!]$/,'');
const shuf=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(x=>x[1]);
const bar=p=>`<div class="bar"><i style="width:${p}%"></i></div>`;
const needs=t=>Q.some(q=>q.tp==t.id&&S.wr[q.id]);
const nav=[['home','Головна'],['top','Теми'],['voc','Лексика'],['prc','Практика'],['rev','Повторення'],['prg','Прогрес']];
let cur='home',arg=null,F={q:'',c:'all',tp:'all',cat:'Усі',mode:'list',i:0,fl:false},P=null;
function go(v,a){cur=v;arg=a;if(v=='tp'){S.rc=[a,...S.rc.filter(x=>x!=a)].slice(0,4);save()}render();scrollTo(0,0)}
function render(){$('#nav').innerHTML=nav.map(([k,n])=>`<button class="${cur==k||(cur=='tp'&&k=='top')?'on':''}" onclick="go('${k}')">${n}</button>`).join('');
$('#m').innerHTML=({home:vHome,top:vTop,tp:vTp,voc:vVoc,prc:vPrc,rev:vRev,prg:vPrg})[cur]()}
const tcard=t=>`<div class="card" onclick="go('tp','${t.id}')"><span class="tag">${t.c}</span> ${S.done[t.id]?'<span class="tag">✓ пройдено</span>':''}<h3>${E(t.t)}</h3></div>`;
function vHome(){const dn=T.filter(t=>S.done[t.id]).length,ln=Object.keys(S.ln).length,an=Object.keys(S.an).length,all=pct(dn+ln+an,T.length+V.length+Q.length);
const nx=T.find(t=>!S.done[t.id]),rv=T.filter(needs),rc=S.rc.map(id=>T.find(t=>t.id==id)).filter(Boolean);
return `<h1>English</h1><p class="mu">Особистий навчальний простір за матеріалами Victoria з чату «Англійська мова КН-11» (3 вер. — 15 жовт. 2026). Відсотки нижче рахуються лише з ваших дій тут.</p>
<div class="card"><b>Загальний прогрес: ${all}%</b>${bar(all)}<div class="stats"><div><b>${T.length}</b>тем</div><div><b>${V.length}</b>слів і фраз</div><div><b>${Q.length}</b>вправ</div></div></div>
${nx?`<div class="card"><h3>Продовжити навчання</h3><button class="btn" onclick="go('tp','${nx.id}')">${E(nx.t)}</button></div>`:''}
<h2>Нещодавні теми</h2>${rc.length?`<div class="grid">${rc.map(tcard).join('')}</div>`:'<p class="mu">Ще нічого не відкрито. Почніть з розділу «Теми».</p>'}
<h2>Потребують повторення</h2>${rv.length?`<div class="grid">${rv.map(tcard).join('')}</div>`:'<p class="mu">Поки що немає: тут з’являться теми, де були помилки.</p>'}
<div class="card mu">${PERSIST?'Прогрес зберігається в localStorage цього браузера.':'Збереження недоступне в цьому середовищі: прогрес діє лише до закриття вкладки.'}</div>`}
function topList(){const q=F.q.toLowerCase();const l=T.filter(t=>(F.cat=='Усі'||t.c==F.cat)&&(t.t+t.r).toLowerCase().includes(q));return l.length?`<div class="grid">${l.map(tcard).join('')}</div>`:'<p class="mu">Нічого не знайдено. Змініть запит або категорію.</p>'}
function vTop(){return `<h1>Теми</h1><input placeholder="Пошук теми…" value="${E(F.q)}" oninput="F.q=this.value;$('#lst').innerHTML=topList()"><div class="row" style="margin:10px 0">${['Усі','Граматика','Лексика','Мовлення','Читання'].map(c=>`<button class="chip ${F.cat==c?'on':''}" onclick="F.cat='${c}';render()">${c}</button>`).join('')}</div><div id="lst">${topList()}</div>`}
function vTp(){const t=T.find(x=>x.id==arg),nv=V.filter(v=>v.tp==t.id).length,nq=Q.filter(q=>q.tp==t.id).length;
return `<button class="chip" onclick="go('top')">← Теми</button><h1>${E(t.t)}</h1><span class="tag">${t.c}</span> <span class="tag">${SRC}</span>
<div class="card">${t.r}</div>${t.x.length?`<h2>Приклади</h2>${t.x.map(x=>`<div class="ex">${E(x[0])}<small>${E(x[1])}</small></div>`).join('')}`:''}
<div class="row">${nq?`<button class="btn" onclick="sp('${t.id}')">Практика (${nq})</button>`:''}${nv?`<button class="btn" onclick="F.tp='${t.id}';F.c='all';F.q='';go('voc')">Слова (${nv})</button>`:''}<button class="btn" onclick="S.done['${t.id}']?delete S.done['${t.id}']:S.done['${t.id}']=1;save();render()">${S.done[t.id]?'✓ Пройдено — зняти позначку':'Позначити пройденою'}</button></div>`}
const vf=()=>V.filter(v=>(F.tp=='all'||v.tp==F.tp)&&(F.c=='all'||(F.c=='fav'&&S.fav[v.id])||(F.c=='ln'&&S.ln[v.id])||(F.c=='hard'&&S.fav[v.id]&&!S.ln[v.id])||(F.c=='new'&&!S.ln[v.id]))&&(!F.q||(v.en+' '+v.uk).toLowerCase().includes(F.q.toLowerCase())));
function tg(k,id){S[k][id]?delete S[k][id]:S[k][id]=1;save();render()}
function vl(){const d=vf();return d.length?d.map(v=>`<div class="w"><div>${E(v.en)}<small>${E(v.uk)}${v.ex?' · '+E(v.ex):''}</small></div><div class="row"><button class="chip ${S.fav[v.id]?'on':''}" title="Повторити" onclick="tg('fav',${v.id})">★</button><button class="chip ${S.ln[v.id]?'on':''}" title="Вивчено" onclick="tg('ln',${v.id})">✓</button></div></div>`).join(''):'<p class="mu">Нічого не знайдено за цими фільтрами.</p>'}
function fc(){const d=vf();if(!d.length)return '<p class="mu">У цій добірці немає слів.</p>';F.i=F.i%d.length;const v=d[F.i];
return `<div class="fcard" onclick="F.fl=!F.fl;render()">${F.fl?E(v.uk)+(v.ex?`<small>${E(v.ex)}</small>`:''):E(v.en)}<small>${F.fl?'український переклад':'натисніть, щоб перевернути'}</small></div><div class="row"><button onclick="fn(-1)">←</button><span>${F.i+1} / ${d.length}</span><button onclick="fn(1)">→</button><button onclick="fk(${v.id},1)">Знаю ✓</button><button onclick="fk(${v.id},0)">Ще вчити ★</button></div>`}
const fn=d=>{const n=vf().length||1;F.i=(F.i+d+n)%n;F.fl=false;render()};
function fk(id,k){if(k){S.ln[id]=1;delete S.fav[id]}else{S.fav[id]=1;delete S.ln[id]}save();F.fl=false;if(['all','fav','ln'].includes(F.c))F.i++;render()}
function vVoc(){return `<h1>Лексика</h1><div class="row"><input placeholder="Пошук слова…" value="${E(F.q)}" oninput="F.q=this.value;F.i=0;$('#lst').innerHTML=F.mode=='list'?vl():fc()"><select onchange="F.tp=this.value;F.i=0;render()"><option value="all">Усі теми</option>${Object.entries(VT).map(([k,n])=>`<option value="${k}" ${F.tp==k?'selected':''}>${n}</option>`).join('')}</select><select onchange="F.c=this.value;F.i=0;render()">${[['all','Усі'],['new','Не вивчені'],['ln','Вивчені'],['fav','Обране ★'],['hard','Складні']].map(([k,n])=>`<option value="${k}" ${F.c==k?'selected':''}>${n}</option>`).join('')}</select></div>
<div class="row" style="margin:10px 0"><button class="chip ${F.mode=='list'?'on':''}" onclick="F.mode='list';render()">Список</button><button class="chip ${F.mode=='cards'?'on':''}" onclick="F.mode='cards';F.i=0;F.fl=false;render()">Картки</button><span class="mu">Фонетичної транскрипції в чаті немає, тому її не додано.</span></div><div id="lst">${F.mode=='list'?vl():fc()}</div>`}
function sp(tp,wr){const pool=Q.filter(q=>(tp=='all'||q.tp==tp)&&(!wr||S.wr[q.id]));P={pool:shuf(pool),i:0,sc:0,st:0,sel:null,tried:false,done:false};cur='prc';render();scrollTo(0,0)}
function ck(val){const q=P.pool[P.i];if(val===''||P.st==1)return;const ok=q.o?val==q.a:q.f.includes(nz(val));P.st=ok?1:2;P.sel=val;
if(ok){S.ok++;if(!P.tried)P.sc++;delete S.wr[q.id]}else{S.no++;S.wr[q.id]=1}
P.tried=true;S.an[q.id]=1;const s=S.ts[q.tp]||(S.ts[q.tp]={c:0,w:0});ok?s.c++:s.w++;save();render()}
function nx(){P.i++;P.st=0;P.sel=null;P.tried=false;if(P.i>=P.pool.length)P.done=true;render()}
function vPrc(){if(!P)return `<h1>Практика</h1><p class="mu">Завдання взято з вправ Victoria (чат). Відповіді-ключі та пояснення — мої: у чаті ключів не було. Додаткових вправ від мене тут немає.</p><div class="card"><button class="btn" onclick="sp('all')">Усі вправи (${Q.length})</button></div><div class="grid">${T.filter(t=>Q.some(q=>q.tp==t.id)).map(t=>`<div class="card" onclick="sp('${t.id}')"><h3>${E(t.t)}</h3><span class="mu">${Q.filter(q=>q.tp==t.id).length} вправ</span></div>`).join('')}</div>`;
if(!P.pool.length)return `<h1>Практика</h1><p class="mu">У цій добірці немає запитань.</p><button class="btn" onclick="P=null;render()">Назад</button>`;
if(P.done)return `<h1>Результат</h1><div class="card"><b>${P.sc} з ${P.pool.length}</b> правильно з першої спроби (${pct(P.sc,P.pool.length)}%)${bar(pct(P.sc,P.pool.length))}</div><div class="row"><button class="btn" onclick="sp('all',1)">Повторити помилки</button><button class="btn" onclick="P=null;render()">До списку</button></div>`;
const q=P.pool[P.i],e=q.e||'Повторіть тему «'+(TN2[q.tp]||'')+'».',ans=q.o?q.o[q.a]:q.f[0];
return `<span class="tag">${P.i+1} / ${P.pool.length}</span> <span class="tag">${E(TN2[q.tp]||q.tp)}</span><h2>${E(q.q)}</h2>
${q.o?q.o.map((o,i)=>`<button class="opt ${P.st==1&&i==q.a?'ok':''} ${P.st==2&&i==P.sel?'no':''}" ${P.st==1?'disabled':''} onclick="ck(${i})">${E(o)}</button>`).join(''):`<div class="row"><input id="ans" placeholder="Впишіть пропущене" value="${P.st?E(P.sel):''}" ${P.st==1?'disabled':''} onkeydown="if(event.key=='Enter')ck(this.value)"><button class="btn" onclick="ck($('#ans').value)">Перевірити</button></div>`}
${P.st?`<div class="fb ${P.st==1?'ok':'no'}"><b>${P.st==1?'Правильно!':'Неправильно.'}</b> ${P.st==2?'Правильна відповідь: <b>'+E(ans)+'</b>. ':''}${E(e)}</div><div class="row">${P.st==2?'<button class="btn" onclick="P.st=0;P.sel=null;render()">Спробувати ще</button>':''}<button class="btn" onclick="nx()">Далі</button></div>`:''}`}
function vRev(){const wr=Object.keys(S.wr).length,hd=V.filter(v=>S.fav[v.id]&&!S.ln[v.id]).length,ln=Object.keys(S.ln).length;
return `<h1>Повторення</h1><div class="card"><h3>Вправи з помилками: ${wr}</h3>${wr?'<button class="btn" onclick="sp(\'all\',1)">Повторити помилки</button>':'<p class="mu">Помилок немає — вони з’являться після відповідей у «Практиці».</p>'}</div>
<div class="card"><h3>Складні слова (★, ще не вивчені): ${hd}</h3>${hd?'<button class="btn" onclick="F.c=\'hard\';F.tp=\'all\';F.q=\'\';F.mode=\'cards\';F.i=0;go(\'voc\')">Картки зі складних слів</button>':'<p class="mu">Позначайте слова ★ в «Лексиці».</p>'}</div>
<div class="card"><h3>Вивчені слова: ${ln}</h3>${ln?'<button class="btn" onclick="F.c=\'ln\';F.tp=\'all\';F.q=\'\';F.mode=\'cards\';F.i=0;go(\'voc\')">Повторити вивчені</button>':'<p class="mu">Ще немає вивчених слів.</p>'}</div>
<h2>Тест за темою</h2><div class="grid">${T.filter(t=>Q.some(q=>q.tp==t.id)).map(t=>{const s=S.ts[t.id];return `<div class="card" onclick="sp('${t.id}')"><h3>${E(t.t)}</h3><span class="mu">${s?'Точність: '+pct(s.c,s.c+s.w)+'%':'Ще не пройдено'}</span></div>`}).join('')}</div>`}
function vPrg(){const dn=T.filter(t=>S.done[t.id]).length,ln=Object.keys(S.ln).length,an=Object.keys(S.an).length,tot=S.ok+S.no,all=pct(dn+ln+an,T.length+V.length+Q.length);
const wk=Object.entries(S.ts).filter(([k,s])=>pct(s.c,s.c+s.w)<70);
return `<h1>Прогрес</h1><div class="card"><b>Загалом: ${all}%</b>${bar(all)}
Теми: ${dn} / ${T.length}${bar(pct(dn,T.length))}Слова вивчено: ${ln} / ${V.length}${bar(pct(ln,V.length))}Вправи виконано: ${an} / ${Q.length}${bar(pct(an,Q.length))}
Правильних відповідей: ${S.ok}, неправильних: ${S.no}${tot?' ('+pct(S.ok,tot)+'% правильних)':''}${bar(pct(S.ok,tot))}</div>
<h2>Потрібно більше практики</h2>${wk.length?wk.map(([k,s])=>`<div class="w"><span>${E(TN2[k]||k)} — ${pct(s.c,s.c+s.w)}%</span><button class="chip" onclick="sp('${k}')">Практика</button></div>`).join(''):'<p class="mu">Поки що немає тем із точністю нижче 70%.</p>'}
<p class="mu">${PERSIST?'Дані зберігаються в localStorage цього браузера; очищення даних сайту їх видалить.':'Збереження недоступне в цьому середовищі: прогрес діє лише в поточній сесії.'}</p>`}
render();
