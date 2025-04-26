import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import NewPost, { addPost } from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import Posts, { fetchPosts } from './routes/Posts.jsx'
import PostDetails, { postDetailsLoader } from './routes/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />, children: [
      {
        path: "/", element: <Posts />, children: [
          { path: "/create-post", element: <NewPost />, action: addPost },
          { path: "/:postId", element: <PostDetails />, loader: postDetailsLoader }
        ],
        loader: fetchPosts
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
