import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import TitleHeader from "../../components/TitleHeader";

const LifecycleExample = () => {
    const [count, setCount] = useState(0);

    // 1️⃣ Mounting
    useEffect(() => {
        console.log("🟢 Mounted!");

        return () => {
            // 3️⃣ Unmounting
            console.log("🔴 Unmounted!");
        };
    }, []);

    // 2️⃣ Updating
    useEffect(() => {
        console.log("🔵 Updated! Count:", count);
    }, [count]);

    const throwError = () => {
        throw new Error("Arrow Component Error!");
    };

    return (
        <View style={{ padding: 20 }}>
            <TitleHeader title="LifecycleExample" />
            <Text style={{ fontSize: 22 }}>Count: {count}</Text>

            <Button title="Increase" onPress={() => setCount(count + 1)} />

            <View style={{ marginTop: 10 }}>
                <Button title="Trigger Error" color="red" onPress={throwError} />
            </View>
        </View>
    );
};

export default LifecycleExample;



/* -------- SIMPLE LIFECYCLE NOTES (Easy to Understand) ---------

#1 MOUNTING
- Happens when component appears on screen.
- useEffect with [] runs once.
- Good for loading data or starting timers.

#2 UPDATING
- Happens when state or props change.
- useEffect with [value] runs every time "value" updates.

#3 UNMOUNTING
- Happens when component is removed.
- Cleanup function inside useEffect() runs here.
- Good for stopping timers or removing listeners.

#4 ERROR HANDLING
- If a component crashes while rendering, we can catch it.
- Here, ChildComponent throws an error when value = 5.
- The error is caught and a friendly message is shown.

--------------------------------------------------------------- */
