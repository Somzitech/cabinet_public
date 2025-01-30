export default function Footer() {
    return (
      <footer className="bg-dark text-white mt-5 py-3">
        <div className="container text-center">
          &copy; {new Date().getFullYear()} Medical Services. All rights reserved.
        </div>
      </footer>
    );
  }
  