// src/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ jsx("a", {
      href: "https://turbo.build/repo/docs",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
        children: [
          "Read the docs",
          /* @__PURE__ */ jsx("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/Menu.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Menu = () => {
  return /* @__PURE__ */ jsx2("div", {
    className: "hidden sm:block",
    children: /* @__PURE__ */ jsx2("div", {
      className: "flex flex-row items-center justify-between bg-gradient-to-r from-black to-gray-800",
      children: /* @__PURE__ */ jsx2("button", {
        className: "rounded-xl py-2 px-4 font-bold text-white",
        children: /* @__PURE__ */ jsx2("a", {
          href: "/what-is-pylar",
          children: "Acerca de mi"
        })
      })
    })
  });
};
export {
  Button,
  Menu
};
