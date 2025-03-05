import React, { useState } from "react";
import { Address } from "../types";

interface AddressFormProps {
  onSave: (address: Address) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onSave }) => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Address | null>(null);
  const [cache, setCache] = useState<Record<string, Address>>({});

  const fetchAddress = async (cep: string) => {
    if (cache[cep]) {
      setAddress(cache[cep]);
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setAddress(data);
        setCache((prevCache) => ({ ...prevCache, [cep]: data }));
      } else {
        alert("CEP não encontrado");
      }
    } catch (error) {
      alert("Erro ao consultar o CEP. Tente novamente.");
    }
  };

  const handleBlur = () => {
    if (cep.length === 8) {
      fetchAddress(cep);
    }
  };

  const handleSearch = () => {
    if (cep.length === 8) {
      fetchAddress(cep);
    } else {
      alert("CEP deve ter 8 dígitos.");
    }
  };

  const handleSave = () => {
    if (address) {
      onSave(address);
      setCep("");
      setAddress(null);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">CEP</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))} // Remove caracteres não numéricos
            onBlur={handleBlur}
            maxLength={8}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button
            onClick={handleSearch}
            className="mt-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Consultar
          </button>
        </div>
      </div>

      {address && (
        <div className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Logradouro
            </label>
            <input
              type="text"
              value={address.logradouro}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bairro
            </label>
            <input
              type="text"
              value={address.bairro}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cidade
            </label>
            <input
              type="text"
              value={address.localidade}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              UF
            </label>
            <input
              type="text"
              value={address.uf}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            onClick={handleSave}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Salvar
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
