/* ===================================================================
   Утренний обжиг — интерактивный каталог
   Чистый vanilla JS, без зависимостей
=================================================================== */

/* ---------- Данные о товарах ---------- */
const PRODUCTS = [
  {
    id: "irgacheffe", name: "Иргачеффе Конга", country: "Эфиопия", region: "Иргачеффе",
    flag: "🇪🇹", cat: "filter", notes: "Жасмин, бергамот, чёрный чай",
    price: 990, rating: 4.9, reviews: 214, roast: 1, badge: { t: "Новинка", k: "new" },
    c1: "#f4c95d", c2: "#e08a3c",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
    desc: "Промытый лот из кооператива Конга. Чистая чашка с цветочной кислотностью и долгим чайным послевкусием — наш фаворит для фильтра.",
  },
  {
    id: "huila", name: "Уила Супремо", country: "Колумбия", region: "Уила",
    flag: "🇨🇴", cat: "espresso", notes: "Молочный шоколад, слива, карамель",
    price: 850, rating: 4.7, reviews: 168, roast: 3, badge: null,
    c1: "#e8825a", c2: "#b9472d",
    img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
    desc: "Классическая Колумбия с плотным телом и сладостью. Раскрывается шоколадом в молоке и идеально держит баланс в эспрессо.",
  },
  {
    id: "nyeri", name: "Ньери АА", country: "Кения", region: "Ньери",
    flag: "🇰🇪", cat: "filter", notes: "Чёрная смородина, томат, грейпфрут",
    price: 1190, rating: 5.0, reviews: 92, roast: 2, badge: { t: "Хит", k: "hit" },
    c1: "#d65a6e", c2: "#8e2f4a",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    desc: "Яркая кенийская классика категории AA. Взрывная ягодная кислотность и сочность — для тех, кто любит характер в чашке.",
  },
  {
    id: "cerrado", name: "Серрадо Натурал", country: "Бразилия", region: "Серрадо",
    flag: "🇧🇷", cat: "espresso", notes: "Фундук, какао, выпечка",
    price: 790, rating: 4.6, reviews: 301, roast: 4, badge: null,
    c1: "#caa472", c2: "#8a6234",
    img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
    desc: "Натуральная обработка даёт ореховую сладость и низкую кислотность. Основа для уютного утреннего эспрессо и капучино.",
  },
  {
    id: "antigua", name: "Антигуа Уашед", country: "Гватемала", region: "Антигуа",
    flag: "🇬🇹", cat: "espresso", notes: "Тёмный шоколад, апельсин, миндаль",
    price: 920, rating: 4.8, reviews: 137, roast: 3, badge: null,
    c1: "#7fae7b", c2: "#3f7a52",
    img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    desc: "Вулканическая почва Антигуа даёт глубину и цитрусовую искру. Шоколадно-апельсиновый профиль с чистым финишем.",
  },
  {
    id: "morning", name: "Доброе утро", country: "Бленд", region: "Эспрессо",
    flag: "☕", cat: "espresso", notes: "Карамель, орех, тёмный шоколад",
    price: 740, rating: 4.8, reviews: 456, roast: 4, badge: { t: "Хит", k: "hit" },
    c1: "#b98a5e", c2: "#6e4a2c",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    desc: "Наш авторский бленд для эспрессо-машины и гейзера. Сбалансированный, сладкий и прощающий ошибки в рецепте.",
  },
  {
    id: "peru", name: "Перу без кофеина", country: "Перу", region: "Декаф",
    flag: "🇵🇪", cat: "decaf", notes: "Красное яблоко, тростниковый сахар",
    price: 880, rating: 4.5, reviews: 88, roast: 3, badge: null,
    c1: "#9ea7c4", c2: "#5a6488",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    desc: "Декаф по технологии Sugarcane: мягкий, сладкий, без «травяных» нот. Вкус настоящего кофе — даже вечером.",
  },
  {
    id: "geisha", name: "Гейша Эсмеральда", country: "Панама", region: "Гейша",
    flag: "🇵🇦", cat: "filter", notes: "Личи, жасмин, мёд, персик",
    price: 2450, rating: 5.0, reviews: 47, roast: 1, badge: { t: "Лимит", k: "new" },
    c1: "#f0b6c2", c2: "#c76e8a",
    img: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=800&q=80",
    desc: "Легендарная панамская Гейша с фермы Эсмеральда. Чайное тело, аромат жасмина и фруктовый букет — событие в чашке.",
  },
];

