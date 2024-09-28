import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [counter, setCounter] =useState(10);

  function addOne() {
    setCounter(counter + 1);
  }
  function subtractOne() {
    if (counter > 1) { 
      setCounter(counter - 1);
    }
  }
  function resetCounter() {
    setCounter(0);
  }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{fontSize:60}}>{ counter }</Text>
<View style={{flexDirection: "row"}}>
  <Button 
    onPress={addOne}
  title="Plus" 
  />
  
  {counter > 1 && ( // Visar "Minus"-knappen endast när numret är större än 1
          <Button 
            onPress={subtractOne}
            title="Minus" 
          />
        )}
  
  {counter > 0 && ( // Visar "Reset"-knappen endast när numret är större än 0
          <Button 
            onPress={resetCounter}
            title="Reset" 
  />
  
  )}
  </View>
  </View>
    );
  }
