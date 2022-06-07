import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styles from './components/Assets/styles.css';

function App() {
const [title, setTitle] = useState('Hello World')
const [blog, setBlog] = useState('My blog')
  return (
    <div className="main">
      <div>
        <h2>Add a new Blog</h2>
        <form>
          <label>Blog Title:</label>
          <input type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
          <label>Blog Body:</label>
          <textarea required
          value={blog}
          onChange={ (e) => setBlog(e.target.value)}></textarea>
          <label>Blog Author</label>
          <select>
            <option value="mario">Mario</option>
            <option value="yoshi">Yoshi</option>
          </select>
          <button>Submit</button>
          <p>{title}</p>
          <p>{blog}</p>
        </form>
      </div>
     
    </div>
  );
}

export default App;
