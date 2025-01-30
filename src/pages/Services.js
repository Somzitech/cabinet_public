import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = [
    { title: "Medical Fitness Certification", description: "Work, travel, or fitness certifications." },
    { title: "Death Certification", description: "Legal assistance with death certificates." },
    { title: "Wound Care & Dressing", description: "Treatment for injuries and chronic wounds." },
    { title: "Prescription & Referrals", description: "Ongoing treatment or specialist referrals." },
  ];

  return (
    <div className="container main-container mt-4">
      <h2 className="mb-4">Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
}
