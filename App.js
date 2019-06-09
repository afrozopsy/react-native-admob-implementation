import React, { Component } from 'react';
import { Text ,View, StyleSheet , Button } from 'react-native';
import { Constants } from 'expo';

// AdMob
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';

export default class App extends Component {

  showInterstitial = async () => {
    AdMobInterstitial.setAdUnitID('ca-app-pub-8799450118077071/8919786052'); // Test ID, Replace with your-admob-unit-id
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
  }

  showRewarded = async () => {
    AdMobRewarded.setAdUnitID('ca-app-pub-8799450118077071/1310433933'); // Test ID, Replace with your-admob-unit-id
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  }

  render() {
    return (
          <View style={styles.container}>

                <Text>Text in the center!!!</Text>

                <Button
                style={styles.interstitialBanner}
                title="InterstitialAd"
                onPress={this.showInterstitial}
                />

                <Button
                style={styles.rewardedBanner}
                title="rewardedVideoAd"
                onPress={this.showRewarded}
                />

                <AdMobBanner style={styles.bannerAd}
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-8799450118077071/5204311445" // Test ID, Replace with your-admob-unit-id
                onDidFailToReceiveAdWithError={this.bannerError} />
                
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  bannerAd: {
    position: "absolute",
    width: "100%",
    bottom: 0
  },
  interstitialBanner: {
    width: "100%",
    marginLeft: 0,
    color: '#00FFFF'
  },
  rewardedBanner: {
    width: "100%",
    marginLeft: 0,
    color: '#00FFFF'
  }
});
