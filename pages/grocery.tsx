import React from 'react';
import { useRouter } from 'next/router';
import { withApollo } from 'helper/apollo';
import { Modal } from '@redq/reuse-modal';
import { SEO } from 'components/seo';
import StoreNav from 'components/StoreNav/StoreNav';
import Sidebar from 'containers/Sidebar/Sidebar';
import Products from 'containers/Products/Products';
import CartPopUp from 'containers/Cart/CartPopUp';
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  MobileCarouselDropdown,
} from 'styled/pages.style';
// Static Data Import Here
import storeType from 'constants/storeType';

const PAGE_TYPE = 'grocery';

function HomePage({ deviceType }) {
  const { query } = useRouter();
  const targetRef = React.useRef(null);
  React.useEffect(() => {
    if ((query.text || query.category) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: 'smooth',
      });
    }
  }, [query]);

  return (
    <div>
      <SEO title='Grocery - PickBazar' description='Grocery Details' />
      <Modal>
        {deviceType.desktop ? (
          <div style={{paddingTop:"80px"}}>
            <MobileCarouselDropdown>
              <StoreNav items={storeType} />
              <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            </MobileCarouselDropdown>
            <MainContentArea>
              <SidebarSection>
                <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
              </SidebarSection>
              <ContentSection>
                <div ref={targetRef}>
                  <Products
                    type={PAGE_TYPE}
                    deviceType={deviceType}
                    fetchLimit={16}
                  />
                </div>
              </ContentSection>
            </MainContentArea>
          </div>
        ) : (
          <MainContentArea>
            <StoreNav items={storeType} />
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            <ContentSection style={{ width: '100%' }}>
              <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={16}
              />
            </ContentSection>
          </MainContentArea>
        )}
        <CartPopUp deviceType={deviceType} />
      </Modal>
    </div>
  );
}

export default withApollo(HomePage)
