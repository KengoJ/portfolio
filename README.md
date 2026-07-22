# MIZUNO.K Portfolio

Webプログラマを目指すMIZUNO.Kの就職活動用ポートフォリオサイトです。Vite + TypeScript + HTML/CSSで制作し、ReactなどのUIフレームワークは使用していません。

## ローカルで起動する

Node.js 20以上を用意し、リポジトリ直下で次を実行してください。

```bash
npm install
npm run dev
```

ターミナルに表示されたURL（通常は `http://localhost:5173`）をブラウザで開きます。

## ビルドを確認する

```bash
npm run build
npm run preview
```

`dist` フォルダに公開用ファイルが生成されます。

## 内容を更新する

- プロフィール・スキル・制作実績: `src/main.ts`
- 色・余白・レイアウト・アニメーション: `src/style.css`
- SEO・OGP・ページタイトル: `index.html`
- 作品画像: `public/images/`

変更後は `npm run build` を実行してエラーがないことを確認してください。

## GitHub Pagesで公開する

1. このフォルダをGitHubリポジトリへpushします。
2. GitHubのリポジトリ画面で **Settings → Pages** を開きます。
3. **Build and deployment** のSourceを **GitHub Actions** にします。
4. `main` ブランチへpushすると `.github/workflows/deploy.yml` が自動でビルド・公開します。

独自ドメインやリポジトリ名の変更がなければ追加設定は不要です。ViteのアセットパスはGitHub Pagesのプロジェクトサイトでも動く相対パスに設定しています。

## 仮データについて

連絡先メールアドレス、勤務先名、詳しい担当業務が提供されていないため掲載していません。サイト内にも注記を表示しています。情報が決まり次第 `src/main.ts` のプロフィール・連絡先欄を更新してください。

## 主な品質対応

- セマンティックHTMLと見出し構造
- キーボード操作可能なナビゲーションとスキップリンク
- 作品画像の説明的なalt
- レスポンシブ表示
- `prefers-reduced-motion` への対応
- SEOメタ情報、OGP、favicon