const CAT_LABELS = { espresso: "Эспрессо", filter: "Фильтр", decaf: "Декаф" };

/* ---------- SVG-иконки ---------- */
const ICON = {
  cart: '<svg viewBox="0 0 24 24"><path d="M3 4h2l2.4 12.3a1 1 0 0 0 1 .7h8.7a1 1 0 0 0 1-.8L21 8H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-10-9.2C.4 8.6 1.9 5 5.2 5c2 0 3.3 1.1 4.1 2.3l.7 1 .7-1C11.5 6.1 12.8 5 14.8 5 18.1 5 19.6 8.6 22 11.8 19.5 16.4 12 21 12 21z"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  bean: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="7" ry="9.5"/><path d="M12 3c-3 4-3 14 0 18"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg viewBox="0 0 24 24"><path d="M5 12h14"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  trash: '<svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13"/></svg>',
};

/* Запасная иллюстрация, если фото не загрузилось */
const FALLBACK_ART =
  '<svg class="card__fallart" viewBox="0 0 120 90" aria-hidden="true">' +
  '<path d="M44 30c0-6 4-9 8-9s8 3 8 9-7 8-3 16" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="2.4" stroke-linecap="round"/>' +
  '<rect x="34" y="44" width="40" height="22" rx="10" fill="rgba(255,255,255,.22)"/>' +
  '<path d="M74 48h6a6 6 0 0 1 0 12h-6" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="3"/>' +
  "</svg>";

/* ---------- Состояние ---------- */
const store = {
  filter: "all",
  sort: "popular",
  cart: load("ozb_cart", {}),       // { id: qty }
  wish: new Set(load("ozb_wish", [])),
};

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function save() {
  try {
    localStorage.setItem("ozb_cart", JSON.stringify(store.cart));
    localStorage.setItem("ozb_wish", JSON.stringify([...store.wish]));
  } catch { /* приватный режим — игнорируем */ }
}

/* ---------- Утилиты ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const rub = (n) => new Intl.NumberFormat("ru-RU").format(n) + " ₽";
const byId = (id) => PRODUCTS.find((p) => p.id === id);

function roastDots(level) {
  let s = "";
  for (let i = 1; i <= 5; i++) s += `<span class="roast__dot${i <= level ? " is-on" : ""}"></span>`;
  return `<span class="roast" title="Степень обжарки: ${level} из 5">${s}</span>`;
}

/* ---------- Рендер карточек ---------- */
function visibleProducts() {
  let list = PRODUCTS.filter((p) => store.filter === "all" || p.cat === store.filter);
  const s = store.sort;
  list = [...list].sort((a, b) => {
    if (s === "price-asc") return a.price - b.price;
    if (s === "price-desc") return b.price - a.price;
    if (s === "rating") return b.rating - a.rating || b.reviews - a.reviews;
    return b.reviews - a.reviews; // popular
  });
  return list;
}

