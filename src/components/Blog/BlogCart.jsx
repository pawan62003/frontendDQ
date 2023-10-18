import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser'; 

const BlogCart = () => {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);

  const getBlog = () => {
    setLoading(true);
    axios.get(`https://drab-blue-mite-belt.cyclic.app/blog`).then((res) => {
      console.log(res)
      setBlog(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getBlog();
  }, []);

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }



  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {blog?.map((item) => (
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={item.FeaturedImage}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium  mb-1">
                      {item.MetaTag}
                    </h2>
                    <h1 class="title-font text-lg font-medium  mb-3">
                      {item.Title}
                    </h1>
                    <p class="leading-relaxed mb-3">
                      {parse(item.MetaDescription).slice(0, 100)}...
                      {/* <div dangerouslySetInnerHTML={{ __html: item.MetaDescription.slice(0, 100) }} /> */}
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <Button colorScheme="red">
                        <Link to={`/blog/${item.MetaTitle}`}>
                          Learn More
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </Button>

                      <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        {item.date}
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        {item.auther}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCart;
