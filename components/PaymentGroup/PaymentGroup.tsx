import React from 'react';
import { FormattedMessage } from 'react-intl';
import Carousel from 'components/Carousel/Carousel';
import PaymentCard from '../PaymentCard/PaymentCard';
import { Plus } from '../AllSvgIcon';
import Button from '../Button/Button';
import {
  Header,
  PaymentCardList,
  SavedCard,
  OtherPayOption
} from './PaymentGroup.style';

interface PaymentCardType {
  id: number | string;
  type: string;
  lastFourDigit: string;
  name: string;
}

interface PaymentOptionType {
  showCard?: boolean;
  addedCard?: PaymentCardType[];
  mobileWallet?: boolean;
  cashOnDelivery?: boolean;
}

interface PaymentGroupProps {
  id?: any;
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  name: string;
  disabled?: boolean;
  label?: string;
  className?: string;
  value?: string;
  onChange: Function;
  items: any;
  onEditDeleteField: any;
  handleAddNewCard: any;
}

const items:any =[
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

const PaymentGroup: React.FunctionComponent<PaymentGroupProps> = ({
  // items,
  deviceType,
  className,
  name,
  onChange,
  onEditDeleteField,
  handleAddNewCard
}) => {
  // RadioGroup State

  

  // Handle onChange Func
  const handleChange = (item: any) => {
    onChange(item);
  };
  console.log(items, 100)
  return (
    <>
      {/* {deviceType === 'desktop' && ( */}
      <Header>
        {items.length !== 0 && (
          <SavedCard>
            <FormattedMessage id='savedCardsId' defaultMessage='Saved Cards' />
          </SavedCard>
        )}
        <Button
          title='Add Card'
          colors='primary'
          size='small'
          variant='textButton'
          type='button'
          icon={<Plus width='10px' />}
          iconPosition='left'
          onClick={handleAddNewCard}
          intlButtonId='addCardBtn'
        />
      </Header>
      <PaymentCardList>
        <Carousel
          deviceType={deviceType}
          autoPlay={false}
          infinite={false}
          data={items}
          component={(item: any) => (
            <PaymentCard
              key={item.id}
              onChange={() => handleChange(item)}
              onDelete={() => onEditDeleteField(item, 'delete')}
              {...item}
            />
          )}
        />
      </PaymentCardList>

      {items.mobileWallet === true || items.cashOnDelivery === true ? (
        <OtherPayOption>
          {/* Mobile Wallet */}
          {items.mobileWallet === true ? (
            <label
              htmlFor='mobile-wallet'
              key='${name}-mobile-wa'
              className='other-pay-radio'
            >
              <input
                type='radio'
                id='mobile-wallet'
                name={name}
                value='mobile-wallet'
                onChange={handleChange}
              />
              <span>Mobile Wallet</span>
            </label>
          ) : (
            ''
          )}

          {/* Cash On Delivery */}
          {items.cashOnDelivery === true ? (
            <label
              htmlFor='cash-on-delivery'
              key='${name}-cash'
              className='other-pay-radio cash-on-delivery'
            >
              <input
                type='radio'
                id='cash-on-delivery'
                name={name}
                value='cash-on-delivery'
                onChange={handleChange}
              />
              <span>Cash On Delivery</span>
            </label>
          ) : (
            ''
          )}
        </OtherPayOption>
      ) : (
        ''
      )}
    </>
  );
};

export default PaymentGroup;
