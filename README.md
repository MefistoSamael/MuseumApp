<h2>The entire website was created according to the following technical requirements:</h2>

Determine the necessary entities to describe the domain. Implement them in terms of models using suitable data types and object relationships. Present them in a diagram as shown in the example below. SQLite is recommended as the database, but another can be used with the instructor's approval.
Implement one-to-one (OneToOneField), one-to-many (ForeignKey), and many-to-many (ManyToManyField) relationships.
Implement CRUD (create, read, update, delete) operations.
Add all models to the admin panel, create a superuser, ensure working with data, filtering, and built-in editing of related records.
Implement authentication/authorization mechanisms.
Restrict access based on roles: for example, store owner (superuser), registered user, unregistered user (see individual task).
Populate data for demonstration with at least 10 entries in the list of products/services/objects/clients.
Connect and use at least 2 third-party APIs (basic list provided), choose as desired.
Use regular expressions to link the URL to the display function.
Display statistical indicators for the site, such as:
A list of clients/products in alphabetical order and the total sales amount.
Statistical indicators (average, mode, and median) based on the sales amount.
Statistical indicators (average and median) based on the age of clients.
What type of products is most popular?
What type of products generates the highest profit?
Display the user's time zone, current date, date of data addition/modification in tables for the user's time zone and UTC, a calendar in text form. Date format: DD/MM/YYYY.
Format the client's phone number as +375 (29) XXX-XX-XX.
Clients and employees must have a minimum age requirement of 18+.
Implement visualization in the form of a diagram or chart to display the distribution of indicators by groups and/or changes in indicators by dates/groups.
Implement search by any parameter and sorting of displayed data.
Add tests using pytest. Use fixtures to create users and connect to the database. Use parametrize.
Add logging.
Ensure test coverage is 80% or higher.
Acceptable appearance. Use CSS, optionally implement custom styles (find and download templates online).
Validate forms on both the server and client sides.
Support different levels of logging (take the logging level from the application configuration).
Restrict the use of the project's API for unauthorized requests.

<h2>The HTML was created according to the following requirements:</h2>

Pages and Content:
Home Page:

Brief information about the latest published article.
Banner advertisement.
List of partner companies (logos with links to company websites - arbitrary selection).
About Us Page:

Company information.
Video.
Logo.
History over the years.
Company details.
Certificate (currently only text without styling).
News Page:

List of articles related to the site's theme.
Each article includes a title, brief content (one sentence), image, and a "Read more" button that opens the full article when clicked.
Glossary Page:

Frequently asked questions list with the date of addition.
Clicking on a question opens an expanded answer.
Contacts Page:

Photos of employees with descriptions of their roles.
Phone numbers, email, etc.
Privacy Policy Page:

Developed in accordance with the theme of the site.
Vacancies Page:

List of job openings with descriptions.
Reviews Page:

List of reviews with names, ratings, text, and dates.
"Add a review" button leading to a registration window or the logged-in user's profile.
Clicking the button opens a form with a text field for the review and a rating selection, with a "Submit" button that saves the review in the database.
Promo Codes and Coupons Page:

List of active and archived promo codes.
(No discounts, only code and expiration time).
Additional Requirements:
Micro and meta data for search engines.
Site icon.
Semantic markup.
Semantic text highlighting.
Global attributes.
Example of listings, abbreviations, definitions, quotes, date-time, poetry with fixed and potential line breaks.
Various types of links, including links for downloading documents.
Anchors, container elements, lists, figures.
Horizontal and vertical navigation.
A table with header cells filled with numeric and text data, merged cells, and the "headers" attribute (for data, not for styling).
Forms, control elements (including different types of inputs, dropdown lists, containers, buttons, etc., along with their validation).
Iframe.
Images (bonus for adaptive images).
Elements for displaying video and audio content.
To ensure a consistent style across the site, use a basic template.

<h2>The CSS was used according to the following requirements:</h2>

Mandatory Usage:
Selectors:

Elements
Attributes (starting and ending with substrings, attributes with specific values)
Classes
Combination of selectors (union - AND, descendant selectors, child elements)
Pseudo-classes:

