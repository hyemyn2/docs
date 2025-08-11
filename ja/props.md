# Props

## コアデータProps

### data

* **型**: `Array`, `Object`, または `Function`
* **デフォルト**: なし
* **必須**: はい
* **使用コンポーネント**: `VuePivottable`, `VuePivottableUi`
* **説明**: ピボットテーブルで集約されるデータ。オブジェクトの配列、配列の配列、またはデータをコールバックする関数が可能です。

### vals

* **型**: `Array<string>`
* **デフォルト**: `[]`
* **使用コンポーネント**: `VuePivottable`, `VuePivottableUi`
* **説明**: アグリゲータ関数の引数として使用される属性名。ピボットテーブルで計算される値を定義します。

### cols

* **型**: `Array<string>`
* **デフォルト**: `[]`
* **使用コンポーネント**: `VuePivottable`, `VuePivottableUi`
* **説明**: ピボットテーブルの列エリアに事前入力する属性名。

### rows

* **型**: `Array<string>`
* **デフォルト**: `[]`
* **使用コンポーネント**: `VuePivottable`, `VuePivottableUi`
* **説明**: ピボットテーブルの行エリアに事前入力する属性名。

### attributes

* **型**: `Array<string>`
* **デフォルト**: `[]`
* **必須**: いいえ
* **使用コンポーネント**: `VuePivottable`, `VuePivottableUi`
* **説明**: データで見つかった属性名のリスト。提供されない場合は、データから自動的に導出されます。

## 表示制御Props

### showRowTotal

* **型**: `Boolean`
* **デフォルト**: `true`
* **説明**: 行の合計を表示するかどうかを決定します。

### showColTotal

* **型**: `Boolean`
* **デフォルト**: `true`
* **説明**: 列の合計を表示するかどうかを決定します。

### tableMaxWidth

* **型**: `Number`
* **デフォルト**: `0`
* **バリデータ**: 0以上である必要があります
* **使用コンポーネント**: `VuePivottable`, `VuePivottableUi`
* **説明**: ピボットテーブルの最大幅をピクセル単位で設定します。0の値は最大幅なしを意味します。

## 集約Props

### aggregators

* **型**: `Record<string, AggregatorTemplate>`
* **デフォルト**: ユーティリティからインポート
* **使用コンポーネント**: `VuePivottable`, `VuePivottableUi`
* **説明**: ドロップダウンで使用可能な集約用のジェネレータ関数の辞書（例：Sum、Count、Average）。

### aggregatorName

* **型**: `String`
* **デフォルト**: `'Count'`
* **説明**: 計算に使用するアグリゲータを指定する`aggregators`オブジェクトのキー。

## レンダリングProps

### renderers

* **型**: `Object`
* **デフォルト**: `{}`
* **説明**: ピボットテーブルの表示に使用可能なレンダラーコンポーネントを含むオブジェクト。

### rendererName

* **型**: `String`
* **デフォルト**: `'Table'`
* **説明**: 表示に使用するレンダラーを指定する`renderers`オブジェクトのキー。

### heatmapMode

* **型**: `String`
* **デフォルト**: `undefined`
* **説明**: 値にカラーヒートマップを適用する方法を指定します。オプションには`'full'`、`'row'`、`'col'`があります。

### tableColorScaleGenerator

* **型**: `Function`
* **デフォルト**: `redColorScaleGenerator`
* **説明**: テーブルヒートマップ用のカスタムカラースケールを生成する関数。

### tableOptions

* **型**: `Object`
* **デフォルト**: `{}`
* **説明**: セルのクリックを処理する`clickCallback`など、テーブルレンダリングの追加オプション。

## フィルタリングとソートProps

### valueFilter

* **型**: `Object`
* **デフォルト**: `{}`
* **説明**: 属性値のフィルタリング設定。キーは属性名で、値は含める/除外するレコードを表す属性値とブール値のペアのオブジェクトです。

### sorters

* **型**: `Function` または `Object`
* **デフォルト**: `{}`
* **説明**: 表示用に属性値をソートするために使用される関数。属性名で呼び出してソート関数を返すことができます。

### derivedAttributes

* **型**: `Function` または `Object`
* **デフォルト**: `{}`
* **説明**: 既存のデータから計算する派生属性を定義します。

### rowOrder

