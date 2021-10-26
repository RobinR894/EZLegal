import { Post } from './post.model';
import { ForumTag } from './forum-tag.mode';

export class Topic {
  forumId?: number;
  title?: string;
  createdDt?: string;
  createdById?: number;
  createdByName?: number;
  forumTag?: ForumTag[];
  post?: Post[];
}