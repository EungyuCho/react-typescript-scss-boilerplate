<h2 align="middle">React-Typescript-SCSS-Boilerplate</h2>
<p align="middle">serve with babel, webpack</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.1-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/library-React-skyblue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-scss-pink.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

## 🌅 Preview

  <img src="https://github.com/EungyuCho/react-typescript-scss-boilerplate/blob/master/docs/photo/home.png?raw=true">

### 🏰 Base structure

    .
    ├── docs                            # Documentation files
    ├── public                          # public folder(html template)
    ├── src                             # Source files
    │   └─ design-token
    │       └─ scss-variables.scss      # scss-global-variables
    ├── test                            # Automated tests (alternatively `spec` or `tests`)
    ├── tools                           # Tools and utilities
    ├── .babelrc                        # babel config
    ├── .webpack                        # webpack config
    ├── tsconfig                        # typescript configuration file
    ├── package.json
    ├── .gitignore
    └── README.md

## 📙 Description

Global variables color system based on `Hsla`.
You can use preview color system with this code.

```
    .some-element {
        background-color: hsla(var(--palette-#{$name}-(lightPercent)), 100%);
    }
```

- webpack: serve scss, babel-loader setup
- babel: includes preset of `env`, `typescript`, `react`

## ⚙️ Start Project

install package

```
yarn
```

run

```
yarn serve      // start for development
yarn build      // build project
```

<br>

## 📝 License

This project is MIT licensed.
