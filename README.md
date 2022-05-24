🌙 vue3-typescript-sample
====


[![CircleCI](https://circleci.com/gh/isystk/vue3-typescript-sample/tree/master.svg?style=svg)](https://circleci.com/gh/isystk/vue3-typescript-sample/tree/master)
![GitHub issues](https://img.shields.io/github/issues/isystk/vue3-typescript-sample)
![GitHub forks](https://img.shields.io/github/forks/isystk/vue3-typescript-sample)
![GitHub stars](https://img.shields.io/github/stars/isystk/vue3-typescript-sample)
![GitHub license](https://img.shields.io/github/license/isystk/vue3-typescript-sample)

## 📗 プロジェクトの概要

Vue3 の学習用サンプルアプリケーションです。

### 利用している技術

- Vue3
- Vuetify 
- Typescript
- AWS Cognito
- Sass
- Tailwind Css
- jest
- ESLint & Prettier
- i18n
- husky
- StoryBook

## 🌐 Demo
https://vue3-typescript-sample.vercel.app

![TOP画面](./app1.png "TOP画面")
![マイページ一覧](./app2.png "マイページ一覧")
![投稿フォーム](./app3.png "投稿フォーム")

## 🔧  環境構築
```shell
# Node.js のバージョンを確認
$ node -v
v16.13.1
# yarnのインストール
$ npm install -g yarn
# モジュールのインストール
$ yarn
```

## 📦 ディレクトリ構造

```
.
├── LICENSE
├── README.md
├── dist
├── index.html
├── jest.config.js
├── src
│    ├── @types
│    ├── App.vue
│    ├── __tests__
│    ├── assets
│    ├── components
│    ├── constants
│    ├── env.d.ts
│    ├── layouts
│    ├── locales
│    ├── main.ts
│    ├── pages
│    ├── plugins
│    ├── router.ts
│    ├── services
│    ├── store
│    ├── stories
│    ├── styles
│    └── utilities
├── tailwind.config.js
├── tsconfig.jest.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock

```


## 🖊️ 起動方法

```shell
$ yarn dev
```

## 💬 使い方
```shell
# run test
$ yarn test

# run lintfix & prettier
$ yarn fix

# run storybook
$ yarn storybook
```

## 🎨 参考

| プロジェクト| 概要|
| :---------------------------------------| :-------------------------------|
| [Vuetify 3 Beta](https://next.vuetifyjs.com/en/getting-started/installation/)| Vuetify 3 Beta |
| [Material Design Icons](https://pictogrammers.github.io/@mdi/font/2.0.46/)| Material Design Icons |
| [Tailwind CSS](https://tailwindcss.com/docs/installation)| Tailwind CSS |
| [vee-validate](https://vee-validate.logaretm.com/v4/guide/components)| vee-validate |
| [husky v6 のインストール方法と使い方。lint-staged も導入して、品質を保とう](https://fwywd.com/tech/husky-setup)| husky v6 のインストール方法と使い方。lint-staged も導入して、品質を保とう |

## 🎫 Licence

[MIT](https://github.com/isystk/vue3-typescript-sample/blob/master/LICENSE)

## 👀 Author

[isystk](https://github.com/isystk)

