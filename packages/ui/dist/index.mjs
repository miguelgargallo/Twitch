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
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Menu = () => {
  return /* @__PURE__ */ jsx2("div", {
    className: "hidden sm:block",
    children: /* @__PURE__ */ jsxs2("div", {
      className: "flex flex-row items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl",
      children: [
        /* @__PURE__ */ jsx2("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx2("a", {
            href: "/",
            children: "M"
          })
        }),
        /* @__PURE__ */ jsx2("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx2("a", {
            href: "/about",
            children: "Acerca de mi"
          })
        }),
        /* @__PURE__ */ jsx2("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx2("a", {
            href: "/proyectos",
            children: "Proyectos"
          })
        }),
        /* @__PURE__ */ jsx2("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx2("a", {
            href: "https://twitter.com/miguelgargallo",
            target: "_blank",
            rel: "noreferrer",
            children: "Twitter"
          })
        }),
        /* @__PURE__ */ jsx2("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx2("a", {
            href: "https://github.com/miguelgargallo",
            target: "_blank",
            rel: "noreferrer",
            children: "Github"
          })
        })
      ]
    })
  });
};
export {
  Button,
  Menu
};
