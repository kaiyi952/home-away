import EmptyList from "@/components/home/EmptyList";
import { fetchFavorites } from "@/utils/actions";
import PropertiesList from "@/components/home/PropertiesList";

async function FavoritesPage() {
  const favorites = await fetchFavorites();
  if (favorites.length === 0) {
    return <EmptyList />
  } else {
    return <PropertiesList properties={favorites} />;
  }
}
export default FavoritesPage;