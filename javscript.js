fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
  .then(response => response.json()) // Convert response to JSON
  .then(comments => {
    const commentsContainer = document.getElementById('comments-container');
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        
        commentElement.innerHTML = `
          <h4>${comment.name} (by ${comment.email})</h4>
          <p>${comment.body}</p>
        `;
  
        commentsContainer.appendChild(commentElement);
      });
    })
    .catch(error => console.error('Error fetching comments:', error));

    // Sample data to search through (with links)
const dataWithLinks = [
    { name: "education news", link: "Education.html" },
    { name: "entertainment news", link: "#" },
    { name: "politics news", link: "Politics.html" },
    { name: "any latest products on car", link: "#" },
    
    
];

// Get elements from the DOM
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Function to search and display results with links
function performSearch() {
    const query = searchInput.value.toLowerCase();
    const filteredData = dataWithLinks.filter(item => item.name.toLowerCase().includes(query));

    // Display the results with links
    searchResults.innerHTML = filteredData.length ? 
        `<ul>${filteredData.map(item => `<li><a href="${item.link}" target="_blank">${item.name}</a></li>`).join('')}</ul>` :
        '<p>No results found</p>';
}

// Add an event listener to the search button
searchButton.addEventListener('click', performSearch);



// script.js

document.querySelectorAll('.comment-section button').forEach(button => {
    button.addEventListener('click', () => {
        const comment = button.previousElementSibling.value;
        if (comment) {
            alert('Comment Submitted: ' + comment);
        } else {
            alert('Please write a comment first.');
        }
    });
});

document.querySelector('footer form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Subscription successful! Thank you.');
});

// script.js

// Add event listener to all category links
document.querySelectorAll('#category-list li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Remove 'active' class from any previously active link
        document.querySelectorAll('#category-list li a').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
        
        // Get the selected category
        const category = this.getAttribute('data-category');
        alert(`You selected the ${category} category!`);

        // filterNewsByCategory(category); 
    });
});

// Example function for future category-based news filtering (Optional)
function filterNewsByCategory(category) {
    // Logic to filter news articles based on selected category
    // Could hide or show news feed items based on category
    const newsArticles = document.querySelectorAll('.news-feed article');
    newsArticles.forEach(article => {
        if (article.getAttribute('data-category') === category) {
            article.style.display = 'block'; // Show articles matching the category
        } else {
            article.style.display = 'none'; // Hide others
        }
    });
}

// script.js

// Add event listener to the 'Load More' button

document.querySelector('#load-more-button').addEventListener('click', () => {
    // Logic to load more news articles from the API
    // Add new articles to the news feed
    // Update the 'Load More' button's text based on whether there are more articles to load
});

// script.js

// Add event listener to the 'Search' button

document.querySelector('#search-button').addEventListener('click', () => {
    const searchQuery = document.querySelector('#search-input').value;
    if (searchQuery) {
        // Logic to search news articles based on the search query
        // Update the news feed to display matching articles
        alert(`Searching for articles containing "${searchQuery}"`);
    } else {
        alert('Please enter a search query.');
    }
});

// script.js

// Add event listener to the 'Sort' dropdown menu

document.querySelector('#sort-dropdown').addEventListener('change', () => {
    const selectedSortOption = document.querySelector('#sort-dropdown option:checked').value;
    if (selectedSortOption) {
        // Logic to sort news articles based on the selected sort option
        // Update the news feed to display the sorted articles
        alert(`Sorting news articles by "${selectedSortOption}"`);
    } else {
        alert('Please select a sort option.');
    }
});

// script.js

// Add event listener to the 'Share' button

document.querySelector('#share-button').addEventListener('click', () => {
    const newsArticle = document.querySelector('.news-feed article.active');
    if (newsArticle) {
        const articleTitle = newsArticle.querySelector('h2').textContent;
        const articleLink = window.location.href + '#' + newsArticle.getAttribute('id');
        const shareMessage = `Check out this article: ${articleTitle} - ${articleLink}`;
        // Logic to share the news article on social media platforms
        alert(`Sharing: "${shareMessage}"`);
    } else {
        alert('Please select a news article to share.');
    }
});