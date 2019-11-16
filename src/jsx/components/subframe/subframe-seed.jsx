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

