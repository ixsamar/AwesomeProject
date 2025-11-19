import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

const LifecycleExample = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("Component Mounted");
        return () => console.log("Component Unmounted");
    }, []);

    useEffect(() => {
        console.log("Value Updated:", value);
    }, [value]);

    return (
        <View>
            <Text style={{ fontSize: 22 }}>Value: {value}</Text>
            <Button title="Increase" onPress={() => setValue(value + 1)} />
        </View>
    );
};

export default LifecycleExample;

/* --------------------- Component Lifecycle (10 Lines) ----------------------
1️⃣ useEffect helps us recreate lifecycle methods.
2️⃣ The first useEffect with [] runs once → componentDidMount.
3️⃣ The return function inside it runs when leaving → componentWillUnmount.
4️⃣ The second useEffect runs whenever value changes → componentDidUpdate.
5️⃣ This creates a full lifecycle flow inside functional components.
6️⃣ Helps track component creation and cleanup.
7️⃣ Useful for listeners, subscriptions, timers, and cleanup.
8️⃣ Keeps performance stable by removing unused tasks.
9️⃣ React replaces old lifecycle methods with hooks.
🔟 Makes functional components powerful like class components.
-------------------------------------------------------------------------- */
