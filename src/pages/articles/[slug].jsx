import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ArticleLayout } from '@/components/ArticleLayout';
import { formatDate } from '@/lib/formatDate';
import { components } from '@/components/CustomMDXComponents';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

export default function Article({ article, mdxSource, previousPathname }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  const meta = {
    title: article.title,
    description: article.description,
    date: article.date,
  };

  return (
    <ArticleLayout meta={meta} previousPathname={previousPathname}>
      <article className="prose prose-zinc dark:prose-invert">
        <MDXRemote {...mdxSource} components={components} />
      </article>
    </ArticleLayout>
  );
}

export async function getStaticPaths() {
  const response = await axios.get('http://localhost:1337/api/articles');
  const paths = response.data.data.map((article) => ({
    params: { slug: article.attributes.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(`http://localhost:1337/api/articles?filters[slug][$eq]=${params.slug}`);
  const articleData = response.data.data[0];

  if (!articleData) {
    return {
      notFound: true,
    };
  }

  const article = {
    title: articleData.attributes.title,
    slug: articleData.attributes.slug,
    description: articleData.attributes.description,
    content: articleData.attributes.content,
    date: articleData.attributes.date,
  };

  const mdxSource = await serialize(article.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkCallout],
      rehypePlugins: [rehypePrism],
    },
  });

  return {
    props: {
      article,
      mdxSource,
      previousPathname: null, // You can replace null with actual previous path if needed
    },
  };
}