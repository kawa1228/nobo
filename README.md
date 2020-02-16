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

## Firebase init
### Hosting Service
* firebase console
https://console.firebase.google.com/

```
yarn global add firebase-tools
firebase login
firebase init
firebase use --add
```

### Compiles and hot-reloads for development
```
yarn serve
```
http://localhost:8888/ で確認できます。

### Lints and fixes files
```
yarn lint
```

## deploy
### Compiles and minifies for production
```
yarn build
```
### Firebase deploy
```
firebase deploy
```

## Workが増えた場合の必要手順

1: src/assets/json/works.json
* work一覧ページで表示するデータをjsonに入力

2: src/components/WorkItems
* コンポーネントを新規作成作成（※コンポーネント名は1で入力したデータのnameと同一にする）

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Bootstrap
* [Bootstrap4移行ガイド](https://cccabinet.jpn.org/bootstrap4/#summary)

### Recommended
* [vue-svg-loader - npm](https://www.npmjs.com/package/vue-svg-loader)
* [vueinview - npm](https://www.npmjs.com/package/vueinview)
