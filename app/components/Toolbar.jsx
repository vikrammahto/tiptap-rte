'use client';

import React, { useState, useCallback } from 'react';
import { Editor } from '@tiptap/react';
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
  Link,
  Unlink,
} from 'lucide-react';

const Toolbar = ({ editor, content }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }
  return (
    <div
      className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-5 w-full flex-wrap border border-gray-700"
    >
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap ">
        <button
          onClick={setLink}
          className={
            editor.isActive('link')
              ? 'bg-black text-white p-1 rounded-lg'
              : 'text-black p-1'
          }
          title="Add link"
        >
          <Link className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
          className="disabled:text-slate-300"
        >
          <Unlink className="w-5 h-5" />
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive('bold')
              ? 'bg-black text-white p-1 rounded-lg'
              : 'text-black p-1'
          }
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive('italic')
              ? 'bg-black text-white p-1 rounded-lg'
              : 'text-black p-1'
          }
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive('underline')
              ? 'bg-black text-white p-1 rounded-lg'
              : 'text-black p-1'
          }
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive('bulletList')
              ? 'bg-black text-white p-1 rounded-lg'
              : 'text-black p-1'
          }
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive('orderedList')
              ? 'bg-black text-white p-1 rounded-lg'
              : 'text-black p-1'
          }
        >
          <ListOrdered className="w-5 h-5" />
        </button>

        <button
          onClick={e => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive('undo')
              ? 'bg-black text-white p-1 rounded-lg'
              : 'text-black p-1 hover:bg-black hover:text-white hover:rounded-lg'
          }
        >
          <Undo className="w-5 h-5" />
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive('redo')
              ? 'bg-black text-white p-1 rounded-lg'
              : 'text-black p-1 hover:bg-black hover:text-white hover:rounded-lg'
          }
        >
          <Redo className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
