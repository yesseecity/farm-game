
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
          除草
        </div>
        <div className="arrow" onClick={()=>this.hiddenHandler()}>
          <i className={'fas fa-angle-left '+this.state.arrowIconRotate}></i>
        </div>
        <div className="tool seed" onClick={()=>{this.props.clickHandler('Seed')}}>
          播種
        </div>
        <div className="tool water" onClick={()=>{this.props.clickHandler('Water')}}>
          <i className="fas fa-tint"></i>
        </div>
        <div className="tool pest-control" onClick={()=>{this.props.clickHandler('PestControl')}}>
          <i className="fas fa-spider"></i>
        </div>
        <div className="tool plant-food" onClick={()=>{this.props.clickHandler('PlantFood')}}>
          施肥
        </div>
      </div>
    );
  }
}

class ToolBoxLeft extends React.Component {
  render() {
    return (
      <div className="tools-box left">
        <div className="tool harvest" onClick={()=>{this.props.clickHandler('Harvest')}}>
          收成
        </div>
      </div>
    );
  }
}

