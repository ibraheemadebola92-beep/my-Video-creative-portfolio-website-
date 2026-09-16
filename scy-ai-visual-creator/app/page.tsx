import { Metadata } from 'next';
import { getAllPosts } from '@/lib/queries';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SCY AI Visual Creator',
  description: 'Professional video creation and portfolio showcase',
};

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              SCY AI Visual Creator
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your creative vision into stunning visuals with AI-powered tools
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/studio"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
              >
                Go to Studio
              </Link>
              <Link
                href="#portfolio"
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-lg font-semibold transition"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Featured Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`}>
                <div className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}