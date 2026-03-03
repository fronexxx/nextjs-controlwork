import MoviesList from "@/components/MovieComponents/MoviesList";
import HeaderComponent from "@/components/HeaderComponents/HeaderComponent";


interface PropsPage {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>
}

export default async function Home({searchParams}: PropsPage) {

    const params = await searchParams;

  return (
    <div>
        <HeaderComponent/>
        <MoviesList searchParams={params}/>
    </div>
  );
}
