/* =========================================================
   Inkwell & Co. — storefront application
   Vanilla JS. No dependencies.
   ========================================================= */
(function () {
  "use strict";

  /* -------------------------------------------------------
     0. DATA
     ------------------------------------------------------- */
  var FREE_SHIP = 35;
  var SHIP_COST = 4.95;
  var PAGE_SIZE = 9;

  var BOOKS = [
    { id: 1, title: "The Cartographer's Silence", author: "Elena Voss", genre: "Fiction", price: 24.0, rating: 4.8, reviews: 412, pages: 384, year: 2025, format: "Hardback", badge: "signed",
      desc: "A mapmaker in a border town discovers that the territory keeps editing itself. A quiet, devastating novel about the stories we draw to keep the world still.",
      c1: "#16303F", c2: "#2E6B7A", ink: "#FFFFFF", pattern: "arcs" },
    { id: 2, title: "Salt and Circuitry", author: "Marcus Ndiaye", genre: "Sci-Fi & Fantasy", price: 19.5, rating: 4.6, reviews: 288, pages: 452, year: 2026, format: "Paperback", badge: "new",
      desc: "In a drowned Lagos of the next century, a salvage diver finds a machine that remembers a city nobody else does. Propulsive, humane, and startlingly original.",
      c1: "#2A1B3D", c2: "#6B3FA0", ink: "#FFFFFF", pattern: "grid" },
    { id: 3, title: "A Field Guide to Forgetting", author: "Priya Raghavan", genre: "Essays & Ideas", price: 22.0, rating: 4.9, reviews: 631, pages: 268, year: 2025, format: "Hardback",
      desc: "Twelve essays on memory, migration, and the small ceremonies that hold a family together. One of the most quietly praised books of the year.",
      c1: "#7A2E2E", c2: "#C2554B", ink: "#FFFFFF", pattern: "waves" },
    { id: 4, title: "The Lighthouse Keeper's Ledger", author: "Tomas Berg", genre: "Mystery & Thriller", price: 18.75, oldPrice: 23.0, rating: 4.5, reviews: 197, pages: 336, year: 2024, format: "Paperback", badge: "sale",
      desc: "For forty years the ledger recorded only weather. Then, on one page, a name that was never in the village register.",
      c1: "#12312B", c2: "#2F6B5E", ink: "#FFFFFF", pattern: "stripes" },
    { id: 5, title: "Small Hours, Big City", author: "Yuki Nakamura", genre: "Poetry", price: 16.0, rating: 4.7, reviews: 156, pages: 120, year: 2026, format: "Paperback", badge: "new",
      desc: "Sixty short poems written between 2am and dawn on a night bus route. Tender, funny, and unexpectedly universal.",
      c1: "#3B2F2F", c2: "#8A6A52", ink: "#FFFFFF", pattern: "dots" },
    { id: 6, title: "The Economics of Kindness", author: "Dr. Amara Boateng", genre: "Essays & Ideas", price: 27.5, rating: 4.4, reviews: 342, pages: 410, year: 2025, format: "Hardback",
      desc: "What if generosity were measured the way growth is? A rigorous, readable argument that changes how you read a balance sheet.",
      c1: "#0E2A47", c2: "#2C6CA8", ink: "#FFFFFF", pattern: "grid" },
    { id: 7, title: "Nine Doors in Winter", author: "Sofia Marchetti", genre: "Sci-Fi & Fantasy", price: 21.0, rating: 4.8, reviews: 524, pages: 528, year: 2025, format: "Hardback", badge: "signed",
      desc: "Nine doors, nine winters, one house that refuses to stay in a single century. The fantasy everyone has been arguing about.",
      c1: "#2B1B2E", c2: "#7A3B6B", ink: "#FFFFFF", pattern: "arcs" },
    { id: 8, title: "How to Build a Thought", author: "Julian Reyes", genre: "Science", price: 25.0, rating: 4.6, reviews: 289, pages: 356, year: 2026, format: "Paperback",
      desc: "A cognitive scientist takes the machinery of an idea apart and shows you how to assemble a better one. Practical, funny, deeply useful.",
      c1: "#7A4A12", c2: "#E09A3C", ink: "#231A0E", pattern: "sun" },
    { id: 9, title: "The Last Analog Summer", author: "Hattie Bloom", genre: "Fiction", price: 17.99, rating: 4.3, reviews: 211, pages: 302, year: 2024, format: "Paperback",
      desc: "Four teenagers, one broken camcorder, and the summer the internet arrived in a small coastal town.",
      c1: "#6B2B4A", c2: "#C46A8E", ink: "#FFFFFF", pattern: "stripes" },
    { id: 10, title: "Quantum Kitchen", author: "Dr. Liang Wei", genre: "Science", price: 29.0, rating: 4.7, reviews: 178, pages: 298, year: 2026, format: "Hardback", badge: "new",
      desc: "Physics explained through cooking: why bread rises, why coffee cools, and why your fridge is the most quantum object you own.",
      c1: "#0B3B3B", c2: "#2E8B8B", ink: "#FFFFFF", pattern: "dots" },
    { id: 11, title: "Beneath the Salt Line", author: "Nora Adeyemi", genre: "Mystery & Thriller", price: 20.5, rating: 4.5, reviews: 366, pages: 392, year: 2025, format: "Paperback",
      desc: "A hydrologist is sent to audit a reservoir and finds a town that has been keeping a very careful secret for eleven years.",
      c1: "#10233D", c2: "#3A5F8A", ink: "#FFFFFF", pattern: "waves" },
    { id: 12, title: "Letters to a Young Gardener", author: "Ruth Kavanagh", genre: "Essays & Ideas", price: 18.0, rating: 4.9, reviews: 704, pages: 214, year: 2025, format: "Hardback", badge: "bestseller",
      desc: "Twenty-two letters on patience, failure, and the unreasonable hope of putting a seed in the ground. The book we hand to everyone.",
      c1: "#1E3A22", c2: "#4E8A54", ink: "#FFFFFF", pattern: "sun" },
    { id: 13, title: "The Paper Empire", author: "Viktor Halasz", genre: "History", price: 23.5, rating: 4.6, reviews: 245, pages: 486, year: 2024, format: "Hardback",
      desc: "How a handful of clerks, ledgers and shipping manifests built the first genuinely global company — and lost it in a single season.",
      c1: "#3A2A18", c2: "#8A6B3F", ink: "#FFFFFF", pattern: "grid" },
    { id: 14, title: "Midnight in the Archive", author: "Camille Duval", genre: "Mystery & Thriller", price: 19.99, oldPrice: 25.0, rating: 4.4, reviews: 158, pages: 344, year: 2025, format: "Paperback", badge: "sale",
      desc: "A night archivist notices that one folder is returned every morning slightly heavier than it left.",
      c1: "#1A1A2E", c2: "#4A4A7A", ink: "#FFFFFF", pattern: "arcs" },
    { id: 15, title: "Algorithms of the Heart", author: "Dev Sharma", genre: "Romance", price: 16.5, rating: 4.2, reviews: 431, pages: 320, year: 2026, format: "Paperback",
      desc: "Two engineers build a matchmaking model and are personally offended when it pairs them with each other.",
      c1: "#6B1F3A", c2: "#D4688A", ink: "#FFFFFF", pattern: "dots" },
    { id: 16, title: "The Weight of Water", author: "Ingrid Solheim", genre: "Fiction", price: 22.5, rating: 4.7, reviews: 389, pages: 368, year: 2025, format: "Hardback",
      desc: "Three generations of a fishing family, told entirely through the objects they carried back from the sea.",
      c1: "#0F2A33", c2: "#357A8A", ink: "#FFFFFF", pattern: "waves" },
    { id: 17, title: "Rebel Cartography", author: "Kwame Mensah", genre: "History", price: 26.0, rating: 4.5, reviews: 203, pages: 442, year: 2026, format: "Hardback", badge: "new",
      desc: "The maps that were drawn against the mapmakers: counter-cartography from the seventeenth century to the present day.",
      c1: "#4A1F14", c2: "#A84A2A", ink: "#FFFFFF", pattern: "stripes" },
    { id: 18, title: "Everything Is a Draft", author: "Lena Fischer", genre: "Poetry", price: 24.5, rating: 4.8, reviews: 267, pages: 148, year: 2025, format: "Hardback", badge: "signed",
      desc: "A collection about revision — of poems, of selves, of the sentences we rehearse in the shower. Spare and luminous.",
      c1: "#2E1F3A", c2: "#7A5AA8", ink: "#FFFFFF", pattern: "sun" }
  ];

  var REVIEWS = [
    { text: "They sent me three books instead of one, all better than the one I asked for. I have not stopped thinking about the second one.", name: "Daniel O.", meta: "Reader since 2019", initials: "DO", stars: 5 },
    { text: "I ordered at 11pm and it was on the doormat before lunch. The packaging is paper, the note was handwritten, and the book was perfect.", name: "Priya S.", meta: "Baltimore, MD", initials: "PS", stars: 5 },
    { text: "I asked for something like Ishiguro but funnier. They nailed it on the first try. This is the only shop I buy from now.", name: "Marta L.", meta: "Reader since 2021", initials: "ML", stars: 5 },
    { text: "The 'read it or return it' policy sounded like marketing. It is not. I returned two, kept four, and nobody made it weird.", name: "Tom H.", meta: "Reader since 2023", initials: "TH", stars: 4 },
    { text: "My kids now ask what the bookshop sent this month. That is a better review than anything I can write.", name: "Aisha R.", meta: "Reader since 2017", initials: "AR", stars: 5 }
  ];

  var HERO_IDS = [12, 7, 1];

  /* -------------------------------------------------------
     1. UTILITIES
     ------------------------------------------------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function money(n) { return "$" + n.toFixed(2); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function byId(id) {
    for (var i = 0; i < BOOKS.length; i++) if (BOOKS[i].id === id) return BOOKS[i];
    return null;
  }

  /* -------------------------------------------------------
     2. SVG COVER GENERATOR
     ------------------------------------------------------- */
  var coverSeq = 0;

  var PATTERNS = {
    arcs: function (ink) {
      return '<g fill="none" stroke="' + ink + '" stroke-width="1.3" opacity=".2">' +
        '<circle cx="150" cy="330" r="54"/><circle cx="150" cy="330" r="88"/>' +
        '<circle cx="150" cy="330" r="122"/><circle cx="150" cy="330" r="156"/></g>';
    },
    grid: function (ink) {
      var s = '<g stroke="' + ink + '" stroke-width="1" opacity=".15">', x, y;
      for (x = 0; x <= 300; x += 30) s += '<path d="M' + x + ' 0V450"/>';
      for (y = 0; y <= 450; y += 30) s += '<path d="M0 ' + y + 'H300"/>';
      return s + '</g>';
    },
    dots: function (ink) {
      var s = '<g fill="' + ink + '" opacity=".18">', x, y;
      for (x = 22; x < 300; x += 26) for (y = 22; y < 450; y += 26)
        s += '<circle cx="' + x + '" cy="' + y + '" r="1.7"/>';
      return s + '</g>';
    },
    stripes: function (ink) {
      var s = '<g stroke="' + ink + '" stroke-width="9" opacity=".11">', i;
      for (i = -460; i < 620; i += 28) s += '<path d="M' + i + ' 450L' + (i + 450) + ' 0"/>';
      return s + '</g>';
    },
    waves: function (ink) {
      var s = '<g fill="none" stroke="' + ink + '" stroke-width="1.8" opacity=".18">', y;
      for (y = 54; y < 460; y += 34)
        s += '<path d="M-10 ' + y + ' q38 -20 76 0 t76 0 t76 0 t76 0 t76 0"/>';
      return s + '</g>';
    },
    sun: function (ink) {
      return '<g opacity=".2"><circle cx="246" cy="84" r="56" fill="' + ink + '"/>' +
        '<g stroke="' + ink + '" stroke-width="2.2" fill="none">' +
        '<path d="M246 12V-2M246 170v14M174 84h-14M332 84h14"/>' +
        '<path d="M195 33l-10-10M297 135l10 10M297 33l10-10M195 135l-10 10"/></g></g>';
    }
  };

  function wrapText(text, maxChars, maxLines) {
    var words = String(text).split(" "), lines = [], cur = "", i;
    for (i = 0; i < words.length; i++) {
      if (!cur) { cur = words[i]; continue; }
      if ((cur + " " + words[i]).length <= maxChars) cur += " " + words[i];
      else { lines.push(cur); cur = words[i]; if (lines.length === maxLines - 1) break; }
    }
    if (cur && lines.length < maxLines) lines.push(cur);
    return lines.slice(0, maxLines);
  }

  function coverSVG(book) {
    var uid = "cv" + (++coverSeq);
    var ink = book.ink || "#FFFFFF";
    var pat = (PATTERNS[book.pattern] || PATTERNS.arcs)(ink);

    /* Typeset the title to fit the cover: wrap, then scale the type down
       until the longest line fits the live area, with textLength as a
       last-resort guard against font metric drift. */
    var AVAIL = 232;            // 300 - 2 * 34 padding
    var CHAR_W = 0.53;          // approx advance width of Fraunces 600, in em
    var lines = wrapText(book.title, 15, 3);
    var longest = lines.reduce(function (m, l) { return Math.max(m, l.length); }, 1);
    var fs = Math.round(AVAIL / (longest * CHAR_W));
    fs = Math.max(20, Math.min(38, fs));
    var lh = Math.round(fs * 1.2);
    var baseY = Math.round(195 - ((lines.length - 1) * lh - 0.52 * fs) / 2);

    var textEls = lines.map(function (ln, i) {
      var guard = ln.length * fs * CHAR_W > AVAIL
        ? ' textLength="' + AVAIL + '" lengthAdjust="spacingAndGlyphs"'
        : "";
      return '<text x="34" y="' + (baseY + i * lh) + '" fill="' + ink +
        '" font-family="Fraunces, Georgia, serif" font-size="' + fs +
        '" font-weight="600" letter-spacing="-0.5"' + guard + '>' + esc(ln) + '</text>';
    }).join("");

    return '' +
      '<svg viewBox="0 0 300 450" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Cover of ' + esc(book.title) + '">' +
        '<defs>' +
          '<linearGradient id="' + uid + '" x1="0" y1="0" x2="1" y2="1">' +
            '<stop offset="0%" stop-color="' + book.c1 + '"/>' +
            '<stop offset="100%" stop-color="' + book.c2 + '"/>' +
          '</linearGradient>' +
          '<clipPath id="' + uid + 'c"><rect width="300" height="450" rx="6"/></clipPath>' +
        '</defs>' +
        '<g clip-path="url(#' + uid + 'c)">' +
          '<rect width="300" height="450" fill="url(#' + uid + ')"/>' +
          pat +
          '<rect width="300" height="450" fill="url(#' + uid + ')" opacity=".34"/>' +
          '<rect x="0" y="0" width="300" height="450" fill="#000" opacity=".06"/>' +
          '<rect x="10" y="10" width="280" height="430" fill="none" stroke="' + ink + '" stroke-width="1" opacity=".24" rx="3"/>' +
          '<path d="M34 62h58" stroke="' + ink + '" stroke-width="2.4" opacity=".75"/>' +
          '<text x="34" y="92" fill="' + ink + '" font-family="Inter, sans-serif" font-size="11" font-weight="600" letter-spacing="2.6" opacity=".8">' + esc(book.genre.toUpperCase()) + '</text>' +
          textEls +
          '<path d="M34 396h72" stroke="' + ink + '" stroke-width="1" opacity=".4"/>' +
          '<text x="34" y="418" fill="' + ink + '" font-family="Inter, sans-serif" font-size="12.5" font-weight="500" letter-spacing="1.6" opacity=".85">' + esc(book.author.toUpperCase()) + '</text>' +
          '<path d="M0 0h300v450H0z" fill="url(#' + uid + ')" opacity="0"/>' +
        '</g>' +
      '</svg>';
  }

  var STAR_PATH = "M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.5l1.1-6.5L2.6 9.4l6.5-.9z";

  function starsSVG(rating) {
    var out = '<span class="stars" aria-hidden="true">', i, on;
    for (i = 1; i <= 5; i++) {
      on = rating >= i - 0.4;
      out += '<svg viewBox="0 0 24 24" style="fill:' + (on ? "var(--accent)" : "var(--line)") +
        '"><path d="' + STAR_PATH + '"/></svg>';
    }
    return out + "</span>";
  }

  function badgeFor(book) {
    if (!book.badge) return "";
    var cls = book.badge === "sale" ? "badge--sale"
      : (book.badge === "new" ? "badge--new" : "");
    var label = book.badge === "signed" ? "Signed"
      : (book.badge === "bestseller" ? "Bestseller"
      : (book.badge === "new" ? "New" : "Sale"));
    return '<span class="badge ' + cls + '">' + label + "</span>";
  }

  function cardHTML(book, variant) {
    var cls = variant === "rail" ? "card rail__card" : "card";
    return '' +
      '<article class="' + cls + '" data-id="' + book.id + '">' +
        '<div class="card__media">' +
          badgeFor(book) +
          '<div class="card__cover">' + coverSVG(book) + '</div>' +
          '<div class="card__actions">' +
            '<button class="pill" data-quick="' + book.id + '">Quick view</button>' +
            '<button class="pill pill--icon" data-add="' + book.id + '" aria-label="Add ' + esc(book.title) + ' to bag">' +
              '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div class="card__body">' +
          '<p class="card__genre">' + esc(book.genre) + '</p>' +
          '<h3 class="card__title"><a href="#shop" data-quick="' + book.id + '">' + esc(book.title) + '</a></h3>' +
          '<p class="card__author">by ' + esc(book.author) + '</p>' +
          '<div class="card__meta">' + starsSVG(book.rating) +
            '<span class="card__rating">' + book.rating.toFixed(1) + ' (' + book.reviews + ')</span>' +
          '</div>' +
          '<div class="card__foot">' +
            '<span class="price">' + money(book.price) +
              (book.oldPrice ? '<s>' + money(book.oldPrice) + '</s>' : '') + '</span>' +
            '<button class="add-btn" data-add="' + book.id + '">' +
              '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>Add</button>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  /* -------------------------------------------------------
     3. STATE
     ------------------------------------------------------- */
  var state = { query: "", genre: "All", sort: "featured", shown: PAGE_SIZE };

  var CART_KEY = "inkwell_cart_v1";
  var THEME_KEY = "inkwell_theme_v1";

  function loadCart() {
    try {
      var raw = localStorage.getItem(CART_KEY);
      var parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter(function (l) { return byId(l.id); }) : [];
    } catch (e) { return []; }
  }
  function saveCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
  }
  var cart = loadCart();

  /* -------------------------------------------------------
     4. TOASTS
     ------------------------------------------------------- */
  var toastBox = $("#toasts");
  var toastTimer = null;

  function syncToTopOffset() {
    document.body.classList.toggle("has-cart-toasts", toastBox.children.length > 0);
  }

  function toast(msg, kind) {
    var el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = '<svg class="toast__ico" viewBox="0 0 24 24">' +
      (kind === "bad" ? '<path d="M12 8v5M12 16.5v.01"/><circle cx="12" cy="12" r="9"/>'
                      : '<path d="M5 13l4 4L19 7"/>') +
      '</svg><span>' + esc(msg) + "</span>";
    toastBox.appendChild(el);
    syncToTopOffset();
    setTimeout(function () {
      el.classList.add("is-out");
      setTimeout(function () { el.remove(); syncToTopOffset(); }, 340);
    }, 2800);
    clearTimeout(toastTimer);
  }

  /* -------------------------------------------------------
     5. PRELOADER
     ------------------------------------------------------- */
  window.addEventListener("load", function () {
    setTimeout(function () {
      var p = $("#preloader");
      if (p) { p.classList.add("is-done"); setTimeout(function () { p.remove(); }, 700); }
    }, 420);
  });
  // safety net if load never fires
  setTimeout(function () {
    var p = $("#preloader");
    if (p) p.classList.add("is-done");
  }, 3000);

  /* -------------------------------------------------------
     6. THEME
     ------------------------------------------------------- */
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved) root.setAttribute("data-theme", saved);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) root.setAttribute("data-theme", "dark");
  } catch (e) {}

  $("#themeToggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    toast(next === "dark" ? "Dark shelves on" : "Daylight on");
  });

  /* -------------------------------------------------------
     7. HEADER BEHAVIOUR
     ------------------------------------------------------- */
  var header = $("#header");
  var toTop = $("#toTop");
  var progress = $("#scrollProgress");

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle("is-stuck", y > 12);
    toTop.classList.toggle("is-on", y > 700);
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  var burger = $("#burger"), nav = $("#nav");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  $$(".nav__link").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  var searchBar = $("#headerSearch");
  $("#searchToggle").addEventListener("click", function () {
    var open = searchBar.classList.toggle("is-open");
    if (open) setTimeout(function () { $("#searchInputTop").focus(); }, 260);
  });
  $("#searchClose").addEventListener("click", function () {
    searchBar.classList.remove("is-open");
  });

  /* -------------------------------------------------------
     8. REVEAL / COUNTERS
     ------------------------------------------------------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var d = parseInt(en.target.getAttribute("data-delay") || "0", 10);
      setTimeout(function () { en.target.classList.add("is-in"); }, reduce ? 0 : d);
      revealIO.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  $$(".reveal, .reveal-line").forEach(function (el) { revealIO.observe(el); });

  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var dur = 1600, start = performance.now();
    function frame(now) {
      var p = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = dec ? val.toFixed(dec)
        : Math.round(val).toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(frame);
    }
    if (reduce) { el.textContent = dec ? target.toFixed(dec) : target.toLocaleString("en-US"); return; }
    requestAnimationFrame(frame);
  }

  var countIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      animateCount(en.target);
      countIO.unobserve(en.target);
    });
  }, { threshold: 0.5 });
  $$(".count").forEach(function (el) { countIO.observe(el); });

  /* -------------------------------------------------------
     9. HERO — parallax + magnetic buttons
     ------------------------------------------------------- */
  var hero = $(".hero");
  var heroArt = $("#heroArt");

  if (hero && heroArt && !reduce) {
    hero.addEventListener("mousemove", function (e) {
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      $$("[data-depth]", heroArt).forEach(function (el) {
        var d = parseFloat(el.getAttribute("data-depth"));
        el.style.setProperty("--px", (-x * 18 * d).toFixed(2) + "px");
        el.style.setProperty("--py", (-y * 14 * d).toFixed(2) + "px");
      });
    });
    hero.addEventListener("mouseleave", function () {
      $$("[data-depth]", heroArt).forEach(function (el) {
        el.style.setProperty("--px", "0px");
        el.style.setProperty("--py", "0px");
      });
    });
  }

  if (!reduce) {
    $$("[data-magnetic]").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform = "translate(" + (x * 0.16).toFixed(1) + "px," + (y * 0.3).toFixed(1) + "px)";
      });
      btn.addEventListener("mouseleave", function () { btn.style.transform = ""; });
    });
  }

  // hero book stack
  (function buildStack() {
    var items = $$(".stack__item");
    HERO_IDS.forEach(function (id, i) {
      if (items[i]) items[i].innerHTML = coverSVG(byId(id));
    });
  })();

  /* -------------------------------------------------------
     10. SHOP — filters, sorting, grid
     ------------------------------------------------------- */
  var grid = $("#bookGrid");
  var chips = $("#genreChips");
  var resultsLine = $("#resultsLine");
  var emptyState = $("#emptyState");
  var loadMoreWrap = $("#loadMoreWrap");
  var searchInput = $("#searchInput");
  var sortSelect = $("#sortSelect");

  var GENRES = (function () {
    var seen = {}, out = [];
    BOOKS.forEach(function (b) { if (!seen[b.genre]) { seen[b.genre] = 1; out.push(b.genre); } });
    out.sort();
    return ["All"].concat(out);
  })();

  function countFor(genre) {
    if (genre === "All") return BOOKS.length;
    return BOOKS.filter(function (b) { return b.genre === genre; }).length;
  }

  chips.innerHTML = GENRES.map(function (g) {
    return '<button class="chip' + (g === "All" ? " is-active" : "") +
      '" role="tab" data-genre="' + esc(g) + '" aria-selected="' + (g === "All") + '">' +
      esc(g) + '<span class="chip__n">' + countFor(g) + "</span></button>";
  }).join("");

  function filtered() {
    var q = state.query.trim().toLowerCase();
    var out = BOOKS.filter(function (b) {
      if (state.genre !== "All" && b.genre !== state.genre) return false;
      if (!q) return true;
      return (b.title + " " + b.author + " " + b.genre + " " + b.desc).toLowerCase().indexOf(q) > -1;
    });
    var s = state.sort;
    out.sort(function (a, b) {
      if (s === "price-asc") return a.price - b.price;
      if (s === "price-desc") return b.price - a.price;
      if (s === "rating") return b.rating - a.rating;
      if (s === "newest") return b.year - a.year || b.id - a.id;
      var rank = { bestseller: 0, signed: 1, new: 2, sale: 3 };
      var ra = rank[a.badge] === undefined ? 9 : rank[a.badge];
      var rb = rank[b.badge] === undefined ? 9 : rank[b.badge];
      return ra - rb || b.rating - a.rating;
    });
    return out;
  }

  function renderGrid(reset) {
    var list = filtered();
    if (reset) state.shown = PAGE_SIZE;
    var slice = list.slice(0, state.shown);

    grid.innerHTML = slice.map(function (b) { return cardHTML(b); }).join("");

    // stagger the entrance
    $$(".card", grid).forEach(function (c, i) {
      c.style.animationDelay = (reduce ? 0 : Math.min(i, 8) * 45) + "ms";
    });

    emptyState.hidden = list.length !== 0;
    grid.hidden = list.length === 0;
    loadMoreWrap.hidden = list.length === 0 || state.shown >= list.length;

    resultsLine.innerHTML = list.length
      ? "Showing <b>" + slice.length + "</b> of <b>" + list.length + "</b> title" +
        (list.length === 1 ? "" : "s") +
        (state.genre !== "All" ? " in <b>" + esc(state.genre) + "</b>" : "") +
        (state.query ? " for &ldquo;" + esc(state.query) + "&rdquo;" : "")
      : "";
  }

  chips.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    state.genre = btn.getAttribute("data-genre");
    $$(".chip", chips).forEach(function (c) {
      var on = c === btn;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-selected", on ? "true" : "false");
    });
    renderGrid(true);
  });

  var searchDebounce = null;
  function onSearch(val) {
    state.query = val;
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(function () { renderGrid(true); }, 180);
  }

  searchInput.addEventListener("input", function (e) { onSearch(e.target.value); });
  $("#searchInputTop").addEventListener("input", function (e) {
    searchInput.value = e.target.value;
    onSearch(e.target.value);
  });

  sortSelect.addEventListener("change", function (e) {
    state.sort = e.target.value;
    renderGrid(true);
  });

  $("#loadMore").addEventListener("click", function () {
    state.shown += PAGE_SIZE;
    renderGrid(false);
  });

  $("#clearFilters").addEventListener("click", function () {
    state.query = "";
    state.genre = "All";
    searchInput.value = "";
    $("#searchInputTop").value = "";
    $$(".chip", chips).forEach(function (c) {
      var on = c.getAttribute("data-genre") === "All";
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-selected", on ? "true" : "false");
    });
    renderGrid(true);
  });

  renderGrid(true);

  /* --- 3D tilt on covers (event delegation) --- */
  var tilted = null;
  function resetTilt(el) {
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }
  function tiltHandler(e) {
    if (reduce) return;
    var media = e.target.closest ? e.target.closest(".card__media") : null;
    if (!media) { resetTilt(tilted); tilted = null; return; }
    var cover = media.querySelector(".card__cover");
    if (!cover) return;
    if (tilted && tilted !== cover) resetTilt(tilted);
    tilted = cover;
    var r = media.getBoundingClientRect();
    var px = (e.clientX - r.left) / r.width - 0.5;
    var py = (e.clientY - r.top) / r.height - 0.5;
    cover.style.setProperty("--ry", (px * 17).toFixed(2) + "deg");
    cover.style.setProperty("--rx", (-py * 17).toFixed(2) + "deg");
  }
  document.addEventListener("pointermove", tiltHandler, { passive: true });

  /* -------------------------------------------------------
     11. BESTSELLER RAIL
     ------------------------------------------------------- */
  var railTrack = $("#railTrack");
  var railBooks = BOOKS.filter(function (b) { return b.badge; })
    .sort(function (a, b) { return b.rating - a.rating; })
    .concat(BOOKS.filter(function (b) { return !b.badge; }).slice(0, 4));

  railTrack.innerHTML = railBooks.map(function (b) { return cardHTML(b, "rail"); }).join("");

  function railStep() {
    var card = $(".rail__card", railTrack);
    return card ? card.getBoundingClientRect().width + 26 : 320;
  }
  $("#railNext").addEventListener("click", function () {
    railTrack.scrollBy({ left: railStep() * 2, behavior: "smooth" });
  });
  $("#railPrev").addEventListener("click", function () {
    railTrack.scrollBy({ left: -railStep() * 2, behavior: "smooth" });
  });

  function syncRailBtns() {
    var max = railTrack.scrollWidth - railTrack.clientWidth - 4;
    $("#railPrev").disabled = railTrack.scrollLeft <= 4;
    $("#railNext").disabled = railTrack.scrollLeft >= max;
  }
  railTrack.addEventListener("scroll", syncRailBtns, { passive: true });
  window.addEventListener("resize", syncRailBtns);
  setTimeout(syncRailBtns, 120);

  // drag to scroll
  (function dragRail() {
    var down = false, startX = 0, startLeft = 0, moved = false;
    railTrack.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "touch") return;
      down = true; moved = false;
      startX = e.clientX; startLeft = railTrack.scrollLeft;
      railTrack.style.scrollBehavior = "auto";
    });
    window.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      railTrack.scrollLeft = startLeft - dx;
    });
    window.addEventListener("pointerup", function () {
      down = false;
      railTrack.style.scrollBehavior = "";
    });
    railTrack.addEventListener("click", function (e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  })();

  /* -------------------------------------------------------
     12. REVIEWS SLIDER
     ------------------------------------------------------- */
  var reviewTrack = $("#reviewTrack");
  var reviewDots = $("#reviewDots");
  var rIndex = 0, rTimer = null;

  reviewTrack.innerHTML = REVIEWS.map(function (r) {
    var st = "", i;
    for (i = 1; i <= 5; i++) {
      st += '<svg viewBox="0 0 24 24" style="fill:' + (i <= r.stars ? "var(--accent)" : "var(--line)") +
        '"><path d="' + STAR_PATH + '"/></svg>';
    }
    return '<figure class="review">' +
      '<div class="review__stars" aria-label="' + r.stars + ' out of 5">' + st + '</div>' +
      '<blockquote class="review__text">&ldquo;' + esc(r.text) + '&rdquo;</blockquote>' +
      '<figcaption class="review__who">' +
        '<span class="avatar">' + esc(r.initials) + '</span>' +
        '<div><strong>' + esc(r.name) + '</strong><small>' + esc(r.meta) + '</small></div>' +
      '</figcaption></figure>';
  }).join("");

  reviewDots.innerHTML = REVIEWS.map(function (r, i) {
    return '<button data-i="' + i + '" aria-label="Review ' + (i + 1) + '"' +
      (i === 0 ? ' class="is-on"' : "") + "></button>";
  }).join("");

  function goReview(i) {
    rIndex = (i + REVIEWS.length) % REVIEWS.length;
    reviewTrack.style.transform = "translateX(" + (-rIndex * 100) + "%)";
    $$("button", reviewDots).forEach(function (b, k) {
      b.classList.toggle("is-on", k === rIndex);
    });
  }
  function startAuto() {
    if (reduce) return;
    clearInterval(rTimer);
    rTimer = setInterval(function () { goReview(rIndex + 1); }, 6200);
  }
  reviewDots.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    goReview(parseInt(b.getAttribute("data-i"), 10));
    startAuto();
  });
  var slider = $(".slider");
  slider.addEventListener("mouseenter", function () { clearInterval(rTimer); });
  slider.addEventListener("mouseleave", startAuto);
  startAuto();

  // swipe
  (function swipe() {
    var x0 = null;
    slider.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 44) { goReview(rIndex + (dx < 0 ? 1 : -1)); startAuto(); }
      x0 = null;
    }, { passive: true });
  })();

  /* -------------------------------------------------------
     13. CART
     ------------------------------------------------------- */
  var drawer = $("#cartDrawer");
  var scrim = $("#scrim");
  var cartBody = $("#cartBody");
  var cartCount = $("#cartCount");
  var drawerCount = $("#drawerCount");

  function cartQty() {
    return cart.reduce(function (n, l) { return n + l.qty; }, 0);
  }
  function cartSubtotal() {
    return cart.reduce(function (n, l) { var b = byId(l.id); return n + (b ? b.price * l.qty : 0); }, 0);
  }

  function renderCart() {
    var qty = cartQty();
    cartCount.textContent = qty;
    cartCount.classList.toggle("is-on", qty > 0);
    drawerCount.textContent = "(" + qty + ")";

    if (!cart.length) {
      cartBody.innerHTML = '<div class="cart-empty">' +
        '<svg viewBox="0 0 24 24"><path d="M6 8h12l-1.2 11.2a1.6 1.6 0 0 1-1.6 1.4H8.8a1.6 1.6 0 0 1-1.6-1.4z"/><path d="M9.2 8V6.6a2.8 2.8 0 0 1 5.6 0V8"/></svg>' +
        '<h4>Your bag is empty</h4><p>Add something worth staying up late for.</p>' +
        '<button class="btn btn--outline" id="cartBrowse">Browse the shelves</button></div>';
      $("#cartFoot").style.display = "none";
      var cb = $("#cartBrowse");
      if (cb) cb.addEventListener("click", function () {
        closeCart();
        document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
      });
      return;
    }

    $("#cartFoot").style.display = "";
    cartBody.innerHTML = cart.map(function (l) {
      var b = byId(l.id);
      return '<div class="line-item" data-id="' + b.id + '">' +
        '<div class="line-item__img">' + coverSVG(b) + '</div>' +
        '<div class="line-item__main">' +
          '<h4>' + esc(b.title) + '</h4>' +
          '<p>' + esc(b.author) + ' &middot; ' + esc(b.format) + '</p>' +
          '<div class="line-item__row">' +
            '<span class="qty">' +
              '<button data-dec="' + b.id + '" aria-label="Decrease quantity">&minus;</button>' +
              '<span>' + l.qty + '</span>' +
              '<button data-inc="' + b.id + '" aria-label="Increase quantity">+</button>' +
            '</span>' +
            '<span class="line-item__price">' + money(b.price * l.qty) + '</span>' +
          '</div>' +
          '<div style="margin-top:8px"><button class="line-item__rm" data-rm="' + b.id + '">Remove</button></div>' +
        '</div></div>';
    }).join("");

    var sub = cartSubtotal();
    var ship = sub >= FREE_SHIP ? 0 : SHIP_COST;
    $("#cartSubtotal").textContent = money(sub);
    $("#cartShipping").textContent = ship === 0 ? "Free" : money(ship);
    $("#cartTotal").textContent = money(sub + ship);

    var pct = Math.min(100, (sub / FREE_SHIP) * 100);
    $("#shipBar").style.width = pct + "%";
    var meter = $(".ship-meter");
    meter.classList.toggle("is-free", sub >= FREE_SHIP);
    $("#shipNote").textContent = sub >= FREE_SHIP
      ? "You have unlocked free shipping"
      : "Add " + money(FREE_SHIP - sub) + " for free shipping";
  }

  function openCart() {
    renderCart();
    scrim.hidden = false;
    requestAnimationFrame(function () { scrim.classList.add("is-on"); });
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
  }
  function closeCart() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    scrim.classList.remove("is-on");
    document.body.classList.remove("is-locked");
    setTimeout(function () { scrim.hidden = true; }, 460);
  }

  $("#cartBtn").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  scrim.addEventListener("click", closeCart);

  function addToCart(id, qty, sourceEl) {
    qty = qty || 1;
    var found = null;
    for (var i = 0; i < cart.length; i++) if (cart[i].id === id) found = cart[i];
    if (found) found.qty += qty;
    else cart.push({ id: id, qty: qty });
    saveCart();
    renderCart();

    var btn = $("#cartBtn");
    btn.classList.remove("is-bump");
    void btn.offsetWidth;
    btn.classList.add("is-bump");

    var book = byId(id);
    if (sourceEl && book && !reduce) flyToCart(sourceEl, book);
    toast(book.title + " added to your bag");
  }

  function flyToCart(sourceEl, book) {
    var target = $("#cartBtn").getBoundingClientRect();
    var from = sourceEl.getBoundingClientRect();
    if (!from.width) return;
    var clone = document.createElement("div");
    clone.className = "fly-clone";
    clone.innerHTML = coverSVG(book);
    clone.style.left = from.left + "px";
    clone.style.top = from.top + "px";
    clone.style.width = from.width + "px";
    clone.style.height = from.height + "px";
    document.body.appendChild(clone);
    requestAnimationFrame(function () {
      var dx = target.left + target.width / 2 - (from.left + from.width / 2);
      var dy = target.top + target.height / 2 - (from.top + from.height / 2);
      clone.style.transform = "translate(" + dx + "px," + dy + "px) scale(.06) rotate(24deg)";
      clone.style.opacity = "0";
    });
    setTimeout(function () { clone.remove(); }, 900);
  }

  document.addEventListener("click", function (e) {
    var addBtn = e.target.closest("[data-add]");
    if (addBtn) {
      e.preventDefault();
      var id = parseInt(addBtn.getAttribute("data-add"), 10);
      var card = addBtn.closest(".card");
      var cover = card ? card.querySelector(".card__cover") : null;
      addToCart(id, 1, cover || addBtn);
      if (addBtn.classList.contains("add-btn")) {
        addBtn.classList.add("is-added");
        var html = addBtn.innerHTML;
        addBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>Added';
        setTimeout(function () {
          addBtn.classList.remove("is-added");
          addBtn.innerHTML = html;
        }, 1300);
      }
      return;
    }

    var q = e.target.closest("[data-quick]");
    if (q) {
      e.preventDefault();
      openQuick(parseInt(q.getAttribute("data-quick"), 10));
      return;
    }

    var inc = e.target.closest("[data-inc]");
    if (inc) {
      var iid = parseInt(inc.getAttribute("data-inc"), 10);
      cart.forEach(function (l) { if (l.id === iid) l.qty = Math.min(12, l.qty + 1); });
      saveCart(); renderCart(); return;
    }
    var dec = e.target.closest("[data-dec]");
    if (dec) {
      var did = parseInt(dec.getAttribute("data-dec"), 10);
      cart = cart.filter(function (l) {
        if (l.id !== did) return true;
        l.qty -= 1;
        return l.qty > 0;
      });
      saveCart(); renderCart(); return;
    }
    var rm = e.target.closest("[data-rm]");
    if (rm) {
      var rid = parseInt(rm.getAttribute("data-rm"), 10);
      var row = rm.closest(".line-item");
      if (row) row.classList.add("is-out");
      setTimeout(function () {
        cart = cart.filter(function (l) { return l.id !== rid; });
        saveCart(); renderCart();
      }, 240);
      return;
    }
  });

  $("#checkoutBtn").addEventListener("click", function () {
    toast("Demo storefront — no payment is taken.");
  });

  renderCart();

  /* -------------------------------------------------------
     14. QUICK VIEW MODAL
     ------------------------------------------------------- */
  var modal = $("#modal");
  var modalPanel = $("#modalPanel");

  function openQuick(id) {
    var b = byId(id);
    if (!b) return;
    modalPanel.innerHTML =
      '<button class="modal__close" id="modalClose" aria-label="Close">' +
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
      '</button>' +
      '<div class="qv">' +
        '<div class="qv__cover">' + coverSVG(b) + '</div>' +
        '<div>' +
          '<p class="qv__genre">' + esc(b.genre) + '</p>' +
          '<h2 class="qv__title">' + esc(b.title) + '</h2>' +
          '<p class="qv__author">by ' + esc(b.author) + '</p>' +
          '<div class="qv__stars">' + starsSVG(b.rating) +
            '<span class="card__rating">' + b.rating.toFixed(1) + ' &middot; ' + b.reviews + ' reviews</span></div>' +
          '<p class="qv__desc">' + esc(b.desc) + '</p>' +
          '<div class="qv__specs">' +
            '<div><small>Format</small><strong>' + esc(b.format) + '</strong></div>' +
            '<div><small>Pages</small><strong>' + b.pages + '</strong></div>' +
            '<div><small>Published</small><strong>' + b.year + '</strong></div>' +
            '<div><small>In stock</small><strong>Yes</strong></div>' +
          '</div>' +
          '<div class="qv__buy">' +
            '<span class="qv__price">' + money(b.price) +
              (b.oldPrice ? '<s>' + money(b.oldPrice) + '</s>' : '') + '</span>' +
            '<button class="btn btn--primary" data-add="' + b.id + '">' +
              '<span>Add to bag</span>' +
              '<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    $("#modalClose").addEventListener("click", closeQuick);
  }

  function closeQuick() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (!drawer.classList.contains("is-open")) document.body.classList.remove("is-locked");
  }

  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeQuick();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (modal.classList.contains("is-open")) closeQuick();
      else if (drawer.classList.contains("is-open")) closeCart();
    }
  });

  /* -------------------------------------------------------
     15. NEWSLETTER
     ------------------------------------------------------- */
  var newsForm = $("#newsForm");
  var newsEmail = $("#newsEmail");
  var newsMsg = $("#newsMsg");

  newsForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var v = newsEmail.value.trim();
    var ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    newsEmail.classList.toggle("is-bad", !ok);
    newsMsg.classList.toggle("is-bad", !ok);
    if (!ok) {
      newsMsg.textContent = "That email does not look right. Try again?";
      newsEmail.focus();
      return;
    }
    newsMsg.textContent = "You are in. Look for the first note on Thursday.";
    newsEmail.value = "";
    toast("Subscribed — welcome to the Thursday list");
  });

  /* -------------------------------------------------------
     16. ACTIVE NAV LINK ON SCROLL
     ------------------------------------------------------- */
  var sections = ["home", "shop", "bestsellers", "story", "reviews"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  var navIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var id = en.target.id;
      $$(".nav__link").forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(function (s) { navIO.observe(s); });

  /* -------------------------------------------------------
     17. MISC
     ------------------------------------------------------- */
  $("#year").textContent = new Date().getFullYear();

  // smooth-scroll for in-page anchors (respecting sticky header)
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented) return;
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var href = a.getAttribute("href");
    if (href === "#" || href.length < 2) return;
    var el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    var top = el.getBoundingClientRect().top + window.pageYOffset - 84;
    window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
    try { history.replaceState(null, "", href); } catch (err) {}
  });
})();
