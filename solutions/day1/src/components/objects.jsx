export function Objects() {
  const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland'];
  const countriesWithLand = countries.filter((country) => 
    country.includes('land')
  );
  console.log(countriesWithLand);
}