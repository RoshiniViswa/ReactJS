import React from 'react';
import './header.css'; // Make sure to create a corresponding CSS file for styling

const BlogCard = ({ title, content }) => (
  <div className="blog-card">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

const App = () => {
  const blogPosts = [
    { title: 'Blog 1', content: 'Learn the basics of React and start building web applications.' },
    { title: 'Blog 2', content: 'Explore the powerful features introduced in ES6.' },
    { title: 'Blog 3', content: 'Discover essential tools for react.' },
  ];

  return (
    <div>
      <header>
        <h1>The Techie Blog</h1>
      </header>

      <main className="blog-container">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} title={post.title} content={post.content} />
        ))}
      </main>

      <footer>
        <p>&copy;  The Techie Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;