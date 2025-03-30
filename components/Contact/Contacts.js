const Contacts = () => {
  return (
    <div className="main-contact-area pb-100">
      <div className="contact-info">
        <h3>Մեր կոնտակտային տվյալները</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>

        <ul className="address">
          <li className="location">
            <i className="bx bxs-location-plus"></i>
            <span>Հասցե</span>
            6890 Blvd, The Bronx, NY 1058 New York, USA
          </li>
          <li>
            <i className="bx bxs-phone-call"></i>
            <span>Հեռախոս</span>
            <a href="tel:+1-(514)-312-5678">+1 (514) 312-5678</a>
            <a href="tel:+1-(514)-312-6677">+1 (514) 312-6677</a>
          </li>
          <li>
            <i className="bx bxs-envelope"></i>
            <span>Էլ հասցե</span>
            <a href="mailto:info@techhub.am">info@techub.am</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
