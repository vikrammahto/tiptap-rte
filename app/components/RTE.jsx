'use client';
import React, { useState } from 'react';
import Tiptap from './Tiptap';

const RTE = () => {
  const [content, setContent] = useState();
  const handleContentChange = reason => {
    setContent(reason);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      content: content,
    };
    console.log(data);
    const existingDataString = localStorage.getItem('myData');
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];
    const updatedData = [...existingData, data];
    localStorage.setItem('myData', JSON.stringify(updatedData));
    setContent('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10"
    >
      <Tiptap
        content={content}
        onChange={newContent => handleContentChange(newContent)}
      />
    </form>
  );
};

export default RTE;
