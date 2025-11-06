const features = [
  { title: "Amazing Design", text: "lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { title: "Copywriting", text: "lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { title: "Development", text: "lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { title: "24/7 Support", text: "lorem ipsum dolor sit amet consectetur adipisicing elit." },
];

function FeatureCard({ title, text }) {
  return (
    <div className="features-card">
      <span className="features-icon">✓</span>
      <div>
        <h3 className="features-card-title">{title}</h3>
        <p className="features-card-text">{text}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">
          We create super-awesome designs
        </h2>
        <p className="features-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed fugiat corrupti ratione eum nostrum architecto expedita maxime voluptas mollitia molestiae libero quam voluptate culpa eos dolorem, incidunt odio delectus?
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} text={feature.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
