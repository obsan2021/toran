# Toran Burger - Restaurant Ordering System

A modern restaurant ordering system with payment integration, order tracking, and receipt management.

## Project Structure

```
toran/
├── public/                      # Frontend assets
│   ├── index.html              # Homepage
│   ├── menu.html               # Menu page
│   ├── order.html              # Order page
│   ├── receipt.html            # Receipt page
│   ├── css/                    # Stylesheets
│   ├── js/                     # Client-side JavaScript
│   └── images/                 # Images and media
│       ├── menu/               # Food item images
│       └── logos/              # Brand logos
│
├── backend/                    # Server-side code
│   ├── config/                 # Configuration files
│   ├── routes/                 # API endpoints
│   ├── controllers/            # Business logic
│   ├── models/                 # Data models
│   └── middleware/             # Express middleware
│
├── database/                   # Database setup
│   ├── migrations/             # SQL migrations
│   └── seeds/                  # Sample data
│
├── package.json                # Node dependencies
├── server.js                   # Main server file
├── .env.example                # Environment template
└── README.md                   # This file
```

## Setup Instructions

### Frontend
- HTML files are in `/public`
- CSS should be placed in `/public/css`
- JavaScript in `/public/js`
- Images in `/public/images`

### Backend
- Install dependencies: `npm install`
- Configure `.env` file with your settings
- Run server: `npm start`

### Database
- Place migrations in `/database/migrations`
- Create schema for: users, menu items, orders, payments, receipts

## Features to Implement
- [ ] Payment Gateway Integration (Stripe/PayPal)
- [ ] Order History Database
- [ ] Receipt Generation & Download
- [ ] Real Product Images
- [ ] Order Status Tracking
- [ ] Admin Dashboard
