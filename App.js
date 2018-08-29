//ActivityIndicator:
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.ActivityIndicator}>
        <ActivityIndicator size={100} hidesWhenStopped={true}/>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  ActivityIndicator: {
    flex: 1,
    justifyContent: 'center'
  }
})


//Button:
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  Button: {
    flex: 1,
    justifyContent: 'center',
    color: 'yellow',
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Button style={styles.Button} title="click me!!" onPress={() => alert('You clicked me!!')} accessibilityLabel="Tap this button" color= 'orange' disabled={false} testID={111}/>
    );
  }
}


//DrawerLayoutAndroid:
import React from 'react';
import { View, StyleSheet, DrawerLayoutAndroid, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  Button: {
    flex: 1,
    justifyContent: 'center',
    color: 'yellow',
  }
})

export default class App extends React.Component {
  render() {
    var nav = (
      <View>
        <Text> Hi! I am in Drawer</Text>
        <Text> Hi! I am in Drawer</Text>
      </View>
    )
    return (
      <DrawerLayoutAndroid renderNavigationView={() => nav} drawerPosition={DrawerLayoutAndroid.positions.Right} drawerWidth={250} keyboardDismissMode={'on-drag'}
        drawerLockMode={'unlocked'} onDrawerOpen={() => alert("Drawer opened!!")} onDrawerClose={() => alert("Drawer Closed!!")} onDrawerSlide={() => 'any function'}
        onDrawerStateChanged={() => "any function"} drawerBackgroundColor='lightblue' statusBarBackgroundColor='green'>
        <TextInput placeholder="type here..." />
      </ DrawerLayoutAndroid>
    )
  }
}


//Image:
import React from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  Image: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.Image}>
        <Image source={{uri: 'https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373_960_720.jpg'}} style={{height: 400, width: 400}} blurRadius={0} 
        onLoad={()=>("loaded!!")} onLoadStart={()=>'any function'} resizeMode={'center'} resizeMethod={'resize'} fadeDuration={500}/>
      </View>
    );
  }
}

//KeyboardAvoidingView:
import React, { Component } from 'react';
import { View, Text, ScrollView, AppRegistry, TextInput, KeyboardAvoidingView, Button } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView keyboardVerticalOffset={100} behaviour={'padding'} enabled={false}>
        <TextInput placeholder="type.."/>
      </KeyboardAvoidingView>
    )
  }
}


//Modalimport React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
          onShow ={()=> 'any function'}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>


      </View>
    );
  }
}

//Picker:
import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

export default class PickerExample extends Component {
  state = { user: '' }
  updateUser(user) {
    this.setState({ user: user })
  }
  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 100, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })} enabled={true} mode={'dialog'} prompt='languages'>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    )
  }
}

//ProgressBarAndroid:
import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, ProgressBarAndroid } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressBarAndroid animating={true}/>
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3"/>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.9}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 10
  }
});


//RefreshControl:
 <RefreshControl
      refreshing={this.state.refreshing}
      onRefresh={this.onRefresh.bind(this)}
      enabled={true}
      progressBackgroundColor = 'yellow'
/>

