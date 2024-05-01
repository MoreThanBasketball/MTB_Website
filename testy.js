
class WelcomeBack extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            apppVersion: '1'
        }
    }

    render(){
        return(
            <>
                <h2>Hello {'Friend'}! Welcome Back.</h2>
                {
                    this.state.apppVersion && this.state.apppVersion < 2
                    ? <p></p> 
                    : ''
                }
                <CoolButton customText={this.state.apppVersion && this.state.apppVersion < 2 ? 'Download v2' : 'Download'} />
            </>
        )
    }


}