//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/*
    prop-types：属性にたいする型チェックを行うライブラリ
*/

function App() {
  //以下はdictionaryみたいなもの
  const propfiles =[
    {name: "Taro", age:10},
    {name: "Hanako", age:5},
    {name:"NoName",age:4}
  ]
  return (
    <div>
      {
        propfiles.map((propfiles,index)=>{
                  //User関数を実行 name,ageは引数と考えればよい
                  //データ分別をするためにkeyをつける
          return  <User name={propfiles.name} age={propfiles.age} key={index}/>
        })
      }
    </div>
  )
  //上記ではUserコンポーネントにTaroという属性(props)を与えている
}
//関数みたいなもの
const User=(props)=>{
return <div>Hi! I am {props.name} and {props.age} years old!</div>
}
//受け取るコンポーネントを定義
User.propTypes ={
  name:PropTypes.string,
  age: PropTypes.number.isRequired//ageが必ず設定されていなければならない
}
//実行するコンポーネントを指定
export default App;
