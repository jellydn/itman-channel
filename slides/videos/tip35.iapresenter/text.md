
/assets/IT Man - Intro.mp4
background: true

---

/assets/New content every Sunday.mp4
background: true

---

#### Tip #35
### [untypeable](https://github.com/total-typescript/untypeable) Get type-safe access to any API

---

#### Tip #35
### Usage
```typescript
import { initUntypeable, createTypeLevelClient } from "untypeable";

const u = initUntypeable();
type User = {
  id: string;
  name: string;
};

const router = u.router({
  "/user": u.input<{ id: string }>().output<User>(),
});

const BASE_PATH = "http://localhost:3000";
const client = createTypeLevelClient<typeof router>((path, input) => {
  return fetch(BASE_PATH + path + `?${new URLSearchParams(input)}`).then(
    (res) => res.json(),
  );
});
q
// Type-safe data access!
// - user is typed as User
// - { id: string } must be passed as the input
const user = await client("/user", {
  id: "1",
});
```

---

#### Tip #35
### [Demo](https://github.com/jellydn/untypeable-wretch-demo)
#### https://github.com/jellydn/untypeable-wretch-demo

---

# Thank you
/assets/IT Man Main Logo 800x600.png
## [https://bitly.com/m/itman](https://bitly.com/m/itman)