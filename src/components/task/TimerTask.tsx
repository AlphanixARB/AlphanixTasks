import { useState } from 'react';
import { View, Text, Pressable} from 'react-native';
import React from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import { ITask } from '../../types/Task';
import { localNotification } from '../../service/Notifications';
import { TimerTaskStyle } from '../../styles/components/task/TimerTask';
import { useTranslation } from 'react-i18next';

interface Props {
    tasks: ITask;
}

export function TimerTask ({ tasks }: Props) {
    const [name, setName] = useState('');
    const [isPlaying, setPlaying] = useState(false);

    const { t, i18n } = useTranslation();

    const time = (time: String) => {
        const hours = new Date(String(time)).getHours();
        const minutes = new Date(String(time)).getMinutes();
        const seconds = ((hours * 60) * 60) + minutes * 60;
        return seconds;
    }

    const timer = function (time :any) {
        const date = new Date(time * 1000);
        let hh = date.getUTCHours();
        let mm = date.getUTCMinutes();
        let ss = date.getSeconds();
        if (hh < 10) {hh = "0"+hh;}
        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to HH:MM:SS
        const t = hh+":"+mm+":"+ss;
        return t;
    }

    const onToggleTimerPlaying = async () => {
        setPlaying(!isPlaying);
    }

    const onComplete = async () => {
        localNotification(tasks);
        setPlaying(!isPlaying);
    }

    return(
        <View style={TimerTaskStyle.container}>
            {/* <View>
                <Text style={{color:'white'}}>Task Name</Text>
            </View> */}
            <View style={TimerTaskStyle.circleTimerContainer}>
                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    duration={time(String(tasks.timer))}
                    colors={['#04D6F4', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                    strokeWidth={13}
                    trailColor='#1F2535'
                    size={220}
                    isSmoothColorTransition
                    onComplete={() => onComplete()}
                >
                    {({ remainingTime }) => <Text style={{color: 'white', fontSize: 30}}>{timer(remainingTime)}</Text>}
                </CountdownCircleTimer>
            </View>
            <View style={TimerTaskStyle.centeredView}>
                <Pressable onPress={onToggleTimerPlaying} style={TimerTaskStyle.button}>
                    <View>
                        <Text style={TimerTaskStyle.text}>{isPlaying === true ? t("pause") : t("start")}</Text>
                    </View>
                </Pressable>
            </View>
            
        </View>
    )
}