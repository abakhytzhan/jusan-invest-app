import CompanyDetails from "../../components/companyDetails/companyDetails";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { checkToken } from "../../service/checkToken";
import { Navigate } from "react-router-dom";

const Company = () => {
  const searchIcon: boolean = false;
  if (!checkToken()) {
    alert("The token has expired. You need to log in again!");
    return <Navigate to="/login" replace={true} />;
  } else {
    return (
      <>
        <Header searchIcon={searchIcon} />
        <CompanyDetails />
        <Footer />
      </>
    );
  }
};

export default Company;
