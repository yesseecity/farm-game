class SubField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 1,
      field_id: this.props.fieldId,
      wet: '',
      plant: ''
    }
    if (this.props.enableState == 'disable') {
      this.state.level = 0
    } 
  }
  fieldImgClass() {
    var fieldImgClassInfo = {
      'level0': 'wasteland',
      'level1': 'weed',
      'level2': 'space',
      'level3': 'seed',
      'level4': 'seeding',
      'level5': 'grow-small',
      'level6': 'grow',
    };
    var subClass = ' ';
    if (this.state.level > -1) {
      let levelName = 'level'+this.state.level.toString();
      subClass += fieldImgClassInfo[levelName];
    }
    subClass += ' '+this.state.wet;
    return subClass
  }
  clickField() {
    // console.log('click field');
    // console.log('mouseState: ', this.props.mouseState)
    let newState = {
      field_id: this.state.field_id,
      wet: this.state.wet,
      plant: this.state.plant
    };
    if (this.state.field_id < 12) return;
    let weedingTools = ['grove', 'sickle', 'hoe', 'spray'];
    let seeds = ['white-radish', 'cauliflower', 'qingjiang', 'persimmon'];
    let water = ['watering-can', 'pipe'];
    if (this.state.level == 6 && weedingTools.indexOf(this.props.mouseState) > -1) {
      newState.level = 1;
    } else if (this.state.level == 6 && this.props.mouseState==''){
      this.props.addHarvest(this.state.plant);
      newState.level = 2;
      newState.wet = '';
    } else if (this.state.level == 6) {
      return;
    }
    if (water.indexOf(this.props.mouseState) > -1 && this.state.level > 1 ) {
      newState.wet = 'wet';
    }

    if (weedingTools.indexOf(this.props.mouseState) > -1) {
      newState.level = 2;
    } else if (this.state.level == 2 && seeds.indexOf(this.props.mouseState) > -1) {
      newState.plant = this.props.mouseState;
      newState.level = 3;
    } else if (
              this.state.level > 2 && 
              newState.wet == 'wet' && 
              this.props.mouseState.indexOf('plant-food') > -1
              ){
      newState.wet = '';
      newState.level = this.state.level + 1;
    }
    // newState.level = this.state.level+1;
    this.setState(newState);

  }
  render() {
    return (
      <div 
        className={'sub-field '+this.fieldImgClass()}
        onClick={()=>{this.clickField()}}
      >
        <div className={'plant '+this.state.plant}></div>
      </div>
      
    );
  }
}
class Field extends React.Component {
  constructor(props) {
    super(props)
  }
  renderSubField() {
    let field_list = [];
    for(var i=1;i<=20;i++) {
      let enableSate = '';
      if (i < 12) {
        enableSate = 'disable';
      }
      let dom = <SubField 
        enableState={enableSate} 
        fieldId={i.toString()} 
        mouseState={this.props.mouseState}
        addHarvest={(plantName)=>{this.props.addHarvest(plantName)}}
      />
      field_list.push(dom);
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
  renderItem() {
    var itemsDom = []

    let itemsName = Object.keys(this.props.harvest['harvest']);
    for (let itemName of itemsName){
      let amount = this.props.harvest['harvest'][itemName]
      // console.log('itemName: ', itemName)
      // console.log('amount: ', amount)
      let dom = <div className={'item '+itemName}>
          <div className={'img '+itemName}></div>
          <div className="price">$ 20</div>
          <input className="count" type="number" Max={amount} Min="0" />
        </div>;
      itemsDom.push(dom);
    }
    return itemsDom;
  }
  render() {
    return (
      <div className="sub-frame harvest" id="sub-frame">
        <div className="header">
          收成
        </div>

        <div className="items">
          {this.renderItem()}
        </div>
        <div className="submit">
          訂購
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFrameMailBox extends React.Component {
  constructor(props) {
    super(props)
    this.news = [
      {
        title: '(國際) 2019/11/07 蝗蟲，正在入侵印度 | 征戰斯芬克斯',
        url: 'https://read01.com/oABdNo3.html#.Xc_zRzMzbIU'
      },
      {
        title: '(國內) 2019/11/16 輔導落花生契作契銷農民收益有保障 ',
        url: 'https://www.afa.gov.tw/cht/index.php?code=list&flag=detail&ids=630&article_id=5529'
      },
      {
        title: '(國內) 2019/11/12 大宗蔬菜播種量及供苗預警資訊 ',
        url: 'https://www.afa.gov.tw/cht/index.php?code=list&flag=detail&ids=307&article_id=45846'
      },
      {
        title: '(國內) 2019/11/15 2019臺灣國際茶業博覽會，讓消費者安心品好茶 ',
        url: 'https://www.afa.gov.tw/cht/index.php?code=list&flag=detail&ids=307&article_id=45857'
      }

    ]
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.news) {
        console.log(item.title)
        itemsDom.push(<a href={item.url} target="_blank">{item.title}</a>)
      }

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame mail-box" id="sub-frame">
        <div className="header">
          農業新聞
        </div>
        <div className="news" onClick={(e)=>{e.stopPropagation()}}>
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFramePestControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ''
    };
    this.items = [
      {
        name: "item1",
        ct_name: "生物性農藥",
        desc: "天然物質如動物、植物、微生物及其所衍生之產品，對人畜安全無毒害，不會危及鳥類，其他生物"      },
      {
        name: "item2",
        ct_name: "茶皂素",
        desc: "天然植物提煉之殺蟲劑。優點：易降解，無殘留"
      },
      {
        name: "item3",
        ct_name: "除蟲菊精",
        desc: "天然化合物殺蟲劑。優點：高效、低毒、易降解"
      },
      {
        name: "item4",
        ct_name: "礦物油",
        desc: "天然殺蟲劑、殺菌劑，使昆蟲物理性窒息。優點：高效、經濟"
      }
    ];
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  select(itemName) {
    console.log('select: ', itemName);
    this.props.changeMouseState(itemName);
    this.close();
  }
  close(e) {
    if (e) e.stopPropagation();
    this.props.clickHandler();
  }
  renderDesc(desc) {
    this.setState({'desc': desc});
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.items) {
        itemsDom.push(<div 
          className={'item '+item.name}
          onMouseOver={()=>{this.renderDesc(item.desc)}}
          >{item.ct_name}</div>)
      }

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame pest-control" id="sub-frame">
        <div className="description">
          {this.state.desc}
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFramePlantFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ''
    };
    this.items = [
      {
        name: "plant-food",
        ct_name: "有機肥料",
        desc: "市售的有機肥料，植物的最愛。"
      },
      {
        name: "plant-food2",
        ct_name: "有機牛糞",
        desc: "農家自己做的有機牛糞，含氮量似乎有點高。"
      },
      {
        name: "plant-food3",
        ct_name: "有機雞糞",
        desc: "農家自己弄的有機雞糞，含氮量似乎有點高。"
      }
    ];
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  select(itemName) {
    console.log('select: ', itemName);
    this.props.changeMouseState(itemName);
    this.close();
  }
  close(e) {
    if (e) e.stopPropagation();
    this.props.clickHandler();
  }
  renderDesc(desc) {
    this.setState({'desc': desc})
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.items) {
        itemsDom.push(<div 
          className={'item '+item.name}
          onClick={()=>{this.select(item.name)}}
          onMouseOver={()=>{this.renderDesc(item.desc)}}
          >{item.ct_name}</div>)
      }
      itemsDom.push(<div className="item disable"></div>)

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame plant-food" id="sub-frame">
        <div className="description">
          {this.state.desc}
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFrameSeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ''
    };
    this.items = [
      {
        name: "white-radish",
        ct_name: "白蘿蔔",
        desc: "十字花科,根菜類植物。品種氣候適應性不同，播種期和生產期也不同，全年可買。 肉質根膨大期管理：蘿蔔露肩以後，要保持土壤濕潤，防止土壤忽干忽濕，要小水勤澆，避免過分乾旱和大水漫灌。"
      },
      {
        name: "cauliflower",
        ct_name: "花椰菜",
        desc: "十字花科，甘藍的一種變種。生長過程喜歡充足的陽光，具強耐寒及耐熱性，對水分的需求大。適合種在排水良好、耕層深厚及保水力強的土壤上。"
      },
      {
        name: "qingjiang",
        ct_name: "青江菜",
        desc: "十字花科，葉菜類植物。喜冷涼，需日照充足，可越冬也可夏季栽培。對土壤適應性強，但為淺根性，要注意保持排水良好，避免根部腐爛。"
      }
    ];
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  select(itemName) {
    console.log('select: ', itemName);
    this.props.changeMouseState(itemName);
    this.close();
  }
  close(e) {
    if (e) e.stopPropagation();
    this.props.clickHandler();
  }
  renderDesc(desc) {
    this.setState({'desc': desc})
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.items) {
        itemsDom.push(<div 
          className={'item '+item.name}
          onClick={()=>{this.select(item.name)}}
          onMouseOver={()=>{this.renderDesc(item.desc)}}
          >{item.ct_name}</div>)
      }
      itemsDom.push(<div className='item persimmon disable'>未開放</div>)
    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame seeds" id="sub-frame">
        <div className="description">
          {this.state.desc}
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFrameWater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ''
    };
    this.items = [
      {
        name: "watering-can",
        ct_name: "澆水器",
        desc: "經典的澆水器，種植物一定要買一個。"
      },
      {
        name: "pipe",
        ct_name: "水管",
        desc: "接上水龍頭就能帶來源源不絕的水，但要小心水費變很多。"
      },
      // {
      //   name: "water",
      //   ct_name: "微型噴頭",
      //   desc: "說明欄"
      // },
      // {
      //   name: "water",
      //   ct_name: "滴灌管子",
      //   desc: "說明欄"
      // }
    ];
  }
  componentDidMount() {
    $('.sub-frame').draggable();
    $('.disable').tooltip({
      content: "這個功能要等正式上現才會開放喔!"
    });
  }
  select(itemName) {
    console.log('select: ', itemName);
    this.props.changeMouseState(itemName);
    this.close();
  }
  close(e) {
    if (e) e.stopPropagation();
    this.props.clickHandler();
  }
  renderDesc(desc) {
    this.setState({'desc': desc})
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.items) {
        itemsDom.push(<div 
          className={'item '+item.name}
          onClick={()=>{this.select(item.name)}}
          onMouseOver={()=>{this.renderDesc(item.desc)}}
          >{item.ct_name}</div>)
      }
      itemsDom.push(<div className='item disable'>未開放</div>)
      itemsDom.push(<div className='item disable'>未開放</div>)

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame water" id="sub-frame">
        <div className="description">
          {this.state.desc}
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}


