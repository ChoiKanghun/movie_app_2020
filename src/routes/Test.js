import React from "react";
import axios from "axios";

class Test extends React.Component {
    state = {
        isLoading:true,
        data: []
    }
    
    async componentDidMount() {
        this.state.data = await axios.get("https://yts.mx/api/v2/list_movies.json");
        this.setState({isLoading:false});
    }
    render() {
        return (
		<div>hello</div>
	)
    }

}

export default Test;
