import React, { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import gql from 'graphql-tag';
import { openModal, closeModal } from '@redq/reuse-modal';
import ProductCard from 'components/ProductCard/ProductCard';
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from './Products.style';
import { CURRENCY } from 'helper/constant';
import { useQuery } from '@apollo/react-hooks';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Placeholder from 'components/Placeholder/Placeholder';
import Fade from 'react-reveal/Fade';
import NoResultFound from 'components/NoResult/NoResult';

const QuickView = dynamic(() => import('../QuickView/QuickView'));

const GET_PRODUCTS = gql`
  query getProducts(
    $type: String
    $text: String
    $category: String
    $offset: Int
    $limit: Int
  ) {
    products(
      type: $type
      text: $text
      category: $category
      offset: $offset
      limit: $limit
    ) {
      items {
        id
        title
        slug
        unit
        price
        salePrice
        description
        discountInPercent
        type
        image
        gallery {
          url
        }
        categories {
          id
          title
          slug
        }
      }
      hasMore
    }
  }
`;

type ProductsProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  type: string;
  fetchLimit?: number;
  loadMore?: boolean;
};
export const Products: React.FC<ProductsProps> = ({
  deviceType,
  type,
  fetchLimit = 8,
  loadMore = true,
}) => {
  const router = useRouter();
  const [loadingMore, toggleLoading] = useState(false);


  // const { data, error, loading, fetchMore } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: type,
  //     text: router.query.text,
  //     category: router.query.category,
  //     offset: 0,
  //     limit: fetchLimit,
  //   },
  // });


  // id,
  // type,
  // title,
  // unit,
  // price,
  // discountInPercent,
  // salePrice,
  // description,
  // gallery,
  // categories,

const data:any = {
  products: {
    items: [
      {
        "id": 1,
        "title": "Snackrite Cheese Onion",
        "slug": "sco",
        "unit": '1 pice',
        "price": 10,
        "salePrice": 11,
        "description": 'Potato chips (often just chips), or crisps, are thin slices of potato that have been deep fried or baked until crunchy. They are commonly served as a snack, side dish, or appetizer. The basic chips are cooked and salted; additional varieties are manufactured using various flavorings and ingredients including herbs, spices, cheeses, other natural flavors, artificial flavors, and additives.',
        "discountInPercent": 5,
        "type": 'Test',
        "image": 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75',
        "gallery": [
          {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           },
           {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           },
           {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           }
  ],
        
        "categories": [{
          "id":0,
          "title": "snacks",
          "slug": 'test',
        },
        {
          "id":1,
          "title": "crisps",
          "slug": 'test2',
        },
      ]
      },
      {
        "id": 2,
        "title": "Snackrite Cheese Onion",
        "slug": "sco",
        "unit": 10,
        "price": 10,
        "salePrice": 11,
        "description": 'Potato chips (often just chips), or crisps, are thin slices of potato that have been deep fried or baked until crunchy. They are commonly served as a snack, side dish, or appetizer. The basic chips are cooked and salted; additional varieties are manufactured using various flavorings and ingredients including herbs, spices, cheeses, other natural flavors, artificial flavors, and additives.',
        "discountInPercent": 0,
        "type": 'Test',
        "image": 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F222%2FReady-Salted-Crisps.jpg&w=1080&q=75',
        "gallery": [
          {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           },
           {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           },
           {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           }
  ],
        "categories": [{
          "id":0,
          "title": "snacks",
          "slug": 'test',
        },
        {
          "id":1,
          "title": "crisps",
          "slug": 'test2',
        },

      ]
      },
      {
        "id": 3,
        "title": "Snikers Snack Size",
        "slug": "Snikers_Snack_Size",
        "unit": 10,
        "price": 10,
        "salePrice": 11,
        "description": 'Chocolate is a usually sweet, brown food preparation of roasted and ground cacao seeds that is made in the form of a liquid, paste, or in a block, or used as a flavoring ingredient in other foods.',
        "discountInPercent": 0,
        "type": 'Test',
        "image": 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F213%2Fsnikers_snacksize.jpg&w=1080&q=75',
        "gallery": [
          {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           },
           {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           },
           {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           }
  ],
        "categories": [{
          "id":0,
          "title": "snacks",
          "slug": 'test',
        
        
        },
        {
          "id":1,
          "title": "chocolates",
          "slug": 'test2',
        
        
        },

      ]
      },
      {
        "id": 4,
        "title": "Mix Vegetable Platter",
        "slug": "Mix_Vegetable_Platter",
        "unit": 10,
        "price": 10,
        "salePrice": 11,
        "description": 'Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthaceae, subfamily Chenopodioideae. Its leaves are a common edible vegetable consumed either fresh.',
        "discountInPercent": 10,
        "type": 'Test',
        "image": 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75',
        "gallery": [
          {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           },
           {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           },
           {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           }
  ],
        "categories": [{
          "id":0,
          "title": "fruits & vegetables",
          "slug": 'test',
        
        
        },
        {
          "id":1,
          "title": "vegetables",
          "slug": 'test2',
        
        
        },
      ]
      },
      {
        "id": 5,
        "title": "Sweet Corn",
        "slug": "Sweet_Corn",
        "unit": 10,
        "price": 10,
        "salePrice": 11,
        "description": 'Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago. The leafy stalk of the plant produces pollen inflorescences and separate ovuliferous inflorescences called ears that yield kernels or seeds, which are fruits.',
        "discountInPercent": 0,
        "type": 'Test',
        "image": 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F592%2FSweet-Corn-1.png&w=640&q=75',
        "gallery": [
          {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           },
           {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           },
           {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           }
  ],
        "categories": [{
          "id":0,
          "title": "fruits & vegetables",
          "slug": 'test',
        },
        {
          "id":1,
          "title": "vegetables",
          "slug": 'test2',
        },
      ]
      },
      {
        "id": 6,
        "title": "Snackrite Cheese Onion",
        "slug": "sco",
        "unit": 100,
        "price": 10,
        "salePrice": 9,
        "description": 'Green capsicums are picked when ripe and have an all-over green appearance.A fresh, crisp green capsicum is a tasty vegetable that can be a regular part of your healthy eating plan. This vegetable is low in calories and contains 0 grams of fat and a good supply vitamins and minerals. Their mildly sweet flavor makes green bell peppers versatile enough to include a wide variety of nutritious recipes.',
        "discountInPercent": 10,
        "type": 'Test',
        "image": 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1005%2FMarrow5.jpg&w=1080&q=75',
        "gallery": [
          {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           },
           {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           },
           {
            "url": "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F224%2Fsnackrite_bags.jpg&w=1080&q=75",
           }
  ],
        "categories": [{
          "id":0,
          "title": "marrow",
          "slug": 'test',
        
        
        },
        {
          "id":1,
          "title": "vegetables",
          "slug": 'test2',
        
        
        },

      ]
      }
    ]
  },
  "hasMore": 0,
}
const error: any = false
const loading = false;
const fetchMore:any = (data:any)=>{
  console.log('hi');
} 

  // Quick View Modal
  const handleModalClose = () => {
    const as = router.asPath;
    router.push(as, as, { shallow: true });
    closeModal();
  };

  const handleQuickViewModal = (
    modalProps: any,
    deviceType: any,
    onModalClose: any
  ) => {
    if (router.pathname === '/product/[slug]') {
      const as = `/product/${modalProps.slug}`;
      router.push(router.pathname, as);
      return;
    }
    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: false,
      component: QuickView,
      componentProps: { modalProps, deviceType, onModalClose },
      closeComponent: 'div',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 900,
        y: 30,
        height: 'auto',
        transition: {
          mass: 1,
          tension: 0,
          friction: 0,
        },
      },
    });
    const href = router.asPath;
    const as = `/product/${modalProps.slug}`;
    router.push(href, as, { shallow: true });
  };

  if (loading) {
    return (
      <LoaderWrapper>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
      </LoaderWrapper>
    );
  }
  console.log(data, '186')

  if (error) return <div>{error?.message}</div>;
  if (!data || !data.products || data.products.items.length === 0) {
    return <NoResultFound />;
  }
  const handleLoadMore = () => {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: Number(data.products.items.length),
        limit: fetchLimit,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        toggleLoading(false);
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          products: {
            __typename: prev.products.__typename,
            items: [...prev.products.items, ...fetchMoreResult.products.items],
            hasMore: fetchMoreResult.products.hasMore,
          },
        };
      },
    });
  };

  return (
    <>
      <ProductsRow>
        {data.products.items.map((item: any, index: number) => (
          <ProductsCol key={index}>
            <ProductCardWrapper>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: '100%' }}
              >
                <ProductCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  weight={item.unit}
                  currency={CURRENCY}
                  price={item.price}
                  salePrice={item.salePrice}
                  discountInPercent={item.discountInPercent}
                  data={item}
                  deviceType={deviceType}
                  onClick={() =>
                    handleQuickViewModal(item, deviceType, handleModalClose)
                  }
                />
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
      {loadMore && data.products.hasMore && (
        <ButtonWrapper>
          <Button
            onClick={handleLoadMore}
            title="Load More"
            intlButtonId="loadMoreBtn"
            size="small"
            isLoading={loadingMore}
            loader={<Loader color="#009E7F" />}
            style={{
              minWidth: 135,
              backgroundColor: '#ffffff',
              border: '1px solid #f1f1f1',
              color: '#009E7F',
            }}
          />
        </ButtonWrapper>
      )}
    </>
  );
};
export default Products;
