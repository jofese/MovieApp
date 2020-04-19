import React, { Fragment } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import { Typography } from '@material-ui/core';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      movieList:[],
      search:'',
      error:'Search movie'
    };
  };

  searchOnApi = async (term) => {
    if(term === ''){
      return this.setState({error:'Search movie.',movieList:[]}); 
    }
    let res = await fetch('http://www.omdbapi.com/?apikey={YOUR_APIKEY}&s='+term);
    let data = await res.json();
    if(data.Response === 'True'){
      this.setState({movieList: data.Search,error:''});
    }else{
      this.setState({error:data.Error,movieList:[]});
    }
    
  }

  onChangeSearch(value){
    this.searchOnApi(value);
  }

  render(){
    return (
      <div>
        <NavBar onChangeSearch={this.onChangeSearch.bind(this)}/>
      {
        this.state.error !== ''? <Typography align="center" style={{marginTop:'1rem'}}>{this.state.error}</Typography> 
        : <MovieList movieList={this.state.movieList}/>
      }
      </div>
    );
  };
}

export default App;