function cardHTML(p) {
  const inWish = store.wish.has(p.id);
  const badge = p.badge
    ? `<span class="card__badge card__badge--${p.badge.k}">${p.badge.t}</span>` : "";
  return `
  <li class="card reveal" data-id="${p.id}" data-cat="${p.cat}">
    <div class="card__media" style="--c1:${p.c1};--c2:${p.c2}">
      ${badge}
      <button class="card__wish${inWish ? " is-active" : ""}" data-act="wish" data-id="${p.id}"
              type="button" aria-pressed="${inWish}" aria-label="В избранное">${ICON.heart}</button>
      <img class="card__img" loading="lazy" alt="${p.name}" src="${p.img}"
           onerror="this.closest('.card__media').classList.add('is-noimg')" />
      ${FALLBACK_ART}
      <button class="card__quick" data-act="quick" data-id="${p.id}" type="button">
        ${ICON.eye} Быстрый просмотр
      </button>
    </div>
    <div class="card__body">
      <p class="card__origin"><span class="card__flag">${p.flag}</span> ${p.country} · ${p.region}</p>
      <h3 class="card__name"><a href="#" data-act="quick" data-id="${p.id}">${p.name}</a></h3>
      <p class="card__notes">${p.notes}</p>
      <div class="card__meta">
        <span class="card__rating"><span class="star">★</span> ${p.rating.toFixed(1)}
          <span class="card__reviews">· ${p.reviews}</span></span>
        ${roastDots(p.roast)}
      </div>
      <div class="card__foot">
        <span class="price">${rub(p.price)}<span class="price__unit">/ 250 г</span></span>
        <button class="btn btn--buy" data-act="add" data-id="${p.id}" type="button">
          ${ICON.cart}<span>В корзину</span>
        </button>
      </div>
    </div>
  </li>`;
}

function renderGrid() {
  const list = visibleProducts();
  $("#grid").innerHTML = list.map(cardHTML).join("");
  $("#results").textContent = `${list.length} ${plural(list.length, "товар", "товара", "товаров")}`;
  $("#empty").hidden = list.length !== 0;
  revealOnScroll();
}

function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
  return many;
}

/* ---------- Корзина ---------- */
function cartCount() {
  return Object.values(store.cart).reduce((a, b) => a + b, 0);
}
function cartTotal() {
  return Object.entries(store.cart).reduce((sum, [id, q]) => sum + byId(id).price * q, 0);
}
function addToCart(id) {
  store.cart[id] = (store.cart[id] || 0) + 1;
  save(); syncBadges(); renderDrawer();
  bumpCart();
  toast(`«${byId(id).name}» в корзине`);
}
function setQty(id, qty) {
  if (qty <= 0) delete store.cart[id];
  else store.cart[id] = qty;
  save(); syncBadges(); renderDrawer();
}
function bumpCart() {
  const b = $("#cartOpen");
  b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
}

/* ---------- Избранное ---------- */
function toggleWish(id) {
  const active = store.wish.has(id);
  if (active) store.wish.delete(id); else store.wish.add(id);
  save(); syncBadges();
  // обновить кнопку без полного перерендера
  document.querySelectorAll(`[data-act="wish"][data-id="${id}"]`).forEach((btn) => {
    const on = store.wish.has(id);
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", String(on));
  });
  if (store.drawerMode === "wish") renderDrawer();
  toast(active ? "Убрано из избранного" : "Добавлено в избранное");
}

/* ---------- Бейджи в шапке ---------- */
function syncBadges() {
  const cc = cartCount();
  const cEl = $("#cartCount");
  cEl.textContent = cc; cEl.hidden = cc === 0;
  const wc = store.wish.size;
  const wEl = $("#wishCount");
  wEl.textContent = wc; wEl.hidden = wc === 0;
}

/* ---------- Выезжающая панель ---------- */
function openDrawer(mode) {
  store.drawerMode = mode;
  $("#drawerTitle").textContent = mode === "wish" ? "Избранное" : "Корзина";
  renderDrawer();
  $("#drawer").classList.add("is-open");
  $("#drawer").setAttribute("aria-hidden", "false");
  showBackdrop(true);
}
function closeDrawer() {
  $("#drawer").classList.remove("is-open");
  $("#drawer").setAttribute("aria-hidden", "true");
  maybeHideBackdrop();
}

