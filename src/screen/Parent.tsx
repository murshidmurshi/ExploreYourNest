import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { RootParamList } from '../GlobalTypes'
import UserHome from './user/UserHome'
import AdminHome from './admin/AdminHome'
import AgentHome from './agent/AgentHome'

type ParentProps = {
    route: RouteProp<RootParamList, "Parent">
}
export default function Parent({ route }: ParentProps) {
    let { role } = route.params;
    return (
        <>
            {role == "u" ? (
                <UserHome />
            ) : role == "ad" ? (
                <AdminHome />
            ) : (
                <AgentHome />
            )}
        </>
    )
}

const styles = StyleSheet.create({})