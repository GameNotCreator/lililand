const RoleCard = ({ mandataire, image }) => {
    return (
      <div className="card w-48 bg-base-100 h-20 flex flex-row items-center mr-3 ml-3">
        <div className="card-body items-center text-center">
          <div className="card-title">
            <div className="avatar mr-3">
              <div className="w-12 rounded-full">
                <img src={`/images/roles/${image}`} priority width={100} height={100} alt={mandataire} />
              </div>
            </div>
            <h2 className="text-sm">{mandataire}</h2>
          </div>
        </div>
      </div>
    );
};

export default RoleCard