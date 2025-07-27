// Theme management
let currentTheme = 'light';

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  const themeButtons = document.querySelectorAll('.theme-toggle');
  themeButtons.forEach(button => {
    const icon = button.querySelector('i');
    const text = button.querySelector('span');
    if (currentTheme === 'dark') {
      icon.className = 'fas fa-sun';
      text.textContent = text.textContent.includes('Mode') ? 'Light Mode' : 'Light';
    } else {
      icon.className = 'fas fa-moon';
      text.textContent = text.textContent.includes('Mode') ? 'Dark Mode' : 'Dark';
    }
  });
}

// Mobile menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Blog functionality
const blogPosts = [
  {
    title: "Beyond the Desk: The Life and Adventures of Risima Ngobe",
    content: "A detailed look into my life outside of work, including hiking adventures, technology passion, and continuous learning journey..."
  },
  {
    title: "Transforming Agriculture with Data",
    content: "How data engineering is revolutionizing the agricultural sector with precision farming, resource optimization, and supply chain improvements..."
  },
  {
    title: "Embracing the Journey of Data Engineering",
    content: "My experience with various ETL tools and the evolution from Ab Initio to cloud-based solutions like Azure Synapse..."
  }
];

function openBlogPost(index) {
  const post = blogPosts[index];
  if (post) {
    alert(`${post.title}\n\n${post.content}`);
  }
}

function viewAllPosts() {
  alert('Blog archive feature - would show all blog posts in a paginated view.');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // Close mobile menu if open
      const menu = document.querySelector(".menu-links");
      if (menu && menu.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
});