import React, { useEffect, useState } from "react";

export default function Post() {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [type, setType] = useState("post");
  const [visibleCommentInput, setVisibleCommentInput] = useState(null)
  const [commentInput, setCommentInput] = useState("")

  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("post");

  // Whenever the search input or the selected type change, run this hook below
  useEffect(() => {
    // if search is empty, do nothing
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    if (!search.trim()) {
      setPosts(storedPosts);
      return;
    }

    // Filter posts to match only those with the selected type and containing the search text
    setPosts(
      storedPosts.filter(
        ({ text, type }) => type === selectedType && text.includes(search)
      )
    );
  }, [search, selectedType]);
  // Whenever the search input or the selected type change, run this hook above

  const handleImageUpload = (e) => {
    const files = e.target.files;

    const reader = new FileReader();
    reader.onload = () => {
      setImages((prevImages) => [...prevImages, reader.result]);
    };
    if (files) {
      Array.from(files).map((file) => reader.readAsDataURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdPost = { text, images, type, isLiked: false, comments: [] };
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([createdPost, ...posts]));

    setPosts([createdPost, ...posts]);
    setText("");
    setImages([]);

    handleNotification("New Post Added")
  };

  const handleLike = (index) => {
    const changedPosts = posts.map((post, i) => {
      if (index === i) post.isLiked = !post.isLiked;
      return post
    })

    setPosts(changedPosts);
    localStorage.setItem("posts", JSON.stringify(changedPosts));
  }

  const handleAddComment = (index) => {
    // Si commentaire est vide, faire rien
    if (!commentInput) return;

    // Boucler sur les posts
    const changedPosts = posts.map((post, i) => {
      // Si un post n'a pas des comments, initialisation a []
      if (!post.comments || post.comments.length === 0) post.comments = []

      // si on trouve le post cible, lui ajouter le comment
      if (index === i) post.comments = [...post.comments, commentInput]
      return post
    })

    // comme habitude
    setPosts(changedPosts);
    localStorage.setItem("posts", JSON.stringify(changedPosts));
    handleNotification("New Comment Added")
  }

  const handleNotification = (content) => {
    Notification.requestPermission().then(() => {
      new Notification(content);
    });
  };

  return (
    <div className="image-upload-post">
      <div
        style={{ position: "relative", marginBottom: "16px", width: "100%" }}
      >
        <input
          style={{
            width: "100%",
            padding: "8px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here..."
        />
        <select
          style={{ position: "absolute", right: 0, top: 0, padding: "8px 0" }}
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="post">Posts</option>
          <option value="question">Questions</option>
          <option value="idea">Ideas</option>
        </select>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="What's on your mind?"
          rows={4}
        />
        <div className="file-input-wrapper">
          <input
            type="file"
            onChange={handleImageUpload}
            multiple
            accept="image/*"
            id="image-upload"
          />
          <label htmlFor="image-upload">Upload Images</label>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <svg
              onClick={() => setType("post")}
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 24 24"
            >
              <path
                fill={type === "post" ? "#505050" : "#808080"}
                d="M3 21V3h18v18zm3-7h12v-2H6zm0 3h12v-1.5H6z"
              ></path>
            </svg>
            <svg
              onClick={() => setType("question")}
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill={type === "question" ? "#505050" : "#808080"}
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-9.5a3.625 3.625 0 0 0-3.625 3.625a1 1 0 1 0 2 0a1.625 1.625 0 1 1 2.23 1.51c-.676.27-1.605.962-1.605 2.115V14a1 1 0 1 0 2 0c0-.244.05-.366.261-.47l.087-.04A3.626 3.626 0 0 0 12 6.5"
                ></path>
              </g>
            </svg>
            <svg
              onClick={() => setType("idea")}
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 24 24"
            >
              <path
                fill={type === "idea" ? "#505050" : "#808080"}
                d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7M9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9z"
              ></path>
            </svg>
          </div>
        </div>
        <button type="submit">Post</button>
      </form>
      {images.length > 0 && (
        <div className="image-preview">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              width={100}
              height={100}
              alt={`Uploaded preview ${index + 1}`}
            />
          ))}
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: "100%",
          margin: "0 auto",
        }}
      >
        {posts.length > 0 &&
          posts.map(({ text, images, type, isLiked, comments }, index) => (
            <div style={styles.post} key={index}>


              <div style={{ position: "absolute", right: 16 }}> {type === "post" ? <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#808080"
                  d="M3 21V3h18v18zm3-7h12v-2H6zm0 3h12v-1.5H6z"
                ></path>
              </svg> : type === "question" ? <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    fill="#808080"
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-9.5a3.625 3.625 0 0 0-3.625 3.625a1 1 0 1 0 2 0a1.625 1.625 0 1 1 2.23 1.51c-.676.27-1.605.962-1.605 2.115V14a1 1 0 1 0 2 0c0-.244.05-.366.261-.47l.087-.04A3.626 3.626 0 0 0 12 6.5"
                  ></path>
                </g>
              </svg> : <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#808080"
                  d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7M9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9z"
                ></path>
              </svg>} </div>


              <div style={styles.header}>
                <img
                  src="https://picsum.photos/200"
                  style={styles.profilePhoto}
                />
                <span style={styles.username}>Foulen Ben Foulen</span>
              </div>


              <p style={styles.content}>{text}</p>


              {images.length > 0 && (
                <div style={styles.imageContainer}>
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Post image ${index + 1}`}
                      style={styles.image}
                    />
                  ))}
                </div>
              )}

              {/*  add like comment and share */}

              <button onClick={() => handleLike(index)}>{isLiked ? "Unlike" : "Like"}</button>

              {/* Le ubtton faire appraitre et disparraitre le comment input
              correspondant au index du comment, par example
              le button du post 2 faire appraitre le comment input du post 2

              */}
              <button onClick={() => setVisibleCommentInput(visibleCommentInput !== index ? index : null)}>comment</button>
              {/* Le button share faire simplement copier le post cible */}
              <button onClick={() => {
                setPosts([{ text, images, type }, ...posts]);
                localStorage.setItem("posts",
                  JSON.stringify([{ text, images, type }, ...posts]))
                handleNotification("New Post Shared")

              }}>share </button>

              {/* Inuput de comment et button d'ajout du comment */}
              {visibleCommentInput === index && <div>
                <input value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                /><button onClick={() => handleAddComment(index)}>Add comment</button>
              </div>}
              {/* Le commentaire afficher */}
              <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>

                {comments?.map((comment, commentIndex) => (
                  <div key={commentIndex}>
                    <span>{comment}</span>
                  </div>
                ))}
              </div>


            </div>
          ))}
      </div>
      <style>{`
        .image-upload-post {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          resize: vertical;
        }
        .file-input-wrapper {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          justify-content: space-between
        }
        .file-input-wrapper input[type=file] {
          font-size: 10px;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
        }
        .file-input-wrapper label {
          display: inline-block;
          padding: 8px 12px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 4px;
          cursor: pointer;
        }
        button {
          padding: 10px 15px;
          margin: 10px 0px 10px 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #45a049;
        }
        .image-preview {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }
        .image-preview img {
          max-width: 100px;
          max-height: 100px;
          object-fit: cover;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}

const styles = {
  post: {
    border: "1px solid #e1e1e1",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "12px",
    position: "relative"
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
  },
  profilePhoto: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "12px",
  },
  username: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  content: {
    fontSize: "14px",
    lineHeight: "1.4",
    marginBottom: "12px",
  },
  imageContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "4px",
  },
};