function renderDrawer() {
  const body = $("#drawerBody"), foot = $("#drawerFoot");
  if (store.drawerMode === "wish") {
    const items = [...store.wish].map(byId);
    if (!items.length) { body.innerHTML = emptyState("В избранном пусто", "Жмите ♥ на карточке товара."); foot.innerHTML = ""; return; }
    body.innerHTML = items.map(wishRow).join("");
    foot.innerHTML = "";
    return;
  }
  const entries = Object.entries(store.cart);
  if (!entries.length) {
    body.innerHTML = emptyState("Корзина пуста", "Добавьте кофе из каталога — он появится здесь.");
    foot.innerHTML = "";
    return;
  }
  body.innerHTML = entries.map(([id, q]) => cartRow(byId(id), q)).join("");
  foot.innerHTML = `
    <div class="drawer__total"><span>Итого</span><strong>${rub(cartTotal())}</strong></div>
    <button class="btn btn--primary btn--full" id="checkout" type="button">Оформить заказ</button>
    <p class="drawer__note">Бесплатная доставка от 2 500 ₽</p>`;
}

function emptyState(title, sub) {
  return `<div class="drawer__empty">${ICON.bean}<p class="drawer__empty-t">${title}</p><p class="drawer__empty-s">${sub}</p></div>`;
}
function cartRow(p, q) {
  return `
  <div class="line" data-id="${p.id}">
    <span class="line__thumb" style="--c1:${p.c1};--c2:${p.c2}">${p.flag}</span>
    <div class="line__info">
      <p class="line__name">${p.name}</p>
      <p class="line__price">${rub(p.price)}</p>
    </div>
    <div class="qty">
      <button class="qty__btn" data-act="dec" data-id="${p.id}" type="button" aria-label="Меньше">${ICON.minus}</button>
      <span class="qty__num">${q}</span>
      <button class="qty__btn" data-act="inc" data-id="${p.id}" type="button" aria-label="Больше">${ICON.plus}</button>
    </div>
    <button class="line__del" data-act="del" data-id="${p.id}" type="button" aria-label="Удалить">${ICON.trash}</button>
  </div>`;
}
function wishRow(p) {
  return `
  <div class="line" data-id="${p.id}">
    <span class="line__thumb" style="--c1:${p.c1};--c2:${p.c2}">${p.flag}</span>
    <div class="line__info">
      <p class="line__name">${p.name}</p>
      <p class="line__price">${rub(p.price)}</p>
    </div>
    <button class="btn btn--ghost btn--sm" data-act="add" data-id="${p.id}" type="button">В корзину</button>
    <button class="line__del" data-act="wish" data-id="${p.id}" type="button" aria-label="Убрать">${ICON.close}</button>
  </div>`;
}

/* ---------- Быстрый просмотр ---------- */
function openModal(id) {
  const p = byId(id);
  const inWish = store.wish.has(id);
  $("#modalCard").innerHTML = `
    <button class="modal__close" id="modalClose" type="button" aria-label="Закрыть">${ICON.close}</button>
    <div class="modal__media" style="--c1:${p.c1};--c2:${p.c2}">
      <img class="modal__img" alt="${p.name}" src="${p.img}"
           onerror="this.closest('.modal__media').classList.add('is-noimg')" />
      ${FALLBACK_ART}
    </div>
    <div class="modal__info">
      ${p.badge ? `<span class="card__badge card__badge--${p.badge.k} modal__badge">${p.badge.t}</span>` : ""}
      <p class="card__origin"><span class="card__flag">${p.flag}</span> ${p.country} · ${p.region}</p>
      <h2 class="modal__name" id="modalName">${p.name}</h2>
      <div class="card__meta">
        <span class="card__rating"><span class="star">★</span> ${p.rating.toFixed(1)}
          <span class="card__reviews">· ${p.reviews} отзывов</span></span>
        ${roastDots(p.roast)}
      </div>
      <p class="modal__desc">${p.desc}</p>
      <p class="modal__notes"><span>Дескрипторы:</span> ${p.notes}</p>
      <div class="modal__buy">
        <span class="price price--lg">${rub(p.price)}<span class="price__unit">/ 250 г</span></span>
        <button class="btn btn--primary" data-act="add" data-id="${p.id}" type="button">${ICON.cart}<span>В корзину</span></button>
        <button class="iconbtn iconbtn--bordered${inWish ? " is-active" : ""}" data-act="wish" data-id="${p.id}" type="button" aria-label="В избранное">${ICON.heart}</button>
      </div>
    </div>`;
  $("#modal").classList.add("is-open");
  $("#modal").setAttribute("aria-hidden", "false");
  showBackdrop(true);
}
function closeModal() {
  $("#modal").classList.remove("is-open");
  $("#modal").setAttribute("aria-hidden", "true");
  maybeHideBackdrop();
}

