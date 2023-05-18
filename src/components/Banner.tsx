export default function Banner() {
  return (
    <section className="landing">
      <div className="landing-text">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a href="#url-shorten-form" className="btn btn-lg">
          Get Started ⚡
        </a>
      </div>
      <div className="landing-image">
        <img
          src="https://elements-cover-images-0.imgix.net/6e855666-1764-4019-be9e-998505bd3fdf?auto=compress%2Cformat&fit=max&w=900&s=4f4ecf1eb453e7d6cafb101dc8965218"
          alt="Working Illustration"
        />
      </div>
    </section>
  );
}
