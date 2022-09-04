---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: ./it-man.png
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
marp: true
---

# IT MAN Channel

---

# Talk #24 - IT Man - Pattern Matching library for TypeScript

## ts-pattern: The exhaustive Pattern Matching library for TypeScript with smart type inference.

Homepage: https://github.com/gvergnaud/ts-pattern

```typescript
import { match, P } from 'ts-pattern';

type Data =
  | { type: 'text'; content: string }
  | { type: 'img'; src: string };
type Result =
  | { type: 'ok'; data: Data }
  | { type: 'error'; error: Error };
const result: Result = ...;

return match(result)
  .with({ type: 'error' }, () => `<p>Oups! An error occured</p>`)
  .with({ type: 'ok', data: { type: 'text' } }, (res) => `<p>${res.data.content}</p>`)
  .with({ type: 'ok', data: { type: 'img', src: P.select() } }, (src) => `<img src=${src} />`)
  .exhaustive();
```

---

# Good price - ITMan shop - https://bit.ly/m/itman

## Biometric Wallet - IT Man – D'CENT Shop

https://s.productsway.com/ub0RfF-D

$129.00

## Biometric Wallet 2X Package - IT Man – D'CENT Shop

https://s.productsway.com/P-UR--Ig

$189.00