/* ---------- Подложка ---------- */
function showBackdrop() { $("#backdrop").hidden = false; requestAnimationFrame(() => $("#backdrop").classList.add("is-on")); }
function maybeHideBackdrop() {
  const open = $("#drawer").classList.contains("is-open") || $("#modal").classList.contains("is-open");
  if (!open) { $("#backdrop").classList.remove("is-on"); setTimeout(() => ($("#backdrop").hidden = true), 250); }
}

/* ---------- Тосты ---------- */
let toastTimer;
function toast(msg) {
  const box = $("#toasts");
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<span class="toast__ico">${ICON.check}</span>${msg}`;
  box.appendChild(el);
  requestAnimationFrame(() => el.classList.add("is-on"));
  setTimeout(() => { el.classList.remove("is-on"); setTimeout(() => el.remove(), 300); }, 2200);
}

/* ---------- Появление при прокрутке ---------- */
let io;
function revealOnScroll() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
    return;
  }
  io?.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => io.observe(el));
}

/* ---------- Тема ---------- */
function initTheme() {
  const saved = load("ozb_theme", null);
  const dark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
}
function toggleTheme() {
  const dark = document.documentElement.getAttribute("data-theme") !== "dark";
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  try { localStorage.setItem("ozb_theme", dark ? "dark" : "light"); } catch {}
}

/* ---------- События ---------- */
function bind() {
  // фильтры
  $("#filters").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    store.filter = chip.dataset.filter;
    document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("chip--active", c === chip));
    renderGrid();
  });

  // сортировка
  $("#sort").addEventListener("change", (e) => { store.sort = e.target.value; renderGrid(); });

  // делегирование действий по всей странице
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]");
    if (!el) return;
    const { act, id } = el.dataset;
    if (act === "add") { e.preventDefault(); addToCart(id); }
    else if (act === "wish") { e.preventDefault(); toggleWish(id); }
    else if (act === "quick") { e.preventDefault(); openModal(id); }
    else if (act === "inc") setQty(id, (store.cart[id] || 0) + 1);
    else if (act === "dec") setQty(id, (store.cart[id] || 0) - 1);
    else if (act === "del") setQty(id, 0);
  });

  // оформление заказа (демо)
  $("#drawerBody").addEventListener("click", (e) => {});
  $("#drawerFoot").addEventListener("click", (e) => {
    if (e.target.closest("#checkout")) {
      store.cart = {}; save(); syncBadges(); renderDrawer();
      toast("Спасибо! Заказ оформлен 🎉");
    }
  });

  // открытие панелей
  $("#cartOpen").addEventListener("click", () => openDrawer("cart"));
  $("#wishOpen").addEventListener("click", () => openDrawer("wish"));
  $("#drawerClose").addEventListener("click", closeDrawer);
  $("#backdrop").addEventListener("click", () => { closeDrawer(); closeModal(); });
  $("#modal").addEventListener("click", (e) => {
    if (e.target.id === "modal" || e.target.closest("#modalClose")) closeModal();
  });

  // тема
  $("#themeToggle").addEventListener("click", toggleTheme);

  // Esc
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeDrawer(); closeModal(); } });
}

/* ---------- Старт ---------- */
initTheme();
document.addEventListener("DOMContentLoaded", () => {
  bind();
  syncBadges();
  renderGrid();
});
