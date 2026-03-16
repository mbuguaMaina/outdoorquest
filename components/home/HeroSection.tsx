import Carousel from "../Carousel";
import HeroItem from "./HeroItem";
 

const HeroSection = ({products}:{products:any[]}) => {
 
  if(!products) return null
  return (
    <section className="relative rounded-lg h-[35dvh] md:h-[55dvh] md:border-pink-200 border-2 
     overflow-hidden md:bg-linear-to-br from-primary/20 via-background to-secondary/20   ">
    <Carousel total={products?.length} autoSlide={true} interval={4000}>
      {
        products.map((product,index:number) => (<HeroItem product={product} key={index}/>))
      }

      </Carousel>
      
    </section>
  );
};

export default HeroSection;
