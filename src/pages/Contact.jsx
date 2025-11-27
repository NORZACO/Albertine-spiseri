// Contact.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center py-5"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, #0ff3 0%, transparent 40%), #0a0f14",
      }}
    >
      <div className="container">

        <div
          className="p-5 rounded-4 text-light mx-auto"
          style={{
            maxWidth: "720px",
            background: "linear-gradient(135deg, #111827cc, #1f2937dd)",
            border: "1px solid rgba(0,255,255,0.15)",
            boxShadow: "0 0 40px rgba(0,255,255,0.1)",
          }}
        >
          <h1 className="display-5 fw-bold text-info mb-4">
            <i className="bi bi-envelope-paper me-2"></i> Contact Us
          </h1>

          <p className="text-light opacity-75 mb-4">
            We'd love to hear from you. Use the form below or reach us through
            our direct contact details.
          </p>

          {/* Contact Form */}
          <form className="row g-3">

            <div className="col-md-6">
              <label className="form-label fw-semibold text-info">
                Name
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light border-info"
                placeholder="Your Name"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold text-info">
                Email
              </label>
              <input
                type="email"
                className="form-control bg-dark text-light border-info"
                placeholder="you@example.com"
              />
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold text-info">
                Message
              </label>
              <textarea
                rows="4"
                className="form-control bg-dark text-light border-info"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <div className="col-12 mt-2">
              <button
                type="submit"
                className="btn btn-info fw-bold px-4 py-2"
                style={{ letterSpacing: "0.5px" }}
              >
                <i className="bi bi-send-fill me-2"></i> Send Message
              </button>
            </div>
          </form>

          {/* Divider */}
          <hr className="border-info opacity-25 my-4" />

          {/* Contact Details */}
          <div className="mt-3">
            <h4 className="fw-bold text-info mb-3">
              <i className="bi bi-headset me-2"></i> Reach Us Directly
            </h4>

            <p className="mb-1">
              <i className="bi bi-geo-alt me-2 text-info"></i>
              4120 Ion Way, Suite 5 — Downtown Metropolis
            </p>

            <p className="mb-1">
              <i className="bi bi-clock me-2 text-info"></i>
              Open Daily — 6pm to 11pm
            </p>

            <p className="mb-1">
              <i className="bi bi-phone me-2 text-info"></i>
              (555) 404-1001
            </p>

            <p className="mb-0">
              <i className="bi bi-envelope me-2 text-info"></i>
              contact@helixlounge.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
