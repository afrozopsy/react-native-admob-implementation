import React, { Component } from 'react';
import { Text ,View, StyleSheet , Button } from 'react-native';
import Constants from 'expo-constants';

// AdMob
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';

export default class App extends Component {

  bannerError = () => {
    console.log('banner ad not loading')
  }

  bannerAdReceived = () => {
    console.log('banner ad received')
  }

  showInterstitial = async () => {
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
    
    try{
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
    }
    catch(e){
      console.log(e);
    }

    
  }

  showRewarded = async () => {
    AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id
    
    try{
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    }
    catch(e){
      console.log(e);
    }
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
                adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                onDidFailToReceiveAdWithError={this.bannerError}
                onAdViewDidReceiveAd = {this.bannerAdReceived} />

                <PublisherBanner
                 bannerSize="mediumRectangle"
                 adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                 onDidFailToReceiveAdWithError={this.bannerError}
                 onAdViewDidReceiveAd = {this.bannerAdReceived} />
                
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
