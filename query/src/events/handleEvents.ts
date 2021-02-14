// export const handleEvents = (data, type) => {
//     if (type === "createPost") {
//         const { id, title } = data;
//         posts[id] = { id, title, comments: [] };
//       }

//       if (type === "createComment") {
//         const { id, postId, content, status } = data;
//         const post = posts[postId];
//         post.comments.push({ id, content, status });
//       }

//       if (type === "updateComment") {
//         const { id, postId, content, status } = data;
//         const post = posts[postId];
//         const comment = post.comments.find((comment) => comment.id === id);
//         comment.status = status;
//         comment.content = content;
//       }
// }
