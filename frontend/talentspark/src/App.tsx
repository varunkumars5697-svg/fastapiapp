import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import CompanyCard from "./components/CompanyCard";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import{getCompanies} from "./Services/CompanyServices";
import type{Company} from "./types/company";
function App() {
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState<string | null>(null);
  const[companies, setCompanies] = useState<Company[]>([]);

  async function fetchCompanies() {
    setLoading(true);
    try {
      const companies = await getCompanies();
      setCompanies(companies);
    } catch (error) {
      setError("Failed to fetch companies");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCompanies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  } 
  return (
    <>
    <NavBar />
    <Welcome />
    <CompanyCard />
    <JobCard />
    <Footer />
    </>
  );
}
export default App;