* **型**: `String`
* **デフォルト**: `'key_a_to_z'`
* **許可される値**: `'key_a_to_z'`, `'value_a_to_z'`, `'value_z_to_a'`
* **使用コンポーネント**: `VuePivottable`, `VuePivottableUi`
* **説明**: 行データがレンダラーに提供される順序。

### colOrder

* **型**: `String`
* **デフォルト**: `'key_a_to_z'`
* **許可される値**: `'key_a_to_z'`, `'value_a_to_z'`, `'value_z_to_a'`
* **使用コンポーネント**: `VuePivottable`, `VuePivottableUi`
* **説明**: 列データがレンダラーに提供される順序。

## ローカライゼーションProps

### locale

* **型**: `String`
* **デフォルト**: `'en'`
* **説明**: 国際化のためのロケールコード。

### languagePack

* **型**: `Object`
* **デフォルト**: インポートされたロケール
* **説明**: 異なる言語の翻訳とフォーマットオプションを含むオブジェクト。

## VuePivottableUi Props

これらのpropsは`VuePivottableUi`コンポーネントに特化しており、インタラクティブUIの動作を制御します。

### hiddenAttributes

* **型**: `Array`
* **デフォルト**: `[]`
* **説明**: UIから完全に省略する属性名。

### hiddenFromAggregators

* **型**: `Array`
* **デフォルト**: `[]`
* **説明**: アグリゲータ引数ドロップダウンから除外する属性名。

### hiddenFromDragDrop

* **型**: `Array`
* **デフォルト**: `[]`
* **説明**: UIのドラッグアンドドロップ部分から除外する属性名。

### restrictedFromDragDrop

* **型**: `Array`
* **デフォルト**: `[]`
* **説明**: ドラッグアンドドロップインターフェースで表示できるが移動できない属性名。

### menuLimit

* **型**: `Number`
* **デフォルト**: `500`
* **説明**: 属性をダブルクリックしたときにフィルターメニューに表示する最大値数。

### hideFilterBoxOfUnusedAttributes

* **型**: `Boolean`
* **デフォルト**: `false`
* **説明**: 現在ピボットテーブルで使用されていない属性のフィルターボックスを非表示にするかどうか。

### pivotModel

* **型**: `PivotModelInterface`
* **デフォルト**: `undefined`
* **説明**: ピボットテーブルの状態を制御する外部モデル。`v-model:pivotModel`を通じてピボットテーブル設定の双方向バインディングを可能にします。提供された場合、rows、cols、valsなどの個別のpropsを上書きします。モデルには以下が含まれます：
  - `rows`: 行属性名の配列
  - `cols`: 列属性名の配列
  - `vals`: 値属性名の配列
  - `aggregatorName`: アグリゲータ関数名
  - `rendererName`: レンダラー名
  - `valueFilter`: 属性値のフィルター設定
  - `rowOrder`: 行ソート順序
  - `colOrder`: 列ソート順序
  - `heatmapMode`: ヒートマップ表示モード
  
  ピボットテーブルの状態を保存/復元し、親コンポーネントと状態を同期するのに便利です。

## 削除されたProps

以下のpropsは現在のバージョンで削除または変更されました：

### locales

* **型**: `Object`
* **以前のデフォルト**: インポートされた`locales`
* **ステータス**: `languagePack`に名前変更
* **説明**: 以前は異なる言語の翻訳とフォーマットオプションを提供するために使用されていました。

### rowTotal

* **型**: `Boolean`
* **以前のデフォルト**: `true`
* **ステータス**: `showRowTotal`に名前変更
* **説明**: 以前は行の合計を表示するかどうかを決定するために使用されていました。

### colTotal

* **型**: `Boolean`
* **以前のデフォルト**: `true`
* **ステータス**: `showColTotal`に名前変更
* **説明**: 以前は列の合計を表示するかどうかを決定するために使用されていました。

### sortonlyFromDragDrop

* **型**: `Array`
* **以前のデフォルト**: `[]`
* **ステータス**: `restrictedFromDragDrop`で置き換え
* **説明**: 以前はUIのドラッグアンドドロップからソートする属性名を含んでいました。

### disabledFromDragDrop

* **型**: `Array`
* **以前のデフォルト**: `[]`
* **ステータス**: 完全に削除
* **説明**: 以前はUIのドラッグアンドドロップ部分から無効にする属性名を含んでいました。