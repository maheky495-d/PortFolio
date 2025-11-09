const path = require("path");

module.exports = {
  plugins: {
    tailwindcss: {
      // 👇 This tells Tailwind inside /client to use the root config
      config: path.join(__dirname, "../tailwind.config.ts"),
    },
    autoprefixer: {},
  },
};
