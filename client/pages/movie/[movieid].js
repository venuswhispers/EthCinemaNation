
import Layout from '@/components/Layout'
import SingleMovieComp, { MovieCast } from '@/components/SingleMovieComp'
import { useRouter } from "next/router";

const SingleMovie = () => {
  
    const router = useRouter();
    const { movieid } = router.query;
   
    return (
        <Layout>
            <SingleMovieComp movieid={movieid} />
            <MovieCast movieid={movieid} />
        </Layout>
    )}

    
    export async function getServerSideProps(context) {
        const { movieid } = context.query;
  console.log(  movieid  )
        return {
      props: {
        movieid,
        },
    };
  }
  
export default SingleMovie;