Dynamic states for links (visited, unvisited, hover, pressed), and focus states.
Different styles for elements in lists and tables depending on their positions (first, last, nth).
Styling for accessible, required, and disabled form elements, elements with values outside the range, and checked checkboxes and switches.
Displaying quotation marks based on the language of the quote.
Pseudo-elements:

Selecting the first letter (or line) of a paragraph's text.
Adding content before and after a text fragment.
Using Unicode symbols for styling one of the lists.
Changing styles when text is selected.
Font Configuration:

Include main font (from a font service), alternative font, font family.
Media Queries:

Display pages based on the width and height of the viewport.
Cursor Styles:

Change cursor appearance on button hover.
Additional Styling:
General:

Set the background color of the site.
Catalog Page (from Lab 4):

Utilize CSS Grid Layout.
Homepage - Company Partners Section:

Use circular-shaped blocks with specified width, color, type, and shadow.
Configure font and kerning for company names.
Apply animation to objects on the banner (combination of animation and transform).
Latest Article Display:

Positioning (position) for displaying information about the latest article.
Use of CSS Transforms for displaying the logo (a function of choice).
Certificate Page:

Use images for borders from a graphic file (consider vendor prefixes), background image, gradient, z-index, font settings, text alignment, etc.
Adjust styling for other page elements - history by years, emphasize font for details, choose styles for video/audio elements.
News Section:

List of articles (7 articles) with a title, brief content (one sentence), image, and "Read more" button.
Utilize overflow for brief information about the article and ellipsis when the brief information exceeds the allocated space.
Multi-column layout for displaying the article text.
FAQ Section:

Frequently Asked Questions list with the date of addition, expanding to reveal detailed answers.
Contacts Page:

Flexbox for arranging information about each employee.
Privacy Policy:

Develop a unique style in accordance with the theme of the site.
Vacancies Page:

List of job openings with descriptions, using floating blocks (float, clear).
Reviews Page:

Use Flexbox for arranging information about each form component.
Promo Codes and Coupons Page:

List of active and archived promo codes.
Configure lists in tables, remove double lines between cells, change the background in empty cells, style the table header, apply horizontal and vertical alignment to cell information, and position the table on the page.
Table Styling:

In tables, remove double lines between cells, change the background in empty cells, style the table header, apply horizontal and vertical alignment to cell information, and position the table on the page.

<h2>The JavaScript code was written in accordance with the following requirements:</h2>

Interactive Features:

Develop scripts to enhance the interactivity of the website using JavaScript.
Banners Rotation:

Place multiple banners on the site and rotate them at intervals that can be changed by the administrator using a form element. Use focus check on the page for starting and stopping the banner rotation. Each banner should have a link for redirection.
Scrolling Animation Effect:

Implement an animation effect during scrolling.
Card Animation on Hover:

Create cards with a volume effect on hover.
Dynamic Styling:

Allow users to change the font size, text color, and background color using form elements generated by selecting the corresponding checkbox. Image sizes should remain unchanged.
Promo Codes:

Implement the use of promo codes for calculating the cost of services/products.
User Birthdate and Age Calculation:

Request the user's birthdate, calculate their age, and display the day of the week for users over 18. Display an alert if parental consent is required for underage users.
Countdown Timer:

Display a countdown timer when the user enters the site, counting down for an hour. Ensure that the countdown resumes from where it left off after refreshing the page.
Table Operations:

Generate a square table (array) with a size chosen by the user, randomly arranging numbers.
Develop functions for:
Transposing the table on button click.
Highlighting a cell on click (different colors for cells with values divisible by two and others).
Allowing the selection of not more than n cells in a row/column (value entered in the field).
Adding a new row and column on button click.
Class Inheritance and Decorator:

Create a base class and a derived class with five functions (including getters and setters) related to your domain. Demonstrate their capabilities.
Implement a decorator for one of the functions and demonstrate its usage. Implement in two ways: 1) using functional-style prototype inheritance and 2) using the "class"/"extends" construction.
Associative Array Algorithm:

Develop scripts to solve a problem using associative arrays. Input the initial data and output the results using an HTML form.
Individual Task Variant (Option 3):

Given an associative array containing information about soldiers in a military unit (surname, first name, patronymic, age, height - from 140 to 210 cm). Check if there are at least two people of the same height in the unit.
