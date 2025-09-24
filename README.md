//ReadMe.txt
 
===========================================================
Project Title: Identify Courses – UI Automation Challenge
===========================================================
 
Problem Statement:
------------------
Automate the identification and extraction of course details from an online learning platform. The goal is to search for web development courses and validate filtering, navigation, and form behavior using end-to-end UI automation.
 
Platform Used:
--------------
Suggested: https://www.coursera.org
 
Automation Scope:
-----------------
1. Search and display all Web Development courses:
   - Filter by Beginner level
   - Filter by English language
   - Extract and display the first two course names, total learning hours, and ratings
 
2. Navigate to Language Learning section:
   - Extract all available languages
   - For each language, extract course levels (Beginner, Intermediate, Advanced, Mixed) and their respective counts
 
3. Navigate to "For Businesses" section from homepage:
   - Scroll to "Explore Skill Tracks"
   - Display each skill track name and total count
   - Fill the "Ready to learn more?" form with one invalid input (e.g., email)
   - Capture and display the error message
 
Key Features Automated:
-----------------------
- Handling multiple browser windows and redirects
- Using search functionality and applying filters
- Extracting dropdown list items
- Navigating between sections and returning to homepage
- Filling forms across different page objects
- Capturing and validating warning/error messages
- Scrolling to interact with dynamically loaded content
 
Tech Stack:
-----------
- Cypress (JavaScript-based end-to-end testing framework)
- mochawesome (for rich HTML test reporting)
- Page Object Model (POM) structure for modular test design
 
Test Coverage:
--------------
✔ Homepage access and search validation  
✔ Filter application for course level and language  
✔ Course metadata extraction (name, hours, rating)  
✔ Language and level distribution analysis  
✔ Skill track enumeration and count  
✔ Form validation with error capture  
✔ Scroll and visibility checks
 
Instructions:
-------------
1. Clone the repository
2. Run `npm install` to install dependencies
3. Execute tests using `npx cypress open`
4. Generate report using:
   - npx cypress run
5. Open `cypress/reports/html/index_001.html` to view results
 
Authors:
-------
Kalyanam Revathi
Mudumala Lavanya
L V Likkhitha
G Yuvashree
