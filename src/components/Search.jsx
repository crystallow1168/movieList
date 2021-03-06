
class Search extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            searchText: ''
        }
    }

    handleChange(e) {
        this.setState({
            searchText: e.target.value.trim().toLowerCase()
        })
    }

    render () {
        return (
            <div className="search-bar">
            <input type="text" placeholder="Search..." value={this.state.searchText} onChange={ (e) => this.handleChange(e) } ></input>
            <button className="btn btn-success" onClick={ () => this.props.submit(this.state.searchText)}>Search</button>
            </div>
        )
        
    }
}



export default Search