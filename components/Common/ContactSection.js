import GoogleMap from '../Contact/GoogleMap';
import Contacts from '../Contact/Contacts';

const ContactSection = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-item">
        <GoogleMap />
      </div>
      <div className="contact-item">
        <Contacts />
      </div>
    </div>
  );
};

export default ContactSection;
