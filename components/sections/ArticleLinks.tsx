import Card from '../ui/Card';
import FadeIn from '../ui/FadeIn';

interface Article {
  title: string;
  description: string;
  link: string;
  date?: string;
}

const articles: Article[] = [
  {
    title: '【GT7×英語学習】デイリーレースB解説から学ぶフレーズ5選 (2026 Week10)',
    description: 'GT7の解説動画からプロコーチが使う英語フレーズを5つ厳選。「Break in a straight line」など、走りながら英語もインプットできる実践的な内容。',
    link: 'https://note.com/toolstudio22/n/nc4e7a99296fe',
    date: '2026-03-07',
  },
  {
    title: '【GT7×Python】タイヤの限界を可視化！摩擦円とヒートマップでテレメトリを強化してみた',
    description: 'タイヤのグリップ状態を摩擦円とヒートマップで可視化。スリップ率・サスペンション高さのリアルタイム分析機能を追加したダッシュボード拡張編。',
    link: 'https://note.com/toolstudio22/n/n5faa85505742',
    date: '2026-03-07',
  },
  {
    title: '【GT7×Python】走行データをリアルタイム可視化！Streamlitで作る自作ダッシュボード',
    description: 'PythonとStreamlitでGT7の走行データ（速度・RPM・スロットルなど）をブラウザ上にリアルタイム表示するダッシュボードの構築方法を解説。',
    link: 'https://note.com/toolstudio22/n/n0230cfe5c375',
    date: '2026-03-02',
  },
  {
    title: '【Streamlit最新情報】v1.54.0アップデート詳解！UI開発がより直感的に',
    description: 'ウィジェットの状態維持改善・エリアチャートのstack対応など、Streamlit v1.54.0の注目ポイントをエンジニア視点で解説。',
    link: 'https://note.com/toolstudio22/n/ndca856d5ce2a',
    date: '2026-02-24',
  },
];

export default function ArticleLinks() {
  return (
    <section id="articles" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              技術記事
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              データ分析やツール開発のノウハウを共有
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <FadeIn key={article.title} delay={200 + index * 100}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card>
                  <div className="flex flex-col h-full">
                    {article.date && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {new Date(article.date).toLocaleDateString('ja-JP', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      {article.description}
                    </p>
                    <div className="flex items-center text-[var(--color-primary)] font-medium">
                      記事を読む
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
