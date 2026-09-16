import { client } from './sanity';

const postFields = `
  _id,
  title,
  description,
  slug,
  publishedAt,
  mainImage,
  content,
`;

export async function getAllPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) { ${postFields} }`;
  return await client.fetch(query);
}

export async function getPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"] { ${postFields} }[0]`;
  return await client.fetch(query);
}

export async function getAllProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    description,
    slug,
    mainImage,
    gallery,
  }`;
  return await client.fetch(query);
}

export async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == "${slug}"] { 
    _id,
    title,
    description,
    slug,
    mainImage,
    gallery,
  }[0]`;
  return await client.fetch(query);
}