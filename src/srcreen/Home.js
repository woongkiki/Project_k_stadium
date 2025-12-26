import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Layout from '../components/common/Layout';
import DefText from '../components/common/DefText';
import Api from '../util/Api';

const Home = props => {
  const {navigation, route} = props;

  const TestHandler = () => {
    Api.send('com_homeOffice', {}, args => {
      let resultItem = args.resultItem;
      let arrItems = args.arrItems;

      if (resultItem.result === 'Y' && arrItems) {
        console.log('테스트: ', arrItems, resultItem);
      } else {
        console.log('테스트 실패!', resultItem);
      }
    });
  };

  useEffect(() => {
    TestHandler();
  }, []);

  return (
    <Layout>
      <DefText text="Home Screen" />
      <Text>Home Screen</Text>
    </Layout>
  );
};

export default Home;
