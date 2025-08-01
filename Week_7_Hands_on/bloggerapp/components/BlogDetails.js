import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 1, title: 'React Basics', date: '2024-04-10' },
    { id: 2, title: 'Advanced JS', date: '2024-05-15' }
  ];

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title} - <em>{blog.date}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
