import { Oval } from "react-loader-spinner";
export default function Loader() {
  return (
    <>
      <div className="ContainerLoader">
      <Oval
        visible={true}
        height="65"
        width="65"
        color="#FFFF6B"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      </div>
   
      
    </>
  );
}
