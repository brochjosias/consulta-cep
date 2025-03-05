import React from "react";
import { Address } from "../types";

interface AddressListProps {
  addresses: Address[];
}

const AddressList: React.FC<AddressListProps> = ({ addresses }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-900">Endereços Salvos</h2>
      <ul className="space-y-2">
        {addresses.map((address, index) => (
          <li key={index} className="p-4 border border-gray-200 rounded-md">
            <p>
              <strong>CEP:</strong> {address.cep}
            </p>
            <p>
              <strong>Logradouro:</strong> {address.logradouro}
            </p>
            <p>
              <strong>Bairro:</strong> {address.bairro}
            </p>
            <p>
              <strong>Cidade:</strong> {address.localidade}
            </p>
            <p>
              <strong>UF:</strong> {address.uf}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
