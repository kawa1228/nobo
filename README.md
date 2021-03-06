# NOBO
eunaさんポートフォリオ
#### https://nobo-1010.netlify.app/

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

1: データの作成
* src/assets/json/works.jsonにデータを入力
* 一覧ページではidの昇順に表示される
* オブジェクトのkeyがurlとなるので、一意にする
* オブジェクトのkeyとnameの値は同一にする
    * example:
    ```
    "contents": {
        "Sample": {
            "name": "Sample",
            .
            .
            .
        }
    }
    ```
    →この場合、`/work/Sample` がurlとなる

2: コンポーネントの新規作成
* src/components/WorkItems配下にファイルを作成
* ※コンポーネント名は1で入力したデータのnameと同一にする

3: 記事に画像を入れたい場合
* public/img/work/[記事id]/sample.png に画像を格納
* コンポーネント側では `<img src="/img/work/[記事id]/sample.png">` で使用可能

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Bootstrap
* [Bootstrap4移行ガイド](https://cccabinet.jpn.org/bootstrap4/#summary)

### Recommended
* [vue-svg-loader - npm](https://www.npmjs.com/package/vue-svg-loader)
* [vueinview - npm](https://www.npmjs.com/package/vueinview)
