import { Link } from "react-router-dom";

function Copyright() {
  return (
    <div className="font-medium text-gray-300">
      <p className=" ">
        All Rights Reserved | &copy; <span>{new Date().getFullYear()}</span> Glory Fitness Sudio
      </p>
     
    </div>
  );
}

export default Copyright;
