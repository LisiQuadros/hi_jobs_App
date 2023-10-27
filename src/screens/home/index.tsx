import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from '../../components/Button'

const Home = () => {
	return (
		<SafeAreaView className="flex-1 bg-slate-800 p-4">
			<View className="flex-1 flex justify-around my-16" >
				<Text className="text-emerald-400 text-4xl font-bold text-center">HiJOBS</Text>
				<View className='flex-col justify-center'>
					<Text className='text-slate-200 text-3xl font-extralight text-left'>More than work... </Text>
					<Text className='text-slate-200 text-3xl text-left'>Find your career now</Text>
				</View>
				<Button/>
			</View>
		</SafeAreaView>
	)
}

export default Home
