import React from 'react';
import Youtube from '../apis/Youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import "./VideoItem.css"

class App extends React.Component {

    state = { videos: [], selectVideo: null };

    componentDidMount(){
        this.onTermSubmit('planets');
    }

    onTermSubmit = async term => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState({ 
            videos: response.data.items,
            selectVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({ selectVideo: video });
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectVideo} />
                        </div>
                        <div className="five wide column">

                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;