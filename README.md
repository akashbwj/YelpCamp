YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on udemy.

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.

<h2>Features</h2>
<ul>
<li>Users can create, edit, and remove campgrounds</li>
<li>Users can review campgrounds once, and edit or remove their review</li>
<li>Users can reset their password if they forget it </li>
<li>User profiles include more information on the user (full name, email, profile pic), their campgrounds</li>
<li>Search campground by name</li>
</ul>

<h2>Run it locally</h2>

1. Install mongodb
2. Create a cloudinary account to get an API key and secret code

Clone my repo

Run : npm install

Create a .env file (or just export manually in the terminal) in the root of the project and add the following:

GMAILPW=<your gmail password>
CLOUDINARY_API_KEY=<key>
CLOUDINARY_API_SECRET=<secret>
CLOUDINARY_URL=<url>

Run mongod in another terminal and node app.js in the terminal with the project.

Then go to localhost:3000.
