import { TouchableOpacity, Text } from 'react-native'

export function Button () {
  return (
		<TouchableOpacity className=" bg-slate-700 rounded-xl wx-5 items-center justify-center py-3">
			<Text className="text-emerald-400  text-xl font-light">
				Let's get started
			</Text>
		</TouchableOpacity>
  )
}
