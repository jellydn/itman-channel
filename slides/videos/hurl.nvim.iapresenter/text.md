
/assets/IT Man - Intro.mp4
background: true

---

/assets/New content every Sunday.mp4
background: true

---
### [Hurl.nvim](https://github.com/jellydn/hurl.nvim) - Streamline Your API Workflow

- Why I create this plugin?
- Let's see how it works
- Flexible and easy to use

---

### Easy Installation via Lazyvim

```
{
    "jellydn/hurl.nvim",
    dependencies = { "MunifTanjim/nui.nvim" },
    cmd = { "HurlRunner", "HurlRunnerAt" },
    opts = {
      -- Show debugging info
      debug = false,
      -- Show response in popup or split
      mode = "popup",
    },
    keys = {
      -- Run API request
      { "<leader>A", "<cmd>HurlRunner<CR>", desc = "Run All requests" },
      { "<leader>a", "<cmd>HurlRunnerAt<CR>", desc = "Run Api request" },
      -- Run Hurl request in visual mode
      { "<leader>h", ":HurlRunner<CR>", desc = "Hurl Runner", mode = "v" },
    },
  }
}
```

---

### Demo

- How to enable debugging mode
- Setup binding keys
- How to use in visual mode
- Run at specific line where it has HTTP verb
- Change mode between popup and split

---


### [Thunder Client - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
This client is awesome and it's my favorite on my VS Code.

---

# Thank you

/assets/IT Man Main Logo 800x600.png
## [https://bitly.com/m/itman](https://bitly.com/m/itman)


Stay tuned for more innovative tech insights with IT Man Channel.
[https://bitly.com/m/itman](https://bitly.com/m/itman)
