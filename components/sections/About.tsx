import FadeIn from '../ui/FadeIn';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About
            </h2>
          </div>
        </FadeIn>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <FadeIn delay={200}>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              このサイトについて
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              GT7 Analysisは、グランツーリスモ7（Gran Turismo 7）のデータ分析ツールや技術情報を提供する個人ポートフォリオサイトです。
              リアルタイムモニタリング、データビジュアライゼーション、セッティング最適化など、GT7プレイヤーがより深くゲームを楽しむためのツールとノウハウを共有しています。
            </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                提供しているツール
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>GT7 Monitor:</strong> リアルタイムテレメトリーデータの可視化ツール</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>データ分析スクリプトとノウハウ共有</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                技術スタック
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'Next.js', 'TypeScript', 'Tailwind CSS', 'データビジュアライゼーション'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-[var(--color-primary)] dark:text-blue-300 font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Contact
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                ツールに関するご質問やフィードバックは、GitHubリポジトリのIssuesまでお願いします。
              </p>
              <a
                href="https://github.com/toolstudio22/gt7_monitor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub で見る
              </a>
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
