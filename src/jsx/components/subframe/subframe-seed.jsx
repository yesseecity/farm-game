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
        desc: "白蘿蔔：十字花科，屬根菜類植物。品種氣候適應性不同，播種期和生產期也不同，全年可買。肉質根膨大期管理：蘿蔔露肩後，需保持土壤濕潤且切勿忽乾忽濕，避免過分乾旱和大水漫灌。"
      },
      {
        name: "cauliflower",
        ct_name: "花椰菜",
        desc: "花椰菜：十字花科，屬甘藍的一種變種。生長過程需充足陽光，具強耐寒及耐熱性，對水分需求大，適合種在排水良好、耕層深厚及保水力強的土壤上。"
      },
      {
        name: "qingjiang",
        ct_name: "青江菜",
        desc: "青江菜：十字花科，屬葉菜類植物。喜冷涼，需充足日照，可越冬也可夏季栽培，對土壤適應性強。但為淺根性，需保持良好排水，避免根部腐爛。"
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
      itemsDom.push(<div className='item disable'>未開放</div>)
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

