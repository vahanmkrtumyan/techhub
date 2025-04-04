const Contacts = () => {
  return (
    <div className="main-contact-area pb-100">
      <div className="contact-info">
        <h3>Մեր կոնտակտային տվյալները</h3>

        <ul className="address">
          <li className="location">
            <i className="bx bxs-location-plus"></i>
            <span>Հասցե</span>
            Մարգարյան 2/4
          </li>
          <li>
            <i className="bx bxs-phone-call"></i>
            <span>Հեռախոս</span>
            <a href="tel:+37444888373">+374 44 888373</a>
          </li>
          <li>
            <i className="bx bxs-envelope"></i>
            <span>Էլ հասցե</span>
            <a href="mailto:info@techhub.am">info@techhub.am</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
