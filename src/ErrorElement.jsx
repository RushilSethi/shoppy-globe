import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-container text-primary">
      <div className="text-center space-y-6 p-8 rounded-lg shadow-lg bg-background max-w-md">
        <h1 className="text-3xl font-bold text-accentPrimary">Oops!</h1>
        <p className="text-lg text-secondary">
          Something went wrong. The page you are looking for doesn’t exist or an
          error occurred while processing your request.
        </p>

        <button className="px-4 py-2 bg-accentPrimary text-background rounded-md border-2 border-accentPrimary hover:bg-background hover:text-accentPrimary duration-200 ease-in">
          <Link to="/">Return to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorElement;
