import { Metadata } from 'next';
import { getPostBySlug, getAllPosts } from '@/lib/queries';
import { VideoPlayer } from '@/components/VideoPlayer';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: post?.title || 'Post',
    description: post?.description || '',
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-xl text-gray-400">{post.description}</p>
          {post.publishedAt && (
            <p className="text-sm text-gray-500 mt-4">
              Published: {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          )}
        </header>

        {post.mainImage && (
          <div className="mb-8">
            <VideoPlayer src={post.mainImage.asset.url} title={post.title} />
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          {post.content && (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          )}
        </div>
      </article>
    </main>
  );
}