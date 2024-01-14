/assets/IT Man - Intro.mp4
background: true

---

## Power up your Neovim with Gen.nvim

---

## [Gen.nvim](https://github.com/David-Kunz/gen.nvim)

---

## [Demo](https://github.com/David-Kunz/gen.nvim/pull/57)

````lua
  {
    "jellydn/gen.nvim",
    opts = {
      model = "mistral", -- The default model to use. If you don't have, run `ollama pull mistral` on your terminal.
      display_mode = "float", -- The display mode. Can be "float" or "split".
      show_prompt = true, -- Shows the Prompt submitted to Ollama.
      show_model = true, -- Displays which model you are using at the beginning of your chat session.
      debug = false, -- Prints errors and the command which is run.
    },
    event = "VeryLazy",
    keys = {
      {
        "<leader>mm",
        function()
          require("gen").select_model()
        end,
        desc = "Gen - Select AI Model",
      },
    },
    config = function(_, opts)
      local gen = require("gen")
      gen.setup(opts)
      gen.prompts["Elaborate_Text"] = {
        prompt = "Elaborate the following text:\n$text",
      }
      gen.prompts["Fix_Code"] = {
        prompt = "Fix the following code. Only output the result in format ```$filetype\n...\n```:\n```$filetype\n$text\n```",
        extract = "```$filetype\n(.-)```",
      }
    end,
  },
````

---

/assets/New content every Sunday.mp4
background: true

---

# Thank you

/assets/IT Man Main Logo 800x600.png

## [https://productsway.com](https://productsway.com)

Stay tuned for more innovative tech insights with IT Man Channel.
[https://bit.ly/m/itman](https://bit.ly/m/itman)
