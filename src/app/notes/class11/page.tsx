import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Metadata } from 'next';
import NotesLayout from '@/components/Notes/NotesLayout';

export const metadata: Metadata = {
  title: 'Class 11 Notes | Binit KC',
  description: 'NEB Class 11 Computer Science study notes',
};

interface Chapter {
  title: string;
  chapter: number;
  slug: string;
  content: string;
}

export default function Class11Notes() {
  const notesDir = path.join(process.cwd(), 'src/content/notes/class11');

  const files = fs
    .readdirSync(notesDir)
    .filter((f) => f.endsWith('.md'))
    .sort();

  const chapters: Chapter[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(notesDir, file), 'utf8');
    const { data, content } = matter(raw);
    return {
      title: (data.title as string) ?? file.replace('.md', ''),
      chapter: (data.chapter as number) ?? 0,
      slug: file.replace('.md', ''),
      content,
    };
  });

  return <NotesLayout chapters={chapters} classLabel="Class 11" />;
}
