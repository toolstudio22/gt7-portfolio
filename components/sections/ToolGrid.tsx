import Card from '../ui/Card';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

interface Tool {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

const tools: Tool[] = [
  {
    title: 'GT7 Monitor',
    description: 'リアルタイムでグランツーリスモ7のテレメトリーデータを可視化・記録するモニタリングツール。車両情報、速度、エンジン回転数などをグラフ表示。',
    tags: ['Python', 'リアルタイム', 'テレメトリー'],
    link: 'https://github.com/toolstudio22/gt7_monitor',
  },
  // 将来的に追加のツール
  // {
  //   title: 'セッティング計算機',
  //   description: 'ギア比、ダウンフォース、サスペンションの最適値を計算',
  //   tags: ['計算機', 'セッティング'],
  //   link: '#',
  // },
];

export default function ToolGrid() {
  return (
    <section id="tools" className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              開発ツール
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              GT7のデータ活用を支援する自作ツール集
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <FadeIn key={tool.title} delay={200 + index * 100}>
              <Card className="flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {tool.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-[var(--color-primary)] dark:text-blue-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full"
                    >
                      <span>詳細を見る</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
