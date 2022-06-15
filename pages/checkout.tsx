import React from 'react';
import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo';
import { SEO } from 'components/seo';
import Checkout from 'containers/CheckoutWithSidebar/CheckoutWithSidebar';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';

import { ProfileProvider } from 'contexts/profile/profile.provider';

type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const CheckoutPage: NextPage<Props> = ({ deviceType }) => {
  // const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
  const loading: boolean = false;
  const error: boolean = false;

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) return <div>{error}</div>;
  const token = 'true';

  const data:any = {
    products: {
      items:[
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
        ]},
      ]
    }
  }


  return (
    <>
      <SEO title='Checkout - PickBazar' description='Checkout Details' />
      <ProfileProvider initData={data.me}>
        <Modal>
          <Checkout token={token} deviceType={deviceType} />
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default withApollo(CheckoutPage);
