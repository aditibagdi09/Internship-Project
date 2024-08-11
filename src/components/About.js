import React from 'react';

const styles = {
  aboutContainer: {
    margin: '50px auto',
    padding: '40px',
    maxWidth: '800px',
    backgroundColor: '#f7f9fc',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  aboutTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#2c3e50',
    margin: '0 0 15px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  aboutSubtitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#16a085',
    margin: '0 0 25px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  aboutDescription: {
    fontSize: '18px',
    lineHeight: '1.7',
    color: '#34495e',
    margin: '0 0 20px',
  }
};

export default function About() {
  return (
    <div style={styles.aboutContainer}>
      <h2 style={styles.aboutTitle}>Effortless & Secure Email Delivery...</h2>
      
      <h3 style={styles.aboutSubtitle}>Mailzy</h3>
      <p style={styles.aboutDescription}>
        Experience the future of email with Mailzy—your go-to solution for fast, secure, and reliable email delivery. With our sleek and intuitive interface, sending emails to multiple recipients is as easy as 1-2-3. Say goodbye to complicated processes and hello to seamless communication, all in just a few clicks. Join us and make your email experience smarter, faster, and safer with Mailzy.
      </p>
    </div>
  );
}
