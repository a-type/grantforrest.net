import Frontmatter from './Frontmatter';

interface Post {
  id: number;
  excerpt: string;
  htmlAst: string;
  frontmatter: Frontmatter;
  fields: {
    slug: string;
  };
  timeToRead: number;
}

export default Post;
