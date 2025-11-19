import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleHeader from "../../components/TitleHeader";

const UseStateExample = () => {
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView>
            <TitleHeader title="UseState" />
            <Text style={{ fontSize: 22 }}>Count: {count}</Text>
            <Button title="Increase" onPress={() => setCount(count + 1)} />
        </SafeAreaView>
    );
};

export default UseStateExample;

/* 

#useState Hook
* useState hook used to store some data on it.
* It stores dynamic data like text, numbers, booleans.
* When the state changes, the UI updates automatically.

#process
* Here, count is the state variable.
* setCount updates the count value.
* Clicking the button increases the count.
* No need to refresh; React updates the UI for us.
* Useful for toggles, forms, counters, and inputs.
* Must be used only inside functional components.

*/
