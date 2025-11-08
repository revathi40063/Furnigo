# FurniGo - Furniture Rental Platform

A responsive React.js frontend for a furniture rental platform with routing using React Router.

## Features

- 🏠 **Home Page** - Hero section with featured furniture cards
- 🔍 **Browse Page** - Grid layout with filters for category and price
- 📝 **List Furniture** - Form to list your furniture for rent
- 📦 **My Rentals** - Manage your furniture listings and rentals
- 🔐 **Login/Signup** - Authentication forms connected to backend
- 📱 **Responsive Design** - Works on all screen sizes

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
FurniGo/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Browse.js
│   │   ├── Browse.css
│   │   ├── ListFurniture.js
│   │   ├── ListFurniture.css
│   │   ├── MyRentals.js
│   │   ├── MyRentals.css
│   │   ├── Login.js
│   │   └── Login.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Design Features

- **Green Accent Color**: #16A34A
- **Rounded Cards**: Modern card design with hover effects
- **White Background**: Clean and minimalist
- **Responsive**: Mobile-first approach with breakpoints

## Pages

1. **Home** (`/`) - Landing page with hero section and featured items
2. **Browse** (`/browse`) - Browse all furniture with filters
3. **List** (`/list`) - List your furniture for rent
4. **My Rentals** (`/my-rentals`) - View your listings and rentals
5. **Login** (`/login`) - Login and signup forms

## Backend Integration

The application is ready for backend integration. Update the API endpoints in:
- `MyRentals.js` - Fetch user rentals
- `Login.js` - Authentication endpoints
- `ListFurniture.js` - Submit furniture listings
- `Browse.js` - Add to cart functionality

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## License

MIT
