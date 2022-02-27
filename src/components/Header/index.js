import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../common'
import { styles } from './style'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerTextCon}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon name={'chevron-left'} size={30} color={COLORS.Primary} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    {props.headerText}
                </Text>
            </View>
            {props.homeScreen ? null :
                <TouchableOpacity
                    style={styles.favIcon}
                    onPress={props.onPressIcon}
                >
                    <Icon name={props.icon} size={30} color={COLORS.Primary} />

                </TouchableOpacity>
            }
        </View>
    )
}

export default Header;