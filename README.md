# GT7 Analysis Portfolio

グランツーリスモ7（Gran Turismo 7）のデータ分析ツールと技術情報を提供する個人ポートフォリオサイトです。

## 🚀 特徴

- **モダンなUI**: Next.js 16 + React 19 + Tailwind CSS 4で構築
- **レスポンシブデザイン**: モバイルからデスクトップまで最適化
- **SEO対応**: メタデータ、sitemap、robots.txtを完備
- **高速**: App RouterとTurbopackによる高速な開発・ビルド体験
- **TypeScript**: 型安全な開発環境

## 📦 技術スタック

- **フレームワーク**: Next.js 16.1.6
- **UI**: React 19.2.3
- **スタイリング**: Tailwind CSS 4
- **言語**: TypeScript 5
- **デプロイ**: Vercel

## 🛠️ セットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

### ビルド

```bash
# 本番用ビルド
npm run build

# 本番サーバーの起動
npm start
```

### Lint

```bash
# ESLintの実行
npm run lint
```

## 📁 プロジェクト構造

```
gt7-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # トップページ
│   ├── tools/             # ツール一覧ページ
│   ├── globals.css        # グローバルスタイル
│   ├── robots.ts          # robots.txt生成
│   └── sitemap.ts         # sitemap.xml生成
├── components/
│   ├── ui/                # 基本UIコンポーネント
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/          # ページセクション
│       ├── Hero.tsx
│       ├── ToolGrid.tsx
│       ├── ArticleLinks.tsx
│       └── About.tsx
├── public/                # 静的ファイル
└── package.json
```

## 🎨 デザインシステム

### カラーパレット

- **Primary**: `#3b82f6` (ブルー)
- **Primary Light**: `#60a5fa`
- **Primary Dark**: `#2563eb`
- **Secondary**: `#0ea5e9`
- **Accent**: `#06b6d4`

カラーはTailwind CSS 4の`@theme`ディレクティブで定義されています。

## 📝 コンテンツの更新

### ツールの追加

`components/sections/ToolGrid.tsx`および`app/tools/page.tsx`のtoolsリストに新しいツールオブジェクトを追加してください。

### 記事の追加

`components/sections/ArticleLinks.tsx`のarticlesリストに新しい記事オブジェクトを追加してください。

## 🚀 デプロイ

### Vercelへのデプロイ

1. GitHubリポジトリにプッシュ
2. [Vercel](https://vercel.com)でプロジェクトをインポート
3. 自動的にビルド・デプロイされます

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/gt7-portfolio)

## 📄 ライセンス

このプロジェクトは個人用ポートフォリオサイトです。

## 🔗 関連リンク

- [GT7 Monitor](https://github.com/toolstudio22/gt7_monitor) - リアルタイムテレメトリーモニタリングツール
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
