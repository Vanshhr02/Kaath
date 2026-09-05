/** A post returned by the company blog CMS or API. */
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  updatedAt?: string
  coverImage?: string
  author: BlogAuthor
  tags: string[]
}

export interface BlogAuthor {
  id: string
  name: string
  role?: string
  avatarUrl?: string
}