class SubFrameWeeding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ''
    };
    this.items = [
      {
        name: "grove",
        ct_name: "手套",
        desc: "人家沒錢，只買的起手套。"
      },
      {
        name: "sickle",
        ct_name: "鐮刀",
        desc: "這是鐮刀不是香蕉刀。"
      },
      {
        name: "hoe",
        ct_name: "鋤頭",
        desc: "你好，我是鋤頭也有人叫我豬頭。"
      },
      {
        name: "spray",
        ct_name: "微生物除草劑",
        desc: "利用寄主專一性，感染致病力強的植物病原菌或其酵素來消除雜草。"
      }
    ];
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  select(itemName) {
    console.log('select: ', itemName);
    this.props.changeMouseState(itemName);
    this.close();
  }
  close(e) {
    if (e) e.stopPropagation();
    this.props.clickHandler();
  }
  renderDesc(desc) {
    this.setState({'desc': desc})
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.items) {
        itemsDom.push(<div 
          className={'item '+item.name}
          onClick={()=>{this.select(item.name)}}
          onMouseOver={()=>{this.renderDesc(item.desc)}}
          >{item.ct_name}</div>)
      }

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame weeding" id="sub-frame">
        <div className="description">
          {this.state.desc}
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
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
          <span className="text">exp</span>
        </div>
        <div className="money">$ 1,117</div>
      </div>
    );
  }
}

