# **ShoppyGlobe**

An intuitive and user-friendly e-commerce application designed to provide a seamless shopping experience. ShoppyGlobe allows users to browse products, add them to the cart, place orders, and manage their past orders efficiently.  

## **Features**
### 🛍️ **Core Features**
- **Product Catalog**: Browse through a wide selection of products, complete with images, descriptions, pricing, and availability.
- **Shopping Cart**: Add, update, or remove items in your cart with a live price calculation.
- **Order Placement**: Simple checkout process with form validation for customer details.
- **Order History**: View past orders with detailed itemized breakdowns.

### ⚙️ **Additional Features**
- **Lazy Loading**: Optimized page loading using `React.lazy` and `Suspense`.
- **State Management**: Powered by Redux for managing cart and order data.
- **Responsive Design**: Mobile-first, fully responsive design built with Tailwind CSS.
- **Custom Themes**: Dark mode with pastel accent colors for a modern, elegant UI.

## **Tech Stack**
### **Frontend**
- **React (Vite)**: Lightning-fast development and hot reloading.
- **Redux Toolkit**: Simplified state management with slices for cart and orders.
- **React Router**: Smooth navigation between pages.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### **Backend (Optional for Future Enhancements)**
- Currently using mock data with Redux for simplicity.
- Can be extended with a backend API for real-time data fetching.

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ShoppyGlobe.git
   cd ShoppyGlobe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

## **Usage**
1. **Browse Products**: Explore a wide variety of products.
2. **Add to Cart**: Select products and manage quantities in the cart.
3. **Checkout**: Place orders by providing your details (validated before submission).
4. **View Orders**: Navigate to the **My Orders** page to view previous orders or clear them.

## **Planned Improvements**
- Implement **mock authentication** for user-specific cart and orders.
- Integrate a backend for **real-time data fetching**.
- Add **payment gateway integration** for live order placement.

## **License**
This project is licensed under the MIT License.

