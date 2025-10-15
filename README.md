# 🏥 Healthcare Backend API

This is a **RESTful backend system** for a healthcare management application.  
It allows **patients, doctors, and admins** to register, log in, and manage records securely using **JWT-based authentication** and **MongoDB** as the database.

---

## 🚀 Features
- 👩‍⚕️ **Doctor Management:** Register, login, and manage doctor profiles.  
- 🧑‍⚕️ **Patient Management:** Register, login, and manage patient profiles.  
- 🔐 **JWT Authentication:** Secure login and token-based access control.  
- 🔗 **Patient–Doctor Mapping:** Assign and retrieve relationships between doctors and patients.  
- 🗄️ **MongoDB Database:** Data persistence with Mongoose models.  
- 🧰 **Express REST API:** Clean routing and middleware-based security.  

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-------------|
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose |
| Authentication | JWT (JSON Web Tokens) |
| Environment | dotenv |
| Password Hashing | bcrypt.js |

---

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/healthcare-backend.git
cd healthcare-backend
```
---
## ⚙️ Installation and Setup
2️⃣ Install Dependencies
```bash
npm install
```
---
3️⃣ Configure Environment Variables

Create a .env file in the project root:
```bash
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/healthcaredb
JWT_SECRET=your_jwt_secret_key
```
---

4️⃣ Run the Server
```bash
npm run dev
```
---
The backend will start at:
👉 http://localhost:5000

🔑 Authentication APIs
Method	Endpoint	Description
POST	/api/auth/register	Register a new user (patient/doctor/admin)
POST	/api/auth/login	Login and receive JWT token
---
🧑‍⚕️ Doctor APIs
Method	Endpoint	Description
GET	/api/doctors/	Get all doctors
GET	/api/doctors/:id	Get doctor by ID
POST	/api/doctors/	Create a new doctor
PUT	/api/doctors/:id	Update doctor
DELETE	/api/doctors/:id	Delete doctor
---
👩‍⚕️ Patient APIs
Method	Endpoint	Description
GET	/api/patients/	Get all patients
GET	/api/patients/:id	Get patient by ID
POST	/api/patients/	Create a new patient
PUT	/api/patients/:id	Update patient
DELETE	/api/patients/:id	Delete patient
---
🔗 Patient–Doctor Mapping APIs
Method	Endpoint	Description
POST	/api/mappings/	Assign a doctor to a patient
GET	/api/mappings/	Get all patient–doctor mappings
GET	/api/mappings/:patientId	Get doctors for a specific patient
DELETE	/api/mappings/:id	Remove doctor–patient mapping
---
🛡️ JWT Authentication

All protected routes require an Authorization Header:

Authorization: Bearer <your_jwt_token>


Tokens are generated during login and verified by authMiddleware.js.

🧪 Testing with Postman

Register a user (doctor/patient) → /api/auth/register

Login → get JWT token

Set token in Authorization Header

Access secure endpoints (doctor, patient, mapping)




