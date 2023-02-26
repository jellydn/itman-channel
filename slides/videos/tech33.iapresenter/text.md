
/assets/IT Man - Intro.mp4
background: true

---

/assets/New content every Sunday.mp4
background: true

---

#### Tech #33
### How to use BigNumber like PRO
## [ethers.js](https://docs.ethers.org/v5/)

/assets/Clipboard_1.png
size: contain
x: right


---
#### Tech #33
### [What is BigNumber?](https://docs.ethers.org/v5/api/utils/bignumber/)

```typescript
// From a decimal string...
BigNumber.from("42")
// { BigNumber: "42" }

// From a HexString...
BigNumber.from("0x2a")
// { BigNumber: "42" }

// From a negative HexString...
BigNumber.from("-0x2a")
// { BigNumber: "-42" }
```
---

#### Tech #33
### NUMERIC_FAULT-underflow
```typescript
BigNumber.from(1.23);
```
```bash
Error: underflow [ See: https://links.ethers.org/v5-errors-NUMERIC_FAULT-underflow ] (fault="underflow", operation="BigNumber.from", value=1.23, code=NUMERIC_FAULT, version=bignumber/5.7.0)
```

---
#### Tech #33
### NUMERIC_FAULT-overflow
```typescript
BigNumber.from(Number.MAX_SAFE_INTEGER);
```
```bash
Error: overflow [ See: https://links.ethers.org/v5-errors-NUMERIC_FAULT-overflow ] (fault="overflow", operation="BigNumber.from", value=9007199254740991, code=NUMERIC_FAULT, version=bignumber/5.7.0)
```

---
#### Tech #33
### [Big Number Demo & Solution](https://github.com/jellydn/ethers-bignumber-demo)


---

# Thank you
/assets/IT Man Main Logo 800x600.png
## [https://bitly.com/m/itman](https://bitly.com/m/itman)