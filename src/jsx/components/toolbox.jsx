
class ToolBoxRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        hidden: false,
        hiddenOffset: '',
        arrowIconRotate: 'rotate'
    }
  }
  hiddenHandler(){
    if (this.state.hidden) {
      this.setState({
        hidden: false,
        hiddenOffset: '',
        arrowIconRotate: 'rotate'
      });
    } else {
      this.setState({
        hidden: true,
        hiddenOffset: 'hidden',
        arrowIconRotate: ''
      });
    }
  }

  render() {
    return (
      <div className={'tools-box right '+this.state.hiddenOffset}>
        <div className="tool weeding" onClick={()=>{this.props.clickHandler('Weeding')}}>
        </div>
        <div className="arrow" onClick={()=>this.hiddenHandler()}>
          <i className={'fas fa-angle-left '+this.state.arrowIconRotate}></i>
        </div>
        <div className="tool seed" onClick={()=>{this.props.clickHandler('Seed')}}>
        </div>
        <div className="tool water" onClick={()=>{this.props.clickHandler('Water')}}>
        </div>
        <div className="tool pest-control" onClick={()=>{this.props.clickHandler('PestControl')}}>
        </div>
        <div className="tool plant-food" onClick={()=>{this.props.clickHandler('PlantFood')}}>
        </div>
      </div>
    );
  }
}

class ToolBoxBottom extends React.Component {
  render() {
    return (
      <div className="tools-box bottom">
      
        <div className="tool fence-1">
        </div>
        <div className="tool fence-2">
        </div>
        <div className="tool harvest" onClick={()=>{this.props.clickHandler('Harvest')}}>
          
        </div>
        <div className="tool mail-box" onClick={()=>{this.props.clickHandler('MailBox')}}>
        </div>
        
      </div>
    );
  }
}