class Shop extends React.Component{
  render() {
    return (
      <div className="shop disable">
      </div>
    );
  }
}
class Weather extends React.Component{
  render() {
    return (
      <div className="weather">
        <div className="sun"></div>
        <span className="temperature-text">31°C</span>
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
    this.harvest= {
      'harvest': {
      }
    };
    this.mouseState = {
      mouse: ''
    };
    this.state = Object.assign({}, defaultFrame, this.harvest, this.mouseState)
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
    var newState = Object.assign({}, defaultFrame, this.harvest, this.mouseState)
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
    var newState = Object.assign({}, defaultFrame, this.harvest, this.mouseState)
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
        harvest={this.harvest}
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
  addHarvest(name) {
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
    if (name in this.harvest['harvest']) {
      this.harvest['harvest'][name] += 1;
    } else {
      this.harvest['harvest'][name] = 1;
    }
    var newState = Object.assign({}, defaultFrame, this.harvest, this.mouseState)
    this.setState(newState);
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
        <Field mouseState={this.state.mouse} addHarvest={(plantName)=>{this.addHarvest(plantName)}}/>
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
        <div className="greenhouse disable" alert="還沒開放"></div>
        <MailBox />
        <ToolBoxBottom clickHandler={(type)=>{this.openSubFrame(type)}} />
        <ToolBoxRight clickHandler={(type)=>{this.openSubFrame(type)}} />
        <div class="chicken c1"></div>
        <div class="chicken c2"></div>
        <div class="chicken-s c4"></div>
        <div class="chicken-s c5"></div>
        <div class="chicken-s c6"></div>
        <div class="chicken-s c7"></div>
        <div class="tree tree1 t1" ></div>
        <div class="tree tree2 t2" ></div>
        <div class="tree tree1 t3" ></div>
        <div class="tree tree2 t4" ></div>
        {this.rendSubFrame()}
      </div>
    );
  }
}

ReactDOM.render(
  <MainFrame />, 
  document.body
)