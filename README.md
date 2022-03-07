# Loyalty-Cards-Frontend

<img width="1861" alt="image" src="https://user-images.githubusercontent.com/43141076/156966434-b7f28bdb-6769-4805-b98b-dda9e5252839.png">


<img width="1190" alt="image" src="https://user-images.githubusercontent.com/43141076/156972875-70db3e04-b987-4c86-9f1b-648f67d91ef5.png">

Under the **_client_** folder, we have the following parts:
- **actions**
    - **_actions.js_**
    This file defines all the actions. Each action is an object with one or two properties. _type_ is required, and _payload_ is optional. 
    
- **components**
    This folder contains all the React components
    - **Market.jsx**
    - **MarketCreator.jsx**
    - **MarketsDisplay.jsx**
    - **TotalDisplay.jsx**
    
- **constants**
    - **actionTypes.js**
    In this file, we convert each action name from string to a const variable
    
- **containers**
    A container can be treated as a larger component, which holds some small components. All the states and methods the small components need should be passed from the container to each component. 
    
    **_mapStateToProps_** is used to copy those properties from the store to the container.
    
    **_mapDispatchToProps_** is used to define some methods which will be dispatched to corresponding actions.
    
    We have these two functions before the definition of the class. This is also a difference between a _container_ and a _component_.
    
    - **MainContainer.jsx**
    
    In this file, we need only need _totalCards_ and _totalMarkets_ from the state so we can display. We don't need any actions.
    
    - **MarketsContainer.jsx**
    
    In this file, we need some properties and some actions, so we can add markets and update markets.
    
- **Reducers**
    - **index.js**
    
    In this file, we combine all the reducers into one. Each reducer will be given a key name. This key name will be used to retrieve the state contained in this reducer from the whole state.
    
    For this project, we only have one reducer.
   
   - **marketsReducer.js**
    
    A reducer is to update states. In this reducer file, we first build an initial state and use it as a default argument. Then we create the reducer function, which takes two parameters, _state_ and _action_. Remember, an action is an object with two keys, _type_ and _payload_. Inside the reducer function, we do different things based on _action.type_. The return value is a new state.
- **store.js**

We create the _store_ object in this file by invoking _createStore_ and passing in _reducers_.
- **App.jsx**

We treat _App_ as the parent component, holding the _MainContainer_ and _MarketsContainer_. 
- **index.js**

In this file, we wrap the App in the Provider Component and pass in the store. And render it so all the components will be visible.
