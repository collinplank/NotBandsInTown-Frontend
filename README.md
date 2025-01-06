Bandsintown Clone Frontend

This project is the frontend of a Bandsintown clone. It allows users to search for bands or artists, view their previous touring history, setlists, and other relevant band information. The frontend is built with React and styled with Tailwind CSS.

Features

Search Functionality: Users can search for bands or artists by name.

Artist Details: Display detailed information about an artist, including touring history.

Setlists: Show setlists from previous concerts.

Upcoming Events: Highlight upcoming concerts and events.

Responsive Design: Optimized for various screen sizes using Tailwind CSS.

Tech Stack

Frontend

React: JavaScript library for building user interfaces.

Tailwind CSS: Utility-first CSS framework for styling.

Axios: For making API requests.

Getting Started

Prerequisites

Node.js (v16 or above)

npm or yarn

Installation

Clone the repository:

git clone https://github.com/your-username/bandsintown-frontend.git

Navigate to the project directory:

cd bandsintown-frontend

Install dependencies:

npm install

# or

yarn install

Start the development server:

npm start

# or

yarn start

Open your browser and go to http://localhost:3000 to view the application.

API Integration

The frontend communicates with the backend API (built with Ruby on Rails) to fetch data about bands, concerts, and setlists. Ensure the backend is running and accessible before starting the frontend.

Environment Variables

Create a .env file in the root of the project to store the API URL:

REACT_APP_API_URL=http://localhost:3001

Replace http://localhost:3001 with the actual backend URL if it differs.

Project Structure

src/
├── components/ # Reusable UI components
├── pages/ # Page components (e.g., Home, Artist Details)
├── services/ # API request logic (e.g., Axios instances)
├── styles/ # Global and component-specific styles
├── App.js # Main app component
└── index.js # Entry point

Scripts

npm start: Start the development server

npm build: Build the project for production

npm test: Run tests (if applicable)

Future Enhancements

User authentication to save favorite bands and events.

Interactive maps to show concert venues.

Real-time notifications for new events.

Integration with third-party APIs for ticket purchases.

Contributing

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more information.

Acknowledgments

Built with inspiration from Bandsintown and Ticketmaster.

Thanks to Actualize for guidance and support.
