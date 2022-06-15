import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import Sticky from 'react-stickynode';
import { Scrollbars } from 'react-custom-scrollbars';
import Popover from 'components/Popover/Popover';
import { ArrowDropDown, CategoryIcon } from 'components/AllSvgIcon';
import { SearchContext } from 'contexts/search/search.context';
import { useLocale } from 'contexts/language/language.provider';
import { useStickyState } from 'contexts/app/app.provider';
import {
  SidebarMobileLoader,
  SidebarLoader,
} from 'components/Placeholder/Placeholder';
import { FormattedMessage } from 'react-intl';
import {
  CategoryWrapper,
  TreeWrapper,
  PopoverHandler,
  PopoverWrapper,
  SidebarWrapper,
  RequestMedicine,
  Loading,
} from './Sidebar.style';

import { TreeMenu } from 'components/TreeMenu/TreeMenu';

import { GET_CATEGORIES } from 'graphql/query/category.query';

import { REQUEST_MEDICINE_PAGE } from 'constants/navigation';

type SidebarCategoryProps = {
  deviceType: {
    mobile: string;
    tablet: string;
    desktop: boolean;
  };
  type: string;
};

const SidebarCategory: React.FC<SidebarCategoryProps> = ({
  deviceType: { mobile, tablet, desktop },
  type,
}) => {
  const { state, dispatch } = useContext(SearchContext);
  const router = useRouter();
  const { pathname, query } = router;


  // const { data, loading } = useQuery(GET_CATEGORIES, {
  //   variables: { type },
  // });
const data = [
  {
      "id": '1',
      "title": 'Fruits & Vegetables',
      "slug": 'test',
      "icon": 'test',
      "children": [{
        "id": '1',
        "title": 'Fruits',
        "slug": "Fruits"
      },{
        "id": '2',
        "title": 'Vegetables',
        "slug": "Vegetables"
      }
    ]
    },{
      "id": '2',
      "title": 'Meat & Fish',
      "slug": 'meat_&_fish',
      "icon": 'test',
      "children": [{
        "id": '1',
        "title": 'Meat',
        "slug": "Meat"
      },{
        "id": '2',
        "title": 'Fish',
        "slug": "Fish"
      }]
    },{
      "id": '3',
      "title": 'Snacks',
      "slug": 'Snacks',
      "icon": 'test',
      "children": [{
        "id": '1',
        "title": 'Nuts & Biscuits',
        "slug": "Nuts & Biscuits"
      },{
        "id": '2',
        "title": 'Chocolates',
        "slug": "Chocolates"
      },{
        "id": '3',
        "title": 'Crisps',
        "slug": "Crisps"
      },{
        "id": '4',
        "title": 'Noodles & Pasta',
        "slug": "Noodles & Pasta"
      },{
        "id": '5',
        "title": 'Sauce',
        "slug": "Sauce"
      },{
        "id": '6',
        "title": 'Soup',
        "slug": "Soup"
      }]
    },{
      "id": '4',
      "title": 'Pet Care',
      "slug": 'Pet Care',
      "icon": 'test',
      "children": [{
        "id": '1',
        "title": 'Cat Food',
        "slug": "Cat Food"
      },{
        "id": '2',
        "title": 'Dog Food',
        "slug": "Dog Food"
      },{
        "id": '3',
        "title": 'Accessories',
        "slug": "Accessories"
      }]
    },{
      "id": '5',
      "title": 'Home & Cleaning',
      "slug": 'Home & Cleaning',
      "icon": 'test',
      "children": [{
        "id": '1',
        "title": 'Air Freshner',
        "slug": "Air Freshner"
      },{
        "id": '2',
        "title": 'Cleaning Products',
        "slug": "Cleaning Products"
      },{
        "id": '3',
        "title": 'Kitchen Accessories',
        "slug": "Kitchen Accessories"
      },{
        "id": '4',
        "title": 'Laundry',
        "slug": "Laundry"
      }]
    },{
      "id": '6',
      "title": 'Dairy',
      "slug": 'Dairy',
      "icon": 'Dairy',
      "children": [{
        "id": '1',
        "title": 'Milk',
        "slug": "Milk"
      },{
        "id": '2',
        "title": 'Butter',
        "slug": "Butter"
      },{
        "id": '3',
        "title": 'Egg',
        "slug": "Egg"
      },{
        "id": '4',
        "title": 'Yogurt',
        "slug": "Yogurt"
      }]
    },{
      "id": '7',
      "title": 'Cooking',
      "slug": 'Cooking',
      "icon": 'test',
      "children": [{
        "id": '1',
        "title": 'Oil',
        "slug": "Oil"
      },{
        "id": '2',
        "title": 'Rice',
        "slug": "Rice"
      },{
        "id": '3',
        "title": 'Salt & Sugar',
        "slug": "Salt & Sugar"
      },{
        "id": '4',
        "title": 'Spices',
        "slug": "Spices"
      }]
    },{
      "id": '8',
      "title": 'Breakfast',
      "slug": 'Breakfast',
      "icon": 'test',
      "children": [{
        "id": '1',
        "title": 'Bread',
        "slug": "Bread"
      },{
        "id": '2',
        "title": 'Cereal',
        "slug": "Cereal"
      },{
        "id": '3',
        "title": 'Jam',
        "slug": "Jam"
      }]
    },{
      "id": '9',
      "title": 'Beverage',
      "slug": 'Beverage',
      "icon": 'test',
      "children": [{
        "id": '1',
        "title": 'Coffee',
        "slug": "Coffee"
      },{
        "id": '2',
        "title": 'Energy Drinks',
        "slug": "Energy Drinks"
      },{
        "id": '3',
        "title": 'Juice',
        "slug": "Juice"
      },{
        "id": '4',
        "title": 'Fizzy Drinks',
        "slug": "Fizzy Drinks"
      },{
        "id": '5',
        "title": 'tea',
        "slug": "tea"
      }]
    },{
      "id": '10',
      "title": 'Health & Beauty',
      "slug": 'Health & Beauty',
      "icon": 'test',
      "children": [{
        "id": '1',
        "title": 'Bath',
        "slug": "Bath"
      },{
        "id": '2',
        "title": 'Cream',
        "slug": "Cream"
      },{
        "id": '3',
        "title": 'Drodoran',
        "slug": "Drodoran"
      },{
        "id": '4',
        "title": 'Face Care',
        "slug": "Face Care"
      },{
        "id": '5',
        "title": 'Oral Care',
        "slug": "Oral Care"
      },{
        "id": '6',
        "title": 'Shaving Needs',
        "slug": "Shaving Needs"
      }]
    }
];
const loading =false;

  const selectedQueries = query.category;

  const { isRtl } = useLocale();

  const handleCategorySelection = (slug: string) => {
    const updatedQuery = state.text
      ? { text: state.text, category: slug }
      : { category: slug };
    router.push({
      pathname: pathname,
      query: updatedQuery,
    });
  };
  const isSidebarSticky = useStickyState('isSidebarSticky');

  // if (!data || loading) {
  //   if (mobile || tablet) {
  //     return <SidebarMobileLoader />;
  //   }

  //   return <SidebarLoader />;
  // }
console.log(data)
  return (
    <CategoryWrapper>
      <PopoverWrapper>
        <Popover
          handler={
            <PopoverHandler>
              <div>
                <CategoryIcon />
                Select your Category
              </div>
              <div>
                <ArrowDropDown />
              </div>
            </PopoverHandler>
          }
          className='category-popover'
          content={
            <>
              {type === 'medicine' && (
                <Link href={REQUEST_MEDICINE_PAGE}>
                  <RequestMedicine>
                    <FormattedMessage id='reqMedicine' />
                  </RequestMedicine>
                </Link>
              )}
              <TreeMenu
                data={data}
                onClick={handleCategorySelection}
                active={selectedQueries}
              />
            </>
          }
        />
      </PopoverWrapper>

      <SidebarWrapper style={{ paddingTop: type === 'medicine' ? 0 : 45 }}>
        <Sticky enabled={isSidebarSticky} top={type === 'medicine' ? 89 : 110}>
          {type === 'medicine' && (
            <Link href={REQUEST_MEDICINE_PAGE}>
              <RequestMedicine>
                <FormattedMessage id='reqMedicine' />
              </RequestMedicine>
            </Link>
          )}

          <Scrollbars
            universal
            autoHide
            autoHeight
            autoHeightMax={688}
            renderView={(props) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  marginLeft: isRtl ? props.style.marginRight : 0,
                  marginRight: isRtl ? 0 : props.style.marginRight,
                }}
              />
            )}
          >
            <TreeWrapper>
              <TreeMenu
                data={data}
                onClick={handleCategorySelection}
                active={selectedQueries}
              />
            </TreeWrapper>
          </Scrollbars>
        </Sticky>
      </SidebarWrapper>
    </CategoryWrapper>
  );
};

export default SidebarCategory;
