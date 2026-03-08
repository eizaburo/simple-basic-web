# simeple-web-vanilla

開発・技術学習用のシンプルなWebアプリ。

> Webアプリ開発の学習ではなく、システム開発に関する知識を広く・浅く身につけるための学習を想定しています。

# ブランチ情報

- main
  - formは値の取得だけ。外部連携なし。
- extension/api-express
  - simple-api-expressと連携を想定。application/json
- extension/api-gas
  - GASとの連携を想定。appliation/x-www-form-urlencoded

# 動作確認

実際に動くもの（フロントのみ）は[Github Pages](https://eizaburo.github.io/simple-web-vanilla/index.html)で公開しています。

> 但し、このサンプル自体はAPIと連携していません。

# セットアップ方法

- ブランチを指定してclone
- script.js内のapi_url値を自分の環境に合わせて変更
- ブラウザでformを操作
- Google Spreadsheetに期待通り値が格納されているか確認

```
clone -b extension/api-express https://github.com/eizaburo/simple-web-vanilla.git
```

# Requirements

## フロント側

ブラウザがあれば動きますが、作成者は以下の環境で作成しています。

- macOS
- Chrome
- VSCode

## API側

API側については[simple-api-expresリポジトリ](https://github.com/eizaburo/simple-api-express)を参考にしてください。


# 学習コンテンツとしてのゴール

- 簡単なWebアプリを作れるようになる
- HTML/CSS/JavaScriptの役割について理解し説明できるようになる
- JSONとは何かを理解し、説明できるようになる


# 応用学習例

本Webアプリは以下のような学習に利用する予定です。

> 学習用のコンテンツも随時公開予定です。

## 開発系

- Gitの利用（clone程度）
- Formデータを受信するAPIを実装してみる
- 同じ仕様のアプリをReactで実装してみる（素のHTMLとの違いは何か）
- 同じ仕様のアプリをNext.jsで実装してみる（Reactとの違いは何か）
- 同じ仕様のアプリを他の言語/フレームワークで実装してみる
- 同じ仕様のアプリをスマホアプリ化してみる

## テスト系

- 本アプリのテスト計画書を作成してみる
- 本アプリのテストシナリオを作成してみる
- 本アプリのテストシナリオを自動化してみる
- 本アプリのテスト結果をまとめてみる

## PM系

- 本アプリの仕様書（要件定義書・設計書）を作成してみる
- 本アプリ開発の見積書（項目・但し書き含む）を作成してみる
  - どの工程（記述）が一番工数がかかりますか？
- 本アプリの納品物、納品方法、検収条件を定義してみてる

## AI系（トレンド系）

- 同じ仕様のWebアプリをAIに生成させてみる
- 同じ仕様のWebアプリか、検証する

## その他

- シンプルなWebアプリですが、1時間に100万アクセスが見込まれます。どのような構成にして、どこにデプロイすべきですか？


> Webアプリ自体はシンプルですが、これらに対応するのは決して簡単ではないはずです。


# ライセンス

一応MIT licenseとしておきます。

# 関連コンテンツ

随時公開。