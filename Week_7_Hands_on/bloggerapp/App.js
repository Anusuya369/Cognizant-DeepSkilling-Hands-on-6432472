import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [choice, setChoice] = useState("books");

  const renderComponent = () => {
    switch (choice) {
      case "books":
        return <BookDetails />;
      case "blogs":
        return <BlogDetails />;
      case "courses":
        return <CourseDetails />;
      default:
        return <h3>Select a valid category</h3>;
    }
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Blogger App</h1>
      <button onClick={() => setChoice("books")}>Show Books</button>{' '}
      <button onClick={() => setChoice("blogs")}>Show Blogs</button>{' '}
      <button onClick={() => setChoice("courses")}>Show Courses</button>

      <hr />
      {renderComponent()}

    </div>
  );
}

export default App;

