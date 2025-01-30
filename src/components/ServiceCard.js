export default function ServiceCard({ title, description }) {
    return (
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    );
  }
  