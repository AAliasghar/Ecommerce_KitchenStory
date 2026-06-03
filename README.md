# 🍽️ KitchenStory - E-Commerce Platform

A full-stack e-commerce application for kitchen products built with **Angular** frontend, **Spring Boot** backend, and **Java database** support. KitchenStory provides a seamless shopping experience for browsing and discovering quality kitchen items.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Project Overview

KitchenStory is a modern e-commerce platform specializing in kitchen products. The application provides an intuitive interface for customers to:
- Browse kitchen products by category
- View detailed product information
- Search for specific products
- Manage shopping cart
- Track order details

The project follows a clean **three-tier architecture** with separate database, backend, and frontend layers.

---

## 🛠 Tech Stack

### Frontend (37.8% TypeScript)
- **Framework**: Angular 15
- **Language**: TypeScript
- **Styling**: CSS (36.7%), HTML (13.6%)
- **Build Tool**: Angular CLI
- **HTTP Client**: HttpClientModule

### Backend (11.9% Java)
- **Framework**: Spring Boot
- **Language**: Java
- **Architecture**: RESTful API
- **Package**: `com.simplilearn.ecommerce`

### Database
- **Location**: `01-DB` directory
- **Support**: Java-based database configuration

---

## 📁 Project Structure

```
Ecommerce_KitchenStory/
├── 01-DB/                          # Database configuration & schemas
├── 02-backend/                     # Spring Boot backend application
│   └── spring-boot-ecommerce/
│       └── src/
│           └── main/
│               └── java/
│                   └── com/simplilearn/ecommerce/
│                       └── SpringBootEcommerceApplication.java
├── 03-frontend/                    # Angular frontend application
│   └── Angular-ecommerce/
│       ├── src/
│       │   ├── app/
│       │   │   ├── components/
│       │   │   │   ├── product-list/
│       │   │   │   ├── product-details/
│       │   │   │   ├── product-category-menu/
│       │   │   │   ├── cart-status/
│       │   │   │   ├── cart-details/
│       │   │   │   └── search/
│       │   │   ├── services/
│       │   │   │   └── product.service.ts
│       │   │   ├── common/
│       │   │   │   └── product.ts
│       │   │   └── app.module.ts
│       │   ├── index.html
│       │   └── styles.css
│       └── package.json
└── README.md                       # This file
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (v6 or higher) - Comes with Node.js
- **Java Development Kit (JDK)** (v11 or higher) - [Download](https://www.oracle.com/java/technologies/downloads/)
- **Maven** (v3.6 or higher) - [Download](https://maven.apache.org/)
- **Angular CLI** (v15) - Install globally: `npm install -g @angular/cli@15`
- **Git** - [Download](https://git-scm.com/)

---

## 🚀 Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/AAliasghar/Ecommerce_KitchenStory.git
cd Ecommerce_KitchenStory
```

### Database Setup (01-DB)

1. Navigate to the database directory:
   ```bash
   cd 01-DB
   ```

2. Follow the database configuration files to set up your database
3. Import any provided SQL schemas if available

### Backend Setup (02-backend)

1. Navigate to the backend directory:
   ```bash
   cd 02-backend/spring-boot-ecommerce
   ```

2. Install Maven dependencies:
   ```bash
   mvn clean install
   ```

3. Configure application properties (if `application.properties` or `application.yml` exists):
   - Update database connection details
   - Configure server port (default: 8080)

4. Build the Spring Boot application:
   ```bash
   mvn clean package
   ```

### Frontend Setup (03-frontend)

1. Navigate to the frontend directory:
   ```bash
   cd 03-frontend/Angular-ecommerce
   ```

2. Install npm dependencies:
   ```bash
   npm install
   ```

3. Build the Angular project (optional):
   ```bash
   ng build
   ```

---

## ▶️ Running the Application

### Start the Backend Server

From the `02-backend/spring-boot-ecommerce` directory:

```bash
mvn spring-boot:run
```

Or run the packaged JAR:
```bash
java -jar target/spring-boot-ecommerce.jar
```

The backend will start on `http://localhost:8080`

### Start the Frontend Development Server

From the `03-frontend/Angular-ecommerce` directory:

```bash
ng serve
```

