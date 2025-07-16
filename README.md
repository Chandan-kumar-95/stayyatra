StayYatra

StayYatra is a modern hotel and travel listing web application that allows users to explore beautiful places, post listings with images, and view them on interactive maps.

Demo
 [https://stayyatra-2.onrender.com/listings](https://stayyatra-2.onrender.com/listings)

---

Features

- User-friendly interface with responsive design
- Location-based listings using **Mapbox**
- Image uploads handled by **Cloudinary**
- Form validation using **Joi**
- Organized project structure (MVC pattern)
- File upload with **Multer**
- Clean code and well-commented for better readability

---
Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS Templates, Bootstrap
- **Database:** MongoDB with Mongoose
- **Other Services:** Cloudinary, Mapbox
- **Validation:** Joi
- **Hosting:** Render

Installation & Setup

```bash
# Clone the repo
git clone https://github.com/Chandan-kumar-95/stayyatra.git

# Go to project folder
cd stayyatra

# Install dependencies
npm install

Create a .env file in the root folder and add the following
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret

MAPBOX_TOKEN=your_mapbox_token

DB_URL=your_mongodb_connection_url

SECRET=your_session_secret

Running the App
node app.js


Author
Chandan Kumar
Github
https://github.com/Chandan-kumar-95/
