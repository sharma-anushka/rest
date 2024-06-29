# Simple Express Blog Application

This is a simple blog application built with Express.js that allows users to create, read, update, and delete posts.

## Features

- View all posts
- Create a new post
- View a single post
- Edit a post


## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/express-blog.git
cd express-blog
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

The application will be running on `http://localhost:8080`.

## Usage

### View All Posts

Navigate to `http://localhost:8080/posts` to view all posts.

### Create a New Post

1. Go to `http://localhost:8080/posts/new`.
2. Fill in the form with your username and content.
3. Submit the form to create a new post.

### View a Single Post

Click on a post from the list of all posts to view the details of that post.

### Edit a Post

1. Click on the "Edit" button on the post details page.
2. Update the content in the form.
3. Submit the form to save the changes.

### Delete a Post

(Note: The delete functionality can be added similarly to the edit functionality, though it is not currently implemented in this code.)

## Project Structure

```
express-blog/
│
├── index.js         # Main server file
├── package.json     # Project dependencies
├── views/           # EJS templates
│   ├── index.ejs    # View for displaying all posts
│   ├── form.ejs     # View for creating a new post
│   ├── show.ejs     # View for displaying a single post
│   └── edit.ejs     # View for editing a post
└── public/          # Static files (CSS, images, etc.)
```

## Dependencies

- express: Fast, unopinionated, minimalist web framework for Node.js
- method-override: Allows the use of HTTP verbs such as PUT or DELETE in places where the client doesn't support it
- ejs: Embedded JavaScript templating
- uuid: Simple, fast generation of RFC4122 UUIDS

## Middleware

- `express.urlencoded({ extended: true })`: Middleware for parsing URL-encoded bodies
- `method-override('_method')`: Middleware for overriding HTTP methods

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This `README.md` file provides an overview of the application, installation instructions, usage guidelines, project structure, and dependencies. You can customize it further based on your specific requirements or preferences.
