import Head from "next/head";

import { getPosts } from "../servicecalls";

import PostCard from "../components/PostCard";
import { motion } from "framer-motion";

export default function Home({ posts }) {
  return (
    <div className=" subpixel-antialiased selection:bg-green-300 scrollbar-hide">
      <Head>
        <title> GearOnlineColts</title>
        <meta
          name="description"
          content="The only destination for you to get Tech News, Apps Reviews, Softwares Reviews, Books Reviews and Unique Gadgets. Genuine and Unbiased blogs!"
        />
        <meta
          name="keyword"
          content="technews, apps reviews, software reviews, books reviews, unique gadgets, best apps, top mobiles, best software, tech, electronic"
        />
        <meta property="og:site_name" content="www.gearonlinecolts.com" />
        <meta property="og:title" content=" GearOnlineColts" />
        <meta
          property="og:description"
          content="The only destination for you to get Tech News, Apps Reviews, Softwares Reviews, Books Reviews and Unique Gadgets. Genuine and Unbiased blogs!"
        />
        <meta property="og:image" content="/logoGOC.png" />
        <meta
          property="og:image:alt"
          content="logo imge for GearOnlineColts.com"
        />
        <meta property="og:url" content="https://www.gearonlinecolts.com/" />
        <meta property="og:site_name" content="www.gearonlinecolts.com" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_us" />

        <meta itemProp="name" content=" GearOnlineColts" />
        <meta
          itemProp="description"
          content="The only destination for you to get Tech News, Apps Reviews, Softwares Reviews, Books Reviews and Unique Gadgets. Genuine and Unbiased blogs!"
        />
        <meta itemProp="image" content="/logoGOC.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gearonlinecolts" />
        <meta name="twitter:title" content=" GearOnlineColts" />
        <meta
          name="twitter:description"
          content="The only destination for you to get Tech News, Apps Reviews, Softwares Reviews, Books Reviews and Unique Gadgets. Genuine and Unbiased blogs!"
        />
        <meta name="twitter:creator" content="@gearonlinecolts" />
        <meta name="twitter:image" content="/logoGOC.png" />

        <link rel="canonical" href="https://www.gearonlinecolts.com" />
      </Head>

      <main>
        <div className="lg:max-w-7xl mx-auto mt-3 md:mt-8 ">
          <h1 className="text-2xl font-bold first-letter:text-3xl first-letter:text-blue-500 first-letter:italic tracking-wide">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.2,
                    type: "spring",
                    bounce: 0.3,
                  },
                },
              }}
            >
              Recently Trending
            </motion.div>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ld:gap-10  p-2 md:p-5 ">
            {posts.map((post, i) => (
              <div key={post.node.slug}>
                <motion.div
                  initial={{ opacity: 0, translateY: -50, translateX: -50 }}
                  animate={{ opacity: 1, translateY: 0, translateX: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.2,
                    type: "spring",
                    bounce: 0.3,
                  }}
                >
                  <PostCard post={post.node} key={post.node.slug} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
    revalidate: 60,
  };
}
