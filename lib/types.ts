export interface Course {
  id: string;
  title: string;
  description: string;
  href: string;
  level?: string;
  duration?: string;
  imageUrl?: string;
  programCode?: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  href: string;
  coverUrl?: string;
  publishedYear?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  href: string;
  publishedDate?: string;
  imageUrl?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  href: string;
  duration?: string;
  thumbnailUrl?: string;
  /** YouTube video ID, when the source is a YouTube video rather than a direct link. */
  videoId?: string;
}

export interface Talk {
  id: string;
  title: string;
  description: string;
  href?: string;
  event?: string;
  date?: string;
}