//ScrollView:
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      array: [1,2,3]
    }
  }
  render() {
    return (
      <ScrollView keyboardDismissMode="none" keyboardShouldPersitTaps="false" pagingEnabled={true}
        removeClippedSubViews={true} scrollEnabled={true} showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true} stickyHeaderIndices={[2]} endFillColor='red' overScrollMode={'always'}
        horizontal={false} >
        <View style={styles.container}>
          <TextInput placeholder="type" />
          <Text style={styles.welcome}>{this.state.array[0]}</Text>
          <Text style={styles.welcome}>{this.state.array[1]}</Text>
          <Text style={styles.welcome}>{this.state.array[2]}</Text>
          <Text style={styles.welcome}>Hello</Text>
          <Text style={styles.welcome}>Hello</Text>
          <Text style={styles.welcome}>Hello</Text>
          <Text style={styles.welcome}>Hello</Text>
          <Text style={styles.welcome}>Hello</Text>
          <Text style={styles.welcome}>Hello</Text>
          <Text style={styles.welcome}>Hello</Text>
          <Text style={styles.welcome}>Hello</Text>
          <Text style={styles.welcome}>Hello</Text>
          <Text style={styles.welcome}>Hello</Text>
          <Text style={styles.welcome}>Hello</Text>
          <Text style={styles.welcome}>Hello</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  welcome: {
    fontSize: 200,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

 

//SectionList:
import React from 'react';
import { FlatList, Text, View, TextInput, ListView, SectionList } from 'react-native';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };

  renderSeparators = () => {
    return (
      <View
        style={{
          height: 10,
          backgroundColor: "red"
        }}
      />
    );
  };

  empty = () => {
    return (
      <View>
        <Text>
          Empty!!
        </Text>
      </View>
    )
  }

  render() {
    //const overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override{item}</Text>
    return (
      // <SectionList
      //   renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
      //   sections={[
      //     { title: 'Title1', data: ['item1', 'item2'], renderItem: overrideRenderItem },
      //     { title: 'Title2', data: ['item3', 'item4'] },
      //     { title: 'Title3', data: ['item5', 'item6'] },
      //   ]}
      // />
      <SectionList
        renderItem={({ item, index, section }) => <Text key={index}>{item}*</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        )}
        sections={[
          { title: 'Title1', data: ['item1', 'item2'] },
          { title: 'Title2', data: ['item3', 'item4'] },
          { title: 'Title3', data: ['item5', 'item6'] },
          { title: 'Title1', data: ['item1', 'item2'] },
          { title: 'Title2', data: ['item3', 'item4'] },
          { title: 'Title1', data: ['item1', 'item2'] },
          { title: 'Title2', data: ['item3', 'item4'] },
          { title: 'Title3', data: ['item5', 'item6'] },
          { title: 'Title1', data: ['item1', 'item2'] },
          { title: 'Title2', data: ['item3', 'item4'] },
        ]}
        keyExtractor={(item, index) => item + index} initialNumToRender={3} ItemSeparatorComponent={this.renderSeparator} inverted={false} ListFooterComponent={this.renderSeparators}
        ListEmptyComponent={this.empty} refreshing={true} ListHeaderComponent={this.renderSeparators} SectionSeparatorComponent={this.renderSeparators} stickySectionHeadersEnabled={true}
      />
    );

  }
}


//Slider:
import React, { Component } from 'react';
import {    
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

export default class App extends Component {
  constructor(props) {
   super(props)
   this.state = { age: 18 }
  } 
  getVal(val){
  console.warn(val);
  }     
  render() {    

    return (
      <View style={styles.container}>
        <Slider
         style={{ width: 300 }}
         step={1}
         minimumValue={18}
         maximumValue={80}
         value={this.state.age}
         onValueChange={val => this.setState({ age: val })}
         onSlidingComplete={ val => this.getVal(val)}
         disabled={false} minimumTrackTintColor='red' maximumTrackTintColor='green'
         value={65} thumbTintColor='grey'
        />
        <Text style={styles.welcome}>
          {this.state.age}
        </Text>            
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


//Switch:
import React, { Component } from 'react';
import {
  StyleSheet,  Text,  View,  StatusBar,  Navigator, Switch
} from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { value: true }
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
       <Switch disabled={false} onTintColor='green' thumbTintColor='blue' tintColor='red' value={this.state.value} 
        onValueChange={(value) => this.setState({value})}/>
      </View>
    )
  }
}


//Text:
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, StatusBar, Navigator, Switch
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text selectable={true} numberOfLines={1} ellipsizeMode='head' onPress={console.warn(123)} disabled={false} selectionColor='yellow' >
            Head world!! Hello world!! Hello world!! Hello world!! 
      </Text>
        </View>
      </View>
    )
  }
}


