class SubField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 1,
      field_id: this.props.fieldId
    }
    if (this.props.enableSate == 'disable') {
      this.state.level = 0
    } 
  }
  fieldImgClass() {
    var fieldImgClassInfo = {
      'level0': 'wasteland',
      'level1': 'weed',
      'level2': 'space'
    };
    var subClass = ' ';
    if (this.state.level < 3) {
      let levelName = 'level'+this.state.level.toString();
      subClass += fieldImgClassInfo[levelName];
    }
    subClass += ' '+this.props.enableSate;
    return subClass
  }
  clickField() {
    let newState = {
      field_id: this.state.field_id
    };
    if (this.state.level == 2) return;
    newState.level = this.state.level+1;
    this.setState(newState);

    console.log('click field');
  }
  render() {
    return (
      <div 
        className={'sub-field '+this.fieldImgClass()}
        onClick={()=>{this.clickField()}}
      >
      {this.state.level}
        <div className="plant"></div>
      </div>
      
    );
  }
}
class Field extends React.Component {
  renderSubField() {
    let field_list = [];
    for(var i=1;i<=20;i++) {
      let enableSate = '';
      if (i < 12) {
        enableSate = 'disable';
      }
      field_list.push(<SubField enableSate={enableSate}  fieldId={i.toString()} />);
    }
    return field_list;
  }

  render() {
    return (
      <div className="field">
        {this.renderSubField()}
      </div>
    );
  }
}

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

class MailBox extends React.Component {
  render() {
    return (
      <div className="mail-box" onClick={()=>{this.props.clickHandler('MailBox')}}>
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
      Harvest: false,
      MailBox: false,
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
      Harvest: false,
      MailBox: false,
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

    var subframeMailBox = this.state.MailBox?<SubFrameMailBox clickHandler={()=>{this.removeSubFrame()}}/>:''
    subframe_list.push(subframeMailBox);
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
        <MailBox clickHandler={(type)=>{this.openSubFrame(type)}} />
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
class SubFrameHarvest extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        收成-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFrameMailBox extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        信箱-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFramePestControl extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        蟲害防治-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFramePlantFood extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        肥料-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFrameSeed extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        種子-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFrameWater extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        澆水-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFrameWeeding extends React.Component {
  constructor(props) {
    super(props)
    this.items = [
      {
        name: "grove",
        ct_name: "手套"
      },
      {
        name: "sickle",
        ct_name: "鐮刀"
      },
      {
        name: "spray",
        ct_name: "生化除草劑"
      }
    ]
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  select() {
    console.log('select')
    this.close()
  }
  close(e) {
    if (e) e.stopPropagation()
    this.props.clickHandler()
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.items) {
        itemsDom.push(<div 
          className={'item '+item.name}
          onClick={()=>{this.select()}}
          >{item.ct_name}</div>)
      }

      itemsDom.push(<div className="item">未開放</div>)
    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame weeding" id="sub-frame">
        <div className="description">
        除草-子畫面-道具說明 
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}