Or:
```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

---

## ✨ Features

### Currently Implemented
- ✅ Product catalog with category filtering
- ✅ Product search functionality
- ✅ Product detail page
- ✅ Shopping cart management
- ✅ Cart status indicator
- ✅ Responsive design
- ✅ Product category menu

### Product Features
- View all kitchen products
- Filter by product category
- Search products by name
- View detailed product information with description and price
- Add/manage items in shopping cart
- Persistent cart status display

---

## 🔌 API Endpoints

### Product Service Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/{id}` | Get product by ID |
| GET | `/api/products/search/{name}` | Search products by name |
| GET | `/api/product-category` | Get all product categories |
| GET | `/api/products/category/{categoryId}` | Get products by category |

*Note: Adjust endpoints based on actual backend implementation*

---

## 🎨 Frontend Components

### Key Components

1. **ProductListComponent**
   - Displays list of kitchen products
   - Supports pagination and filtering
   - Shows product cards with image, name, and price

2. **ProductDetailsComponent**
   - Shows detailed information for a selected product
   - Displays product description and pricing
   - Provides back navigation to product list

3. **ProductCategoryMenuComponent**
   - Navigation menu for product categories
   - Fetches categories from ProductService
   - Enables category-based filtering

4. **SearchComponent**
   - Search bar for quick product lookup
   - Routes to search results page
   - Real-time search capability

5. **CartStatusComponent**
   - Displays current cart item count
   - Shows cart icon in navigation
   - Quick access to cart details

6. **CartDetailsComponent**
   - Shows full shopping cart contents
   - Item quantity management
   - Cart total calculation

### Services

**ProductService** (`src/app/services/product.service.ts`)
- `getProducts()` - Fetches all products
- `getProductCategories()` - Fetches all categories
- `getProduct(id)` - Fetches product by ID
- `searchProducts(keyword)` - Searches products by keyword

---

## 👨‍💻 Development

### Angular Development Commands

#### Generate New Component
```bash
ng generate component component-name
```

#### Generate New Service
```bash
ng generate service service-name
```

#### Run Unit Tests
```bash
ng test
```

#### Run End-to-End Tests
```bash
ng e2e
```

### Spring Boot Development Commands

#### Run with Maven
```bash
mvn spring-boot:run
```

#### View Logs
```bash
mvn spring-boot:run -Dlogging.level.com.simplilearn=DEBUG
```

---

## 📚 Project Standards

### Naming Conventions
- **Components**: Kebab-case filenames, PascalCase class names
- **Services**: Kebab-case filenames, PascalCase class names
- **Routes**: Lowercase with forward slashes

### File Organization
```
component-name/
├── component-name.component.ts
├── component-name.component.html
├── component-name.component.css
└── component-name.component.spec.ts
```

---

## 🐛 Troubleshooting

### Common Issues

**Port 4200 already in use (Angular)**
```bash
ng serve --port 4201
```

**Port 8080 already in use (Spring Boot)**
Update `application.properties`:
```properties
server.port=8081
```

**CORS Issues**
Ensure backend has CORS configuration for `http://localhost:4200`

**Dependency Issues**
- Clear Angular cache: `rm -rf node_modules` then `npm install`
- Clear Maven cache: `mvn clean`

---

## 📝 Git Workflow

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes and commit
git add .
git commit -m "feat: describe your changes"

# Push to remote
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📧 Contact & Support

For questions, issues, or suggestions:
- GitHub Issues: [Create an issue](https://github.com/AAliasghar/Ecommerce_KitchenStory/issues)
- Author: [AAliasghar](https://github.com/AAliasghar)

---

## 🚀 Future Enhancements

- [ ] User authentication and authorization
- [ ] Order management system
- [ ] Payment gateway integration
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Advanced filtering options
- [ ] Product inventory management
- [ ] Mobile app version

---

## 📊 Project Statistics

- **Language Composition**: 
  - TypeScript: 37.8%
  - CSS: 36.7%
  - HTML: 13.6%
  - Java: 11.9%

- **Repository**: [AAliasghar/Ecommerce_KitchenStory](https://github.com/AAliasghar/Ecommerce_KitchenStory)
- **Created**: December 19, 2022
- **Last Updated**: March 20, 2026

---

**Happy Coding! 🎉**
