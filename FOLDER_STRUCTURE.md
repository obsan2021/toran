# Toran Burger - Folder Structure Guide

## 📁 Project Organization

### `/public` - Frontend (Client-Side)
All customer-facing files and assets go here.
- **HTML Pages**: `index.html`, `menu.html`, `order.html`, `receipt.html`
- **CSS**: Stylesheets in `/css`
- **JavaScript**: Client-side logic in `/js`
- **Images**: Store all images in `/images`
  - Menu items → `/images/menu/`
  - Logos/branding → `/images/logos/`

### `/backend` - Server-Side Code
The backend API and business logic.
- **config/**: Database connection, environment config
- **routes/**: API endpoints (menu, orders, payments, receipts)
- **controllers/**: Business logic for each route
- **models/**: Data models and database queries
- **middleware/**: Authentication, validation, error handling

### `/database` - Database Management
- **migrations/**: SQL files for creating tables and schema
- **seeds/**: Sample data for development testing

## 🎯 Ready for These Features

### Payment Integration
- Stripe/PayPal route files ready in `/backend/routes`
- Payment model structure in database migrations

### Order History
- Orders and order_items tables designed
- Controllers ready to implement history retrieval

### Receipt Management
- Receipts table for storing receipt data
- Structure supports PDF generation and email sending

### Real Images
- `/public/images/menu/` folder for product photos
- Easy to update image paths in database

## 📋 Next Steps

1. **Move existing CSS** to `/public/css/`
2. **Move logo** to `/public/images/logos/`
3. **Update HTML links** to reference new paths
4. **Create Node backend** using `server.js` template
5. **Set up database** using migration files
6. **Implement API routes** in `/backend/routes`
