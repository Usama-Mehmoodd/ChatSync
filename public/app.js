



const navItems = [
  {
    name: "Chats",
    href: "/public/index.html",
    icon: "fa-solid fa-message",
    active: true,
  },
  {
    name: "Users",
    href: "/public/users.html",
    icon: "fa-solid fa-users",
    active: false,
  },
  {
    name: "Settings",
    href: "/public/settings.html",
    icon: "fa-solid fa-gear",
    active: false,
  },
  {
    name: "About",
    href: "/public/about.html",
    icon: "fa-solid fa-circle-info",
    active: false,
  },
];




const nav = document.getElementById("sidebar-nav");

nav.innerHTML = navItems
  .map(
    (item) => `
      <a href="${item.href}"
        class="flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition
        ${
          item.active
            ? "bg-slate-800 text-white"
            : "hover:bg-slate-800/50 hover:text-white"
        }">
        <i class="${item.icon} text-lg w-5"></i>
        <span>${item.name}</span>
      </a>
    `
  )
  .join("");









