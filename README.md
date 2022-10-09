# CortX
CortX is a __one-stop-solution__ for all (most of) your health related needs.
* Helps busy individuals to manage and track their health
* Includes a 'Corto Companion' to visualise your health
* File management - filter by category in a permenant database
* Store contacts of your doctors
* Make reminders for important events - sent through WhatsApp
* Vaccination certificate and report management - at a glance

### CortX has a vareity of error-correction methods and general QOL features
- JWT auth validation
- Data encryption - passwords, files, tests
- Secure cookies
- Error detection and response


## Tech Stack
- The site uses [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) as the web server environment and web framework respectively.
- We used [React](https://reactjs.org/) as our web framework to finally display all of our data.
- [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/) and [bcrypt](https://www.npmjs.com/package/bcrypt), along with [JSON Web Token (JWT)](https://www.npmjs.com/package/jsonwebtoken) are used to store and validator users.
- [Multer](https://www.npmjs.com/package/multer) is used for file uploads to the database.
- [Tesseract.js](https://www.npmjs.com/package/tesseract.js/v/2.1.1) is used for OCR recognition of reports for the Corto Companion.
- And a lot of other miscellaneous libraries and packages that helped us build the site
