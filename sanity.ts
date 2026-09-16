import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "o16klu4f";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-09-16";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: unknown) {
  return builder.image(source as Parameters<typeof builder.image>[0]);
}
