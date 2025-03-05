import React, { useState, useEffect } from "react";
import AddressForm from "./components/AddressForm";
import AddressList from "./components/AddressList";
import { Address } from "./types";

const App: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  // Carrega endereços salvos do localStorage ao iniciar
  useEffect(() => {
    const savedAddresses = localStorage.getItem("addresses");
    if (savedAddresses) {
      setAddresses(JSON.parse(savedAddresses));
    }
  }, []);

  // Salva o endereço no estado e no localStorage
  const handleSave = (address: Address) => {
    const updatedAddresses = [...addresses, address];
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Consulta de CEP
        </h1>
        <AddressForm onSave={handleSave} />
        <div className="mt-8">
          <AddressList addresses={addresses} />
        </div>
      </div>
    </div>
  );
};

export default App;
