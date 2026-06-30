import type {Company} from "../types/company";

type Props = {
    companies: Company[];
};

function CompanyCard({ companies }: Props) {

    // const [companies, setCompanies] = useState<Company[]>([]);
    // async function fetchCompanies() {
    //     const companiesData = await getCompanies();
    //     setCompanies(companiesData);
    // }

    // useEffect(() => {
    //     fetchCompanies();
    // }, []);

    return (
        <div>
            <h1>Companies</h1>
            {companies.map((company) => (
                <div key={company.id}>
                    <h1>{company.name}</h1>
                    <p>Email: {company.email}</p>
                    <p>Phone: {company.phone}</p>
                    <p>Location: {company.location}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}
export default CompanyCard;