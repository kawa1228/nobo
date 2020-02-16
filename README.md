# NOBO
eunaさんポートフォリオ
#### https://nobo-24ebf.firebaseapp.com/

## Versions
* Node.js v12.16.0
* @vue/cli 4.1.2
* yarn 1.22.0

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```
http://localhost:8888/ で確認できます。

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Bootstrap
* [Bootstrap4移行ガイド](https://cccabinet.jpn.org/bootstrap4/#summary)

### Recommended
* [vue-svg-loader - npm](https://www.npmjs.com/package/vue-svg-loader)
* [vueinview - npm](https://www.npmjs.com/package/vueinview)

## Workが増えた場合の必要手順

* src/assets/json/works.json
work一覧ページで表示するデータをjsonに入力

* src/components/WorkItems
WorkItems配下にコンポーネントを作成し、詳細ページで表示するコンテンツを追記

* src/views/Work/ItemPage.vue
作成したコンポーネントのpathを追記

## deploy
### Firebase Hosting
* firebase console
https://console.firebase.google.com/

```
yarn global add firebase-tools
firebase login
firebase init
firebase use --add
firebase deploy
```
