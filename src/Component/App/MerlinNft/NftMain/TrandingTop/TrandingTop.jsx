import React from 'react'
import NftContainerWrapper from '../../NftContainerWrapper'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TrandingContent from './TrandingContent';
import NftSectionTitle from '../../NftSectionTitle';

const TrandingTop = () => {
    return (
        <div className='mt-[-160px]'>
            <NftContainerWrapper>
                <NftSectionTitle title="Top Users ❇️️️ " />
                <div className="pb-[90px] xl:pb-[70px] lg:pb-[60px] md:pt-[50px] xsm:pb-[40px]">
                    <TrandingContent />
                </div>
            </NftContainerWrapper>
        </div>
    )
}

export default TrandingTop