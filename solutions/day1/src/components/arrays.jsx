export function Arrays() {
    const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
    console.log(itCompanies);
    console.log(itCompanies.length);
    console.log(itCompanies[0] + ", " + itCompanies[(itCompanies.length-1)/2] + ", " + itCompanies[itCompanies.length-1]);
    console.log(itCompanies.join(", ") + " are big IT companies");
    itCompanies.includes("Google") ? console.log(itCompanies[itCompanies.indexOf("Google")]) : console.log("company not found");
    console.log(itCompanies.sort());
    return(
        <div>
            <h2>This is the array</h2>
            {
                itCompanies.map((company) => {
                    const retVal = company.toUpperCase();
                    return(<p>{retVal}</p>);
                })
            }
        </div>
    );
}
