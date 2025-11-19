import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const UseEffectExample = () => {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        setTimeout(() => {
            setMessage("Data Loaded!");
        }, 2000);
    }, []);

    return (
        <View>
            <Text style={{ fontSize: 22 }}>{message}</Text>
        </View>
    );
};

export default UseEffectExample;

/* --------------------- useEffect Hook (10 Lines) ----------------------
1️⃣ useEffect runs code automatically after the component loads.
2️⃣ Used for API calls, timers, listeners, and side effects.
3️⃣ The empty dependency array means it runs only once.
4️⃣ Here, a fake delay updates the message after 2 seconds.
5️⃣ Works like componentDidMount in class components.
6️⃣ Helps us run code outside the UI logic.
7️⃣ It re-runs only when dependencies change.
8️⃣ Prevents unnecessary or repeated function calls.
9️⃣ Very important when fetching or updating data.
🔟 Makes components interactive and dynamic.
----------------------------------------------------------------------- */
