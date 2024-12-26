import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary space-y-6">
      <h1 className="text-4xl font-bold">Product Not Found</h1>
      <p className="text-lg text-secondary text-center px-6">
        The product you are looking for does not exist or no product was
        selected. Please choose a valid product or return to the main page.
      </p>
      <Link
        to="/"
        className="bg-accentPrimary text-background py-2 px-6 rounded-md text-lg font-medium box-border border-2 border-accentPrimary duration-200 ease-in hover:text-accentPrimary hover:bg-container"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
