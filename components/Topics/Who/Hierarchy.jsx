import React from 'react';
import data from '@public/data.json';
import RoleCard from './RoleCard';

const Hierarchy = () => {
  return (
    <center>
      <h2 className="text-2xl">Bureau Executif</h2>
      <br />
      <div className="space-y-4">
        <div className="text-center flex flex-col items-center">
          <RoleCard mandataire={data.roles[0].mandataire} image={data.roles[0].image} />
          <p className="text-lg font-bold">President</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div>
            <RoleCard mandataire={data.roles[2].mandataire} image={data.roles[2].image} />
            <p className="text-md">Vice President</p>
          </div>
          <div>
            <RoleCard mandataire={data.roles[1].mandataire} image={data.roles[1].image} />
            <p className="text-md">Chef Protocole</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div>
            <RoleCard mandataire={data.roles[3].mandataire} image={data.roles[3].image} />
            <p className="text-md">CNIT</p>
          </div>
          <div>
            <RoleCard mandataire={data.roles[4].mandataire} image={data.roles[4].image} />
            <p className="text-md">Secretaire General</p>
          </div>
          <div>
            <RoleCard mandataire={data.roles[5].mandataire} image={data.roles[5].image} />
            <p className="text-md">Tresorerie</p>
          </div>
          <div>
            <RoleCard mandataire={data.roles[6].mandataire} image={data.roles[6].image} />
            <p className="text-md">Past Presidente</p>
          </div>
        </div>
      </div>
      <br /><br />
      <div>
        <h2 className="text-2xl">Bureau Elargie</h2>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.rolelargie.map((role, index) => (
            <div key={index}>
              <RoleCard mandataire={role.mandataire} image={role.image} />
            </div>
          ))}
        </div>
      </div>
    </center>
  );
};

export default Hierarchy;
