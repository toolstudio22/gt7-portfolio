import Card from '../ui/Card';
import FadeIn from '../ui/FadeIn';

interface Article {
  title: string;
  description: string;
  link: string;
  date?: string;
}

// 記事リンクのサンプル（後で実際のnote記事に更新）
const articles: Article[] = [
  {
    title: 'GT7データ分析の始め方',
    description: 'グランツーリスモ7のテレメトリーデータを活用したデータ分析の基礎知識と手法を紹介',
    link: '#',
    date: '2026-03-01',
  },
  {
    title: 'GT7 Monitorの使い方',
    description: 'リアルタイムモニタリングツールの詳細な使用方法とカスタマイズのヒント',
    link: '#',
    date: '2026-02-15',
  },
  {
    title: 'セッティング最適化のコツ',
    description: 'データに基づいた車両セッティングの最適化手法を解説',
    link: '#',
    date: '2026-02-01',
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
