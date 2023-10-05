/* eslint-disable prettier/prettier */
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './Screens/navigation/Navigation'
import { CounterProvider } from './store/counterContext'

const App = () => {
  return (
    <CounterProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <Navigation />
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </CounterProvider>
  )
}

export default App

const styles = StyleSheet.create({})