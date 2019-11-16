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
        <div className="money">$ 1,117</div>
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
        <span className="temperature-text">25°C</span>
      </div>
    );
  }
}

class MailBox extends React.Component {
  render() {
    return (
      <div className="mail-box" onClick={()=>{this.props.clickHandler('MailBox')}}>
      </div>
    );
  }
}

class MainFrame extends React.Component {
  constructor(props) {
    super(props)
    var defaultFrame = {
      frame: {
        Seed: false,
        Water: false,
        PestControl: false,
        PlantFood: false,
        Weeding: false,
        Harvest: false,
        MailBox: false,
      }
    };
    this.mouseState = {
      mouse: ''
    }
    this.state = Object.assign({}, defaultFrame, this.mouseState)
  }
  openSubFrame(type) {
    var defaultFrame = {
      frame: {
        Seed: false,
        Water: false,
        PestControl: false,
        PlantFood: false,
        Weeding: false,
        Harvest: false,
        MailBox: false,
      }
    }

    defaultFrame.frame[type]=true;
    var newState = Object.assign({}, defaultFrame, this.mouseState)
    console.log('newState: ', newState)
    this.setState(newState);
  }
  closeSubFrame() {
    var defaultFrame = {
      frame: {
        Seed: false,
        Water: false,
        PestControl: false,
        PlantFood: false,
        Weeding: false,
        Harvest: false,
        MailBox: false,
      }
    }
    var newState = Object.assign({}, defaultFrame, this.mouseState)
    this.setState(newState);
  }
  rendSubFrame() {
    var subframe_list = [];

    if (this.state.frame.Weeding) {
      let subframeWeeding = <SubFrameWeeding 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />
      subframe_list.push(subframeWeeding);
    }

    if (this.state.frame.Seed) {
      let subframeSeed = <SubFrameSeed 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />      
      subframe_list.push(subframeSeed);
    }

    if (this.state.frame.Water) {
      let subframeWater = <SubFrameWater 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />      
      subframe_list.push(subframeWater);
    }

    if (this.state.frame.PestControl) {
      let subframePestControl = <SubFramePestControl 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />      
      subframe_list.push(subframePestControl);
    }

    if (this.state.frame.PlantFood) {
      let subframePlantFood = <SubFramePlantFood 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />      
      subframe_list.push(subframePlantFood);
    }

    if (this.state.frame.Harvest) {
      let subframeHarvest = <SubFrameHarvest 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />      
      subframe_list.push(subframeHarvest);
    }

    if (this.state.frame.MailBox) {
      let subframeMailBox = <SubFrameMailBox 
        clickHandler={()=>{this.closeSubFrame()}}
        changeMouseState={(state)=>this.changeMouseState(state)}
      />      
      subframe_list.push(subframeMailBox);
    }

    return subframe_list
  }
  click_main(e) {
    e.stopPropagation()
    e.preventDefault()
    if (e.button == 0) {
      // mouse left button
    } else if (e.button == 2) {
      // mouse right button
      this.changeMouseState('')
    }
  }
  changeMouseState(mouseState) {
    console.log('main-frame mouseState: ', mouseState)
    var defaultFrame = {
      frame: {
        Seed: false,
        Water: false,
        PestControl: false,
        PlantFood: false,
        Weeding: false,
        Harvest: false,
        MailBox: false,
      }
    };
    this.mouseState = {
      mouse: mouseState
    }
    this.setState(Object.assign({}, defaultFrame, this.mouseState));
  }
  mouseImg() {
    if (this.state.mouse == '') {
      return ''
    } else {
      return 'mouse-'+this.state.mouse
    }
  }
  render() {
    return (
      <div className={'main-frame '+this.mouseImg()} 
          onClick={(e)=>{this.click_main(e)}}
          onContextMenu={(e)=>{this.click_main(e)}}
      >
        <AccountInfo />
        <Shop />
        <Weather />
        <Field mouseState={this.state.mouse}/>
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
        <div className="greenhouse"></div>
        <MailBox />
        <ToolBoxBottom clickHandler={(type)=>{this.openSubFrame(type)}} />
        <ToolBoxRight clickHandler={(type)=>{this.openSubFrame(type)}} />
        {this.rendSubFrame()}
      </div>
    );
  }
}

ReactDOM.render(
  <MainFrame />, 
  document.body
)