'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './Toolbar';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';

const Tiptap = ({ onChange }) => {
  const handleChange = newContent => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          'flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 items-start w-full gap-3 font-medium pt-4 rounded-bl-md rounded-br-md outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
    content: `<p>This is a paragraph with <b>bold</b>, <i>italic</i>, and <u>underlined</u> text.</p> <a href="https://google.com">Google.com</a>

<ol>
  <li>This is an <b>ordered list</b> item with <i>italic</i> text.</li>
  <li>This list item has <u>underlined</u> text.</li>
  <li>You can mix and match <b>bold</b>, <i>italic</i>, and <u>underlined</u> text within list items.</li>
</ol>

<ul>
  <li>This is an <b>unordered list</b> item.</li>
  <li>This list item has <i>italic</i> and <u>underlined</u> text.</li>
  <li>You can use <b>bold</b>, <i>italic</i>, and <u>underlined</u> text in unordered lists too.</li>
</ul>`,
  });

  return (
    <div className="w-full px-4">
      <Toolbar editor={editor} />
      <EditorContent style={{ whiteSpace: 'pre-line' }} editor={editor} />
    </div>
  );
};

export default Tiptap;
