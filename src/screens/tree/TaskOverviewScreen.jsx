import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader } from '../../components'

const TaskOverviewScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <CustomHeader title="Task Overview" showBackButton={true} />
    </View>
  )
}

export default TaskOverviewScreen