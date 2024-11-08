import React, { useState, useEffect } from 'react';
import '../assets/css/page/products.css';  // Adicionar o arquivo CSS para estilizar

const Services = () => {
  const [services, setServices] = useState([]);

  // Consumir a API local (JSON)
  useEffect(() => {
    // Simulando a requisição para um arquivo JSON local
    fetch('/db/db.json')  // Certifique-se de que o arquivo JSON está no caminho correto
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Erro ao carregar serviços:', error));
  }, []);

  return (
    <div className="services-container">
      <h1>Serviços para Pets</h1>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-metadescription">{service.metadescription}</p>
            <p className="service-body">{service.body}</p>
            <p className="service-category"><strong>Categoria:</strong> {service.category}</p>
            
            {/* Verifica se o serviço tem subcategoria */}
            {Array.isArray(service.subcategory) ? (
              <div className="subcategory">
                {service.subcategory.map((sub, index) => (
                  <div key={index} className="subcategory-item">
                    <p><strong>Higiene:</strong> {sub.hygiene}</p>
                    <p><strong>Saúde:</strong> {sub.health}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="subcategory">
                <p><strong>Subcategoria:</strong> {service.subcategory}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
