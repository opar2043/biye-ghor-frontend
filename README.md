README.md:

# Matrimony

A modern matchmaking platform for Bangladesh built with Next.js, React, and Node.js/Express.

---

## 📋 Project Overview

Matrimony is a full-stack web application designed to help people in Bangladesh find suitable life partners. The platform allows users to browse applicant profiles, filter by gender, division, and district, and submit complaints or contact requests.

### 🔐 Test Login Credentials

| Field        | Value            |
| ------------ | ---------------- |
| **Email**    | `ollo@gmail.com` |
| **Password** | `12345678`       |

---

## 🚀 Features

- **Advanced Profile Filtering** — Filter applicants by gender, division, and district
- **Responsive UI** — Built with Next.js 14 and React for seamless experience across devices
- **Secure Authentication** — Firebase-based authentication with email/password
- **Admin Dashboard** — Full CRUD operations for managing applicants
- **User Management** — Role-based access (Admin, Moderator, User)
- **Complaint System** — Users can submit complaints regarding profiles
- **Contact Form** — Get in touch with the platform administrators
- **Dark/Light Theme** — Toggle between dark and light modes

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS + shadcn/ui
- **Authentication:** Firebase Auth
- **State Management:** React Context API
- **HTTP Client:** Axios

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT tokens
- **File Storage:** Cloudinary (for profile images)

---

## 📦 Installation

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Firebase project (for authentication)
- Cloudinary account (for image uploads)

### Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at `https://ollo-match.vercel.app/`

### Setup Backend

```bash
cd prisma-backend
cp env.example .env
# Configure your .env file with database URL, JWT secret, Firebase credentials, Cloudinary keys

npm install
npx prisma generate
npx prisma migrate dev
npm run dev:server
```

The backend will run at `http://localhost:3001`

---

## 📁 Project Structure

```
Matrimony/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/            # App router pages
│   │   │   ├── (auth)/     # Login/Register pages
│   │   │   ├── (DashboardLayout)/  # Admin dashboard
│   │   │   ├── (publicLayout)/     # Public pages
│   │   │   └── components/ # Reusable components
│   │   └── Service/        # API service layers
│   └── public/             # Static assets
│
├── prisma-backend/         # Express.js backend API
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── services/      # Business logic
│   │   ├── routes/        # API route definitions
│   │   ├── middlewares/   # Custom middleware
│   │   └── config/        # Configuration files
│   └── prisma/             # Database schema
│
└── backend/                # Legacy backend (Vercel)
```

---

## 🔗 API Endpoints

### User Routes

- `POST /api/users/register` — Register new user
- `POST /api/users/login` — User login
- `GET /api/users` — Get all users (admin)

### Profile Routes

- `GET /api/profiles` — Get all profiles with filters
- `GET /api/profiles/:id` — Get single profile
- `POST /api/profiles` — Create profile (admin)
- `PUT /api/profiles/:id` — Update profile (admin)
- `DELETE /api/profiles/:id` — Delete profile (admin)

### Complaint Routes

- `POST /api/complaints` — Submit complaint
- `GET /api/complaints` — Get all complaints (admin)

### Dashboard Routes

- `GET /api/dashboard/stats` — Get dashboard statistics

---

## 📄 License

MIT License