//TextInput:
import React, { Component } from 'react';
import { AppRegistry, TextInput, Image, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 50, }} onChangeText={(text) => this.setState({ text })} value={this.state.text} autoCapitalize='characters' autoFocus={true}
          blurOnSubmit={true} editable={true} inlineImageLeft='search_icon.png' inlineImagePadding={10} keyboardType={'default'} 
          multiline={true} numberOfLines={10} placeholder="type.." placeholderTextColor='red' returnKeyLabel='hi' secureTextEntry={false} selectTextOnFocus={true}
          underlineColorAndroid='blue'/>
      </View>
    );
  }
}


//ToolbarAndroid:
//ToolbarAndroid:
import React, { Component } from 'react';
import { StyleSheet, View, ListView, RefreshControl, ToolbarAndroid, Text } from 'react-native'

export default class App extends Component {
  onActionSelected(position) {
  }
  render() {
    return (
      <ToolbarAndroid 
      style={styles.toolbar} title="Movies"  logo={require("./and.png")}
      actions = {[
        {title: "Log out", show: "never"},
        {title: "Profile", show: "never"}
      ]} subtitle="toolbar" subtitleColor='cyan' titleColor='yellow'
      />
    )
  }
}
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56,
  }
})


//TouchableHighlight:
import React, { Component } from 'react';
import { StyleSheet, View, ListView, Image, TouchableHighlight, Text, Alert } from 'react-native'

export default class App extends Component {
  constructor(props){
    super(props);
    this.alert = this.alert.bind(this);
  }
  alert(){
    alert("hi")
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.alert} underlayColor='yellow'>
          <View style={styles.button}>
            <Text>Click me</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10
  }
})




//TouchableNativeFeedback 
import React, { Component } from 'react';
import { StyleSheet, View, ListView, Image, TouchableNativeFeedback, Text, Alert } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.alert = this.alert.bind(this);
  }
  alert() {
    alert("hi")
  }
  render() {
    return (
      <View>
        <TouchableNativeFeedback onPress={this.alert} useForeground={true}>
          <View style={styles.button}>
            <Text>Click me</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10
  }
})


//<TouchableOpacity 
import React, { Component } from 'react';
import { StyleSheet, View, ListView, Image, TouchableOpacity, Text, Alert } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.alert = this.alert.bind(this);
  }
  alert() {
    alert("hi")
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.alert} activeOpacity={0.5}>
          <View style={styles.button}>
            <Text>Click me</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10
  }
})


//TouchableWithoutFeedback, 
import React, { Component } from 'react';
import { StyleSheet, View, ListView, Image, TouchableWithoutFeedback, Text, Alert } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.alert = this.alert.bind(this);
  }
  alert() {
    alert("hi")
  }
  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.alert} delayLongPress={10} disabled={false}>
          <View style={styles.button}>
            <Text>Click me</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10
  }
})

//ViewPagerAndroid:
import React, { Component } from 'react';
import { View, Text, ViewPagerAndroid, StyleSheet, TextInput } from 'react-native'; 

export default class MyWeb extends Component {
  render() {
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0} keyboardDismissMode={'none'} scrollEnabled={true} peekEnabled={true} setPage={1}>
        <View style={styles.pageStyle} key="1">
          <TextInput style={{backgroundColor:'red', color: 'white', width: 100}} placeholder="type.."/>
        </View>
        <View style={styles.pageStyle} key="2">
          <Text style={{backgroundColor:'blue', color: 'white'}}>Second page</Text>
        </View>
      </ViewPagerAndroid>
    );
  }
}
const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
   padding: 20,
  }
});


//WebView:
import React, { Component } from 'react';
import { WebView } from 'react-native';
export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://google.com'}}
        style={{marginTop: 20}} automaticallyAdjustContentInsets={true} injectedJavaScript="hi" mediaPlaybackRequiresUserAction={true}
         onLoad={alert("hello")} domStorageEnabled={true} javaScriptEnabled={true} mixedContentMode={true} thirdPartyCookiesEnabled={true}
         userAgent='Mounica' allowsInlineMediaPlayback={true} bounces={true} dataDetectorTypes='phoneNumber' scrollEnabled={false} url='www.marketsimplified.com'
         
      />
   );
  }
}
