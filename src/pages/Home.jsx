import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("/src/data/dishes.json")
      .then((res) => res.json())
      .then((data) => setDishes(data))
      .catch((err) => console.error("Error loading dishes:", err));
  }, []);

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, #0ff3 0%, transparent 40%), #0a0f14",
      }}
    >
      <div className="container">
        {/* HERO */}
        <div
          className="p-5 mb-4 rounded-4 text-light"
          style={{
            background: "linear-gradient(135deg, #111827cc, #1f2937cc)",
            border: "1px solid rgba(0,255,255,0.15)",
            boxShadow: "0 0 40px rgba(0,255,255,0.1)",
          }}
        >
          <span className="badge bg-info text-dark mb-3 fw-bold">
            <i className="bi bi-stars me-1"></i> Augmented Tasting Menu
          </span>

          <h1 className="display-4 fw-bold">Chop — Best Dining in Town</h1>

          <p className="mt-3 text-light opacity-75">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
            consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
            quisque faucibus ex sapien vitae pellentesque.
          </p>

          <div className="mt-4 d-flex gap-2">
            <button className="btn btn-info fw-bold px-4">Reserve Table</button>
            <a href="#menu" className="btn btn-outline-light px-4">
              Explore Menu
            </a>
          </div>
        </div>

        {/* MENU */}
        <h3 id="menu" className="text-info mb-3 fw-bold">
          Signature Menu
        </h3>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {dishes.map((d) => (
            <div key={d.name} className="col">
              <div className="card bg-dark text-light border-info rounded-3 shadow-sm">
                <div className="card-body">
                  <h5 className="fw-bold">{d.name}</h5>
                  <p className="opacity-75 mb-2">{d.desc}</p>
                  <span className="text-info fw-bold">{d.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SIDE PANELS 
        <div className="row mt-5 g-4">
          <div className="col-md-6">
            <div className="card bg-dark text-light border-info rounded-3">
              <div className="card-body d-flex gap-3 align-items-start">
                <i className="bi bi-geo-alt fs-3 text-info"></i>
                <div>
                  <h5 className="fw-bold">
                    Oslo: Skyline in Winter With Fish Soup Cruise
                  </h5>
                  <p className="opacity-75 mb-1">
                    4120 Ion Way, Suite 5 — Downtown Metropolis
                  </p>
                  <p className="opacity-75 mb-0">
                    <i className="bi bi-clock me-2"></i> 6pm - 11pm
                    <br />
                    <i className="bi bi-phone me-2"></i> (555) 404-1001
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-6">
            <div className="card bg-dark text-light border-info rounded-3">
              <div className="card-body d-flex gap-3 align-items-start">
                <i className="bi bi-stars fs-3 text-info"></i>
                <div className="flex-grow-1">
                  <h5 className="fw-bold">
                    Oslo: Norwegian Food Tour & Hidden Gems City Walk
                  </h5>
                  <p className="opacity-75 mb-2">
                    Oslo. Our guide Margarita, was - 129kr
                  </p>
                </div>
                <button className="btn btn-info fw-bold">Book</button>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
