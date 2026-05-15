# 🚀 DhanSetu

> A production-style MERN-based trading & portfolio management platform featuring independent frontend applications, secure authentication, simulated market trading, portfolio analytics, and scalable backend architecture.

---

<img width="1089" height="699" alt="Screenshot 2026-05-16 003206" src="https://github.com/user-attachments/assets/df59eadc-691a-4677-8c53-62803d9540f6" />


# 📌 Overview

DhanSetu is a full-stack trading simulation platform inspired by modern stock trading applications such as Zerodha and Groww (Basically a Zerodha Clone).

The project follows a **multi-application deployment architecture** where:

* the public frontend,
* authenticated dashboard,
* and backend API

are deployed independently for better scalability, maintainability, and separation of concerns.

The platform allows users to:

* securely register using OTP verification
* authenticate using JWT tokens
* manage holdings & positions
* execute simulated buy/sell trades
* visualize portfolio analytics
* experience a realistic trading dashboard

---

# 🏗️ Deployment Architecture

DhanSetu is deployed as **three independent applications**.

| Application | Type            | Responsibility                        |
| ----------- | --------------- | ------------------------------------- |
| Frontend    | React App       | Public landing pages & authentication |
| Dashboard   | React App       | Authenticated trading dashboard       |
| Backend API | Node.js/Express | REST APIs, business logic & database  |

---

# 🌐 Application Flow

```text
Public Frontend
      ↓
Authentication APIs
      ↓
Backend Server
      ↓
JWT Token Generation
      ↓
Dashboard Application
      ↓
Secure Trading APIs
```

---

# ✨ Features

## 🔐 Authentication & Security

* JWT-based authentication
* OTP email verification
* Protected APIs
* Password hashing using bcryptjs
* Secure route authorization

---

## 📈 Trading Features

* Simulated stock trading
* Holdings management
* Position tracking
* Average buy price calculation
* Portfolio analytics
* Order history management

---

## 📊 Dashboard Features

* Portfolio overview
* Holdings & positions panels
* Trading interface
* Interactive analytics
* Portfolio performance visualization

---

## ⚙️ Architecture Features

* MVC backend architecture
* Service-oriented backend design
* REST API communication
* React Context state management
* Modular scalable structure
* Independent deployment strategy

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Axios
* Context API
* Bootstrap / CSS

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## Security

* JWT Authentication
* bcryptjs
* OTP Verification

---

# 🖥️ Frontend Applications

The frontend layer is divided into two independent React applications.

---

# 🌐 Public Frontend (Unauthenticated)

Handles:

* landing pages
* marketing pages
* signup/login
* OTP verification

---

## Entry Point

```bash
frontend/src/index.js
```

---

## Authentication Workflow

```text
User
 → Enter Email
 → Receive OTP
 → Verify OTP
 → Create Account
 → JWT Token Generated
 → Redirect to Dashboard
```

<img width="1089" height="701" alt="Screenshot 2026-05-16 010133" src="https://github.com/user-attachments/assets/c86efedb-e0a8-48fd-a13b-d83483a5ddaa" />

---

## Public API Client

```bash
frontend/src/api/api.js
```

Handles:

* sendOtp()
* verifyOtp()
* signup()
* login()

---

# 📊 Dashboard Application (Authenticated)

The Dashboard Application is the secure trading environment where authenticated users manage portfolios and execute trades.

---

## Responsibilities

* portfolio management
* holdings tracking
* positions tracking
* buy/sell execution
* analytics visualization
* dashboard state management

---

## Entry Point

```bash
dashboard/src/index.js
```

---

## Dashboard Components

| Component            | Purpose                   |
| -------------------- | ------------------------- |
| Shell UI             | Navbar, Sidebar, Layout   |
| Trading Modules      | Portfolio & trading views |
| Graph Visualization  | Analytics & charts        |
| Dashboard API Client | Backend communication     |
| GeneralContext       | Global state management   |

---

## State Management

### File

```bash
GeneralContext.js
```

Stores:

* authentication state
* holdings
* positions
* portfolio balances
* dashboard updates

---

## Dashboard Flow

```text
Dashboard App
    ↓
Dashboard API Client
    ↓
Backend API
    ↓
Controllers & Services
    ↓
MongoDB
```

<img width="1116" height="673" alt="Screenshot 2026-05-16 011003" src="https://github.com/user-attachments/assets/f3f7347c-1c69-4335-9e11-a5414d142e37" />

---

# ⚙️ Backend Architecture

The backend follows:

* MVC Architecture
* Service-Oriented Design
* REST API Architecture

---

# 🛣️ Routing Layer

## Main Server

```bash
backend/index.js
```

Responsible for:

* middleware configuration
* route mounting
* CORS setup
* request parsing

---

# 🔐 Authentication Routes

### Base Route

```text
/api/auth
```

### File

```bash
AuthRoute.js
```

Endpoints:

```bash
/api/auth/send-otp
/api/auth/verify-otp
/api/auth/signup
/api/auth/login
```

---

# 📥 Get Routes

### File

```bash
GetRoute.js
```

Endpoints:

```bash
/api/auth/allHoldings
/api/auth/allPositions
/api/auth/allOrders
/api/auth/userId
```

Protected using:

```bash
AuthMiddleware.js
```

---

# 📤 Post Routes

### File

```bash
PostRoute.js
```

Endpoints:

```bash
/api/auth/newOrders
```

Protected using:

```bash
AuthMiddleware.js
```

---

# 🧩 Controllers & Middleware

## AuthController.js

Handles:

* user authentication
* JWT creation
* password hashing

---

## OtpController.js

Handles:

* OTP generation
* OTP verification
* email dispatch

---

## AuthMiddleware.js

Handles:

