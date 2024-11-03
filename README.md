Hacker News Clone
This is a clone of the Hacker News Algolia website created with React.js. The application allows users to search through Hacker News stories, apply filters, and navigate through paginated results. The project also includes a basic login functionality to display a personalized greeting.

Features
User Login: User can log in with a username, which will be displayed on the dashboard.
Search Functionality: Search for stories using keywords.
Filter Options: Filter stories by type (Stories, Comments, Polls).
Pagination: Browse through search results with pagination.
Clickable Links: Each story links to its original source, similar to the original website.
Demo
This project aims to replicate the design and functionality of the original Hacker News Algolia site, including its exact CSS styling and filter options.

Technologies Used
React.js: For building the user interface
Axios: For making API requests
Hacker News Algolia API: To fetch search results
React Router: For navigation between login and dashboard pages
Getting Started
Prerequisites
Node.js (v14 or later)
npm (comes with Node.js)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/hn-clone.git
cd hn-clone
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
The app should now be running at http://localhost:3000.

Project Structure
plaintext
Copy code
src
├── components
│   ├── LoginPage.js         # Login component
│   ├── Dashboard.js         # Dashboard with search, filters, and results
│   ├── SearchBar.js         # Search input component
│   ├── StoryList.js         # List of stories
│   ├── Story.js             # Individual story item
│   └── Filters.js           # Filter options component
├── App.js                   # Main component with routing
├── App.css                  # Styling
└── index.js                 # Entry point
Configuration
No special configuration is required. The app uses the Hacker News Algolia API directly.

API Endpoints
The app fetches data from the Hacker News Algolia API. Key endpoints include:

Search Stories: https://hn.algolia.com/api/v1/search?query=<query>&tags=<tag>&page=<page>
Usage
Login: Enter a username on the login page to proceed to the main dashboard.
Search: Use the search bar to find specific topics.
Filter: Choose between "Stories," "Comments," or "Polls" filters to narrow down results.
Pagination: Use the pagination buttons to navigate through different pages of results.
