# Dentify - Modern Dental Practice Management System

A comprehensive web application for managing dental practices, built with Next.js 15, TypeScript, and modern web technologies.

## Features

### 🔐 Authentication & User Management
- **User Registration & Login** - Secure authentication with NextAuth.js
- **Role-Based Access Control** - Four user roles: ADMIN, DENTIST, STAFF, PATIENT
- **Session Management** - JWT-based authentication
- **Password Security** - Bcrypt password hashing
- **Protected Routes** - Middleware-based route protection

### 👥 Patient Management
- Patient registration with comprehensive personal information
- Medical history tracking
- Allergy and medication records
- Insurance information management
- Emergency contact details
- Quick patient search and filtering

### 📅 Appointment System
- Appointment booking and scheduling
- Real-time availability checking
- Appointment status management (Pending, Confirmed, Completed, Cancelled)
- Calendar view for appointments
- Easy rescheduling and cancellation
- Appointment reminders (Email notifications)

### 👨‍⚕️ Dentist/Staff Features
- Dedicated dashboard for dentists and staff
- Daily and weekly appointment views
- Patient details and medical history access
- Appointment management (approve/reject/complete)
- Treatment notes and documentation

### ⚙️ Admin Panel
- Admin dashboard with practice metrics
- User account management
- Role assignment and permissions
- Practice settings configuration
- Appointment settings (working hours, slot duration)
- System-wide oversight

### 📄 Public Pages
- Landing page with feature highlights
- About page with mission and benefits
- Services page detailing platform features
- Contact page with inquiry form

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI component library
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma ORM** - Type-safe database ORM
- **PostgreSQL** - Relational database
- **NextAuth.js v5** - Authentication solution
- **bcryptjs** - Password hashing

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud-hosted)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ignatius22/Dentify.git
   cd Dentify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/dentify?schema=public"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here-generate-with-openssl-rand-base64-32"

   # Email (Resend)
   RESEND_API_KEY="your-resend-api-key"
   EMAIL_FROM="noreply@yourdomain.com"
   ```

4. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

5. **Run database migrations**
   ```bash
   npx prisma db push
   ```

6. **Seed the database (optional)**
   ```bash
   npx prisma db seed
   ```

7. **Start the development server**
   ```bash
   npm run dev
   ```

8. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Schema

### User Model
- User authentication and profile information
- Role-based access (ADMIN, DENTIST, STAFF, PATIENT)
- One-to-one relationships with Patient and Dentist models

### Patient Model
- Personal information (name, DOB, contact details)
- Medical history, allergies, medications
- Insurance information
- Emergency contacts
- One-to-many relationship with Appointments and TreatmentNotes

### Dentist Model
- Professional information
- Specialty and license details
- One-to-many relationship with Appointments and TreatmentNotes

### Appointment Model
- Appointment scheduling information
- Status tracking (PENDING, CONFIRMED, COMPLETED, CANCELLED)
- Links patients with dentists
- One-to-many relationship with TreatmentNotes

### TreatmentNote Model
- Diagnosis and treatment documentation
- Prescription records
- Links to appointments, patients, and dentists

### PracticeSettings Model
- Practice-wide configuration
- Working hours and appointment slot duration

## Project Structure

```
dentify/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── error/
│   │   ├── dashboard/         # Protected dashboard
│   │   ├── about/             # Public pages
│   │   ├── services/
│   │   ├── contact/
│   │   ├── api/               # API routes
│   │   │   └── auth/
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Landing page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   └── ui/                # Reusable UI components
│   ├── lib/
│   │   ├── auth.ts            # NextAuth configuration
│   │   ├── prisma.ts          # Prisma client
│   │   └── utils.ts           # Utility functions
│   ├── types/                 # TypeScript type definitions
│   └── middleware.ts          # Route protection middleware
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
├── .env.example               # Environment variables template
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Authentication Flow

1. **Registration**: Users create an account with email and password
2. **Login**: Credentials are verified against hashed passwords in the database
3. **Session**: JWT tokens are generated and stored in secure HTTP-only cookies
4. **Authorization**: Middleware checks user role and protects routes accordingly
5. **Logout**: Session tokens are cleared and user is redirected

## Role-Based Access

- **PATIENT**: Access to personal appointments, medical records, and booking
- **DENTIST/STAFF**: Access to patient management, appointments, and treatment notes
- **ADMIN**: Full access to all features, user management, and practice settings

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

### Environment Variables for Production

Ensure all environment variables from `.env.example` are configured in your deployment platform.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security Considerations

- All passwords are hashed using bcrypt
- JWT tokens are stored in HTTP-only cookies
- Role-based middleware protects sensitive routes
- Input validation using Zod schemas
- SQL injection protection via Prisma ORM

## Future Enhancements

- [ ] Email notifications for appointments
- [ ] SMS reminders
- [ ] Payment processing integration
- [ ] Advanced reporting and analytics
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Video consultation integration
- [ ] Document upload and management
- [ ] Billing and invoicing system

## License

This project is licensed under the MIT License.

## Support

For support, email support@dentify.com or open an issue in the GitHub repository.

## Acknowledgments

- Next.js team for the amazing framework
- shadcn for the beautiful UI components
- Prisma team for the excellent ORM
- NextAuth.js for authentication solution
