import { c as createAstro, b as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, h as renderComponent, m as maybeRenderHead } from '../astro_31902133.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                           */
const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/png" href="/favicon.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="A simple website for the love of my life, yellow flowers and more."><title>${pageTitle}</title>${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "J:/floress/Niuva/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Niuva";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 id="welcome-message">Te quiero con todo mi corazón</h1><div class="flower"><div class="f-wrapper"><div class="flower__line"></div><div class="f"><div class="flower__leaf flower__leaf--1"></div><div class="flower__leaf flower__leaf--2"></div><div class="flower__leaf flower__leaf--3"></div><div class="flower__leaf flower__leaf--4"></div><div class="flower__leaf flower__leaf--5"></div><div class="flower__leaf flower__leaf--6"></div><div class="flower__leaf flower__leaf--7"></div><div class="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div></div></div><div class="f-wrapper f-wrapper--2"><div class="flower__line"></div><div class="f"><div class="flower__leaf flower__leaf--1"></div><div class="flower__leaf flower__leaf--2"></div><div class="flower__leaf flower__leaf--3"></div><div class="flower__leaf flower__leaf--4"></div><div class="flower__leaf flower__leaf--5"></div><div class="flower__leaf flower__leaf--6"></div><div class="flower__leaf flower__leaf--7"></div><div class="flower__leaf flower__leaf--8 flower__fall-down--pink"></div></div></div><div class="f-wrapper f-wrapper--3"><div class="flower__line"></div><div class="f"><div class="flower__leaf flower__leaf--1"></div><div class="flower__leaf flower__leaf--2"></div><div class="flower__leaf flower__leaf--3"></div><div class="flower__leaf flower__leaf--4"></div><div class="flower__leaf flower__leaf--5"></div><div class="flower__leaf flower__leaf--6"></div><div class="flower__leaf flower__leaf--7"></div><div class="flower__leaf flower__leaf--8 flower__fall-down--purple"></div></div></div><div class="flower__glass"></div></div>` })}`;
}, "J:/floress/Niuva/src/pages/index.astro", void 0);

const $$file = "J:/floress/Niuva/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
