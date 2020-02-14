# NOBO
eunaさんポートフォリオ

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
空白はBootstrapにて管理
* [空白ユーティリティ～Bootstrap4移行ガイド](https://cccabinet.jpn.org/bootstrap4/utilities/spacing)

### Recommended
* [vue-svg-loader - npm](https://www.npmjs.com/package/vue-svg-loader)
* [vueinview - npm](https://www.npmjs.com/package/vueinview)

## Workが増えた場合

* src/assets/json/works.json
work一覧ページで表示するデータをjsonに入力

* src/components/WorkItems
WorkItems配下にコンポーネントを追加し、詳細ページで表示するコンテンツを追記

* src/views/Work/Detail.vue
作成したコンポーネントのpathを追記
