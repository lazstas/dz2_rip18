import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadMovies } from 'components/List/reducer';

class List extends Component {
  componentDidMount() {
    const { isLoading, movies } = this.props;

    if (!isLoading && movies.results.length === 0) {
      const { loadMovies } = this.props
      loadMovies();
    }
  }

  render() {
    const { movies, isLoading } = this.props;
    console.log(movies);

    return (
      isLoading ? <h1 className='text-center mt-4'>Загрузка</h1> :
        <div className='container mt-4' >
          {movies.results.map(el => {
            return (
              <div key={el.id}>
                <div className="row" >
                  <div className='col-lg-3'>
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${el.backdrop_path}`} alt='backdrop_path'></img>
                  </div>
                  <div className='col-lg-9'>
                    <h3>{el.title} <span className='ml-4 text-success'>{el.vote_average}</span></h3>
                    <p>Для взрослых: {el.adult ? <span>Да</span> : <span>Нет</span>}</p>
                    <p>Оригинальный язык: {el.original_language}</p>
                  </div>
                  <p className='mt-4'><span className='text-primary'>Описание</span>: {el.overview}</p>
                </div>
                <hr />
              </div>
            );
          })
          }
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.list;
}

const mapDispatchToProps = {
  loadMovies
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
