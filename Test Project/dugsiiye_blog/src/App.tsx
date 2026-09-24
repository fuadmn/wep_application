import React, { useState } from "react";

function App() {
  const [active, setActive] = useState("Blog");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const menuItems = [
    "Courses",
    "Mentorship",
    "Community",
    "League",
    "Ambassador",
    "Blog",
    "About",
    "Contact",
  ];

  const categories = [
    "AI Engineering",
    "Artificial Intelligence",
    "Career Growth",
    "Computer Science",
    "Cryptocurrency",
    "Cybersecurity",
    "Dark Web & Privacy",
    "Data Science",
    "DevOps & Cloud",
    "Ethical Hacking",
    "Leadership",
    "Learning Strategies",
    "Marketing",
    "Mobile Development",
    "Network",
    "Open Source",
    "Productivity",
    "Programming Languages",
    "Scholarship",
    "Soft Skills",
    "Software",
    "Software Engineering",
    "Web Development",
    "Web3 & Blockchain",
    "Work-Life Balance",
  ];

  const articles = [
    {
      category: "AI ENGINEERING",
      title: "Yaa Filcan: ChatGPT, Grok iyo Gemini?",
      description:
        "Sida AI-yada cusub u shaqeeyaan iyo waxa ay kaga duwan yihiin midba midka kale.",
      author: "Mohamed Omar",
      time: "4 min read",
      badge: "",
    },
    {
      category: "CAREER GROWTH",
      title: "Hadda Baro Xirfadaha 2026",
      description:
        "Xirfadaha muhiimka ah ee qof kasta u baahan yahay inuu barto sannadka 2026.",
      author: "Mohamed Omar",
      time: "5 min read",
      badge: "G",
    },
    {
      category: "WEB DEVELOPMENT",
      title: "Baro React JS Af-Soomaali",
      description:
        "Baro React JS Af-Soomaali, laga bilaabo aasaaska ilaa aad ka dhisto application.",
      author: "Mohamed Omar",
      time: "6 min read",
      badge: "",
    },
    {
      category: "CAREER GROWTH",
      title: "10-ka Xirfadood ee Lagaaga Baahan Yahay",
      description:
        "Xirfadaha maanta looga baahan yahay qofka doonaya inuu horumar ka sameeyo technology.",
      author: "Mohamed Omar",
      time: "4 min read",
      badge: "",
    },
    {
      category: "ARTIFICIAL INTELLIGENCE",
      title: "Gemini 3.7 Flash Waan Tijaabiyay",
      description:
        "Gemini 3.7 Flash waa model awood badan oo loogu talagalay shaqooyin badan.",
      author: "Mohamed Omar",
      time: "7 min read",
      badge: "3.7",
    },
    {
      category: "PROGRAMMING",
      title: "Yaa Filcan: Claude Code, Cursor iyo Codex?",
      description:
        "Claude Code, Cursor iyo Codex waa tools muhiim u ah developers-ka casriga ah.",
      author: "Mohamed Omar",
      time: "6 min read",
      badge: "",
    },
    {
      category: "SOFTWARE ENGINEERING",
      title: "Coding 2026: Ma Muda Tahay?",
      description:
        "Coding wali waa xirfad muhiim ah, laakiin qaabka loo barto ayaa isbedelaya.",
      author: "Mohamed Omar",
      time: "5 min read",
      badge: "",
    },
    {
      category: "ARTIFICIAL INTELLIGENCE",
      title: "Waa Maxay DeepSeek?",
      description:
        "DeepSeek waa model AI ah oo helay dareen badan iyo isticmaalayaal badan.",
      author: "Mohamed Omar",
      time: "3 min read",
      badge: "AI",
    },
    {
      category: "PROGRAMMING",
      title: "Sida Saxda ah ee Loo Barto Programming-ka",
      description:
        "Habka saxda ah ee beginner-ku ugu bilaabi karo programming una horumari karo.",
      author: "Mohamed Omar",
      time: "8 min read",
      badge: "",
    },
    {
      category: "FULL COURSE",
      title: "Baro Claude Code Af-Soomaali",
      description:
        "Baro Claude Code Af-Soomaali si aad uga faa'iidaysato AI coding assistant.",
      author: "Mohamed Omar",
      time: "6 min read",
      badge: "AI",
    },
    {
      category: "AI CODE EDITOR",
      title: "Baro Cursor AI Af-Soomaali",
      description:
        "Baro Cursor AI Af-Soomaali sida loogu isticmaalo coding iyo development.",
      author: "Mohamed Omar",
      time: "5 min read",
      badge: "",
    },
    {
      category: "CODING & AI",
      title: "Vibe Coding iyo Agentic Coding",
      description:
        "Faham waxa ay yihiin Vibe Coding iyo Agentic Coding iyo sida loo isticmaalo.",
      author: "Mohamed Omar",
      time: "5 min read",
      badge: "",
    },
  ];

  const authors = [
    {
      name: "sharafdin",
      articles: "72 articles",
      avatar: "S",
    },
    {
      name: "mchamoudadev",
      articles: "23 articles",
      avatar: "M",
    },
    {
      name: "omartood",
      articles: "2 articles",
      avatar: "O",
    },
    {
      name: "elmohmedy",
      articles: "1 articles",
      avatar: "E",
    },
    {
      name: "tman",
      articles: "1 articles",
      avatar: "T",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const text =
      `${article.title} ${article.description} ${article.category}`.toLowerCase();

    const searchMatch = text.includes(search.toLowerCase());

    const categoryMatch =
      !activeCategory ||
      article.category.toLowerCase() === activeCategory.toLowerCase();

    return searchMatch && categoryMatch;
  });

  const selectCategory = (category: string) => {
    setActiveCategory(
      activeCategory === category ? null : category
    );
    setCurrentPage(1);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-[#0b0f0e] text-white"
          : "bg-[#fafafa] text-[#181818]"
      }`}
    >

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className={`mx-auto mt-4 flex h-[62px] max-w-[1230px] items-center rounded-full px-7 shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-colors duration-300 ${
          darkMode
            ? "bg-[#151a18] shadow-black/30"
            : "bg-white"
        }`}
      >

        {/* LOGO */}
        <div className="flex shrink-0 items-center">

          <div className="relative mr-1 flex h-7 w-7 items-center justify-center">
            <span className="absolute left-1 h-5 w-1 rounded-full bg-[#00b894]" />
            <span className="absolute left-3 h-5 w-1 rounded-full bg-[#111827]" />
          </div>

          <span
            className={`text-[20px] font-bold tracking-[-1px] ${
              darkMode ? "text-white" : "text-[#111827]"
            }`}
          >
            Dy
            <span className="text-[#00a884]">g</span>
            siiye
          </span>

        </div>


        {/* MENU */}
        <div className="ml-auto hidden items-center gap-1 lg:flex">

          {menuItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActive(item)}
              className={`rounded-full px-4 py-2.5 text-[14px] font-semibold transition-all ${
                active === item
                  ? darkMode
                    ? "bg-[#252d2a] text-white"
                    : "bg-[#f1f1f1] text-[#171717]"
                  : darkMode
                    ? "text-[#8d9692] hover:bg-[#202623] hover:text-white"
                    : "text-[#8b8b8b] hover:bg-gray-50 hover:text-[#222]"
              }`}
            >
              {item}
            </button>
          ))}


          {/* RIGHT ICONS */}
          <div className="ml-3 flex items-center gap-5">

            {/* DARK MODE BUTTON */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-xl transition hover:scale-110 ${
                darkMode
                  ? "text-yellow-300"
                  : "text-[#222]"
              }`}
              title={darkMode ? "Light Mode" : "Dark Mode"}
            >
              {darkMode ? "☀" : "☾"}
            </button>


            {/* MAIL */}
            <button
              type="button"
              className={darkMode ? "text-white" : "text-[#222]"}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M4 5h16v14H4z" />
                <path d="M4 6l8 7 8-7" />
              </svg>
            </button>


            {/* NOTIFICATION */}
            <button
              type="button"
              className={`relative ${
                darkMode ? "text-white" : "text-[#222]"
              }`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                <path d="M10 21h4" />
              </svg>

              <span className="absolute -right-3 -top-4 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#111827] px-1 text-[11px] font-bold text-white">
                99+
              </span>
            </button>


            {/* PROFILE */}
            <button
              type="button"
              className="h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-sm"
            >
              <div className="flex h-full w-full flex-col">
                <div className="h-1/3 bg-[#ef3b2d]" />
                <div className="relative h-1/3 bg-[#ffd34e]">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[11px]">
                    ⭐
                  </span>
                </div>
                <div className="h-1/3 bg-[#f5f5f5]" />
              </div>
            </button>

          </div>
        </div>


        {/* MOBILE */}
        <button
          type="button"
          className={`ml-auto rounded-full border px-4 py-2 text-lg lg:hidden ${
            darkMode
              ? "border-[#333] text-white"
              : "border-[#ddd] text-black"
          }`}
        >
          ☰
        </button>

      </nav>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="mx-auto max-w-[1320px] px-6 pb-16 pt-16 sm:px-10">

        {/* THE BLOG */}
        <p
          className={`mb-5 text-[13px] font-semibold uppercase tracking-wide ${
            darkMode ? "text-[#8d9692]" : "text-[#777]"
          }`}
        >
          THE BLOG
        </p>


        {/* TITLE */}
        <h1
          className={`max-w-[850px] text-[40px] font-bold leading-[1.1] tracking-[-2px] sm:text-[50px] ${
            darkMode ? "text-white" : "text-[#181818]"
          }`}
        >
          Ideas, tutorials, and insights.
        </h1>


        {/* DESCRIPTION */}
        <p
          className={`mt-5 max-w-[850px] text-[17px] leading-7 sm:text-[18px] ${
            darkMode ? "text-[#9ca6a2]" : "text-[#777]"
          }`}
        >
          <span
            className={
              darkMode ? "font-semibold text-white" : "font-semibold text-[#111]"
            }
          >
            Dive into our latest writing on software engineering, AI, and
            building a career in tech,
          </span>{" "}
          crafted in Somali and English.
        </p>


        {/* =================================================
            CATEGORIES
        ================================================== */}

        <div className="mt-7 flex max-w-[1050px] flex-wrap gap-2.5">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => selectCategory(category)}
              className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-all sm:text-[15px] ${
                activeCategory === category
                  ? "border-[#111] bg-[#111] text-white"
                  : darkMode
                    ? "border-[#333] bg-[#151a18] text-[#e2e6e4] hover:border-white"
                    : "border-[#dedede] bg-white text-[#111] hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}

        </div>


        {/* =================================================
            SEARCH
        ================================================== */}

        <div className="mt-16 flex items-center gap-4 sm:mt-[72px]">

          {/* Search */}
          <div className="relative flex-1">

            <svg
              className={`absolute left-5 top-1/2 -translate-y-1/2 ${
                darkMode ? "text-[#777]" : "text-[#999]"
              }`}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>


            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search articles..."
              className={`h-[50px] w-full rounded-[15px] border pl-12 pr-5 text-[15px] outline-none transition sm:text-[16px] ${
                darkMode
                  ? "border-[#333] bg-[#151a18] text-white placeholder:text-[#777] focus:border-white"
                  : "border-[#dedede] bg-white text-black placeholder:text-[#888] focus:border-black"
              }`}
            />

          </div>


          {/* FILTER */}
          <button
            type="button"
            className={`flex h-[50px] shrink-0 items-center gap-3 rounded-full border px-5 text-[14px] font-semibold transition sm:px-7 sm:text-[15px] ${
              darkMode
                ? "border-[#333] bg-[#151a18] text-white hover:border-white"
                : "border-[#dedede] bg-white text-black hover:border-black"
            }`}
          >

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 7h10" />
              <path d="M18 7h2" />
              <path d="M4 17h2" />
              <path d="M10 17h10" />
              <circle cx="16" cy="7" r="2" />
              <circle cx="8" cy="17" r="2" />
            </svg>

            <span className="hidden sm:inline">
              Filters
            </span>

          </button>

        </div>


        {/* ARTICLE COUNT */}
        <div
          className={`mt-12 text-[15px] sm:mt-[54px] ${
            darkMode ? "text-[#8d9692]" : "text-[#777]"
          }`}
        >
          Showing{" "}
          <span
            className={
              darkMode
                ? "font-semibold text-white"
                : "font-semibold text-[#111]"
            }
          >
            {filteredArticles.length > 0 ? "1-12" : "0"}
          </span>{" "}
          of{" "}
          <span
            className={
              darkMode
                ? "font-bold text-white"
                : "font-bold text-[#111]"
            }
          >
            {filteredArticles.length}
          </span>{" "}
          articles
        </div>


        {/* =================================================
            ARTICLES
        ================================================== */}

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {filteredArticles.map((article, index) => (

            <article
              key={`${article.title}-${index}`}
              className={`group relative min-h-[330px] overflow-hidden rounded-[12px] border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? "border-[#333] bg-gradient-to-b from-[#343938] via-[#202624] to-[#050707]"
                  : "border-[#d5d5d5] bg-gradient-to-b from-[#d0d0d0] via-[#f4f4f4] to-[#111]"
              }`}
            >

              {/* TOP */}
              <div className="flex items-center justify-between">

                <span
                  className={`rounded-full px-2.5 py-1 text-[7px] font-bold uppercase tracking-wide ${
                    darkMode
                      ? "bg-white/10 text-[#aaa]"
                      : "bg-white/70 text-[#777]"
                  }`}
                >
                  ARTICLE
                </span>


                {article.badge && (
                  <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#08a579] px-1 text-[7px] font-bold text-white">
                    {article.badge}
                  </span>
                )}

              </div>


              {/* LOGO */}
              <div className="mt-4 text-center">
                <span
                  className={`text-[9px] font-bold ${
                    darkMode ? "text-white" : "text-[#111]"
                  }`}
                >
                  <span className="text-[#00a884]">D</span>
                  ugsiiye
                </span>
              </div>


              {/* CATEGORY */}
              <p
                className={`mt-4 text-center text-[7px] font-semibold uppercase tracking-[2px] ${
                  darkMode ? "text-[#999]" : "text-[#555]"
                }`}
              >
                {article.category}
              </p>


              {/* TITLE */}
              <h2 className="mt-2 text-center text-[18px] font-extrabold leading-[1.08] tracking-[-0.5px] text-[#0d2922] dark:text-white">
                {article.title}
              </h2>


              {/* DATE */}
              <p
                className={`mt-5 text-[7px] font-semibold uppercase ${
                  darkMode ? "text-[#999]" : "text-[#666]"
                }`}
              >
                JUL 28, 2026
              </p>


              {/* DESCRIPTION */}
              <p
                className={`mt-2 line-clamp-3 text-[9px] leading-4 ${
                  darkMode ? "text-[#aaa]" : "text-[#555]"
                }`}
              >
                {article.description}
              </p>


              {/* BOTTOM */}
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between border-t border-white/20 pt-3">

                {/* AUTHOR */}
                <div className="flex items-center gap-2">

                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#222] text-[8px] font-bold text-white">
                    M
                  </div>

                  <div>
                    <p className="text-[8px] font-bold text-white">
                      {article.author}
                    </p>

                    <p className="text-[7px] text-gray-300">
                      {article.time}
                    </p>
                  </div>

                </div>


                {/* ARROW */}
                <button
                  type="button"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition group-hover:bg-white group-hover:text-black"
                >
                  ↗
                </button>

              </div>

            </article>

          ))}

        </div>


        {/* NO RESULTS */}
        {filteredArticles.length === 0 && (
          <div
            className={`mt-5 rounded-2xl border py-16 text-center ${
              darkMode
                ? "border-[#333] bg-[#151a18]"
                : "border-[#ddd] bg-white"
            }`}
          >
            <div className="text-4xl">
              🔍
            </div>

            <p
              className={`mt-4 text-lg font-bold ${
                darkMode ? "text-white" : "text-[#222]"
              }`}
            >
              No articles found
            </p>

            <p
              className={`mt-2 text-sm ${
                darkMode ? "text-[#888]" : "text-[#888]"
              }`}
            >
              Try another search or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory(null);
              }}
              className="mt-5 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white"
            >
              Clear Filters
            </button>
          </div>
        )}


        {/* =================================================
            PAGINATION
        ================================================== */}

        <div
          className={`mt-7 flex items-center justify-between border-t pt-5 ${
            darkMode ? "border-[#333]" : "border-[#ddd]"
          }`}
        >

          <p
            className={`text-[9px] ${
              darkMode ? "text-[#888]" : "text-[#777]"
            }`}
          >
            Page{" "}
            <span
              className={
                darkMode
                  ? "font-bold text-white"
                  : "font-bold text-[#222]"
              }
            >
              {currentPage}
            </span>{" "}
            of{" "}
            <span
              className={
                darkMode
                  ? "font-bold text-white"
                  : "font-bold text-[#222]"
              }
            >
              9
            </span>
          </p>


          <div className="flex items-center gap-1">

            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((page) =>
                  Math.max(1, page - 1)
                )
              }
              className={`mr-2 flex h-7 items-center rounded-full border px-3 text-[9px] font-semibold ${
                darkMode
                  ? "border-[#333] bg-[#151a18] text-white"
                  : "border-[#ddd] bg-white text-[#222]"
              } disabled:opacity-40`}
            >
              ‹
            </button>


            {[1, 2, 3].map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold ${
                  currentPage === page
                    ? "bg-[#111827] text-white"
                    : darkMode
                      ? "text-[#888] hover:bg-[#202623]"
                      : "text-[#777] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}


            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(9, page + 1)
                )
              }
              className={`ml-2 flex h-7 items-center gap-2 rounded-full border px-3 text-[9px] font-semibold ${
                darkMode
                  ? "border-[#333] bg-[#151a18] text-white hover:border-white"
                  : "border-[#ddd] bg-white text-[#222] hover:border-black"
              }`}
            >
              Next
              <span>›</span>
            </button>

          </div>

        </div>


        {/* =================================================
            OUR WRITERS
        ================================================== */}

        <section
          className={`mt-20 border-t pt-10 ${
            darkMode ? "border-[#333]" : "border-[#dedede]"
          }`}
        >

          <div className="mx-auto max-w-[850px]">

            <p
              className={`text-[10px] font-bold uppercase tracking-wide ${
                darkMode ? "text-[#888]" : "text-[#777]"
              }`}
            >
              OUR WRITERS
            </p>

            <h2
              className={`mt-2 text-[17px] font-bold ${
                darkMode ? "text-white" : "text-[#111]"
              }`}
            >
              Meet the people behind the articles
            </h2>


            <div className="mt-5 flex flex-wrap gap-2.5">

              {authors.map((author) => (
                <button
                  key={author.name}
                  type="button"
                  className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 shadow-sm transition hover:-translate-y-0.5 ${
                    darkMode
                      ? "border-[#333] bg-[#151a18] hover:shadow-black/30"
                      : "border-[#e5e5e5] bg-white hover:shadow-md"
                  }`}
                >

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#222] text-[9px] font-bold text-white">
                    {author.avatar}
                  </div>

                  <div className="text-left">

                    <p
                      className={`text-[10px] font-bold ${
                        darkMode ? "text-white" : "text-[#222]"
                      }`}
                    >
                      {author.name}
                    </p>

                    <p className="text-[9px] text-[#888]">
                      {author.articles}
                    </p>

                  </div>

                </button>
              ))}

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className={`border-t transition-colors duration-300 ${
          darkMode
            ? "border-[#222] bg-[#101513]"
            : "border-[#dedede] bg-[#f5f6f6]"
        }`}
      >

        <div className="mx-auto max-w-[850px] px-6 py-14 sm:px-4 sm:py-16">

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

            {/* BRAND */}
            <div>

              <div className="flex items-center">

                <div className="relative mr-1 flex h-6 w-6 items-center justify-center">
                  <span className="absolute left-1 h-5 w-1 rounded-full bg-[#00b894]" />
                  <span className="absolute left-3 h-5 w-1 rounded-full bg-[#111827]" />
                </div>

                <span
                  className={`text-[17px] font-bold tracking-[-1px] ${
                    darkMode ? "text-white" : "text-[#111827]"
                  }`}
                >
                  Dy
                  <span className="text-[#00a884]">g</span>
                  siiye
                </span>

              </div>


              <p
                className={`mt-7 max-w-[280px] text-[11px] leading-5 ${
                  darkMode ? "text-[#888]" : "text-[#777]"
                }`}
              >
                <span
                  className={
                    darkMode
                      ? "font-bold text-white"
                      : "font-bold text-[#222]"
                  }
                >
                  Become a Full Stack AI Engineer in 32 weeks.
                </span>{" "}
                The only Somali-language program teaching AI-assisted
                development.
              </p>


              {/* Social */}
              <div className="mt-7 flex items-center gap-2">

                {["▶", "◉", "◔", "f", "𝕏", "in"].map(
                  (icon, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-[9px] font-bold transition ${
                        darkMode
                          ? "border-[#333] bg-[#151a18] text-[#888] hover:border-white hover:text-white"
                          : "border-[#ddd] bg-white text-[#888] hover:border-black hover:text-black"
                      }`}
                    >
                      {icon}
                    </button>
                  )
                )}

              </div>

            </div>


            {/* PRODUCT */}
            <div>

              <h3
                className={`text-[11px] font-bold ${
                  darkMode ? "text-white" : "text-[#111]"
                }`}
              >
                Product
              </h3>

              <div className="mt-4 space-y-4">

                {[
                  "Mentorship Program",
                  "Courses",
                  "Blog",
                  "YouTube",
                  "Qaamuuska",
                  "Community",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`block text-[11px] transition ${
                      darkMode
                        ? "text-[#888] hover:text-white"
                        : "text-[#888] hover:text-black"
                    }`}
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>


            {/* COMPANY + LEGAL */}
            <div className="grid grid-cols-2 gap-8">

              {/* Company */}
              <div>

                <h3
                  className={`text-[11px] font-bold ${
                    darkMode ? "text-white" : "text-[#111]"
                  }`}
                >
                  Company
                </h3>

                <div className="mt-4 space-y-4">

                  {[
                    "About Us",
                    "Contact",
                    "Ambassador Program",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`block text-left text-[11px] transition ${
                        darkMode
                          ? "text-[#888] hover:text-white"
                          : "text-[#888] hover:text-black"
                      }`}
                    >
                      {item}
                    </button>
                  ))}

                </div>

              </div>


              {/* Legal */}
              <div>

                <h3
                  className={`text-[11px] font-bold ${
                    darkMode ? "text-white" : "text-[#111]"
                  }`}
                >
                  Legal
                </h3>

                <div className="mt-4 space-y-4">

                  {[
                    "Privacy Policy",
                    "Terms of Service",
                    "Cookie Policy",
                    "Refund Policy",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`block text-left text-[11px] transition ${
                        darkMode
                          ? "text-[#888] hover:text-white"
                          : "text-[#888] hover:text-black"
                      }`}
                    >
                      {item}
                    </button>
                  ))}

                </div>

              </div>

            </div>

          </div>


          {/* FOOTER BOTTOM */}
          <div
            className={`mt-12 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between ${
              darkMode ? "border-[#333]" : "border-[#ddd]"
            }`}
          >

            <p
              className={`text-[10px] ${
                darkMode ? "text-[#777]" : "text-[#777]"
              }`}
            >
              © 2026 Dugsiiye. All rights reserved.
            </p>

            <p
              className={`text-[10px] ${
                darkMode ? "text-[#777]" : "text-[#777]"
              }`}
            >
              Proudly built in Somalia
            </p>

          </div>

        </div>


        {/* WHATSAPP */}
        <button
          type="button"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg transition hover:scale-105"
        >
          ☎
        </button>

      </footer>

    </div>
  );
}

export default App;