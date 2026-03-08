import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "ツール一覧 | GT7 Analysis",
  description: "グランツーリスモ7のデータ分析・モニタリングツール一覧。GT7 Monitorをはじめとする自作ツールを紹介しています。",
};

interface Tool {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  link: string;
  features: string[];
  techStack: string[];
}

const tools: Tool[] = [
  {
    title: 'GT7 Monitor',
    description: 'リアルタイムでグランツーリスモ7のテレメトリーデータを可視化・記録するモニタリングツール',
    longDescription: 'GT7 Monitorは、PlayStation上で動作するグランツーリスモ7から送信されるテレメトリーデータをリアルタイムで受信し、視覚的に表示するツールです。車両の速度、エンジン回転数、ギア位置、タイヤ温度など、様々なデータをグラフやメーターで表示します。',
    tags: ['Python', 'リアルタイム', 'テレメトリー', 'データビジュアライゼーション'],
    link: 'https://github.com/toolstudio22/gt7_monitor',
    features: [
      '車両データのリアルタイム表示',
      '速度、回転数、ギア、タイヤ温度などの可視化',
      'ラップタイムの記録と分析',
      'データのCSVエクスポート',
      'カスタマイズ可能なダッシュボード',
    ],
    techStack: ['Python', 'Socket通信', 'matplotlib', 'tkinter'],
  },
];

export default function ToolsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            開発ツール一覧
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GT7のデータ活用を支援する自作ツールの詳細情報
          </p>
        </div>

        {/* ツールカード */}
        <div className="space-y-12">
          {tools.map((tool) => (
            <Card key={tool.title} hover={false} className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* メイン情報 */}
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {tool.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {tool.longDescription}
                  </p>

                  {/* 特徴 */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      主な機能
                    </h3>
                    <ul className="space-y-2">
                      {tool.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-[var(--color-primary)] mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* タグ */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-[var(--color-primary)] text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* サイドバー */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      技術スタック
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {tool.techStack.map((tech) => (
                        <li key={tech} className="flex items-center">
                          <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3"></span>
                          <span className="text-gray-700">{tech}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="primary" size="md" className="w-full mb-3">
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>GitHub で見る</span>
                      </a>
                    </Button>

                    <Button variant="outline" size="md" className="w-full">
                      <a href="/" className="flex items-center justify-center gap-2 w-full">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>トップに戻る</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTAセクション */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              新しいツールを開発中
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              セッティング計算機、ラップタイム比較ツールなど、さらに便利なツールを開発予定です
            </p>
            <Button variant="secondary" size="lg">
              <a href="https://github.com/toolstudio22" target="_blank" rel="noopener noreferrer">
                GitHubでフォロー
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
