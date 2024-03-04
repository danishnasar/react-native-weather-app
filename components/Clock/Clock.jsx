import { Text } from "react-native";
import { s } from "./Clock.style";
import { useEffect, useState } from "react";

export function Clock() {
    const [time, setTime] = useState('');

    const getCurrentTime = () => {
        const currDay = new Date();
        const currHour = currDay.getHours() > 12 ? currDay.getHours() - 12 : currDay.getHours();
        const timePeriod = currDay.getHours() >= 12 ? 'PM' : 'AM';
        const currTime = `${currHour}:${currDay.getMinutes().toString().padStart(2,'0')} ${timePeriod}`;

        return currTime;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getCurrentTime);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

  return (
    <Text style={s.clockText}>{time}</Text>
  );
}
