import React from "react";

const Posts = () => {

  return (

    <section id="posts" className="py-32 px-6 bg-black min-h-screen" data-aos="fade-up">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-10">
          Latest <span className="text-[#FACC15]">Posts</span>
        </h2>

        <a
          className="twitter-timeline"
          data-theme="dark"
          href="https://twitter.com/@ChrisNova01"
        >
          Tweets
        </a>

      </div>

    </section>

  );
};

export default Posts;