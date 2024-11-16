A tool to check domain expiry details, including registration status, creation date, expiry date, days left, and registrar information.


How to set up and run the application locally.----------------------------------------------------------------------------
->Backend Setup
1)Install Node.js and install git
2)Clone the Repository
3)Navigate to Backend Directory and open terminal or command prompt:
cd backend
4)Install Dependencies using command: 
npm install
5)Inside backend folder Create a .env File and write:
WHOIS_XML_API_KEY=at_05czKJcmmALc7JxLOWrOKks8c6R8M
6)Start the Backend Server using command:
npm start

->Frontend Setup
1)Navigate to Frontend Directory and open terminal or command prompt and command:
cd frontend
2)Install Dependencies using command: 
npm install
3)Start the Frontend Server using command:
npm run dev
The frontend application should now be running on http://localhost:5173






A brief explanation of the technologies used------------------------------------------------------------------------------------

->React : A JavaScript library it is designed primarily for building user interfaces,especially for single page applications.
-> Vite : It is fast and efficient build tool that speeds up development by serving code instantly and offering quick updates without rebuilding the entire app.

->Node.js: Make sure you have Node.js installed.
->API Key: You will need a valid API key from a WHOIS service like WHOISXML API to fetch domain information.
->express: Web framework for Node.js.
->axios: Makes HTTP requests to the WHOIS API.
->cors: Enables Cross-Origin Resource Sharing.
->dotenv: Loads environment variables from a .env file


Assumptions and Limitations------------------------------------------------------------------------------------------------------
->WHOIS API: Make sure your WHOIS API key is correctly set in the .env file

->CORS: If running frontend and backend on different ports, ensure CORS is configured properly.

->Valid domain: Invalid or Incomplete domain named may result in errors or return no data.

->Internet Connectivity: Application will be run on a machine with a stable internet connectivity.

=>The application currently works only for .com domains due to limitations in the free-tier WhoisXML API, which prioritizes data retrieval for popular top-level domains like .com



