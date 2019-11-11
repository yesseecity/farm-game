class AccountInfo extends React.Component{
  render() {
    return (
      <div className="account-info">
        <div className="level">Lv 1</div>
        <div className="exp">
          <div className="full-exp">
            <div className="real-exp"></div>
          </div>
          <span className="text">xp</span>
        </div>
        <div className="money">$ 100,010</div>
      </div>
    );
  }
}

class Shop extends React.Component{
  render() {
    return (
      <div className="shop">
        <i className="fas fa-store"></i>
      </div>
    );
  }
}
class Weather extends React.Component{
  render() {
    return (
      <div className="weather">
        <i className="fas fa-cloud-moon"></i>
        <span className="temperature-text">25</span>
        <i className="fas fa-temperature-low"></i>
      </div>
    );
  }
}
class SubField extends React.Component {
  render() {
    return (
      <div className="sub-field"></div>
    );
  }
}
class Field extends React.Component {
  renderSubField() {
    let field_list = [];
    for(var i=1;i<=20;i++) {
      let enableSate = false
      if (i < 10) {
        enableSate = true
      }
      field_list.push(<SubField enable={enableSate}  value={i} />)
    }
    return field_list
  }

  render() {
    return (
      <div className="field">
        {this.renderSubField()}
      </div>
    );
  }
}

class MailBox extends React.Component {
  render() {
    return (
      <div className="mail-box">
        mail-box
      </div>
    );
  }
}

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
        <div className="tool weeding" onClick={()=>{this.props.clickHandler('Weeding')}}>
          除草
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


class MainFrame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Seed: false,
      Water: false,
      PestControl: false,
      PlantFood: false,
      Weeding: false,
      Harvest: false
    }
  }
  openSubFrame(type) {
    var frameSetting = {
      Seed: false,
      Water: false,
      PestControl: false,
      PlantFood: false,
      Weeding: false,
      Harvest: false
    };
    frameSetting[type]=true;

    this.setState(frameSetting);
  }
  removeSubFrame() {
    this.setState({
      Seed: false,
      Water: false,
      PestControl: false,
      PlantFood: false,
      Weeding: false,
      Harvest: false
    });
  }
  rendSubFrame() {
    var subframe_list = [];
    var subframeSeed = this.state.Seed?<SubFrameSeed clickHandler={()=>{this.removeSubFrame()}}/>:''
    subframe_list.push(subframeSeed);
    
    var subframeWater = this.state.Water?<SubFrameWater clickHandler={()=>{this.removeSubFrame()}}/>:''
    subframe_list.push(subframeWater);
    
    var subframePestControl = this.state.PestControl?<SubFramePestControl clickHandler={()=>{this.removeSubFrame()}}/>:''
    subframe_list.push(subframePestControl);
    
    var subframePlantFood = this.state.PlantFood ?<SubFramePlantFood clickHandler={()=>{this.removeSubFrame()}}/>:''
    subframe_list.push(subframePlantFood);
    
    var subframeWeeding = this.state.Weeding?<SubFrameWeeding clickHandler={()=>{this.removeSubFrame()}}/>:''
    subframe_list.push(subframeWeeding);
    
    var subframeHarvest = this.state.Harvest?<SubFrameHarvest clickHandler={()=>{this.removeSubFrame()}}/>:''
    subframe_list.push(subframeHarvest);
    return subframe_list
  }
  click_main(e) {
    e.stopPropagation()
  }
  render() {
    return (
      <div className="main-frame" onClick={this.click_main}>
        <AccountInfo />
        <Shop />
        <Weather />
        <Field />
        <div className="fence" hidden>
          <div className="fence-divs">
            <div className="fence-1"></div>
            <div className="fence-2"></div>
            <div className="fence-3"></div>
            <div className="fence-4"></div>
            <div className="fence-5"></div>
            <div className="fence-6"></div>
          </div>
        </div>
        <MailBox />
        <ToolBoxRight clickHandler={(type)=>{this.openSubFrame(type)}} />
        <ToolBoxLeft clickHandler={(type)=>{this.openSubFrame(type)}} />
        {this.rendSubFrame()}
      </div>
    );
  }
}

ReactDOM.render(
  <MainFrame />, 
  document.body
)