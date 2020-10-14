import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Streaming from './Streaming';
import FooterList from './FooterList';
export default function StreamingList() {
  return (
    <View>
      <FlatList
        renderItem={(streaming) => <Streaming />}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        // onEndReached={handleLoadMore}
        // ListFooterComponent={<FooterList isLoading={isLoading} />}
      />
    </View>
  );
}
