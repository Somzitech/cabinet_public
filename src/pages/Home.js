import { Link } from "react-router-dom";
import './Home.scss'
export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Dr. Nazim Subrottee's Clinic</h1>
          <p className="lead">
            Expert, compassionate care tailored to your health needs.
          </p>
          <Link to="/services" className="btn btn-light btn-lg mt-3">
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Professional Introduction */}
      <section className="introduction py-5">
        <div className="container intro text-center">
          <h2>About Dr. Nazim Subrottee</h2>
          <p className="text-muted">
          Dr. Nazim Subrottee is an expert physician with over 10 years of experience in patient-centered care. A graduate of the prestigious University of Cape Town, he specializes in personalized treatment plans to achieve optimal health outcomes, making him a trusted choice for exceptional healthcare.  </p>
          <img
            src="/assets/pictures/doc-1.jpg"
            alt="Dr. Nazim Subrottee"
            className="rounded-circle mt-4"
            width="150"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services bg-light py-5">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <p className="text-center text-muted mb-4">
            Explore a wide range of medical services tailored to your needs.
          </p>
          <div className="row">
            {[
              {
                title: "Home Visits",
                description:
                  "Convenient medical consultations at your home.",
                image: "/assets/pictures/home-visit.png",
              },
              {
                title: "Elderly Care",
                description:
                  "Specialized care designed for elderly patients.",
                image: "/assets/pictures/elderly-care.png",
              },
              {
                title: "Point-of-Care Tests",
                description:
                  "Quick and reliable tests for diabetes, cholesterol, and more.",
                image: "/assets/pictures/tests.png",
              },
            ].map((service, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="card shadow-sm">
                  <img
                    src={service.image}
                    className="card-img-top"
                    alt={service.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text text-muted">
                      {service.description}
                    </p>
                    <Link to="/services" className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Scheduling */}
      <section className="appointment py-5">
        <div className="container text-center">
          <h2>Book an Appointment</h2>
          <p className="text-muted">
            Schedule your visit with ease. Choose a date and time that works for
            you.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg mt-3">
            Schedule Now
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials bg-light py-5">
        <div className="container">
          <h2 className="text-center">What Our Patients Say</h2>
          <p className="text-center text-muted mb-4">
            Real stories from patients who have benefitted from our care.
          </p>
          <div className="row">
            {[
              {
                quote:
                  "Dr. Nazim Subrottee provided exceptional care and made me feel at ease. Highly recommend!",
                name: "Jane Smith",
              },
              {
                quote:
                  "The home visits were a lifesaver for our elderly parents. Thank you, Dr. Doe!",
                name: "Mark Johnson",
              },
              {
                quote:
                  "Compassionate and professional care every step of the way.",
                name: "Emily Davis",
              },
            ].map((testimonial, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p className="text-muted">"{testimonial.quote}"</p>
                      <footer className="blockquote-footer">
                        {testimonial.name}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="credentials py-5">
        <div className="container text-center">
          <h2>Credentials & Accreditations</h2>
          <p className="text-muted">
            Dr. Nazim Subrottee is a licensed practitioner with numerous certifications
            and awards in the field of medicine.
          </p>
          <ul className="list-inline mt-4">
            {["Certification A", "Award B", "Membership C"].map(
              (credential, index) => (
                <li className="list-inline-item mx-3" key={index}>
                  <span className="badge bg-secondary">{credential}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Blog/Health Tips Section */}
      <section className="blog bg-light py-5">
        <div className="container">
          <h2 className="text-center">Health Tips & Insights</h2>
          <p className="text-center text-muted mb-4">
            Stay informed with expert health tips and articles.
          </p>
          <div className="row">
            {[
              {
                title: "5 Tips for a Healthier Lifestyle",
                description:
                  "Simple and effective ways to improve your overall health.",
              },
              {
                title: "Understanding Diabetes",
                description: "Learn how to manage and prevent diabetes.",
              },
              {
                title: "The Importance of Regular Checkups",
                description:
                  "Why routine health checkups are key to early detection.",
              },
            ].map((article, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text text-muted">
                      {article.description}
                    </p>
                    <Link to="/blog" className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info py-5 bg-dark text-white text-center">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890 |{" "}
            <strong>Email:</strong> contact@medicalservices.com
          </p>
          <p>
            <strong>Address:</strong> 123 Medical Lane, City, Country
          </p>
          <Link to="/contact" className="btn btn-light mt-3">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
