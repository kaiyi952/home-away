import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { Button } from "@/components/ui/button";

function HomePage( 
  {
    searchParams,
  }: {
      searchParams: { category?: string; search?:string};
  }
) {
  return <section>
    <CategoriesList category={searchParams.catogory} search={searchParams.search } />
    <PropertiesContainer category={searchParams.catogory} search={searchParams.search }/>
  </section>
}

export default HomePage