import React from 'react'
import { View, StyleSheet } from 'react-native'

interface SeparatorProps {
    color?: string;
}

export const Separator: React.FunctionComponent<SeparatorProps> = ({
    color = "#CED0CE",
}) => {
    return (
        <View
            style={{
                height: 3,
                width: "100%", 
                marginTop: 24,
                marginBottom: 24,
                backgroundColor: color
            }}
        >           
        </View>
    )
}
