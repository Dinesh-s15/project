import React from "react";

const posts = [
       {
    id: 1,
    image: "https://via.placeholder.com/300",
    caption: "A beautiful day at the beach 🌊",
    likes: 120,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    caption: "Exploring the mountains 🏔️",
    likes: 98,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300",
    caption: "City lights and vibes 🌃",
    likes: 143,
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300",
    caption: "Sunset serenity 🌅",
    likes: 200,
  },
];

const Instagram = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-800">Instagram Clone</h1>
      </header>
      <main className="max-w-4xl mx-auto py-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-800 font-semibold">{post.caption}</p>
                <div className="mt-2 text-gray-500 text-sm">
                  ❤️ {post.likes} likes
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Instagram;
