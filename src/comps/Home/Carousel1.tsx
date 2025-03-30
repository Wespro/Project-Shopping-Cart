import { useContext } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { itemsContext } from '@/Types/types';
import ItemsContext from '../../context/ItemsContext.js';
import useItems from '@/hoc/useItems.js';
import ItemCard from '../ShopPage/ItemCard/ItemCard.js';

const Carousel1 = () => {
  //context
  const { items, category, setCategory, setItems } =
    useContext<itemsContext>(ItemsContext);

  const ITemsQueryObj = useItems(category, setItems);

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className='w-[75%] xl:w-[45%]   '
    >
      <CarouselContent className='flex gap-10  justify-center items-center'>
        {items?.slice(0, 5).map((item) => (
          <CarouselItem
            className=' w-[2rem] md:w-[3.5rem] flex  justify-center items-center'
            key={item.id + 'carousel'}
          >
            <ItemCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Carousel1;
