function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const content = document.querySelector(".content");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
  if (content.classList.contains("blurred")) {
    content.classList.remove("blurred");
  } else {
    setTimeout(() => {
      content.classList.add("blurred");
    }, 300);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const colorContainers = document.querySelectorAll(".color-container");
  const menuLinks = document.querySelectorAll(".menu-links a");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;

    sections.forEach((section) => {
      const boxTop = section.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });

    colorContainers.forEach((container, index) => {
      const boxTop = container.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        setTimeout(() => {
          container.classList.add("visible");
        }, index * 100);
      } else {
        container.classList.remove("visible");
      }
    });

    // Apply animation to blog sections
    const fullBlogList = document.getElementById("full-blog-list");
    const blogPostContent = document.getElementById("blog-post-content");

    if (fullBlogList.getBoundingClientRect().top < triggerBottom) {
      fullBlogList.classList.add("visible");
      const blogPosts = fullBlogList.querySelectorAll(".blog-post");
      blogPosts.forEach((post, index) => {
        setTimeout(() => {
          post.classList.add("visible");
        }, index * 100);
      });
    } else {
      fullBlogList.classList.remove("visible");
    }

    if (blogPostContent.getBoundingClientRect().top < triggerBottom) {
      blogPostContent.classList.add("visible");
    } else {
      blogPostContent.classList.remove("visible");
    }
  }

  menuLinks.forEach(link => {
    link.addEventListener("click", function() {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      const content = document.querySelector(".content");

      menu.classList.remove("open");
      icon.classList.remove("open");
      content.classList.remove("blurred");
    });
  });

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();

  // Blog posts data
  const blogPosts = [
    {
      title: "Beyond the Desk: The Life and Adventures of Risima Ngobe",
      content: [
        {
          type: "paragraph",
          text: "Hello there! If you've found your way to this corner of my website, you're probably wondering what I'm like when I'm not knee-deep in data and code. Well, let me take you on a little journey into my world outside the professional space. Spoiler alert: It's a lot of fun and a bit nerdy!"
        },
        {
          type: "header",
          text: "The Call of the Wild: My Love for Hiking"
        },
        {
          type: "paragraph",
          text: "Let's start with the great outdoors. There's something incredibly refreshing about leaving behind the screens and heading into nature. Hiking is my go-to escape. Whether it's scaling a mountain or just a gentle walk through a forest, the tranquility and beauty of nature always manage to recharge my batteries. Plus, it's a great way to stay fit without feeling like you're doing a workout—unless you count dodging snakes and avoiding tripping over roots as extreme sports."
        },
        {
          type: "image",
          src: "./blog_assets/hiking.jpg",
          alt: "Hiking in nature"
        },
        {
          type: "header",
          text: "The Tech Enthusiast"
        },
        {
          type: "paragraph",
          text: "When I'm not exploring the wilderness, you can usually find me diving deep into the world of technology. I have a borderline obsessive fascination with all things tech. From the latest gadgets to groundbreaking innovations, I’m always on the hunt for what's new and exciting. And yes, I have a collection of old tech relics that I swear will be valuable antiques one day."
        },
        {
          type: "header",
          text: "The Eternal Student"
        },
        {
          type: "paragraph",
          text: "My learning journey is a never-ending adventure. From mastering new programming languages to understanding the complexities of quantum computing, I’m always on a quest to expand my knowledge. I like to think of myself as a lifelong learner with an insatiable curiosity. And let’s be honest, it’s a great way to justify all those hours spent watching educational YouTube videos."
        },
        {
          type: "header",
          text: "A Dash of Humor"
        },
        {
          type: "paragraph",
          text: "I firmly believe that laughter is the best way to make it through life’s ups and downs. So, I try to keep things light-hearted and fun, even when tackling the most challenging projects. After all, if you can laugh at your mistakes, you’re already winning half the battle. And trust me, I’ve had my fair share of laughable moments—like the time I accidentally sent a meme to my boss instead of a report. Oops!"
        },
        {
          type: "header",
          text: "Bringing It All Together"
        },
        {
          type: "paragraph",
          text: "So, there you have it—a glimpse into the life of Risima Ngobe, beyond the professional facade. Whether I’m hiking up a mountain, geeking out over the latest tech trends, delving into historical mysteries, or just learning something new, I try to live life to the fullest. And who knows, maybe our paths will cross in a professional setting where we can blend work with a bit of fun."
        },
        {
          type: "paragraph",
          text: "Thanks for stopping by! If you ever want to chat about technology, history, hiking spots, or just share a good joke, feel free to reach out. Until then, keep exploring and keep laughing!"
        }
      ]
    },
    {
      title: "Transforming Agriculture with Data: Insights from the Field",
      content: [
        {
          type: "paragraph",
          text: "I wanted to share some fascinating insights from my experience working with data in the agricultural sector. Agriculture might not be the first industry that comes to mind when we talk about data engineering, but the impact data can have on farming operations is truly transformative. Here’s how data is changing the game for farmers and agricultural businesses."
        },
        {
          type: "header",
          text: "The Power of Data in Agriculture"
        },
        {
          type: "paragraph",
          text: "Agriculture has always been a vital industry, but it faces numerous challenges, from climate change to resource management. Leveraging data can help farmers make better decisions, optimize operations, and ultimately increase yields and profitability."
        },
        {
          type: "header",
          text: "Precision Farming: A Data-Driven Approach"
        },
        {
          type: "paragraph",
          text: "One of the most exciting developments in agriculture is precision farming. By using data collected from various sources—such as satellite imagery, weather stations, and soil sensors—farmers can make precise adjustments to their practices. For example, data can help determine the optimal time for planting and harvesting, the best type and amount of fertilizer to use, and the most efficient irrigation methods."
        },
        {
          type: "header",
          text: "Case Study: Enhancing Yield with Data"
        },
        {
          type: "paragraph",
          text: "In one of our projects with an agricultural client, we used data analytics to monitor crop health and predict yield outcomes. By analyzing data from drones equipped with multispectral cameras, we could assess plant health and detect issues like pest infestations or nutrient deficiencies early on. This timely intervention helped the farmer take corrective actions, leading to a significant increase in crop yield."
        },
        {
          type: "header",
          text: "Optimizing Resource Management"
        },
        {
          type: "paragraph",
          text: "Water and fertilizer are critical resources in farming, and their efficient use is crucial for both economic and environmental reasons. Data-driven solutions can help farmers optimize the use of these resources. For instance, using data from soil moisture sensors and weather forecasts, we developed an irrigation schedule that minimized water waste while ensuring crops received the right amount of hydration."
        },
        {
          type: "header",
          text: "Improving Supply Chain Efficiency"
        },
        {
          type: "paragraph",
          text: "Data doesn’t just help on the farm; it also plays a crucial role in the agricultural supply chain. By tracking produce from farm to market, data can help ensure freshness, reduce waste, and improve traceability. This transparency is increasingly important as consumers demand more information about the origins of their food."
        },
        {
          type: "header",
          text: "Overcoming Challenges with Data"
        },
        {
          type: "paragraph",
          text: "While the benefits are clear, implementing data-driven solutions in agriculture comes with its own set of challenges. Farmers need access to the right technology and training to effectively use data. Additionally, data privacy and security are important considerations, especially when dealing with sensitive information about farming practices and yields."
        },
        {
          type: "header",
          text: "The Future of Data in Agriculture"
        },
        {
          type: "paragraph",
          text: "Looking ahead, the role of data in agriculture is only set to grow. Advances in machine learning and artificial intelligence will provide even more powerful tools for analyzing agricultural data. These technologies can help predict weather patterns, optimize crop planning, and even automate certain farming tasks."
        },
        {
          type: "header",
          text: "Final Thoughts"
        },
        {
          type: "paragraph",
          text: "Working with agricultural clients has shown me firsthand how transformative data can be. From improving crop yields to optimizing resource use, data-driven solutions are helping farmers tackle some of the industry’s biggest challenges. It’s an exciting time to be in the field of data engineering, and I look forward to seeing how technology will continue to evolve and support sustainable farming practices."
        },
        {
          type: "paragraph",
          text: "Feel free to reach out if you have any questions or want to share your experiences. I’d love to hear from fellow data enthusiasts and anyone interested in the intersection of data and agriculture!"
        }
      ]
    },
    {
      title: "Embracing the Journey of Data Engineering",
      content: [
        {
          type: "paragraph",
          text: "Being part of this evolving field has been both challenging and incredibly rewarding. If you’re a data enthusiast or just curious about what data engineering entails, I hope you find this post insightful."
        },
        {
          type: "header",
          text: "Discovering the World of Data Engineering"
        },
        {
          type: "paragraph",
          text: "My path into data engineering started with a strong foundation in Mathematical Sciences from Stellenbosch University. Numbers and patterns have always fascinated me, and this fascination naturally extended to the world of data. As a BI Consultant, I quickly realized how crucial data engineering is to unlocking the potential of data."
        },
        {
          type: "header",
          text: "The ETL Journey: From Ab Initio to Azure Synapse"
        },
        {
          type: "paragraph",
          text: "My journey with ETL (Extract, Transform, Load) began with Ab Initio. It was an excellent introduction to the world of data integration, providing a solid foundation in building data pipelines. Ab Initio’s powerful capabilities allowed me to handle complex data transformations and large-scale data processing tasks efficiently."
        },
        {
          type: "paragraph",
          text: "As my career progressed, I transitioned to using SSIS (SQL Server Integration Services). SSIS offered a more flexible and comprehensive environment for ETL processes, which helped me tackle more complex data challenges. The visual interface and integration with SQL Server made it a valuable tool for building and managing data workflows."
        },
        {
          type: "paragraph",
          text: "Currently, my work revolves around Azure Data Studio and Azure Synapse Analytics. The transition to cloud-based tools has been a game-changer. Azure Synapse, with its integrated analytics services, has made it easier to manage and analyze large datasets efficiently. The seamless integration with other Azure services has streamlined my workflow, allowing for more innovative and scalable data solutions."
        },
        {
          type: "header",
          text: "Automation and Real-Time Processing"
        },
        {
          type: "paragraph",
          text: "Automation tools like Apache Airflow and dbt have transformed how I handle data workflows, reducing manual effort and minimizing errors. Real-time data processing with Apache Kafka and AWS Kinesis is becoming essential for industries that rely on instant insights, such as finance and e-commerce."
        },
        {
          type: "header",
          text: "Data Governance and Security"
        },
        {
          type: "paragraph",
          text: "Ensuring data governance and security is a significant part of my role. Implementing policies and frameworks to safeguard data integrity and privacy is essential, especially with regulations like GDPR in play. Tools like Apache Ranger and AWS Lake Formation have been invaluable in managing data access controls and monitoring data usage."
        },
        {
          type: "header",
          text: "Key Takeaways"
        },
        {
          type: "paragraph",
          text: "Design for Scalability: Plan for growth with scalable systems."
        },
        {
          type: "paragraph",
          text: "Prioritize Data Quality: Implement data validation and cleansing processes."
        },
        {
          type: "paragraph",
          text: "Keep Learning: Stay updated with new tools and methodologies."
        },
        {
          type: "paragraph",
          text: "Collaborate with Stakeholders: Understand and align with business needs."
        },
        {
          type: "header",
          text: "Reflecting on the Journey"
        },
        {
          type: "paragraph",
          text: "The journey into data engineering has been a blend of continuous learning and adapting to new technologies. Each project has taught me something new and reinforced the importance of data in making informed decisions."
        }
      ]
    }    
  ];

  // Function to render blog posts
  function renderBlogPosts() {
    const blogContainer = document.querySelector("#blog .blog-container");

    // Render the three latest blog posts
    const latestPosts = blogPosts.slice(0, 3);
    latestPosts.forEach((post, index) => {
      const blogPostElement = document.createElement("div");
      blogPostElement.classList.add("blog-post");

      const blogPostTitle = document.createElement("h2");
      blogPostTitle.textContent = post.title;
      blogPostElement.appendChild(blogPostTitle);

      blogPostElement.addEventListener("click", () => {
        loadBlogPost(index, "blog");
      });

      blogContainer.appendChild(blogPostElement);
    });
  }

  // Function to render all blog posts in full blog list
  function renderAllBlogPosts() {
    const fullBlogContainer = document.querySelector("#full-blog-list .blog-container");
    fullBlogContainer.innerHTML = ''; // Clear previous content

    blogPosts.forEach((post, index) => {
      const blogPostElement = document.createElement("div");
      blogPostElement.classList.add("blog-post");

      const blogPostTitle = document.createElement("h2");
      blogPostTitle.textContent = post.title;
      blogPostElement.appendChild(blogPostTitle);

      blogPostElement.addEventListener("click", () => {
        loadBlogPost(index, "archive");
      });

      fullBlogContainer.appendChild(blogPostElement);
    });
  }

  // Function to load a blog post
  function loadBlogPost(index, from) {
    const post = blogPosts[index];
    document.getElementById("post-title").textContent = post.title;

    const postContentContainer = document.getElementById("post-content");
    postContentContainer.innerHTML = ''; // Clear previous content

    post.content.forEach((contentItem) => {
      if (contentItem.type === "paragraph") {
        const paragraph = document.createElement("p");
        paragraph.textContent = contentItem.text;
        postContentContainer.appendChild(paragraph);
      } else if (contentItem.type === "image") {
        const wrapper = document.createElement("div");
        wrapper.classList.add("aspect-ratio-wrapper");
        const image = document.createElement("img");
        image.src = contentItem.src;
        image.alt = contentItem.alt;
        wrapper.appendChild(image);
        postContentContainer.appendChild(wrapper);
      } else if (contentItem.type === "header") {
        const header = document.createElement("h3");
        header.textContent = contentItem.text;
        postContentContainer.appendChild(header);
      }
    });

    const blogPostContent = document.getElementById("blog-post-content");
    const fullBlogList = document.getElementById("full-blog-list");
    const blogSection = document.getElementById("blog");

    blogPostContent.classList.remove("visible");
    fullBlogList.classList.remove("visible");
    blogSection.classList.add("hidden");

    setTimeout(() => {
      blogPostContent.style.display = "block";
      blogSection.style.display = "none";
      fullBlogList.style.display = "none";

      setTimeout(() => {
        blogPostContent.classList.add("visible");
        blogPostContent.dataset.from = from;
      }, 10); // Slight delay to allow CSS transitions
    }, 500); // Delay to allow transition out
  }

  // Function to go back to the blog list or full blog list
  document.querySelector(".back-to-blog").addEventListener("click", (event) => {
    event.preventDefault();

    const blogPostContent = document.getElementById("blog-post-content");
    const blogSection = document.getElementById("blog");
    const fullBlogList = document.getElementById("full-blog-list");

    const from = blogPostContent.dataset.from;

    blogPostContent.classList.remove("visible");

    setTimeout(() => {
      blogPostContent.style.display = "none";
      if (from === "archive") {
        fullBlogList.style.display = "block";
        fullBlogList.classList.add("visible");
      } else {
        blogSection.style.display = "block";
        blogSection.classList.add("visible");
      }
    }, 500); // Delay to allow transition out
  });

  // Function to view more blog posts
  document.getElementById("view-more-btn").addEventListener("click", () => {
    const fullBlogList = document.getElementById("full-blog-list");
    const blogSection = document.getElementById("blog");

    blogSection.classList.remove("visible");
    fullBlogList.classList.remove("visible");

    setTimeout(() => {
      blogSection.style.display = "none";
      fullBlogList.style.display = "block";

      setTimeout(() => {
        fullBlogList.classList.add("visible");
        const blogPosts = fullBlogList.querySelectorAll(".blog-post");
        blogPosts.forEach((post, index) => {
          setTimeout(() => {
            post.classList.add("visible");
          }, index * 100); // Staggered animation for blog posts
        });
      }, 10); // Slight delay to allow CSS transitions
    }, 500); // Delay to allow transition out
  });

  // Function to go back to main blog list
  document.querySelector(".back-to-main").addEventListener("click", () => {
    const fullBlogList = document.getElementById("full-blog-list");
    const blogSection = document.getElementById("blog");

    fullBlogList.classList.remove("visible");
    blogSection.classList.add("hidden");

    setTimeout(() => {
      fullBlogList.style.display = "none";
      blogSection.style.display = "block";
      blogSection.classList.remove("hidden");
      checkVisibility();
    }, 500); // Delay to allow transition out
  });

  // Call the function to render blog posts
  renderBlogPosts();
  renderAllBlogPosts();
});