* JWT verification
* protected routes
* user session validation

---

## GetController.js & PostController.js

Responsible for:

* validating requests
* interacting with services
* returning API responses

---

# 🧠 Business Logic & Services

## HoldingsService.js

Responsible for:

* holdings aggregation
* average buy calculations
* portfolio tracking

---

## PositionService.js

Responsible for:

* active positions
* open trade tracking

---

## PriceEngine.js

A simulated market engine responsible for:

* randomized market fluctuations
* portfolio valuation
* simulated P&L calculations

> ⚠️ The current platform uses simulated pricing and does not yet integrate real-time stock APIs.

---

# 🗄️ Database Models

## UserModel

| Field     | Type   |
| --------- | ------ |
| email     | String |
| username  | String |
| password  | String |
| createdAt | Date   |

---

## OtpModel

| Field     | Type   |
| --------- | ------ |
| email     | String |
| otp       | String |
| expiresAt | Date   |

---

## OrdersModel

| Field  | Type     |
| ------ | -------- |
| userId | ObjectId |
| ticker | String   |
| qty    | Number   |
| price  | Number   |
| type   | Buy/Sell |

---

## HoldingsModel

| Field  | Type     |
| ------ | -------- |
| userId | ObjectId |
| ticker | String   |
| avg    | Number   |
| qty    | Number   |

---

## PositionsModel

| Field  | Type     |
| ------ | -------- |
| userId | ObjectId |
| ticker | String   |
| qty    | Number   |
| pnl    | Number   |

---

# 🔄 Application Workflows

# 🔐 Authentication Workflow

```text
User
 → Send OTP
 → Verify OTP
 → Signup/Login
 → JWT Token
 → Dashboard Access
```

---

# 📈 Portfolio Workflow

```text
Dashboard
 → Fetch Holdings
 → Fetch Positions
 → Fetch Orders
 → Generate Analytics
 → Render Dashboard
```

---

# 💹 Trading Workflow

```text
User Places Trade
 → POST /newOrders
 → Controller Validation
 → Order Stored
 → Holdings Updated
 → Portfolio Refreshed
```

---

# 🔌 API Endpoints

## 🔐 Authentication APIs

| Method | Endpoint               | Description       |
| ------ | ---------------------- | ----------------- |
| POST   | `/api/auth/send-otp`   | Send OTP to email |
| POST   | `/api/auth/verify-otp` | Verify OTP        |
| POST   | `/api/auth/signup`     | Create account    |
| POST   | `/api/auth/login`      | User login        |

---

## 📥 Portfolio APIs

| Method | Endpoint        | Description                 |
| ------ | --------------- | --------------------------- |
| GET    | `/api/auth/allHoldings`  | Fetch user holdings         |
| GET    | `/api/auth/allPositions` | Fetch user positions        |
| GET    | `/api/auth/allOrders`    | Fetch user orders           |
| GET    | `/api/auth/userId`       | Fetch authenticated user ID |

---

## 📤 Trading APIs

| Method | Endpoint     | Description          |
| ------ | ------------ | -------------------- |
| POST   | `/api/auth/newOrders` | Place buy/sell order |

---

# 📂 Project Structure

## Frontend

```bash
frontend/
├── src/
│   ├── api/
│   ├── landing-page/
│   ├── index.js
│   └── Login.js
```

---

## Dashboard

```bash
dashboard/
├── src/
│   ├── api/
│   ├── components/
│   ├── data/
│   └── index.js
```

---

## Backend

```bash
backend/
├── controllers/
├── middleware/
├── models/
├── public/
├── routes/
├── services/
├── util/
└── index.js
```

---

# 🚀 Installation & Setup

## Clone Repository

```bash
git clone <repository-url>
```

---

# Install Dependencies

## Frontend

```bash
cd frontend
npm install
```

---

## Dashboard

```bash
cd dashboard
npm install
```

---

## Backend

```bash
cd backend
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside backend:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
EMAIL=your_email
EMAIL_PASSWORD=your_password
```

---

# ▶️ Run Applications

## Frontend

```bash
npm start
```

---

## Dashboard

```bash
npm start
```

---

## Backend

```bash
npm start
```

---

# 📊 Simulated Price Engine

The platform currently uses a simulated market engine instead of live stock APIs.

Features:

* randomized market fluctuations
* portfolio value calculations
* simulated P&L analytics

Future upgrades may include:

* real-time stock APIs
* WebSocket live market feeds
* live ticker updates

---

# 🔒 Security Features

* JWT Authentication
* OTP Verification
* Protected APIs
* Password Hashing
* Auth Middleware

---

# 📚 Documentation

<img width="1508" height="1796" alt="diagram (1)" src="https://github.com/user-attachments/assets/9193fed3-45cf-4ccb-91d9-e98049b21656" />

Additional technical documentation can be stored inside:

```text
/docs
```

Examples:

* ER Diagram
* DFD
* Workflow Diagrams
* Sequence Diagrams
* Architecture Diagrams

---

# 🚀 Future Enhancements

* Real-time stock APIs
* WebSocket live updates
* Redis caching
* AI-powered analytics
* Notification system
* Mobile application
* Advanced trading engine

---

# 👨‍💻 Author

## Rishabh Shankar Prasad

* MERN Stack Developer
* Full-Stack Enthusiast
* Former Vice President of TheDevLoopers

---

# ⭐ Conclusion

DhanSetu demonstrates a scalable MERN-stack trading platform architecture with secure authentication, modular backend services, portfolio management, and simulated market behavior.

The project reflects:

* production-style architecture
* real-world full-stack practices
* scalable frontend/backend separation
* secure authentication workflows
* service-oriented backend design

---

# 🌟 Show Your Support

If you like this project, consider giving it a ⭐ on GitHub.

