import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
import baseUrl from '../../utils/baseUrl';
import GoogleMap from '../Contact/GoogleMap';
import Contacts from '../Contact/Contacts';

const ContactSection = () => {
  return (
    <div className="contact-section">
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
